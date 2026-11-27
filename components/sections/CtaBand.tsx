import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function CtaBand() {
  return (
    <section aria-labelledby="cta-title" className="bg-blue-50">
      <div className="container-site flex flex-col items-start justify-between gap-8 py-16 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 id="cta-title" className="text-[1.75rem] font-bold leading-tight md:text-4xl">
            Find out if we’re a good fit
          </h2>
          <p className="mt-3 text-lg text-ink-700">
            Book a 45-minute discovery call. If we’re a fit, you can start with up to 4 free hours. {site.responsePromise}
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <ButtonLink href="/book-a-call" size="lg">
            Book a Discovery Call
          </ButtonLink>
          <ButtonLink href="/contact" size="lg" variant="secondary">
            Contact us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
