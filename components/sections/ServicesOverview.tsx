import Link from "next/link";
import { ArrowRight, BarChart3, Briefcase, Headset, Megaphone, Settings2, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { serviceCategories, type ServiceCategory } from "@/content/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons: Record<ServiceCategory["id"], LucideIcon> = {
  "administrative-executive-support": Briefcase,
  "customer-support": Headset,
  "sales-lead-generation": TrendingUp,
  "marketing-creative": Megaphone,
  "bookkeeping-finance": BarChart3,
  "technical-automation": Settings2,
};

export function ServicesOverview() {
  return (
    <section aria-labelledby="services-title" className="section-y">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            id="services-title"
            eyebrow="Managed VA services"
            title="Delegate the work that slows you down"
            lead="One matched professional, or a small team, covering the functions your business runs on."
          />
          <Link href="/services" className="inline-flex min-h-11 items-center gap-2 font-semibold text-blue-600 hover:underline">
            All services <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <ul className="mt-12 grid border-t border-line md:grid-cols-2">
          {serviceCategories.map((service, i) => {
            const Icon = icons[service.id];
            return (
              <li key={service.id} className={`border-b border-line ${i % 2 === 0 ? "md:border-r md:pr-10" : "md:pl-10"}`}>
                <Link href={service.href} className="group flex gap-5 py-8">
                  <span className="flex size-11 flex-none items-center justify-center rounded-[var(--radius-control)] bg-blue-50 text-blue-600">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="block">
                    <span className="flex items-center gap-2 font-display text-xl font-semibold text-ink-900 group-hover:text-blue-600">
                      {service.name}
                      <ArrowRight aria-hidden="true" className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </span>
                    <span className="mt-1.5 block text-ink-600">{service.summary}</span>
                    <span className="mt-3 block text-sm text-ink-600">{service.examples.join(" · ")}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
