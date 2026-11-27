import type { ReactNode } from "react";

type Props = { eyebrow?: string; title: string; lead?: ReactNode; children?: ReactNode };

/** Inner-page hero: one H1 per page. */
export function PageHero({ eyebrow, title, lead, children }: Props) {
  return (
    <section className="border-b border-line bg-blue-50">
      <div className="container-site py-14 lg:py-20">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="flex items-center gap-3 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-ink-600">
              <span aria-hidden="true" className="inline-block h-[3px] w-8 bg-gold-500" />
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-4 text-[2.25rem] font-bold leading-[1.12] text-navy-900 md:text-5xl">{title}</h1>
          {lead ? <p className="mt-5 text-lg leading-relaxed text-ink-700 md:text-xl">{lead}</p> : null}
          {children ? <div className="mt-8 flex flex-wrap gap-4">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
