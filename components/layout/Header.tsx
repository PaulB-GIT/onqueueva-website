import { industries } from "@/content/industries";
import { serviceCategories } from "@/content/services";
import { Logo } from "@/components/layout/Logo";
import { SiteNav, type NavGroup } from "@/components/layout/SiteNav";

const groups: NavGroup[] = [
  {
    label: "Services",
    items: [
      { label: "All Managed VA Services", href: "/services" },
      ...serviceCategories.map((s) => ({ label: s.name, href: s.href })),
    ],
  },
  {
    label: "Industries",
    items: [...industries.map((i) => ({ label: i.name, href: i.href })), { label: "All industries", href: "/industries" }],
  },
];

const links = [
  { label: "Pricing", href: "/pricing" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="container-site flex items-center justify-between gap-6 py-3">
        <Logo />
        <SiteNav groups={groups} links={links} />
      </div>
    </header>
  );
}
