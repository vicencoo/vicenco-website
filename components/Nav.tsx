"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { languages, setLanguage, useLanguage } from "@/lib/i18n";
import { pageKeys } from "@/lib/site";
import { Wordmark } from "./Logo";

export function Nav() {
  const { lang, t: dict } = useLanguage();
  const t = dict.nav;
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the mobile menu whenever the route changes.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const links = [{ href: "/", label: t.home }, ...pageKeys.map((k) => ({ href: `/${k}`, label: t[k] }))];
  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "border-b border-line bg-bg/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
        <Link href="/" className="flex items-center gap-3">
          <Wordmark />
        </Link>

        <ul className="hidden items-center gap-9 lg:flex xl:gap-11">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`relative text-[13px] uppercase tracking-[0.18em] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-brand after:transition-all after:duration-500 hover:text-ink hover:after:w-full ${
                  isActive(l.href) ? "text-ink after:w-full" : "text-muted after:w-0"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 sm:gap-5 lg:gap-6">
          <div className="flex items-center rounded-full border border-line p-1 text-[11px] font-medium tracking-[0.15em]">
            {languages.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLanguage(l)}
                aria-pressed={lang === l}
                aria-label={l === "sq" ? "Shqip" : "English"}
                className={`cursor-pointer rounded-full px-2.5 py-1 transition-all duration-300 ${
                  lang === l ? "bg-ink text-bg" : "text-muted hover:text-ink"
                }`}
              >
                {l === "sq" ? "AL" : "EN"}
              </button>
            ))}
          </div>
          <Link
            href="/contact"
            className="hidden rounded-full border border-brand/40 px-5 py-2.5 text-[13px] lg:px-6 lg:py-3 tracking-wide text-brand-2 transition-all duration-500 hover:border-brand hover:bg-brand hover:text-white sm:inline-block"
          >
            {t.cta}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label={open ? t.close : t.menu}
            aria-expanded={open}
          >
            <span className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-[max-height] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          open ? "max-h-[100svh]" : "max-h-0"
        }`}
      >
        <ul className="flex h-[calc(100svh-4.5rem)] flex-col justify-center gap-2 px-6 pb-20">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block border-b border-line py-4 font-serif text-4xl ${
                  pathname === l.href ? "text-brand-2" : ""
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-8">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-block rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-white"
            >
              {t.cta}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
