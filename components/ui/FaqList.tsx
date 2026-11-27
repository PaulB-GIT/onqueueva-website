import { ChevronDown } from "lucide-react";
import type { Faq } from "@/content/faqs";

/** Server-rendered FAQ: answers are in the HTML (good for search and assistive tech); no JavaScript needed. */
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.question} className="group py-1">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-4 font-display text-lg font-semibold text-ink-900 [&::-webkit-details-marker]:hidden">
            {item.question}
            <ChevronDown aria-hidden="true" className="size-5 flex-none text-blue-600 transition-transform group-open:rotate-180" />
          </summary>
          <p className="pb-6 pr-10 leading-relaxed text-ink-700">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

/** FAQPage structured data, built from the same content as the visible FAQ. */
export function FaqJsonLd({ items }: { items: Faq[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
  );
}
