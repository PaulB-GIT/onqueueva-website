import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Values } from "@/components/sections/Values";
import { CtaBand } from "@/components/sections/CtaBand";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: "About ON-QUEUE VA",
  description:
    "ON-QUEUE VA is a Philippines-based virtual assistant agency, founded in 2024, connecting businesses with skilled Filipino professionals, guided by biblical principles.",
  alternates: { canonical: "/about" },
};

/* DRAFT FOR FOUNDER APPROVAL: founder story and background use facts the founder has shared; confirm before launch. */
export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Skilled Filipino professionals. Managed with care."
        lead="ON-QUEUE VA connects growing businesses with reliable virtual professionals from the Philippines, and stays accountable for the work."
      />

      <section aria-labelledby="story-title" className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading id="story-title" eyebrow="Our story" title="Why ON-QUEUE VA exists" />
          <div className="space-y-5 text-lg leading-relaxed text-ink-700">
            <p>
              ON-QUEUE VA was founded in 2024 in the Bicol Region of the Philippines. Business owners in the US, UK and Australia needed
              dependable help, and the Philippines has talented professionals ready to provide it.
            </p>
            <p>
              Too often, hiring a virtual assistant means sorting through profiles, explaining the same tasks again and again, and managing
              alone. We built ON-QUEUE VA to do it differently: match carefully, document the work, and stay involved after the handoff.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="founder-title" className="section-y border-y border-line bg-neutral-50">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
          <div className="flex aspect-[4/5] items-center justify-center rounded-[var(--radius-card)] border border-dashed border-line-strong bg-white p-6 text-center text-sm text-ink-600">
            Founder photo to be supplied
          </div>
          <div>
            <SectionHeading id="founder-title" eyebrow="Meet the founder" title="Paul Bercasio, Founder" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-700">
              <p>
                Paul brings experience from technical support, blockchain infrastructure and fleet and rental operations, including work in
                Dubai. He holds a BS in Information Technology and a Google Cybersecurity Professional Certificate.
              </p>
              <p>
                That background shapes how ON-QUEUE VA works: clear processes, careful handling of client systems and access, and support
                that business owners can rely on.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Values />

      <section aria-labelledby="join-title" className="section-y border-t border-line">
        <div className="container-site flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 id="join-title" className="text-[1.75rem] font-bold leading-tight md:text-3xl">
              Creating remote careers in the Philippines
            </h2>
            <p className="mt-3 text-lg text-ink-700">
              Every client partnership creates meaningful remote work for a skilled Filipino professional.
            </p>
          </div>
          <ButtonLink href="/careers" size="lg" variant="secondary">
            Work with us
          </ButtonLink>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
