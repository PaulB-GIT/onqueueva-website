import type { Metadata } from "next";
import { CalendarDays, Mail, Phone } from "lucide-react";
import { site } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact ON-QUEUE VA by email or phone, or book a 45-minute discovery call. We reply within 1 business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Talk to ON-QUEUE VA" lead={`Questions about our services, pricing or careers? ${site.responsePromise}`} />
      <section className="section-y">
        <div className="container-site grid gap-6 md:grid-cols-3">
          <div className="rounded-[var(--radius-card)] border border-line p-7">
            <CalendarDays aria-hidden="true" className="size-6 text-blue-600" />
            <h2 className="mt-4 text-xl font-semibold">Book a discovery call</h2>
            <p className="mt-2 text-ink-700">The fastest way to see if we’re a good fit: 45 minutes, by video.</p>
            <div className="mt-6">
              <ButtonLink href="/book-a-call">Book a Discovery Call</ButtonLink>
            </div>
          </div>
          <div className="rounded-[var(--radius-card)] border border-line p-7">
            <Mail aria-hidden="true" className="size-6 text-blue-600" />
            <h2 className="mt-4 text-xl font-semibold">Email</h2>
            <p className="mt-2 text-ink-700">For general questions, referrals and job applications.</p>
            <p className="mt-6">
              <a href={`mailto:${site.email}`} className="text-lg font-semibold text-blue-600 hover:underline">
                {site.email}
              </a>
            </p>
          </div>
          <div className="rounded-[var(--radius-card)] border border-line p-7">
            <Phone aria-hidden="true" className="size-6 text-blue-600" />
            <h2 className="mt-4 text-xl font-semibold">Phone</h2>
            <p className="mt-2 text-ink-700">{site.location}.</p>
            <p className="mt-6">
              <a href={site.phone.href} className="text-lg font-semibold text-blue-600 hover:underline">
                {site.phone.display}
              </a>
            </p>
          </div>
        </div>
        <div className="container-site mt-10">
          <div className="rounded-[var(--radius-card)] bg-neutral-50 p-7 text-ink-700">
            <p>
              <span className="font-semibold text-ink-900">Existing clients and VAs:</span> log in at{" "}
              <a href={site.portal.client.href} className="font-semibold text-blue-600 hover:underline">
                portal.onqueueva.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
