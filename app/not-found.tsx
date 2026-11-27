import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="section-y">
      <div className="container-site max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-ink-600">Page not found</p>
        <h1 className="mt-3 text-4xl font-bold">We couldn’t find that page</h1>
        <p className="mt-4 text-lg text-ink-700">
          It may have moved, or it is still being built as part of our new website.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="/">Go to the homepage</ButtonLink>
          <ButtonLink href="/book-a-call" variant="secondary">
            Book a Discovery Call
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
