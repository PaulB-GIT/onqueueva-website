/**
 * Approved testimonials only (founder, 27 Nov 2026).
 * Quotes are verbatim: do not edit wording without the client's authorisation.
 */
export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  subject: string;
  photoAllowed: boolean;
  approvedOn: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Things have been going really well with Jenzen. She’s quick to respond, adaptable, and always receptive to feedback and adjustments.",
    name: "Christa B.",
    company: "Connecting Remodeling Inc.",
    subject: "VA Jenzen",
    photoAllowed: false,
    approvedOn: "2026-11-27",
  },
  {
    quote:
      "Jay was incredible to work with—he rebuilt our website from the ground up, and the results exceeded our expectations. The site now looks modern, clean, and professional, and everything runs smoothly. Jay communicated clearly throughout the process and made sure our vision was reflected in the final outcome. I highly recommend working with ON-QUEUE VA if you’re looking to hire a VA—reliable, responsive, and truly committed to delivering results.",
    name: "Townsi F.",
    role: "Founder",
    company: "Golden Refunds Retriever",
    subject: "VA Jay, website rebuild",
    photoAllowed: false, // founder instruction: do not use the photo
    approvedOn: "2026-11-27",
  },
];
