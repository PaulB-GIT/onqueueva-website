import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";

const values = [
  { name: "Integrity", text: "We say what we will do, report honestly and keep our word." },
  { name: "Reliability", text: "Consistent support you can plan your week around." },
  { name: "Excellence", text: "Careful work, documented and improved over time." },
  { name: "Partnership", text: "We treat your goals, and the people who do the work, with care." },
];

export function Values() {
  return (
    <section aria-labelledby="values-title" className="section-y border-t border-line">
      <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            id="values-title"
            eyebrow="Our values"
            title="Guided by biblical principles"
            lead="Honesty in what we promise, diligence in what we deliver, and respect for every client and every team member."
          />
          <div className="mt-8">
            <ButtonLink href="/about" variant="text">
              About ON-QUEUE VA →
            </ButtonLink>
          </div>
        </div>
        <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.name} className="border-l-[3px] border-gold-500 pl-5">
              <dt className="font-display text-lg font-semibold text-ink-900">{v.name}</dt>
              <dd className="mt-1.5 leading-relaxed text-ink-600">{v.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
