import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";

const steps = [
  { name: "Map", text: "On the discovery call we learn your tasks, tools, priorities and how you like to work." },
  { name: "Match", text: "We select a VA whose skills and experience fit your workflows and your industry." },
  { name: "Handoff", text: "We document the work step by step, so it never depends on one person’s memory." },
  { name: "Optimize", text: "We stay involved after onboarding and improve the work week by week." },
];

export function ProcessSteps() {
  return (
    <section aria-labelledby="process-title" className="section-y border-y border-line bg-neutral-50">
      <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading
            id="process-title"
            eyebrow="How it works"
            title="Managed from the first call, not just placed"
            lead="A freelancer marketplace gives you a profile. We give you a matched professional, a documented handoff and ongoing support."
          />
          <div className="mt-8">
            <ButtonLink href="/how-it-works" variant="text">
              See the full process →
            </ButtonLink>
          </div>
        </div>
        <ol className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line sm:grid-cols-2">
          {steps.map((step, i) => (
            <li key={step.name} className="bg-white p-7">
              <p className="font-display text-sm font-bold text-blue-600">
                <span aria-hidden="true">0{i + 1} · </span>
                {step.name}
              </p>
              <p className="mt-3 leading-relaxed text-ink-700">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
