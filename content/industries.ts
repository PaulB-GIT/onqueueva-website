import type { CategoryId } from "@/content/pricing";

export type Industry = {
  slug: string;
  name: string;
  href: string;
  priority: boolean;
  metaDescription: string;
  intro: string;
  challenges: string[];
  tasks: string[];
  specialistRoles: string[];
  relatedCategories: Exclude<CategoryId, "industry-specialists">[];
  example?: { title: string; steps: string[] };
  testimonialName?: string;
};

/** Priority industries get dedicated pages (Phase 2, approved 27 Nov 2026). Draft copy for founder review. */
export const industries: Industry[] = [
  {
    slug: "construction-remodeling",
    name: "Construction & Remodeling",
    href: "/industries/construction-remodeling",
    priority: true,
    metaDescription:
      "Virtual assistants for construction and remodeling companies: lead handling, scheduling, estimates admin, customer follow-ups and CRM updates.",
    intro: "Keep leads, schedules and customers organised while your team is out on site.",
    challenges: ["New inquiries arrive while you’re on a job", "Site visits and crews need constant rescheduling", "Quotes go out but follow-ups get missed"],
    tasks: ["Answering and logging new inquiries", "Booking site visits and estimates", "Updating job schedules", "Following up on quotes", "Keeping the CRM current", "Collecting reviews after completed jobs"],
    specialistRoles: ["Construction"],
    relatedCategories: ["administrative-executive-support", "sales-lead-generation", "customer-support"],
    example: {
      title: "Lead handling for a remodeling company",
      steps: ["New web inquiries checked twice a day", "Contact details added to the CRM", "Site visits booked in the owner’s calendar", "Follow-up sent to quotes awaiting a reply"],
    },
    testimonialName: "Christa B.",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    href: "/industries/real-estate",
    priority: true,
    metaDescription:
      "Real estate virtual assistants: lead follow-up, listing updates, showing schedules, transaction admin and CRM management for agents and teams.",
    intro: "Spend more time with clients while your VA handles listings, leads and paperwork.",
    challenges: ["Leads go cold without fast follow-up", "Listings and showings take hours to coordinate", "Transaction paperwork piles up"],
    tasks: ["Following up on new leads", "Updating listings and marketing materials", "Scheduling showings", "Transaction coordination support", "CRM and database management", "Social media for listings"],
    specialistRoles: ["Real Estate Virtual Assistance"],
    relatedCategories: ["sales-lead-generation", "marketing-creative", "administrative-executive-support"],
    example: {
      title: "Lead follow-up for a real estate team",
      steps: ["New portal leads contacted the same day", "Lead details and notes added to the CRM", "Showings booked for the agent", "Weekly report of active leads"],
    },
  },
  {
    slug: "cleaning-janitorial",
    name: "Cleaning & Janitorial",
    href: "/industries/cleaning-janitorial",
    priority: true,
    metaDescription:
      "Virtual assistants for cleaning and janitorial businesses: booking requests, cleaner scheduling, customer reminders, invoicing and feedback.",
    intro: "Keep bookings, schedules and customers running smoothly, so your crews can focus on the work.",
    challenges: ["Booking requests arrive at all hours", "Schedules change daily", "Invoices and feedback fall behind"],
    tasks: ["Answering booking requests", "Updating cleaner schedules", "Sending customer reminders", "Invoicing and payment follow-ups", "Collecting feedback and reviews"],
    specialistRoles: ["Cleaning / Janitorial Business"],
    relatedCategories: ["customer-support", "administrative-executive-support", "bookkeeping-finance"],
    example: {
      title: "Service coordination for a cleaning company",
      steps: ["Booking requests answered by email", "Cleaner schedules updated", "Customers reminded the day before", "Feedback collected after each job"],
    },
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    href: "/industries/professional-services",
    priority: true,
    metaDescription:
      "Virtual assistants for law firms, consultants and coaches: client scheduling, document preparation, intake, billing admin and CRM updates.",
    intro: "Support for law firms, consultants and coaches, so more of your time goes to billable work.",
    challenges: ["Scheduling and client admin eat into billable hours", "Documents and intake forms need careful handling", "Follow-ups slip during busy weeks"],
    tasks: ["Client scheduling and reminders", "Intake and onboarding paperwork", "Document preparation and formatting", "Billing and invoicing admin", "CRM and client records", "Content and newsletter support"],
    specialistRoles: ["Legal Assistance", "Consultancy Virtual Assistance", "Coaching Virtual Assistance"],
    relatedCategories: ["administrative-executive-support", "bookkeeping-finance", "marketing-creative"],
  },
  {
    slug: "digital-marketing-agencies",
    name: "Digital Marketing Agencies",
    href: "/industries/digital-marketing-agencies",
    priority: true,
    metaDescription:
      "Virtual assistants for digital marketing agencies: social media, content, design, SEO, GoHighLevel support, reporting and client admin.",
    intro: "Add delivery capacity for your agency without adding full-time headcount.",
    challenges: ["Client work grows faster than your team", "Reporting takes hours every month", "Senior staff spend time on routine tasks"],
    tasks: ["Social media scheduling for clients", "Content writing and design support", "SEO and website updates", "GoHighLevel set-up and maintenance", "Monthly client reports", "Project and client admin"],
    specialistRoles: [],
    relatedCategories: ["marketing-creative", "technical-automation", "administrative-executive-support"],
  },
  {
    slug: "logistics",
    name: "Logistics & Freight",
    href: "/industries/logistics",
    priority: true,
    metaDescription:
      "Logistics and freight virtual assistants: shipment tracking, load and carrier coordination support, customer updates, documentation and data entry.",
    intro: "Keep shipments, paperwork and customer updates on track, every day.",
    challenges: ["Constant status questions from customers", "Paperwork for every shipment", "Data spread across several systems"],
    tasks: ["Shipment tracking and status updates", "Carrier and load coordination support", "Customer communication", "Documentation and data entry", "Invoicing support"],
    specialistRoles: ["Logistics / Freight"],
    relatedCategories: ["customer-support", "administrative-executive-support", "bookkeeping-finance"],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    href: "/industries/ecommerce",
    priority: true,
    metaDescription:
      "E-commerce virtual assistants: customer support, order and returns handling, product listings, store operations, Amazon support and marketing.",
    intro: "Run a smoother online store, from customer questions to product listings.",
    challenges: ["Customer questions arrive around the clock", "Listings and stock need constant updates", "Returns and orders need careful tracking"],
    tasks: ["Answering order and product questions", "Logging and tracking returns", "Updating product listings", "Store operations and Amazon support", "Email and social media marketing"],
    specialistRoles: ["E-Commerce Virtual Assistance", "Amazon VA", "Store Operations & Management"],
    relatedCategories: ["customer-support", "marketing-creative", "administrative-executive-support"],
    example: {
      title: "Customer support for an online store",
      steps: ["Order questions answered from the help inbox", "Returns logged and tracked", "Product listings updated", "Weekly summary of common questions"],
    },
  },
];

/** Also served; listed on the Industries hub without dedicated pages. */
export const otherIndustries: string[] = ["Solar", "Health & Wellness", "Startups", "Non-Profit & Ministry"];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
