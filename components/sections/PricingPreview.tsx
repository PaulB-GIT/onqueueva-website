import { Check } from "lucide-react";
import { plans, pricingTerms, type PlanId } from "@/content/pricing";
import { fromPrice } from "@/lib/pricing";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PriceFinder } from "@/components/sections/PriceFinder";

export function PricingPreview() {
  const fromPrices = Object.fromEntries(plans.map((p) => [p.id, fromPrice(p.id)])) as Record<PlanId, number>;

  return (
    <section aria-labelledby="pricing-title" className="section-y">
      <div className="container-site">
        <SectionHeading
          id="pricing-title"
          align="center"
          eyebrow="Pricing"
          title="Choose your hours. See your exact price."
          lead="Prices depend on the role and experience level. No minimum commitment."
        />
        <div className="mt-10">
          <PriceFinder fromPrices={fromPrices} />
        </div>
        <ul className="mx-auto mt-8 grid max-w-4xl gap-x-10 gap-y-3 text-[0.9375rem] text-ink-700 md:grid-cols-2">
          {pricingTerms.map((term) => (
            <li key={term} className="flex gap-3">
              <Check aria-hidden="true" className="mt-1 size-4 flex-none text-blue-600" />
              {term}
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href="/book-a-call" size="lg">
            Book a Discovery Call
          </ButtonLink>
          <ButtonLink href="/pricing" variant="text">
            See full pricing →
          </ButtonLink>
        </div>
        <p className="mt-5 text-center text-sm text-ink-600">Good fit after your call? Start with up to 4 free hours.</p>
      </div>
    </section>
  );
}
