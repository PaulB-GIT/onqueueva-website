export type Industry = { name: string; href: string; priority: boolean };

/** Priority industries get dedicated pages (Phase 2, approved 27 Nov 2026). */
export const industries: Industry[] = [
  { name: "Construction & Remodeling", href: "/industries/construction-remodeling", priority: true },
  { name: "Real Estate", href: "/industries/real-estate", priority: true },
  { name: "Cleaning & Janitorial", href: "/industries/cleaning-janitorial", priority: true },
  { name: "Professional Services", href: "/industries/professional-services", priority: true },
  { name: "Digital Marketing Agencies", href: "/industries/digital-marketing-agencies", priority: true },
  { name: "Logistics & Freight", href: "/industries/logistics", priority: true },
  { name: "E-commerce", href: "/industries/ecommerce", priority: true },
];

/** Also served; listed on the Industries hub without dedicated pages. */
export const otherIndustries: string[] = ["Solar", "Health & Wellness", "Startups", "Non-Profit & Ministry"];
