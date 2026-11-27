import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Homepage", () => {
  test("has one H1, metadata and canonical", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page).toHaveTitle(/ON-QUEUE VA/);
    const description = await page.locator('meta[name="description"]').getAttribute("content");
    expect(description?.length ?? 0).toBeGreaterThan(80);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://www.onqueueva.com");
  });

  test("primary CTA leads to the discovery call page with the official Calendly event", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("main").getByRole("link", { name: "Book a Discovery Call" }).first().click();
    await expect(page).toHaveURL(/\/book-a-call$/);
    await expect(page.getByRole("link", { name: /open Calendly in a new tab/ })).toHaveAttribute(
      "href",
      "https://calendly.com/pbercasio-onqueueva/45min-1",
    );
    await page.getByRole("button", { name: "Show available times" }).click();
    await expect(page.locator('iframe[title*="Calendly"]')).toHaveAttribute("src", /calendly\.com\/pbercasio-onqueueva\/45min-1/);
  });

  test("portal and ON-QUEUE AI links point to the right destinations", async ({ page }) => {
    await page.goto("/");
    const bar = page.getByRole("list", { name: "Account and product links" });
    await expect(bar.getByRole("link", { name: "Client Login" })).toHaveAttribute("href", "https://portal.onqueueva.com");
    await expect(bar.getByRole("link", { name: "VA Login" })).toHaveAttribute("href", "https://portal.onqueueva.com");
    await expect(bar.getByRole("link", { name: /ON-QUEUE AI/ })).toHaveAttribute("href", "https://ai.onqueueva.com");
  });

  test("price finder shows the published price and calculated hourly rate", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("radio", { name: /Growth/ }).click();
    await page.getByLabel("Service role").selectOption("Executive Assistance");
    await page.getByLabel("Experience level").selectOption("intermediate");
    await expect(page.getByText("$869", { exact: true })).toBeVisible();
    await expect(page.getByText("$10.86 / hour")).toBeVisible();
    await page.getByRole("radio", { name: /Full-Time/ }).click();
    await expect(page.getByText("$1,399", { exact: true })).toBeVisible();
  });

  test("testimonials are shown verbatim, without photos", async ({ page }) => {
    await page.goto("/");
    const section = page.locator("section", { has: page.getByRole("heading", { name: "What our clients say" }) });
    await expect(section.getByText("Connecting Remodeling Inc.")).toBeVisible();
    await expect(section.getByText(/Golden Refunds Retriever/)).toBeVisible();
    await expect(section.locator("img")).toHaveCount(0);
  });

  test("has no detectable WCAG 2.2 AA violations", async ({ page }) => {
    await page.goto("/");
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
    expect(results.violations.map((v) => `${v.id}: ${v.nodes.length}`)).toEqual([]);
  });
});

test.describe("Navigation", () => {
  test("mobile menu opens, traps focus and closes with Escape", async ({ page, isMobile }) => {
    test.skip(!isMobile, "mobile only");
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();
    const dialog = page.getByRole("dialog", { name: "Menu" });
    await expect(dialog).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
  });

  test("desktop Services menu opens with the keyboard", async ({ page, isMobile }) => {
    test.skip(isMobile, "desktop only");
    await page.goto("/");
    const button = page.getByRole("button", { name: "Services" });
    await button.focus();
    await page.keyboard.press("Enter");
    await expect(button).toHaveAttribute("aria-expanded", "true");
    await expect(page.getByRole("link", { name: "Sales & Lead Generation" }).first()).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(button).toHaveAttribute("aria-expanded", "false");
  });
});

test.describe("Redirects", () => {
  const map: Array<[string, string]> = [
    ["/home", "/"],
    ["/va-pricing-guide", "/pricing"],
    ["/case-studies-2", "/how-it-works"],
    ["/services-email-outreach-va", "/services/sales-lead-generation"],
    ["/industries-we-serve", "/industries"],
  ];
  for (const [from, to] of map) {
    test(`${from} → ${to} is permanent`, async ({ request }) => {
      const res = await request.get(from, { maxRedirects: 0 });
      expect(res.status()).toBe(308);
      expect(new URL(res.headers()["location"], "http://x").pathname).toBe(to);
    });
  }
});
