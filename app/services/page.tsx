import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceCategories } from "@/content/services";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CtaBand } from "@/components/sections/CtaBand";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: "Managed Virtual Assistant Services",
  description:
    "Managed virtual assistant services from the Philippines: administrative, customer support, sales and lead generation, marketing, bookkeeping and technical support.",
  alternates: { canonical: "/services" },
};

const comparison = [
  { label: "Finding the right person", freelancer: "You screen profiles yourself", managed: "We match a VA to your tasks and tools" },
  { label: "Getting started", freelancer: "You explain everything, often more than once", managed: "We document each task in a written procedure" },
  { label: "After the hire", freelancer: "You manage on your own", managed: "We stay involved and improve the work" },
  { label: "Pricing", freelancer: "Varies by person", managed: "Published monthly plans; cancel anytime" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Managed VA services"
        title="Skilled virtual professionals, managed for you"
        lead="Choose the support your business needs. We match, onboard and stay accountable, so you get reliable help rather than another person to manage."
      >
        <ButtonLink href="/book-a-call" size="lg">
          Book a Discovery Call
        </ButtonLink>
        <ButtonLink href="/pricing" size="lg" variant="secondary">
          See pricing
        </ButtonLink>
      </PageHero>

      <section aria-labelledby="categories-title" className="section-y">
        <div className="container-site">
          <SectionHeading id="categories-title" title="What we can take off your plate" />
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {serviceCategories.map((s) => (
              <li key={s.slug}>
                <Link href={s.href} className="group block h-full rounded-[var(--radius-card)] border border-line p-7 transition-colors hover:border-blue-600">
                  <h3 className="flex items-center justify-between gap-4 text-xl font-semibold group-hover:text-blue-600">
                    {s.name}
                    <ArrowRight aria-hidden="true" className="size-5 flex-none text-blue-600" />
                  </h3>
                  <p className="mt-2 text-ink-700">{s.summary}</p>
                  <p className="mt-4 text-sm text-ink-600">{s.examples.join(" · ")}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="managed-title" className="section-y border-t border-line bg-neutral-50">
        <div className="container-site">
          <SectionHeading
            id="managed-title"
            title="What “managed” means"
            lead="The difference between hiring a freelancer and working with ON-QUEUE VA."
          />
          <div
            role="region"
            aria-labelledby="managed-title"
            tabIndex={0}
            className="mt-10 overflow-x-auto rounded-[var(--radius-card)] border border-line bg-white"
          >
            <table className="w-full min-w-[640px] text-left">
              <caption className="sr-only">Freelancer compared with ON-QUEUE VA managed service</caption>
              <thead className="border-b border-line bg-neutral-50 text-sm">
                <tr>
                  <th scope="col" className="p-4 font-semibold">
                    &nbsp;
                  </th>
                  <th scope="col" className="p-4 font-semibold text-ink-600">
                    Hiring a freelancer
                  </th>
                  <th scope="col" className="p-4 font-semibold text-blue-600">
                    ON-QUEUE VA
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {comparison.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="p-4 font-semibold">
                      {row.label}
                    </th>
                    <td className="p-4 text-ink-600">{row.freelancer}</td>
                    <td className="p-4">{row.managed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
