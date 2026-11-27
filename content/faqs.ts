/**
 * FAQ answers are written only from approved founder decisions (25–27 Nov 2026).
 * Draft wording for founder review. Do not add commitments that are not approved.
 */
export type Faq = { question: string; answer: string };

export const pricingFaqs: Faq[] = [
  {
    question: "How is my monthly price worked out?",
    answer:
      "Three things set your price: the plan (how many hours a month you need), the role (the type of work), and the experience level (Entry, Intermediate or Advanced). Use the price finder to see your exact price, and we confirm it on your discovery call.",
  },
  {
    question: "How and when am I billed?",
    answer: "Plans are billed monthly in advance, in US dollars, by Wise or ACH. Invoices are due on receipt.",
  },
  {
    question: "Is there a minimum contract?",
    answer:
      "No. There is no minimum commitment and you can cancel anytime. Your VA continues working until the end of the month you have paid for. Payments are non-refundable.",
  },
  {
    question: "What happens to hours I don’t use?",
    answer: "Unused hours do not carry over to the next month.",
  },
  {
    question: "What if I need more hours in a month?",
    answer: "Approved additional hours are billed at your plan’s hourly rate, which the price finder shows for every plan.",
  },
  {
    question: "Can I try ON-QUEUE VA before choosing a plan?",
    answer:
      "Yes. After your discovery call, if we agree we’re a good fit, we email you a short trial form and you can start with up to 4 free hours of work.",
  },
];

export const trialFaqs: Faq[] = [
  {
    question: "Can I start the trial without a call?",
    answer:
      "No. The discovery call comes first, so we understand your tasks and can match the right VA. If we’re a good fit, we email you the trial form after the call.",
  },
  {
    question: "What does the free trial include?",
    answer: "Up to 4 hours of work by your matched VA on real tasks you choose in the trial form.",
  },
  {
    question: "Do I have to sign up for a plan afterwards?",
    answer:
      "No. After the trial you decide whether to continue. If you do, you choose a plan and we begin onboarding. There is no minimum commitment.",
  },
  {
    question: "What should I prepare?",
    answer:
      "A short list of the tasks you’d like to hand over first, and the tools or accounts your VA will need. We’ll help you narrow it down on the call.",
  },
];
