/**
 * Site-wide settings. Every page reads contact details and external
 * destinations from here, so one edit updates the whole site.
 * Source: founder decisions of 25–27 Nov 2026 (Phase 1 report, section L2).
 */
export const site = {
  name: "ON-QUEUE VA",
  tagline: "Supporting Your Success, Virtually.",
  url: "https://www.onqueueva.com",
  email: "contact@onqueueva.com",
  phone: { display: "+1 (917) 730-4431", href: "tel:+19177304431" },
  responsePromise: "We reply within 1 business day.",
  location: "Remote-first team in the Philippines",
  discoveryCallUrl: "https://calendly.com/pbercasio-onqueueva/45min-1",
  portal: {
    client: { label: "Client Login", href: "https://portal.onqueueva.com" },
    va: { label: "VA Login", href: "https://portal.onqueueva.com" },
  },
  onQueueAi: { label: "ON-QUEUE AI", href: "https://ai.onqueueva.com" },
  social: [
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61566688689680" },
    { label: "Instagram", href: "https://www.instagram.com/onqueueva/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/105251349/" },
  ],
} as const;

export type NavLink = { label: string; href: string };

export const companyLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Free Trial", href: "/free-trial" },
  { label: "Referral Program", href: "/referral-program" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];
