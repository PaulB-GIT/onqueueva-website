import type { CategoryId } from "@/content/pricing";

export type ServiceCategory = {
  id: Exclude<CategoryId, "industry-specialists">;
  slug: string;
  name: string;
  href: string;
  summary: string;
  examples: string[];
  metaDescription: string;
  intro: string;
  outcomes: string[];
  tasks: string[];
  tools?: string[];
  note?: string;
};

/** Six service categories (Phase 2, section 5). Draft copy for founder review. */
export const serviceCategories: ServiceCategory[] = [
  {
    id: "administrative-executive-support",
    slug: "administrative-executive-support",
    name: "Administrative & Executive Support",
    href: "/services/administrative-executive-support",
    summary: "Inbox, calendar, documents and the daily admin that keeps you moving.",
    examples: ["Executive assistance", "Data entry & documentation", "HR assistance", "Project & task management"],
    metaDescription:
      "Managed administrative and executive virtual assistants from the Philippines: inbox, calendar, documents, data entry, HR admin and project tracking.",
    intro: "Hand over the admin that fills your day, so you can spend your time on decisions, clients and growth.",
    outcomes: ["A tidy inbox and a calendar you can trust", "Documents and records kept up to date", "Projects and tasks tracked, with nothing forgotten"],
    tasks: [
      "Inbox management and email triage",
      "Calendar, meeting and travel scheduling",
      "Data entry and document preparation",
      "Writing and updating standard operating procedures (SOPs)",
      "Online research and summaries",
      "HR admin such as job postings and onboarding paperwork",
      "Project and task tracking",
    ],
    tools: ["Slack", "HubSpot", "Your email and calendar tools"],
  },
  {
    id: "customer-support",
    slug: "customer-support",
    name: "Customer Support",
    href: "/services/customer-support",
    summary: "Friendly, consistent replies to your customers by email, chat and phone.",
    examples: ["Customer support", "Store operations", "Amazon VA"],
    metaDescription:
      "Managed customer support virtual assistants: email and chat replies, ticket handling, order and returns support, CRM updates and customer follow-ups.",
    intro: "Give every customer a prompt, friendly reply, without hiring a full in-house support team.",
    outcomes: ["Faster, more consistent replies", "Fewer questions left unanswered", "Customer records kept up to date"],
    tasks: [
      "Email and chat support",
      "Ticket handling and routing",
      "Order status and returns support",
      "CRM updates after every conversation",
      "Customer follow-ups and feedback requests",
      "Online store operations and Amazon seller support",
    ],
  },
  {
    id: "sales-lead-generation",
    slug: "sales-lead-generation",
    name: "Sales & Lead Generation",
    href: "/services/sales-lead-generation",
    summary: "Research, outreach and appointment setting that keep your pipeline full.",
    examples: ["Lead generation & prospecting", "Email marketing & CRM", "Sales assistance", "Appointment setting"],
    metaDescription:
      "Lead generation and appointment setting virtual assistants: prospect research, list building, email outreach, CRM hygiene, follow-ups and booked meetings.",
    intro: "Keep your pipeline moving with steady research, outreach and follow-up, while you focus on closing.",
    outcomes: ["A steady flow of researched prospects", "Clean, current CRM data", "Follow-ups that happen on time"],
    tasks: [
      "Prospect research and list building",
      "CRM data entry and clean-up",
      "Preparing and sending outreach emails",
      "Follow-up sequences",
      "Appointment setting and calendar booking",
      "Call preparation and telemarketing support",
    ],
    tools: ["Apollo", "LinkedIn Sales Navigator", "HubSpot", "GoHighLevel", "Salesforce", "Zoho"],
  },
  {
    id: "marketing-creative",
    slug: "marketing-creative",
    name: "Marketing & Creative",
    href: "/services/marketing-creative",
    summary: "Social media, content, design and SEO support for a consistent brand.",
    examples: ["Social media management", "SEO & digital marketing", "Content writing", "Graphic design", "Video editing"],
    metaDescription:
      "Marketing and creative virtual assistants: social media management, content writing, graphic design, SEO support, email marketing, video and podcast editing.",
    intro: "Show up consistently online with reliable help on content, design and campaigns.",
    outcomes: ["A consistent posting schedule", "Content produced on time", "Campaigns supported from draft to report"],
    tasks: [
      "Social media scheduling and community replies",
      "Blog, email and website copywriting",
      "Graphic design for social posts and documents",
      "SEO tasks and website content updates",
      "Email marketing assistance",
      "Video and podcast editing",
      "Basic analytics reporting",
    ],
  },
  {
    id: "bookkeeping-finance",
    slug: "bookkeeping-finance",
    name: "Bookkeeping & Finance",
    href: "/services/bookkeeping-finance",
    summary: "Accurate books and financial admin, kept up to date every week.",
    examples: ["Bookkeeping & financial management", "Financial analysis & planning"],
    metaDescription:
      "Bookkeeping and financial admin virtual assistants: invoicing, expense tracking, reconciliation support, reports and organised financial records.",
    intro: "Keep your books current and your financial admin organised, week after week.",
    outcomes: ["Invoices sent on time", "Expenses tracked and categorised", "Clear reports when you need them"],
    tasks: [
      "Invoicing and payment follow-ups",
      "Expense tracking and categorisation",
      "Reconciliation support",
      "Financial reports and summaries",
      "Organised financial records",
    ],
    note: "Tasks depend on the accounting tools you use. We confirm the scope on your discovery call.",
  },
  {
    id: "technical-automation",
    slug: "technical-automation",
    name: "Technical & Automation",
    href: "/services/technical-automation",
    summary: "Websites, CRM set-up and automations that save your team hours.",
    examples: ["Web design & WordPress", "GoHighLevel & Kajabi support", "CRM & task automation", "Data analysis & reporting"],
    metaDescription:
      "Technical and automation virtual assistants: WordPress and website updates, GoHighLevel and Kajabi support, CRM automation, workflow automation and reporting.",
    intro: "Get technical work done without hiring a developer for every small change.",
    outcomes: ["Website updates done quickly", "Repetitive work automated", "Data turned into clear reports"],
    tasks: [
      "Website design support and WordPress updates",
      "GoHighLevel and Kajabi set-up and support",
      "CRM automation and pipeline set-up",
      "Workflow automation with tools such as Zapier and Make",
      "Data analysis and reporting dashboards",
      "AI-assisted workflows, set up and checked by people",
    ],
    tools: ["WordPress", "GoHighLevel", "Kajabi", "Zapier", "Make", "HubSpot"],
  },
];

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((s) => s.slug === slug);
}
