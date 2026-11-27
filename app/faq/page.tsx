import type { Metadata } from "next";
import Link from "next/link";
import { pricingFaqs, trialFaqs, type Faq } from "@/content/faqs";
import { PageHero } from "@/components/ui/PageHero";
import { FaqJsonLd, FaqList } from "@/components/ui/FaqList";
import { CtaBand } from "@/components/sections/CtaBand";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about working with ON-QUEUE VA: getting started, pricing and billing, the free trial, security and access, and our client referral program.",
  alternates: { canonical: "/faq" },
};

const gettingStarted: Faq[] = [
  {
    question: "Who are ON-QUEUE VA’s virtual assistants?",
    answer:
      "Skilled remote professionals based in the Philippines, matched to your tasks, tools and industry, and supported by ON-QUEUE VA after onboarding.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a 45-minute discovery call. We learn about your business and the tasks you want to delegate. If we agree we’re a good fit, we email you a trial form, and you can start with up to 4 free hours.",
  },
  {
    question: "What kind of work can I delegate?",
    answer:
      "Administrative and executive support, customer support, sales and lead generation, marketing and creative work, bookkeeping and finance admin, and technical and automation tasks.",
  },
];

const security: Faq[] = [
  {
    question: "How should I give my VA access to my tools?",
    answer:
      "Share only the tools and accounts a task needs. Where your tools allow it, create a separate login for your VA, so you can see and control their access. You can change or remove access at any time.",
  },
];

const referral: Faq[] = [
  {
    question: "Do you have a referral program?",
    answer:
      "Yes. Active clients receive a one-time account credit of 20% of a referred client’s first paid monthly subscription, once the referral qualifies. The full terms are on our Referral Program page.",
  },
];

const groups: { title: string; items: Faq[] }[] = [
  { title: "Getting started", items: gettingStarted },
  { title: "Pricing and billing", items: pricingFaqs },
  { title: "Free trial", items: trialFaqs.filter((f) => !pricingFaqs.some((p) => p.question === f.question)) },
  { title: "Security and access", items: security },
  { title: "Referral program", items: referral },
];

export default function FaqPage() {
  const all = groups.flatMap((g) => g.items);
  return (
    <>
      <FaqJsonLd items={all} />
      <PageHero eyebrow="FAQ" title="Frequently asked questions" lead="Can’t find your answer? Ask us on a discovery call, or email us." />
      <div className="section-y">
        <div className="container-site max-w-4xl space-y-14">
          {groups.map((g) => (
            <section key={g.title} aria-labelledby={`faq-${g.title}`}>
              <h2 id={`faq-${g.title}`} className="mb-4 text-2xl font-bold">
                {g.title}
              </h2>
              <FaqList items={g.items} />
            </section>
          ))}
          <p className="text-ink-600">
            More details:{" "}
            <Link href="/pricing" className="font-semibold text-blue-600 hover:underline">
              Pricing
            </Link>{" "}
            ·{" "}
            <Link href="/how-it-works" className="font-semibold text-blue-600 hover:underline">
              How it works
            </Link>{" "}
            ·{" "}
            <Link href="/referral-program" className="font-semibold text-blue-600 hover:underline">
              Referral Program
            </Link>
          </p>
        </div>
      </div>
      <CtaBand />
    </>
  );
}
