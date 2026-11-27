import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { levels, plans, pricingTerms, type PlanId } from "@/content/pricing";
import { pricingFaqs } from "@/content/faqs";
import { formatMonthly, fromPrice } from "@/lib/pricing";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FaqJsonLd, FaqList } from "@/components/ui/FaqList";
import { PriceFinder } from "@/components/sections/PriceFinder";
import { CtaBand } from "@/components/sections/CtaBand";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: "Virtual Assistant Pricing",
  description:
    "Clear monthly plans for managed Filipino virtual assistants: Lite 20, Basic 40, Growth 80 and Full-Time 160 hours. From $209 a month. No minimum commitment.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  const fromPrices = Object.fromEntries(plans.map((p) => [p.id, fromPrice(p.id)])) as Record<PlanId, number>;

  return (
    <>
      <FaqJsonLd items={pricingFaqs} />
      <PageHero
        eyebrow="Pricing"
        title="Clear monthly plans. Pick the hours you need."
        lead="Four plans, priced by the role and experience level you need. No minimum commitment; cancel anytime."
      >
        <ButtonLink href="/book-a-call" size="lg">
          Book a Discovery Call
        </ButtonLink>
        <ButtonLink href="#price-finder" size="lg" variant="secondary">
          Find your price
        </ButtonLink>
      </PageHero>

      <section aria-labelledby="plans-title" className="section-y">
        <div className="container-site">
          <SectionHeading id="plans-title" title="Plans" lead="Every plan is a managed service: matching, documented onboarding and ongoing support." />
          <ul className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => (
              <li key={plan.id} className="border-t-4 border-gold-500 bg-white p-7">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-1.5 text-[0.9375rem] text-ink-600">
                  {plan.hoursPerMonth} hours / month · {plan.approxDaily}
                </p>
                <p className="mt-6 text-sm text-ink-600">from</p>
                <p className="font-display text-4xl font-bold">
                  {formatMonthly(fromPrices[plan.id])}
                  <span className="text-[0.9375rem] font-medium text-ink-600"> /month</span>
                </p>
                <p className="mt-4 leading-relaxed">{plan.suits}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-ink-600">“From” prices are for Entry level in our first price band. Your role and level set your exact price.</p>
        </div>
      </section>

      <section id="price-finder" aria-labelledby="finder-title" className="section-y scroll-mt-24 border-y border-line bg-neutral-50">
        <div className="container-site">
          <SectionHeading
            id="finder-title"
            align="center"
            title="Find your exact price"
            lead="Choose a plan, the role you need and the experience level."
          />
          <div className="mt-10">
            <PriceFinder fromPrices={fromPrices} />
          </div>
        </div>
      </section>

      <section aria-labelledby="how-priced-title" className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading id="how-priced-title" title="Experience levels" lead="Every role is available at three levels." />
            <dl className="mt-8 space-y-6">
              {levels.map((l) => (
                <div key={l.id} className="border-l-[3px] border-gold-500 pl-5">
                  <dt className="font-display text-lg font-semibold">{l.name}</dt>
                  <dd className="mt-1 text-ink-700">{l.definition}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <SectionHeading title="Billing terms" lead="Simple terms, stated up front." />
            <ul className="mt-8 space-y-4">
              {pricingTerms.map((t) => (
                <li key={t} className="flex gap-3 text-ink-700">
                  <Check aria-hidden="true" className="mt-1 size-4 flex-none text-blue-600" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-[var(--radius-card)] bg-blue-50 p-6">
              <p className="font-semibold">Try before you choose</p>
              <p className="mt-1.5 text-ink-700">
                After a good-fit discovery call, start with up to 4 free hours.{" "}
                <Link href="/free-trial" className="font-semibold text-blue-600 hover:underline">
                  How the free trial works
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="pricing-faq-title" className="section-y border-t border-line">
        <div className="container-site grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <SectionHeading id="pricing-faq-title" title="Pricing questions" />
          <FaqList items={pricingFaqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
