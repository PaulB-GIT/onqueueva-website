import { ButtonLink } from "@/components/ui/ButtonLink";

const steps = [
  { title: "45-minute discovery call", text: "We map your tasks, tools and goals." },
  { title: "Trial form by email", text: "If we’re a good fit, you tell us what to delegate first." },
  { title: "Up to 4 free hours", text: "Your matched VA works on real tasks." },
  { title: "Choose a plan and onboard", text: "Documented handoff, then weekly improvement." },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="bg-blue-50">
      <div className="container-site grid items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
        <div>
          <p className="inline-flex rounded-full border border-blue-100 bg-white px-3.5 py-1.5 text-[0.8125rem] font-semibold text-blue-600">
            For business owners in the US, UK and Australia
          </p>
          <h1 id="hero-title" className="mt-6 text-[2.5rem] font-bold leading-[1.1] text-navy-900 md:text-[3.25rem]">
            Reliable support from the Philippines. <span className="text-blue-600">Clear plans. Real accountability.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-700 md:text-xl">
            Matched, onboarded and managed virtual assistants for admin, customer support, sales, marketing, bookkeeping
            and technical work.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <ButtonLink href="/book-a-call" size="lg">
              Book a Discovery Call
            </ButtonLink>
            <ButtonLink href="/how-it-works" size="lg" variant="secondary">
              How it works
            </ButtonLink>
          </div>
        </div>

        <div className="rounded-[var(--radius-card)] border-t-4 border-gold-500 bg-white p-7 shadow-[var(--shadow-float)] md:p-8">
          <h2 className="text-xl font-semibold">How you get started</h2>
          <ol className="mt-6 space-y-5">
            {steps.map((step, i) => {
              const last = i === steps.length - 1;
              return (
                <li key={step.title} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className={`flex size-8 flex-none items-center justify-center rounded-full text-sm font-semibold ${last ? "bg-gold-500 text-navy-900" : "bg-blue-600 text-white"}`}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold leading-snug">{step.title}</p>
                    <p className="mt-0.5 text-[0.9375rem] leading-normal text-ink-600">{step.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
