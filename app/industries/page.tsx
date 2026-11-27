import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries, otherIndustries } from "@/content/industries";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CtaBand } from "@/components/sections/CtaBand";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Virtual assistants for construction and remodeling, real estate, cleaning, professional services, marketing agencies, logistics, e-commerce and more.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Support that understands how your industry works"
        lead="We match VAs who know the tools, terms and pace of your business."
      >
        <ButtonLink href="/book-a-call" size="lg">
          Book a Discovery Call
        </ButtonLink>
      </PageHero>

      <section aria-labelledby="industry-list-title" className="section-y">
        <div className="container-site">
          <SectionHeading id="industry-list-title" title="Industries we focus on" />
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((i) => (
              <li key={i.slug}>
                <Link href={i.href} className="group block h-full rounded-[var(--radius-card)] border border-line p-7 transition-colors hover:border-blue-600">
                  <h3 className="flex items-center justify-between gap-4 text-xl font-semibold group-hover:text-blue-600">
                    {i.name}
                    <ArrowRight aria-hidden="true" className="size-5 flex-none text-blue-600" />
                  </h3>
                  <p className="mt-2 text-ink-700">{i.intro}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="other-industries-title" className="section-y border-t border-line bg-neutral-50">
        <div className="container-site">
          <SectionHeading
            id="other-industries-title"
            title="We also support"
            lead="Not listed? Most of our services work across industries. Tell us about your business on a discovery call."
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {otherIndustries.map((name) => (
              <li key={name} className="rounded-full border border-line-strong bg-white px-5 py-2.5 font-medium">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
