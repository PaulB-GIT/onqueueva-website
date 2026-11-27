import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const pages = ["/pricing", "/how-it-works", "/free-trial", "/book-a-call"];

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
