import { site } from "@/content/site";

export function UtilityBar() {
  return (
    <div className="on-dark bg-navy-900 text-[0.8125rem] text-white">
      <div className="container-site flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2">
        <p className="hidden sm:block">{site.tagline}</p>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-1" aria-label="Account and product links">
          <li>
            <a href={site.portal.client.href} className="hover:underline">
              {site.portal.client.label}
            </a>
          </li>
          <li>
            <a href={site.portal.va.href} className="hover:underline">
              {site.portal.va.label}
            </a>
          </li>
          <li>
            <a href={site.onQueueAi.href} className="font-semibold text-gold-500 hover:underline">
              {site.onQueueAi.label} <span aria-hidden="true">→</span>
            </a>
          </li>
          <li className="hidden md:block">
            <a href={site.phone.href} className="hover:underline">
              {site.phone.display}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
