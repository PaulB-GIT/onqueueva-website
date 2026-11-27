import { ClipboardList, Route, UserCheck, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const points = [
  { icon: UserCheck, title: "People own the work", text: "Your VA is accountable for the result, with ON-QUEUE VA behind them." },
  { icon: ClipboardList, title: "Documented processes", text: "Every recurring task gets a written procedure, so quality stays consistent." },
  { icon: Route, title: "Organised hand-offs", text: "Requests, priorities and updates are tracked, not lost in chat threads." },
  {
    icon: Wrench,
    title: "Your tools, not ours",
    text: "We work inside the tools you already use, such as Slack, HubSpot, GoHighLevel and Zapier.",
  },
];

export function HumanTechnology() {
  return (
    <section aria-labelledby="human-tech-title" className="section-y">
      <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
        <SectionHeading
          id="human-tech-title"
          eyebrow="Human-led, technology-enabled"
          title="People do the work. Technology keeps it on track."
          lead="Technology helps with documentation, routing and reporting. People stay responsible for the outcome."
        />
        <ul className="grid gap-8 sm:grid-cols-2">
          {points.map(({ icon: Icon, title, text }) => (
            <li key={title}>
              <Icon aria-hidden="true" className="size-6 text-blue-600" />
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-1.5 leading-relaxed text-ink-600">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
