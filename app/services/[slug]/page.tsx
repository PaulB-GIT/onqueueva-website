import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { getServiceBySlug, serviceCategories } from "@/content/services";
import type { Faq } from "@/content/faqs";
import { formatMonthly, fromPriceForRoles, rolesInCategory } from "@/lib/pricing";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqJsonLd, FaqList } from "@/components/ui/FaqList";
import { CtaBand } from "@/components/sections/CtaBand";

export const ensureStatic = "navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceCategories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} Virtual Assistants`,
    description: service.metaDescription,
    alternates: { canonical: service.href },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const roles = rolesInCategory(service.id);
  const from = fromPriceForRoles(roles);
  const faqs: Faq[] = [
    {
      question: `How much does a ${service.name.toLowerCase()} VA cost?`,
      answer: `Plans for these roles start from ${from ? formatMonthly(from) : "our published prices"} a month for 20 hours (Lite, Entry level). Your exact price depends on the role, experience level and hours you need; the price finder on our pricing page shows it, and we confirm it on your discovery call.`,
    },
    {
      question: "How do I get started?",
      answer:
        "Book a 45-minute discovery call. If we agree we’re a good fit, we email you a short trial form and you can start with up to 4 free hours before choosing a plan.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faqs} />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: service.name, href: service.href }]} />
      <PageHero eyebrow="Managed VA services" title={`${service.name} virtual assistants`} lead={service.intro}>
        <ButtonLink href="/book-a-call" size="lg">
          Book a Discovery Call
        </ButtonLink>
        <ButtonLink href="/pricing#price-finder" size="lg" variant="secondary">
          Find your price
        </ButtonLink>
      </PageHero>

      <section aria-labelledby="outcomes-title" className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading id="outcomes-title" title="What you can expect" />
            <ul className="mt-8 space-y-4">
              {service.outcomes.map((o) => (
                <li key={o} className="flex gap-3 text-lg">
                  <Check aria-hidden="true" className="mt-1.5 size-5 flex-none text-blue-600" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading title="Tasks your VA can handle" />
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {service.tasks.map((t) => (
                <li key={t} className="py-3.5 text-ink-700">
                  {t}
                </li>
              ))}
            </ul>
            {service.note ? <p className="mt-4 text-sm text-ink-600">{service.note}</p> : null}
          </div>
        </div>
      </section>

      <section aria-labelledby="roles-title" className="section-y border-y border-line bg-neutral-50">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              id="roles-title"
              title="Roles and pricing"
              lead="Every role is available at Entry, Intermediate or Advanced level, on any of our four monthly plans."
            />
            <ul className="mt-8 flex flex-wrap gap-2">
              {roles.map((r) => (
                <li key={r} className="rounded-full border border-line-strong bg-white px-4 py-2 text-[0.9375rem]">
                  {r}
                </li>
              ))}
            </ul>
            {from ? (
              <p className="mt-8 text-lg">
                From <span className="font-display text-2xl font-bold">{formatMonthly(from)}</span> a month for 20 hours.{" "}
                <Link href="/pricing#price-finder" className="font-semibold text-blue-600 hover:underline">
                  Find your exact price
                </Link>
              </p>
            ) : null}
          </div>
          {service.tools ? (
            <div>
              <SectionHeading title="Tools we work in" lead="Examples only. We work inside the tools you already use; these are not partnerships." />
              <ul className="mt-8 flex flex-wrap gap-2">
                {service.tools.map((t) => (
                  <li key={t} className="rounded-[var(--radius-control)] bg-white px-4 py-2 text-[0.9375rem] shadow-[inset_0_0_0_1px_var(--color-line)]">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      <section aria-labelledby="service-faq-title" className="section-y">
        <div className="container-site grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <SectionHeading id="service-faq-title" title="Questions" />
          <FaqList items={faqs} />
        </div>
      </section>

      <section aria-labelledby="other-services-title" className="border-t border-line py-12">
        <div className="container-site">
          <h2 id="other-services-title" className="text-lg font-semibold">
            Other services
          </h2>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {serviceCategories
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <li key={s.slug}>
                  <Link href={s.href} className="text-blue-600 hover:underline">
                    {s.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
