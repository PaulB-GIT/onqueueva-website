import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { site } from "@/content/site";
import { referralExamples, referralSteps, referralTerms } from "@/content/referral";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: "Client Referral Program",
  description:
    "Refer a business to ON-QUEUE VA and receive a one-time account credit of 20% of their first paid monthly subscription. Open to active clients.",
  alternates: { canonical: "/referral-program" },
};

const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Client referral")}&body=${encodeURIComponent(
  "Your name:\nYour company:\n\nReferred business:\nContact name:\nContact email:\nContact phone (optional):\n\nThe contact has agreed to be introduced: yes / no\n",
)}`;

export default function ReferralPage() {
  return (
    <>
      <PageHero
        eyebrow="For our clients"
        title="Refer a business. Earn 20% in account credit."
        lead="Know a business owner who needs reliable support? Introduce them to ON-QUEUE VA and receive a one-time credit of 20% of their first paid monthly subscription."
      >
        <ButtonLink href={mailto} size="lg">
          <Mail aria-hidden="true" className="size-5" /> Email a referral
        </ButtonLink>
        <ButtonLink href="#terms" size="lg" variant="secondary">
          Read the terms
        </ButtonLink>
      </PageHero>

      <section aria-labelledby="referral-steps-title" className="section-y">
        <div className="container-site">
          <SectionHeading id="referral-steps-title" title="How it works" />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {referralSteps.map((s, i) => (
              <li key={s.title} className="bg-white p-7">
                <span
                  aria-hidden="true"
                  className={`flex size-9 items-center justify-center rounded-full text-sm font-semibold ${i === 3 ? "bg-gold-500 text-navy-900" : "bg-blue-600 text-white"}`}
                >
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="examples-title" className="section-y border-y border-line bg-neutral-50">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading id="examples-title" title="Examples" lead="Credit is based on the referred client’s first paid monthly core subscription." />
            <dl className="mt-8 space-y-4">
              {referralExamples.map((e) => (
                <div key={e.label} className="rounded-[var(--radius-card)] border border-line bg-white p-6">
                  <dt className="text-ink-700">{e.label}</dt>
                  <dd className="mt-1 font-display text-2xl font-bold">{e.credit}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <SectionHeading title="Send a referral" />
            <p className="mt-6 leading-relaxed text-ink-700">
              Email{" "}
              <a href={mailto} className="font-semibold text-blue-600 hover:underline">
                {site.email}
              </a>{" "}
              with your name, the referred business and their main contact. You can copy them in. Please make sure they’re happy to be
              introduced.
            </p>
            <p className="mt-4 text-sm text-ink-600">An online referral form is being added to this page.</p>
          </div>
        </div>
      </section>

      <section id="terms" aria-labelledby="terms-title" className="section-y scroll-mt-24">
        <div className="container-site max-w-4xl">
          <SectionHeading id="terms-title" title="Program terms" />
          <ol className="mt-10 space-y-6">
            {referralTerms.map((t, i) => (
              <li key={t.title} className="grid gap-2 border-b border-line pb-6 sm:grid-cols-[3.5rem_1fr]">
                <span aria-hidden="true" className="font-display font-bold text-blue-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{t.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-ink-700">{t.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
