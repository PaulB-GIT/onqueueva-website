import Link from "next/link";
import { industries, otherIndustries } from "@/content/industries";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function IndustriesStrip() {
  return (
    <section aria-labelledby="industries-title" className="section-y">
      <div className="container-site">
        <SectionHeading
          id="industries-title"
          eyebrow="Industries"
          title="Support that understands how your industry works"
          lead="We match VAs who know the tools, terms and pace of your business."
        />
        <ul className="mt-10 flex flex-wrap gap-3">
          {industries.map((industry) => (
            <li key={industry.href}>
              <Link
                href={industry.href}
                className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-5 font-medium text-ink-900 transition-colors hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600"
              >
                {industry.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-ink-600">
          We also support {otherIndustries.join(", ").replace(/, ([^,]*)$/, " and $1")}.{" "}
          <Link href="/industries" className="font-semibold text-blue-600 hover:underline">
            See all industries
          </Link>
        </p>
      </div>
    </section>
  );
}
