import Link from "next/link";
import { industries } from "@/content/industries";
import { serviceCategories } from "@/content/services";
import { companyLinks, legalLinks, site } from "@/content/site";
import { CopyrightYear } from "@/components/layout/CopyrightYear";

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-display text-[0.9375rem] font-semibold text-white">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-[#C9D6E6] hover:text-white hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="on-dark bg-navy-900 text-[#C9D6E6]">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl font-bold text-white">{site.name}</p>
          <p className="mt-1 text-gold-500">{site.tagline}</p>
          <address className="mt-6 space-y-2 not-italic text-[0.9375rem]">
            <p>
              <a href={`mailto:${site.email}`} className="text-white hover:underline">
                {site.email}
              </a>
            </p>
            <p>
              <a href={site.phone.href} className="text-white hover:underline">
                {site.phone.display}
              </a>
            </p>
            <p>{site.location}</p>
          </address>
          <ul className="mt-6 flex gap-5 text-[0.9375rem]" aria-label="Social media">
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="hover:text-white hover:underline" target="_blank" rel="noopener noreferrer">
                  {s.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Column title="Services" links={serviceCategories.map((s) => ({ label: s.name, href: s.href }))} />
        <Column title="Industries" links={industries.map((i) => ({ label: i.name, href: i.href }))} />
        <Column title="Company" links={companyLinks} />
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CopyrightYear /> {site.name}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
