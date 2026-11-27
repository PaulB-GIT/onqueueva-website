import type { Metadata } from "next";
import { site } from "@/content/site";
import { LegalDraftNotice } from "@/components/ui/LegalDraftNotice";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How ON-QUEUE VA collects, uses and protects personal information shared through this website.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="section-y">
      <div className="container-site max-w-3xl">
        <h1 className="text-[2.25rem] font-bold leading-tight md:text-5xl">Privacy Policy</h1>
        <div className="mt-8">
          <LegalDraftNotice pending={["legal entity name and registered address", "effective date", "governing law", "review by legal counsel"]} />
        </div>
        <div className="mt-10 space-y-8 leading-relaxed text-ink-700 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_li]:ml-5 [&_li]:list-disc">
          <section>
            <h2>Who we are</h2>
            <p>
              This website is operated by ON-QUEUE VA, a virtual assistant agency based in the Philippines. You can contact us about privacy
              at <a className="font-semibold text-blue-600 hover:underline" href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </section>
          <section>
            <h2>Information we collect</h2>
            <ul className="space-y-2">
              <li>Information you send us through our forms or by email: for example your name, email address, phone number, company and message.</li>
              <li>Information you give when booking a discovery call through Calendly.</li>
              <li>Job applications, including the CV links and details you choose to share.</li>
              <li>Anonymous website usage statistics, collected without cookies.</li>
            </ul>
          </section>
          <section>
            <h2>How we use it</h2>
            <ul className="space-y-2">
              <li>To reply to your enquiry, arrange calls and provide our services.</li>
              <li>To process referrals and job applications.</li>
              <li>To understand how the website is used and improve it.</li>
            </ul>
            <p className="mt-3">We do not sell your personal information.</p>
          </section>
          <section>
            <h2>Services we use</h2>
            <p>We use trusted providers to run this website and handle your requests:</p>
            <ul className="mt-2 space-y-2">
              <li>Vercel, to host the website and measure anonymous usage.</li>
              <li>Calendly, to schedule discovery calls.</li>
              <li>An email delivery provider, to send form submissions to our inbox.</li>
              <li>Cloudflare Turnstile, to protect our forms from spam.</li>
            </ul>
          </section>
          <section>
            <h2>How long we keep it</h2>
            <p>We keep personal information only as long as needed for the purposes above, or as required by law.</p>
          </section>
          <section>
            <h2>Your choices</h2>
            <p>
              You can ask us to access, correct or delete the personal information we hold about you by emailing {site.email}.
            </p>
          </section>
          <section>
            <h2>Changes to this policy</h2>
            <p>We may update this policy. The latest version will always be on this page.</p>
          </section>
        </div>
      </div>
    </article>
  );
}
