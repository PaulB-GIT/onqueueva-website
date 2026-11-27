import type { Metadata } from "next";
import Link from "next/link";
import { pricingTerms } from "@/content/pricing";
import { site } from "@/content/site";
import { LegalDraftNotice } from "@/components/ui/LegalDraftNotice";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that apply to ON-QUEUE VA managed virtual assistant services, plans, billing, cancellation and the free trial.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsPage() {
  return (
    <article className="section-y">
      <div className="container-site max-w-3xl">
        <h1 className="text-[2.25rem] font-bold leading-tight md:text-5xl">Terms of Service</h1>
        <div className="mt-8">
          <LegalDraftNotice
            pending={[
              "legal entity name and address",
              "effective date",
              "confidentiality, liability, non-solicitation and governing-law sections",
              "review by legal counsel against the current terms (last updated 4 April 2026)",
            ]}
          />
        </div>
        <div className="mt-10 space-y-8 leading-relaxed text-ink-700 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_li]:ml-5 [&_li]:list-disc">
          <section>
            <h2>Our services</h2>
            <p>
              ON-QUEUE VA provides managed virtual assistant services: we match a virtual assistant to your needs, onboard them with documented
              processes and support the work on an ongoing basis.
            </p>
          </section>
          <section>
            <h2>Plans and pricing</h2>
            <p>
              Plans are Lite (20 hours per month), Basic (40), Growth (80) and Full-Time (160). Prices depend on the role and experience
              level and are shown on our <Link className="font-semibold text-blue-600 hover:underline" href="/pricing">pricing page</Link>.
            </p>
          </section>
          <section>
            <h2>Billing, hours and cancellation</h2>
            <ul className="space-y-2">
              {pricingTerms.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Free trial</h2>
            <p>
              After a discovery call, if both parties agree there is a good fit, we may offer up to 4 hours of free work. The trial form is sent
              by email. There is no obligation to continue after the trial.
            </p>
          </section>
          <section>
            <h2>Referral program</h2>
            <p>
              Referral credits are governed by the <Link className="font-semibold text-blue-600 hover:underline" href="/referral-program#terms">Referral Program terms</Link>.
            </p>
          </section>
          <section>
            <h2>Contact</h2>
            <p>
              Questions about these terms: <a className="font-semibold text-blue-600 hover:underline" href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
