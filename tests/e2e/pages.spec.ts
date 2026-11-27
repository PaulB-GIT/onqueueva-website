import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const pages = [
  "/services",
  "/services/administrative-executive-support",
  "/services/customer-support",
  "/services/sales-lead-generation",
  "/services/marketing-creative",
  "/services/bookkeeping-finance",
  "/services/technical-automation",
  "/industries",
  "/industries/construction-remodeling",
  "/industries/real-estate",
  "/industries/cleaning-janitorial",
  "/industries/professional-services",
  "/industries/digital-marketing-agencies",
  "/industries/logistics",
  "/industries/ecommerce",
  "/pricing",
  "/how-it-works",
  "/free-trial",
  "/about",
  "/referral-program",
  "/careers",
  "/faq",
  "/book-a-call",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
];

for (const path of pages) {
  test.describe(path, () => {
    test("has one H1, a description and its own canonical", async ({ page }) => {
      await page.goto(path);
      await expect(page.locator("h1")).toHaveCount(1);
      const description = await page.locator('meta[name="description"]').getAttribute("content");
      expect(description?.length ?? 0).toBeGreaterThan(80);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://www.onqueueva.com${path}`);
    });

    test("has no detectable WCAG 2.2 AA violations", async ({ page }) => {
      await page.goto(path);
      const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
      expect(results.violations.map((v) => `${v.id}: ${v.nodes.length}`)).toEqual([]);
    });
  });
}

test("pricing FAQ answers are in the HTML and match the approved terms", async ({ page }) => {
  await page.goto("/pricing");
  await expect(page.getByText("Unused hours do not carry over to the next month.").first()).toBeAttached();
  await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(1);
});

test("example workflows are labelled as illustrative", async ({ page }) => {
  await page.goto("/how-it-works");
  await expect(page.getByText("Illustrative example", { exact: true })).toHaveCount(3);
});

test("referral page keeps all 13 terms and the 20% credit", async ({ page }) => {
  await page.goto("/referral-program");
  await expect(page.locator("#terms ol > li")).toHaveCount(13);
  await expect(page.getByText(/20%/).first()).toBeVisible();
});

test("legal pages show the draft notice until approved", async ({ page }) => {
  for (const path of ["/privacy-policy", "/terms-of-service"]) {
    await page.goto(path);
    await expect(page.getByText("Draft for legal review: not yet in effect.")).toBeVisible();
  }
});

test("every internal link in the header and footer resolves", async ({ page, request }) => {
  await page.goto("/");
  const hrefs = await page.locator("header a[href^='/'], footer a[href^='/']").evaluateAll((els) =>
    [...new Set(els.map((e) => e.getAttribute("href")!))],
  );
  for (const href of hrefs) {
    const res = await request.get(href);
    expect(res.status(), href).toBe(200);
  }
});
