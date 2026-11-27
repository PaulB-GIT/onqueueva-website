import { testimonials } from "@/content/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="section-y bg-neutral-50">
      <div className="container-site">
        <SectionHeading id="testimonials-title" eyebrow="Client feedback" title="What our clients say" />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-[var(--radius-card)] border border-line bg-white p-8 md:p-10">
              <span aria-hidden="true" className="font-display text-6xl leading-none text-gold-500">
                “
              </span>
              <blockquote className="mt-2 flex-1 text-lg leading-relaxed text-ink-900">
                <p>{t.quote}</p>
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-5 text-[0.9375rem] text-ink-600">
                <span className="font-semibold text-ink-900">{t.name}</span>
                {t.role ? `, ${t.role}` : ""}
                {t.company ? ` · ${t.company}` : ""}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
