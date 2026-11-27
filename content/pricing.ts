/**
 * Single source of truth for Managed VA pricing.
 *
 * Source: ON-QUEUE VA pricing guide (onqueueva.com/va-pricing-guide), read
 * 27 Nov 2026. Founder decision 27 Nov 2026: keep every published monthly
 * price unchanged; hourly rates are CALCULATED (monthly price ÷ plan hours),
 * never typed. Do not edit prices here without founder approval.
 */

export type PlanId = "lite" | "basic" | "growth" | "full-time";
export type LevelId = "entry" | "intermediate" | "advanced";
export type BandId = 1 | 2 | 3 | 4 | 5 | 6;

export type Plan = {
  id: PlanId;
  name: string;
  hoursPerMonth: number;
  approxDaily: string;
  suits: string;
};

export const plans: Plan[] = [
  { id: "lite", name: "Lite", hoursPerMonth: 20, approxDaily: "about 1 hour a day", suits: "A few recurring tasks handled every day." },
  { id: "basic", name: "Basic", hoursPerMonth: 40, approxDaily: "about 2 hours a day", suits: "Steady support for inbox, calendar and admin." },
  { id: "growth", name: "Growth", hoursPerMonth: 80, approxDaily: "about 4 hours a day", suits: "A dedicated half-day of work across functions." },
  { id: "full-time", name: "Full-Time", hoursPerMonth: 160, approxDaily: "about 8 hours a day", suits: "A full-time team member, managed by us." },
];

export type Level = { id: LevelId; name: string; definition: string };

/** Definitions approved by the founder on 27 Nov 2026. */
export const levels: Level[] = [
  { id: "entry", name: "Entry", definition: "Reliable on documented, repeatable tasks, with guidance." },
  { id: "intermediate", name: "Intermediate", definition: "Works independently and improves existing processes." },
  { id: "advanced", name: "Advanced", definition: "Specialist skills; handles complex workflows and tools with little direction." },
];

/** Monthly USD prices, in plan order: Lite, Basic, Growth, Full-Time. */
type PriceRow = readonly [number, number, number, number];

export const bandPrices: Record<BandId, Record<LevelId, PriceRow>> = {
  1: { entry: [209, 379, 719, 1199], intermediate: [229, 419, 779, 1299], advanced: [249, 459, 869, 1399] },
  2: { entry: [229, 419, 779, 1299], intermediate: [249, 459, 869, 1399], advanced: [269, 489, 929, 1499] },
  3: { entry: [249, 459, 869, 1399], intermediate: [269, 489, 929, 1499], advanced: [289, 519, 989, 1599] },
  4: { entry: [289, 519, 989, 1599], intermediate: [309, 549, 999, 1699], advanced: [329, 589, 1099, 1899] },
  5: { entry: [299, 529, 999, 1699], intermediate: [309, 569, 1099, 1799], advanced: [339, 609, 1159, 1899] },
  6: { entry: [339, 609, 1159, 1899], intermediate: [359, 649, 1199, 1999], advanced: [379, 679, 1299, 2099] },
};

export type CategoryId =
  | "administrative-executive-support"
  | "customer-support"
  | "sales-lead-generation"
  | "marketing-creative"
  | "bookkeeping-finance"
  | "technical-automation"
  | "industry-specialists";

export type Role = { name: string; band: BandId; category: CategoryId };

/** Role names exactly as priced. Categories per Phase 2, section 5. */
export const roles: Role[] = [
  { name: "Executive Assistance", band: 2, category: "administrative-executive-support" },
  { name: "General Virtual Assistance", band: 1, category: "administrative-executive-support" },
  { name: "Data Entry & Documentation", band: 1, category: "administrative-executive-support" },
  { name: "HR Assistance", band: 3, category: "administrative-executive-support" },
  { name: "Project & Task Management", band: 5, category: "administrative-executive-support" },

  { name: "Customer Support", band: 2, category: "customer-support" },
  { name: "Store Operations & Management", band: 1, category: "customer-support" },
  { name: "Amazon VA", band: 1, category: "customer-support" },

  { name: "Lead Generation & Prospecting", band: 3, category: "sales-lead-generation" },
  { name: "Email Marketing & CRM", band: 3, category: "sales-lead-generation" },
  { name: "Sales Assistance", band: 4, category: "sales-lead-generation" },
  { name: "Telemarketing Assistance", band: 4, category: "sales-lead-generation" },
  { name: "Marketing & Sales Support", band: 4, category: "sales-lead-generation" },

  { name: "Social Media Management", band: 3, category: "marketing-creative" },
  { name: "SEO & Digital Marketing", band: 5, category: "marketing-creative" },
  { name: "Content Writing & Copywriting", band: 5, category: "marketing-creative" },
  { name: "Graphic Design Assistance", band: 5, category: "marketing-creative" },
  { name: "Video Editing & Animation", band: 6, category: "marketing-creative" },
  { name: "Podcast Editing & Management", band: 5, category: "marketing-creative" },

  { name: "Bookkeeping & Financial Management", band: 6, category: "bookkeeping-finance" },
  { name: "Financial Analysis & Planning", band: 5, category: "bookkeeping-finance" },

  { name: "Web Design & Development", band: 6, category: "technical-automation" },
  { name: "WordPress Development", band: 6, category: "technical-automation" },
  { name: "GoHighLevel Support", band: 6, category: "technical-automation" },
  { name: "Kajabi Support", band: 6, category: "technical-automation" },
  { name: "CRM Automation", band: 6, category: "technical-automation" },
  { name: "Task Automation", band: 6, category: "technical-automation" },
  { name: "Workflow Optimization", band: 6, category: "technical-automation" },
  { name: "Data Analysis & Reporting", band: 6, category: "technical-automation" },
  { name: "AI-Driven Solutions", band: 5, category: "technical-automation" },

  { name: "Construction", band: 5, category: "industry-specialists" },
  { name: "Real Estate Virtual Assistance", band: 5, category: "industry-specialists" },
  { name: "Cleaning / Janitorial Business", band: 1, category: "industry-specialists" },
  { name: "Logistics / Freight", band: 2, category: "industry-specialists" },
  { name: "E-Commerce Virtual Assistance", band: 5, category: "industry-specialists" },
  { name: "Legal Assistance", band: 5, category: "industry-specialists" },
  { name: "Consultancy Virtual Assistance", band: 1, category: "industry-specialists" },
  { name: "Coaching Virtual Assistance", band: 1, category: "industry-specialists" },
  { name: "Healthcare Virtual Assistance", band: 5, category: "industry-specialists" },
  { name: "Non-Profit & Ministry Virtual Assistance", band: 1, category: "industry-specialists" },
];

export const categoryLabels: Record<CategoryId, string> = {
  "administrative-executive-support": "Administrative & Executive Support",
  "customer-support": "Customer Support",
  "sales-lead-generation": "Sales & Lead Generation",
  "marketing-creative": "Marketing & Creative",
  "bookkeeping-finance": "Bookkeeping & Finance",
  "technical-automation": "Technical & Automation",
  "industry-specialists": "Industry specialists",
};

/** Billing terms approved by the founder on 27 Nov 2026. */
export const pricingTerms: string[] = [
  "Billed monthly in advance, in USD, by Wise or ACH. Due on receipt.",
  "No minimum commitment. Cancel anytime: your VA continues until the end of the paid month. Payments are non-refundable.",
  "Unused hours do not carry over to the next month.",
  "Approved additional hours are billed at your plan's hourly rate.",
];
