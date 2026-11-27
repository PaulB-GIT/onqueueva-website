import type { CategoryId } from "@/content/pricing";

export type ServiceCategory = {
  id: Exclude<CategoryId, "industry-specialists">;
  name: string;
  href: string;
  summary: string;
  examples: string[];
};

/** Six service categories (Phase 2, section 5). Draft copy for founder review. */
export const serviceCategories: ServiceCategory[] = [
  {
    id: "administrative-executive-support",
    name: "Administrative & Executive Support",
    href: "/services/administrative-executive-support",
    summary: "Inbox, calendar, documents and the daily admin that keeps you moving.",
    examples: ["Executive assistance", "Data entry & documentation", "HR assistance", "Project & task management"],
  },
  {
    id: "customer-support",
    name: "Customer Support",
    href: "/services/customer-support",
    summary: "Friendly, consistent replies to your customers by email, chat and phone.",
    examples: ["Customer support", "Store operations", "Amazon VA"],
  },
  {
    id: "sales-lead-generation",
    name: "Sales & Lead Generation",
    href: "/services/sales-lead-generation",
    summary: "Research, outreach and appointment setting that keep your pipeline full.",
    examples: ["Lead generation & prospecting", "Email marketing & CRM", "Sales assistance", "Appointment setting"],
  },
  {
    id: "marketing-creative",
    name: "Marketing & Creative",
    href: "/services/marketing-creative",
    summary: "Social media, content, design and SEO support for a consistent brand.",
    examples: ["Social media management", "SEO & digital marketing", "Content writing", "Graphic design", "Video editing"],
  },
  {
    id: "bookkeeping-finance",
    name: "Bookkeeping & Finance",
    href: "/services/bookkeeping-finance",
    summary: "Accurate books and financial admin, kept up to date every week.",
    examples: ["Bookkeeping & financial management", "Financial analysis & planning"],
  },
  {
    id: "technical-automation",
    name: "Technical & Automation",
    href: "/services/technical-automation",
    summary: "Websites, CRM set-up and automations that save your team hours.",
    examples: ["Web design & WordPress", "GoHighLevel & Kajabi support", "CRM & task automation", "Data analysis & reporting"],
  },
];
