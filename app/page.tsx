import { site } from "@/content/site";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { IndustriesStrip } from "@/components/sections/IndustriesStrip";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { HumanTechnology } from "@/components/sections/HumanTechnology";
import { OnQueueAi } from "@/components/sections/OnQueueAi";
import { Values } from "@/components/sections/Values";
import { CtaBand } from "@/components/sections/CtaBand";

export const ensureStatic = "navigation";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/brand/onqueueva-logo.png`,
  slogan: site.tagline,
  email: site.email,
  telephone: site.phone.display,
  sameAs: site.social.map((s) => s.href),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <ServicesOverview />
      <ProcessSteps />
      <IndustriesStrip />
      <PricingPreview />
      <Testimonials />
      <HumanTechnology />
      <OnQueueAi />
      <Values />
      <CtaBand />
    </>
  );
}
