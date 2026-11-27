import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getIndustryBySlug, industries } from "@/content/industries";
import { serviceCategories } from "@/content/services";
import { testimonials } from "@/content/testimonials";
import { formatMonthly, fromPriceForRoles } from "@/lib/pricing";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";

export const ensureStatic = "navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: `Virtual Assistants for ${industry.name}`,
    description: industry.metaDescription,
    alternates: { canonical: industry.href },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const testimonial = industry.testimonialName ? testimonials.find((t) => t.name === industry.testimonialName) : undefined;
  const related = serviceCategories.filter((s) => industry.relatedCategories.includes(s.id));
  const specialistFrom = fromPriceForRoles(industry.specialistRoles);

  return (
    <>
      <Breadcrumbs items={[{ label: "Industries", href: "/industries" }, { label: industry.name, href: industry.href }]} />
      <PageHero eyebrow="Industries" title={`Virtual assistants for ${industry.name.toLowerCase()}`} lead={industry.intro}>
        <ButtonLink href="/book-a-call" size="lg">
          Book a Discovery Call
        </ButtonLink>
        <ButtonLink href="/pricing" size="lg" variant="secondary">
          See pricing
        </ButtonLink>
      </PageHero>

      <section aria-labelledby="challenges-title" className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading id="challenges-title" title="Sound familiar?" />
            <ul className="mt-8 space-y-4">
              {industry.challenges.map((c) => (
                <li key={c} className="border-l-[3px] border-gold-500 pl-5 text-lg">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading title="How your VA can help" />
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {industry.tasks.map((t) => (
                <li key={t} className="py-3.5 text-ink-700">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {industry.example || testimonial ? (
        <section aria-labelledby="proof-title" className="section-y border-y border-line bg-neutral-50">
          <div className="container-site">
            <h2 id="proof-title" className="sr-only">
              Example and client feedback
            </h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {industry.example ? (
                <div className="rounded-[var(--radius-card)] border border-line bg-white p-8">
                  <p className="inline-flex rounded-full bg-gold-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.06em] text-gold-700">
                    Illustrative example
                  </p>
                  <h3 className="mt-4 text-xl font-semibold">{industry.example.title}</h3>
                  <ol className="mt-4 list-decimal space-y-2 pl-5 text-ink-700">
                    {industry.example.steps.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ol>
                  <p className="mt-5 text-sm text-ink-600">An example of how this work can be organised, not a client case study.</p>
                </div>
              ) : null}
              {testimonial ? (
                <figure className="flex flex-col rounded-[var(--radius-card)] border border-line bg-white p-8">
                  <span aria-hidden="true" className="font-display text-6xl leading-none text-gold-500">
                    “
                  </span>
                  <blockquote className="mt-2 flex-1 text-lg leading-relaxed">
                    <p>{testimonial.quote}</p>
                  </blockquote>
                  <figcaption className="mt-6 border-t border-line pt-5 text-[0.9375rem] text-ink-600">
                    <span className="font-semibold text-ink-900">{testimonial.name}</span>
                    {testimonial.company ? ` · ${testimonial.company}` : ""}
                  </figcaption>
                </figure>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      <section aria-labelledby="related-title" className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading id="related-title" title="Related services" />
            <ul className="mt-8 space-y-3">
              {related.map((s) => (
                <li key={s.slug}>
                  <Link href={s.href} className="font-semibold text-blue-600 hover:underline">
                    {s.name}
                  </Link>
                  <p className="text-ink-600">{s.summary}</p>
                </li>
              ))}
            </ul>
          </div>
          {industry.specialistRoles.length > 0 ? (
            <div>
              <SectionHeading title="Industry specialist roles" lead="VAs with experience in your industry, at Entry, Intermediate or Advanced level." />
              <ul className="mt-8 flex flex-wrap gap-2">
                {industry.specialistRoles.map((r) => (
                  <li key={r} className="rounded-full border border-line-strong px-4 py-2 text-[0.9375rem]">
                    {r}
                  </li>
                ))}
              </ul>
              {specialistFrom ? (
                <p className="mt-6">
                  From <span className="font-display text-xl font-bold">{formatMonthly(specialistFrom)}</span> a month for 20 hours.{" "}
                  <Link href="/pricing#price-finder" className="font-semibold text-blue-600 hover:underline">
                    Find your exact price
                  </Link>
                </p>
              ) : null}
            </div>
          ) : null}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
