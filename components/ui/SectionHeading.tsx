import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  id?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({ eyebrow, title, lead, align = "left", id, as: Tag = "h2" }: Props) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p
          className={`flex items-center gap-3 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-ink-600 ${centered ? "justify-center" : ""}`}
        >
          <span aria-hidden="true" className="inline-block h-[3px] w-8 bg-gold-500" />
          {eyebrow}
        </p>
      ) : null}
      <Tag id={id} className="mt-3 text-[1.75rem] font-bold leading-tight md:text-4xl">
        {title}
      </Tag>
      {lead ? <p className="mt-4 text-lg leading-relaxed text-ink-600">{lead}</p> : null}
    </div>
  );
}
