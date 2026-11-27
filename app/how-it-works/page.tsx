import type { Metadata } from "next";
import { KeyRound, ListChecks, ShieldCheck, UserCog } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CtaBand } from "@/components/sections/CtaBand";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How ON-QUEUE VA works: a discovery call, a matched virtual assistant, up to 4 free trial hours, a documented handoff and ongoing support.",
  alternates: { canonical: "/how-it-works" },
};

const gettingStarted = [
  { title: "Book a 45-minute discovery call", text: "We learn about your business, the tasks you want to hand over and the tools you use." },
  { title: "Receive the trial form by email", text: "If we agree we’re a good fit, we send a short form so you can tell us what to delegate first." },
  { title: "Up to 4 free hours", text: "We match a VA to your needs, and they work on real tasks you chose." },
  { title: "Choose a plan and onboard", text: "Pick the hours you need. We document the work and hand it over properly." },
];

const framework = [
  { name: "Map", who: "You and ON-QUEUE VA", text: "We map your tasks, tools, priorities and how you like to communicate, so the right work is delegated first." },
  { name: "Match", who: "ON-QUEUE VA", text: "We select a VA whose skills, experience level and industry knowledge fit your workflows." },
  { name: "Handoff", who: "Your VA, guided by us", text: "Each recurring task is written down step by step, so quality stays consistent and nothing depends on memory." },
  { name: "Optimize", who: "Your VA and ON-QUEUE VA", text: "We stay involved after onboarding, review how the work is going and improve it week by week." },
];

const security = [
  { icon: KeyRound, title: "Share only what a task needs", text: "Give your VA access to the specific tools and accounts their work requires, nothing more." },
  { icon: UserCog, title: "Use their own logins", text: "Where your tools allow it, create a separate user for your VA so you can see and control their access." },
  { icon: ListChecks, title: "Keep a simple access list", text: "Note which tools your VA can use, so access is easy to review at any time." },
  { icon: ShieldCheck, title: "Remove access anytime", text: "You stay in control and can change or remove access whenever you choose." },
];

const examples = [
  {
    title: "Construction lead handling",
    steps: ["New web inquiries checked twice a day", "Contact details added to the CRM", "Site visits booked in the owner’s calendar", "Follow-up sent to quotes awaiting a reply"],
  },
  {
    title: "Cleaning service coordination",
    steps: ["Booking requests answered by email", "Cleaner schedules updated", "Customers reminded the day before", "Feedback collected after each job"],
  },
  {
    title: "E-commerce customer support",
    steps: ["Order questions answered from the help inbox", "Returns logged and tracked", "Product listings updated", "Weekly summary of common questions"],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Managed from the first call, not just placed"
        lead="We match you with the right VA, document how the work gets done, and stay involved after the handoff."
      >
        <ButtonLink href="/book-a-call" size="lg">
          Book a Discovery Call
        </ButtonLink>
      </PageHero>

      <section aria-labelledby="start-title" className="section-y">
        <div className="container-site">
          <SectionHeading id="start-title" eyebrow="Getting started" title="Four steps from first call to a working VA" />
          <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {gettingStarted.map((step, i) => (
              <li key={step.title} className="relative">
                <span
                  aria-hidden="true"
                  className={`flex size-10 items-center justify-center rounded-full font-semibold ${i === gettingStarted.length - 1 ? "bg-gold-500 text-navy-900" : "bg-blue-600 text-white"}`}
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

      <section aria-labelledby="framework-title" className="section-y border-y border-line bg-neutral-50">
        <div className="container-site">
          <SectionHeading
            id="framework-title"
            eyebrow="Our framework"
            title="Map, Match, Handoff, Optimize"
            lead="The same four-stage method behind every client engagement."
          />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line md:grid-cols-2">
            {framework.map((stage, i) => (
              <li key={stage.name} className="bg-white p-8">
                <p className="font-display text-sm font-bold text-blue-600">
                  <span aria-hidden="true">0{i + 1} · </span>
                  {stage.name}
                </p>
                <p className="mt-3 leading-relaxed text-ink-700">{stage.text}</p>
                <p className="mt-4 text-sm text-ink-600">Who: {stage.who}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="security-title" className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            id="security-title"
            eyebrow="Security and confidentiality"
            title="Delegate without losing control"
            lead="Good access habits protect your business. This is how we recommend setting up access for your VA."
          />
          <ul className="grid gap-8 sm:grid-cols-2">
            {security.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <Icon aria-hidden="true" className="size-6 text-blue-600" />
                <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                <p className="mt-1.5 leading-relaxed text-ink-600">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="examples-title" className="section-y border-t border-line">
        <div className="container-site">
          <SectionHeading
            id="examples-title"
            eyebrow="Example workflows"
            title="What delegated work can look like"
            lead="Illustrative examples to show how tasks are organised. They are not client case studies."
          />
          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {examples.map((ex) => (
              <li key={ex.title} className="rounded-[var(--radius-card)] border border-line p-7">
                <p className="inline-flex rounded-full bg-gold-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.06em] text-gold-700">
                  Illustrative example
                </p>
                <h3 className="mt-4 text-lg font-semibold">{ex.title}</h3>
                <ol className="mt-4 list-decimal space-y-2 pl-5 text-ink-700">
                  {ex.steps.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
