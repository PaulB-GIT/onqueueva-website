"use client";

import { useState } from "react";
import { CalendarDays } from "lucide-react";

type Props = { url: string };

/**
 * Loads Calendly only when the visitor asks for it: no third-party script on
 * page load, and a direct link always works as a fallback.
 */
export function CalendlyEmbed({ url }: Props) {
  const [show, setShow] = useState(false);
  const embedUrl = `${url}?hide_gdpr_banner=1&primary_color=0a4889`;

  if (show) {
    return (
      <div>
        <iframe
          src={embedUrl}
          title="Book a discovery call with ON-QUEUE VA (Calendly)"
          className="h-[720px] w-full rounded-[var(--radius-card)] border border-line bg-white"
          loading="lazy"
        />
        <p className="mt-3 text-sm text-ink-600">
          Calendar not loading?{" "}
          <a href={url} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:underline">
            Open Calendly in a new tab
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start gap-4">
      <button
        type="button"
        onClick={() => setShow(true)}
        className="inline-flex min-h-12 items-center gap-2 rounded-[var(--radius-control)] bg-blue-600 px-6 font-semibold text-white transition-colors hover:bg-blue-700"
      >
        <CalendarDays aria-hidden="true" className="size-5" />
        Show available times
      </button>
      <a href={url} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:underline">
        Or open Calendly in a new tab<span className="sr-only"> (opens in a new tab)</span>
      </a>
      <p className="text-sm text-ink-600">The calendar is provided by Calendly and loads only when you choose to show it.</p>
    </div>
  );
}
