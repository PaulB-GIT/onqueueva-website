import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { site } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: "Careers: Remote Virtual Assistant Jobs",
  description:
    "Remote virtual assistant jobs in the Philippines with ON-QUEUE VA: admin and operations, customer support, marketing, and bookkeeping and finance support.",
  alternates: { canonical: "/careers" },
};

/** Hiring areas migrated from the current careers page (27 Nov 2026). */
const areas = [
  { title: "Admin & operations support", text: "Calendar and inbox management, documentation, SOPs, research and day-to-day business support." },
  { title: "Customer support", text: "Email and chat support, ticket handling, CRM updates and customer follow-ups, with a service-first mindset." },
  { title: "Marketing support", text: "Social media scheduling, content coordination, email marketing assistance and basic analytics reporting." },
  { title: "Bookkeeping & finance support", text: "Invoicing, expense tracking, reconciliation support and organised financial admin (tool-dependent)." },
];

const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Application: [role]")}`;

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build your remote career with ON-QUEUE VA"
        lead="We work with skilled Filipino professionals who take pride in reliable, careful work for international clients."
      >
        <ButtonLink href={mailto} size="lg">
          <Mail aria-hidden="true" className="size-5" /> Apply by email
        </ButtonLink>
        <ButtonLink href={site.portal.va.href} size="lg" variant="secondary">
          VA Login
        </ButtonLink>
      </PageHero>

      <section aria-labelledby="areas-title" className="section-y">
        <div className="container-site">
          <SectionHeading id="areas-title" title="Areas we hire for" />
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {areas.map((a) => (
              <li key={a.title} className="rounded-[var(--radius-card)] border border-line p-7">
                <h3 className="text-xl font-semibold">{a.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-700">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="apply-title" className="section-y border-t border-line bg-neutral-50">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading id="apply-title" title="How to apply" />
            <ol className="mt-8 list-decimal space-y-3 pl-5 text-lg text-ink-700">
              <li>Prepare your resume or CV.</li>
              <li>Write a short introduction: your top skills, the tools you use and your preferred working hours.</li>
              <li>
                Email both to{" "}
                <a href={mailto} className="font-semibold text-blue-600 hover:underline">
                  {site.email}
                </a>
                , with the role in the subject line.
              </li>
            </ol>
          </div>
          <div>
            <SectionHeading title="Following up" />
            <p className="mt-8 text-lg leading-relaxed text-ink-700">
              Please allow reasonable time for us to review your application. To follow up, email {site.email} with your name and the role
              you applied for.
            </p>
            <p className="mt-4 text-sm text-ink-600">An online application form is being added to this page.</p>
          </div>
        </div>
      </section>
    </>
  );
}
