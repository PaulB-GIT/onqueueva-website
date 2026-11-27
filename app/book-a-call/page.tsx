import type { Metadata } from "next";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

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

/**
 * Interim version for the Phase 4 review so the primary CTA works end to end.
 * The full page (with on-demand embed and form fallback) is built in Phase 4b.
 */
export default function BookACallPage() {
  return (
    <section className="section-y">
      <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h1 className="text-[2.25rem] font-bold leading-tight md:text-5xl">Book a discovery call</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-700">
            A 45-minute video call to understand your business and see whether we’re a good fit.
          </p>
          <h2 className="mt-10 text-lg font-semibold">What we’ll cover</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-700">
            {agenda.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <p className="mt-8 text-ink-600">
            If we’re a good fit, we’ll email you a short trial form, and you can start with up to 4 free hours.
          </p>
          <p className="mt-4 text-ink-600">
            Prefer email? Write to{" "}
            <a className="font-semibold text-blue-600 hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            . {site.responsePromise}
          </p>
        </div>
        <div className="flex flex-col rounded-[var(--radius-card)] border border-line bg-neutral-50 p-8 md:p-10">
          <h2 className="text-xl font-semibold">Pick a time that suits you</h2>
          <p className="mt-2 text-ink-600">Scheduling opens in Calendly. Times are shown in your own time zone.</p>
          <div className="mt-8">
            <ButtonLink href={site.discoveryCallUrl} size="lg" external>
              Choose a time in Calendly
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
