import type { Metadata } from "next";
import { trialFaqs } from "@/content/faqs";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FaqJsonLd, FaqList } from "@/components/ui/FaqList";
import { CtaBand } from "@/components/sections/CtaBand";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: "Free Virtual Assistant Trial: Up to 4 Hours",
  description:
    "Try ON-QUEUE VA with up to 4 free hours of work by a matched virtual assistant. Start with a discovery call; if we're a good fit, we email you the trial form.",
  alternates: { canonical: "/free-trial" },
};

const steps = [
  { title: "Discovery call", text: "A 45-minute call to understand your tasks, tools and goals." },
  { title: "Trial form by email", text: "If we’re a good fit, we email you a short form to choose what to delegate first." },
  { title: "Up to 4 free hours", text: "Your matched VA works on the tasks you chose." },
  { title: "Your decision", text: "Continue with a plan, or stop there. No minimum commitment." },
];

export default function FreeTrialPage() {
  return (
    <>
      <FaqJsonLd items={trialFaqs} />
      <PageHero
        eyebrow="Free trial"
        title="See the work before you commit"
        lead="Start with up to 4 free hours of work by a matched virtual assistant, after a discovery call."
      >
        <ButtonLink href="/book-a-call" size="lg">
          Book a Discovery Call
        </ButtonLink>
        <ButtonLink href="/pricing" size="lg" variant="secondary">
          See pricing
        </ButtonLink>
      </PageHero>

      <section aria-labelledby="trial-steps-title" className="section-y">
        <div className="container-site">
          <SectionHeading
            id="trial-steps-title"
            title="How the free trial works"
            lead="The trial starts after a discovery call, so we can match the right person to your work."
          />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="bg-white p-7">
                <span
                  aria-hidden="true"
                  className={`flex size-9 items-center justify-center rounded-full text-sm font-semibold ${i === 2 ? "bg-gold-500 text-navy-900" : "bg-blue-600 text-white"}`}
                >
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="trial-faq-title" className="section-y border-t border-line">
        <div className="container-site grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <SectionHeading id="trial-faq-title" title="Free trial questions" />
          <FaqList items={trialFaqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
