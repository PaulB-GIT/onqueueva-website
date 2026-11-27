import { PhoneCall } from "lucide-react";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

const services = ["AI receptionist", "AI answering service", "AI customer service", "Appointment setting & lead qualification", "Outbound follow-up"];

export function OnQueueAi() {
  return (
    <section aria-labelledby="ai-title" className="pb-16 lg:pb-24">
      <div className="container-site">
        <div className="on-dark grid gap-10 rounded-[var(--radius-card)] bg-blue-600 p-8 text-white md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-gold-500">
              <PhoneCall aria-hidden="true" className="size-4" /> Also from our team
            </p>
            <h2 id="ai-title" className="mt-3 text-[1.75rem] font-bold leading-tight text-white md:text-4xl">
              ON-QUEUE AI: managed AI voice agents for your business
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#DCE7F5]">
              Voice agents that greet callers, answer approved questions, capture inquiries and help suitable callers book
              appointments, configured for your business.
            </p>
            <div className="mt-8">
              <ButtonLink href={site.onQueueAi.href} variant="gold" size="lg" external>
                Explore ON-QUEUE AI
              </ButtonLink>
            </div>
          </div>
          <ul className="grid gap-3 text-[0.9375rem]">
            {services.map((s) => (
              <li key={s} className="rounded-[var(--radius-control)] border border-white/20 px-4 py-3">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
