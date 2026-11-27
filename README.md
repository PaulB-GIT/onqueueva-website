# ON-QUEUE VA website

Marketing website for ON-QUEUE VA (www.onqueueva.com). Next.js 16 (App Router), TypeScript strict, Tailwind CSS 4, hosted on Vercel.

**Status:** Phase 4: foundation + homepage, for founder review on a Vercel preview. Not yet live on www.onqueueva.com.

## Run locally

Requires Node.js 22.12 or newer (Vercel: Node 24.x).

```bash
npm install
npm run dev            # http://localhost:3000
```

## Checks

```bash
npm run lint
npm run typecheck
npm run test           # unit tests (pricing data and maths)
npm run build
npm run test:e2e       # Playwright + axe accessibility (needs: npx playwright install chromium)
npm run check          # lint + typecheck + unit tests + build
```

## Where things live

| Path | What |
| --- | --- |
| `content/site.ts` | Contact details, Calendly, portal, ON-QUEUE AI, social links |
| `content/pricing.ts` | Plans, levels, all 6 price bands, 40 roles, billing terms (single source of truth) |
| `content/testimonials.ts` | Approved testimonials only, verbatim |
| `content/services.ts`, `content/industries.ts` | Service categories and industries |
| `app/globals.css` | Design tokens (colours, fonts, spacing) |
| `components/` | Layout, UI and section components |
| `next.config.ts` | Redirects from old URLs, security headers |
| `docs/DECISIONS.md` | Technical decisions and their rationale |

## Environment variables

See `.env.example`. Set `SITE_ENV=production` only on the production environment in Vercel.
