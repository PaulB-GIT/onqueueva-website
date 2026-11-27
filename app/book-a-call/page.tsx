import type { Metadata } from "next";
import { site } from "@/content/site";
import { CalendlyEmbed } from "@/components/sections/CalendlyEmbed";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: "Book a Discovery Call",
  description:
    "Book a 45-minute discovery call with ON-QUEUE VA. We map your tasks and tools, and if we're a good fit you can start with up to 4 free hours.",
  alternates: { canonical: "/book-a-call" },
};

const agenda = [
  "The tasks you want off your plate, and the tools you use",
  "Which role and experience level fits, and what it costs",
  "How matching, the free trial and onboarding work",
];

export default function BookACallPage() {
  return (
    <section className="section-y">
      <div className="container-site grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <div>
          <p className="flex items-center gap-3 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-ink-600">
            <span aria-hidden="true" className="inline-block h-[3px] w-8 bg-gold-500" />
            45-minute video call
          </p>
          <h1 className="mt-4 text-[2.25rem] font-bold leading-tight md:text-5xl">Book a discovery call</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-700">
            Tell us about your business, and we’ll see together whether we’re a good fit.
          </p>
          <h2 className="mt-10 text-lg font-semibold">What we’ll cover</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-700">
            {agenda.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <h2 className="mt-10 text-lg font-semibold">After the call</h2>
          <p className="mt-3 text-ink-700">
            If we’re a good fit, we email you a short trial form and you can start with up to 4 free hours.
          </p>
          <p className="mt-8 text-ink-600">
            Prefer email? Write to{" "}
            <a className="font-semibold text-blue-600 hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            . {site.responsePromise}
          </p>
        </div>
        <div className="rounded-[var(--radius-card)] border border-line bg-neutral-50 p-6 md:p-10">
          <h2 className="text-xl font-semibold">Pick a time that suits you</h2>
          <p className="mt-2 mb-8 text-ink-600">Times are shown in your own time zone.</p>
          <CalendlyEmbed url={site.discoveryCallUrl} />
        </div>
      </div>
    </section>
  );
}
