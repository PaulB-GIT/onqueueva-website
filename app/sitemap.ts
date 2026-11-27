import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { serviceCategories } from "@/content/services";
import { industries } from "@/content/industries";

/** Only pages that exist are listed; pages are added as they are built. */
const routes = [
  "/",
  "/services",
  ...serviceCategories.map((s) => s.href),
  "/industries",
  ...industries.map((i) => i.href),
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

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
