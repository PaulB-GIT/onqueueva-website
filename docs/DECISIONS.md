# Decisions log

Full context: Phase 1–3 documents in the claude.ai project "ON-QUEUE VA — WEBSITE REBUILD".

| Date | Decision | Rationale / maintenance |
| --- | --- | --- |
| 2026-11-27 | Next.js 16.4.6 (App Router, Cache Components, Partial Prefetching), React 19.3, TypeScript strict, Tailwind CSS 4.3 | Current stable at project creation. Apply Next.js security releases monthly. |
| 2026-11-27 | Every page exports `ensureStatic = "navigation"` | Guarantees pages stay fully static; a change that adds request-time rendering fails the build. |
| 2026-11-27 | Fonts self-hosted via `@fontsource-variable` (Inter, Plus Jakarta Sans) | No request to Google at runtime or build time; no layout shift. |
| 2026-11-27 | Content in typed files under `content/`; no CMS, no database | Site changes rarely; type checking stops broken prices or links reaching production. |
| 2026-11-27 | Prices copied unchanged from the published pricing guide; hourly rates calculated (monthly ÷ hours, rounded half-up) | Founder decision. Fixes typed-rate errors in the old guide (e.g. Band 5 Entry Lite now $14.95/hr). |
| 2026-11-27 | Content-Security-Policy without nonces, with `'unsafe-inline'` for scripts | Nonces force every page to render per request. Inline scripts are Next.js bootstrap only; no user content is rendered as HTML. Revisit if the site ever handles accounts. |
| 2026-11-27 | `robots.txt` blocks indexing unless `SITE_ENV=production` | Keeps Vercel preview URLs out of Google. |
| 2026-11-27 | Logo used unmodified (transparent padding trimmed only) | Brand rule: never redraw or recolour. A vector (SVG) master is recommended. |
| 2026-11-27 | No favicon yet | Using the logo mark alone as a favicon is a derivative of the logo and needs founder approval. |
| 2026-11-27 | `/book-a-call` interim version (button to Calendly) | Keeps the primary CTA working during review; full page with on-demand embed comes with the remaining pages. |
| 2026-11-27 | Testimonials stored verbatim with `photoAllowed: false` | Founder: Townsi F.'s photo must not be used. |
| 2026-11-27 | Direct Hire not built | Deferred by founder; route `/direct-hire` reserved. |
