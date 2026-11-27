import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

/**
 * Content-Security-Policy without nonces (keeps every page static).
 * Trade-off documented in docs/DECISIONS.md: 'unsafe-inline' is required for
 * Next.js inline bootstrap scripts when pages are prerendered.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com https://vercel.live${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://vercel.live https://vercel.com",
  "font-src 'self' data:",
  "connect-src 'self' https://vercel.live wss://ws-us3.pusher.com",
  "frame-src https://calendly.com https://challenges.cloudflare.com https://vercel.live",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
];

/** Phase 2 redirect map (approved 27 Nov 2026). All permanent (308). */
const legacyRedirects: Array<[string, string]> = [
  ["/home", "/"],
  ["/services-lead-generation-va-2", "/services/sales-lead-generation"],
  ["/services-lead-generation-va", "/services/sales-lead-generation"],
  ["/services-email-outreach-va", "/services/sales-lead-generation"],
  ["/services-appointment-setting-va", "/services/sales-lead-generation"],
  ["/services/prospect-research-va", "/services/sales-lead-generation"],
  ["/services-social-media-management-va", "/services/marketing-creative"],
  ["/services-seo-digital-marketing-va", "/services/marketing-creative"],
  ["/services-sales-funnel-support-va", "/services/marketing-creative"],
  ["/industries-we-serve", "/industries"],
  ["/va-pricing-guide", "/pricing"],
  ["/case-studies-2", "/how-it-works"],
  // "/Contact" is not listed: Next.js matches paths case-insensitively, so /Contact already serves /contact.
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      // Canonical host: onqueueva.com → www.onqueueva.com (also set in Vercel Domains).
      {
        source: "/:path*",
        has: [{ type: "host", value: "onqueueva.com" }],
        destination: "https://www.onqueueva.com/:path*",
        permanent: true,
      },
      ...legacyRedirects.map(([source, destination]) => ({ source, destination, permanent: true })),
    ];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
