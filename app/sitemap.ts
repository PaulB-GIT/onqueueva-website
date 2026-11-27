import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/** Only pages that exist are listed; pages are added as they are built. */
const routes = ["/", "/pricing", "/how-it-works", "/free-trial", "/book-a-call"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
