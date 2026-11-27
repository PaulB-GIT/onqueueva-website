import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * Preview deployments must not be indexed. Search engines are only allowed
 * when SITE_ENV=production is set on the production deployment.
 */
export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.SITE_ENV === "production";
  return {
    rules: isProduction ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
