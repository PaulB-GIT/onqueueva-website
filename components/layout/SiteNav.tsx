"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { site } from "@/content/site";

export type NavItem = { label: string; href: string };
export type NavGroup = { label: string; items: NavItem[] };

type Props = { groups: NavGroup[]; links: NavItem[] };

export function SiteNav({ groups, links }: Props) {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const baseId = useId();

  // Close menus when the route changes (state adjusted during render, per React guidance).
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpenGroup(null);
    setMobileOpen(false);
  }

  // Desktop dropdowns: close on outside click or Escape.
  useEffect(() => {
    if (!openGroup) return;
    const onPointer = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenGroup(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenGroup(null);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [openGroup]);

  // Mobile menu: lock scroll, focus first link, close on Escape, keep focus inside.
  useEffect(() => {
    if (!mobileOpen) return;
    const panel = mobileRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel?.querySelector<HTMLElement>("a, button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && panel) {
        const focusables = panel.querySelectorAll<HTMLElement>("a, button");
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Desktop */}
      <div ref={navRef} className="hidden items-center gap-8 lg:flex">
        <nav aria-label="Main">
          <ul className="flex items-center gap-7 text-[0.9375rem] font-medium">
            {groups.map((group) => {
              const panelId = `${baseId}-${group.label}`;
              const open = openGroup === group.label;
              return (
                <li key={group.label} className="relative">
                  <button
                    type="button"
                    className="inline-flex min-h-11 items-center gap-1 text-ink-900 hover:text-blue-600"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenGroup(open ? null : group.label)}
                  >
                    {group.label}
                    <ChevronDown aria-hidden="true" className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    id={panelId}
                    hidden={!open}
                    className="absolute left-1/2 top-full mt-3 w-80 -translate-x-1/2 rounded-[var(--radius-card)] border border-line bg-white p-3 shadow-[var(--shadow-float)]"
                  >
                    <ul className="flex flex-col">
                      {group.items.map((item, i) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`block rounded-lg px-3 py-2.5 text-[0.9375rem] hover:bg-blue-50 ${i === 0 || item.label.startsWith("All") ? "font-semibold text-blue-600" : "text-ink-900"}`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className="inline-flex min-h-11 items-center text-ink-900 hover:text-blue-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/book-a-call"
          className="inline-flex min-h-11 items-center rounded-[var(--radius-control)] bg-blue-600 px-5 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Book a Discovery Call
        </Link>
      </div>

      {/* Mobile */}
      <button
        ref={toggleRef}
        type="button"
        className="inline-flex size-11 items-center justify-center rounded-[var(--radius-control)] text-ink-900 hover:bg-blue-50 lg:hidden"
        aria-expanded={mobileOpen}
        aria-controls={`${baseId}-mobile`}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        onClick={() => setMobileOpen((v) => !v)}
      >
        {mobileOpen ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
      </button>

      {mobileOpen ? (
        <div
          ref={mobileRef}
          id={`${baseId}-mobile`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 overflow-y-auto bg-white lg:hidden"
        >
          <div className="container-site flex items-center justify-between py-3">
            <span className="font-display text-lg font-bold text-ink-900">Menu</span>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-[var(--radius-control)] hover:bg-blue-50"
              aria-label="Close menu"
              onClick={() => {
                setMobileOpen(false);
                toggleRef.current?.focus();
              }}
            >
              <X aria-hidden="true" className="size-6" />
            </button>
          </div>
          <nav aria-label="Main" className="container-site pb-10">
            {groups.map((group) => (
              <div key={group.label} className="border-b border-line py-4">
                <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-ink-600">{group.label}</p>
                <ul className="mt-2">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="block py-2.5 text-base text-ink-900">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <ul className="border-b border-line py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="block py-2.5 text-base font-medium text-ink-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/book-a-call"
              className="mt-6 flex min-h-12 items-center justify-center rounded-[var(--radius-control)] bg-blue-600 px-5 font-semibold text-white"
            >
              Book a Discovery Call
            </Link>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem]">
              <li>
                <a href={site.portal.client.href} className="text-blue-600">
                  {site.portal.client.label}
                </a>
              </li>
              <li>
                <a href={site.portal.va.href} className="text-blue-600">
                  {site.portal.va.label}
                </a>
              </li>
              <li>
                <a href={site.onQueueAi.href} className="text-blue-600">
                  {site.onQueueAi.label}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </>
  );
}
