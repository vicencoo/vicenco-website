"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  languageNames,
  languages,
  localePath,
  stripLanguage,
  type Language,
} from "@/lib/i18n";
import { useLanguage } from "@/lib/language-context";
import { languageFlags, pageKeys, serviceCategories } from "@/lib/site";
import { ServiceIcon } from "./ui";
import { Arrow, Wordmark } from "./Logo";

const languageCodes = { en: "EN", sq: "AL", it: "IT" };

function Flag({ lang, size = 16 }: { lang: Language; size?: number }) {
  return (
    <Image
      src={languageFlags[lang]}
      alt=""
      width={size}
      height={size}
      className="shrink-0 rounded-full"
      aria-hidden
    />
  );
}

function Chevron({ open, className = "" }: { open: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      className={`h-3 w-3 transition-transform duration-300 ${open ? "rotate-180" : ""} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m3 4.5 3 3 3-3" />
    </svg>
  );
}

export function Nav() {
  const { lang, t: dict, setLanguage } = useLanguage();
  const t = dict.nav;
  // Path without the language prefix, e.g. "/services" on /sq/services.
  const pathname = stripLanguage(usePathname());
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const megaButton = useRef<HTMLButtonElement>(null);
  const megaRoot = useRef<HTMLDivElement>(null);

  // Close the menus whenever the route changes.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
    setMega(false);
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

  // The services menu closes on Escape or a click anywhere outside it.
  useEffect(() => {
    if (!mega) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMega(false);
      megaButton.current?.focus();
    };
    const onPointer = (e: PointerEvent) => {
      if (!megaRoot.current?.contains(e.target as Node)) setMega(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [mega]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  // Hover opens the menu; a short delay on leave lets the pointer travel from the link to the panel.
  const hoverOpen = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    clearTimeout(closeTimer.current);
    setMega(true);
  };
  const hoverClose = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMega(false), 180);
  };

  const links = [
    { href: "/", label: t.home },
    ...pageKeys.map((k) => ({ href: `/${k}`, label: t[k] })),
  ];
  const href = (path: string) => localePath(lang, path);
  // Language links keep a real href (crawlers follow it), but a tap swaps the language in place.
  const chooseLanguage = (e: React.MouseEvent, l: Language) => {
    e.preventDefault();
    setLanguage(l);
  };
  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  const groups = serviceCategories.map((key) => ({
    key,
    ...dict.services.categories[key],
    items: dict.services.items.filter((s) => s.category === key),
  }));

  const linkClass = (active: boolean) =>
    `relative text-[13px] uppercase tracking-[0.18em] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-brand after:transition-all after:duration-500 hover:text-ink hover:after:w-full ${
      active ? "text-ink after:w-full" : "text-muted after:w-0"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        open || mega
          ? "border-b border-line bg-bg"
          : scrolled
            ? "border-b border-line bg-bg/95 lg:bg-bg/80 lg:backdrop-blur-xl"
            : "border-b border-transparent"
      }`}
    >
      <div ref={megaRoot}>
        <nav className="mx-auto flex h-18 max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
          <Link href={href("/")} className="flex items-center gap-3">
            <Wordmark />
          </Link>

          <ul className="hidden items-center gap-9 lg:flex xl:gap-11">
            {links.map((l) =>
              l.href === "/services" ? (
                <li
                  key={l.href}
                  className="flex items-center gap-1.5"
                  onPointerEnter={hoverOpen}
                  onPointerLeave={hoverClose}
                >
                  <Link
                    href={href(l.href)}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    className={linkClass(isActive(l.href) || mega)}
                  >
                    {l.label}
                  </Link>
                  <button
                    ref={megaButton}
                    type="button"
                    // Hover already opened it for mouse users, so their click must not close it again.
                    onClick={(e) =>
                      (e.nativeEvent as PointerEvent).pointerType === "mouse" ? setMega(true) : setMega((m) => !m)
                    }
                    aria-expanded={mega}
                    aria-controls="services-menu"
                    aria-label={t.servicesMenu}
                    className={`-m-2 cursor-pointer p-2 transition-colors hover:text-ink ${mega ? "text-ink" : "text-muted"}`}
                  >
                    <Chevron open={mega} />
                  </button>
                </li>
              ) : (
                <li key={l.href}>
                  <Link
                    href={href(l.href)}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    className={linkClass(isActive(l.href))}
                  >
                    {l.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <div className="flex items-center gap-3 sm:gap-5 lg:gap-6">
            <div className="hidden items-center rounded-full border border-line p-1 text-[11px] font-medium tracking-[0.15em] sm:flex">
              {languages.map((l) => (
                <Link
                  key={l}
                  href={localePath(l, pathname)}
                  hrefLang={l}
                  prefetch={false}
                  onClick={(e) => chooseLanguage(e, l)}
                  aria-current={lang === l ? "true" : undefined}
                  aria-label={languageNames[l]}
                  className={`flex cursor-pointer items-center gap-1.5 rounded-full py-1 pr-2.5 pl-1.5 transition-all duration-300 ${
                    lang === l ? "bg-ink text-bg" : "text-muted hover:text-ink"
                  }`}
                >
                  <Flag lang={l} />
                  {languageCodes[l]}
                </Link>
              ))}
            </div>
            <Link
              href={href("/contact")}
              className="hidden rounded-full border border-brand/40 px-5 py-2.5 text-[13px] tracking-wide text-brand-2 transition-all duration-500 hover:border-brand hover:bg-brand hover:text-white sm:inline-block lg:px-6 lg:py-3"
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
              <span
                className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </nav>

        {/* Services mega menu (desktop). Always in the page so search engines see every service link. */}
        <div
          id="services-menu"
          onPointerEnter={hoverOpen}
          onPointerLeave={hoverClose}
          className={`absolute inset-x-0 top-full hidden border-b border-line bg-bg shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:block ${
            mega ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <div className="mx-auto grid max-w-[1600px] grid-cols-3 gap-10 px-12 pt-10 pb-8 xl:gap-14 xl:px-16">
            {groups.map((g, gi) => (
              <div key={g.key} className={gi > 0 ? "border-l border-line pl-10 xl:pl-14" : ""}>
                <Link
                  href={href(`/services#${g.key}`)}
                  onClick={() => setMega(false)}
                  className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-muted transition-colors hover:text-ink"
                >
                  <span className="font-serif text-base normal-case tracking-normal text-brand">0{gi + 1}</span>
                  {g.title}
                </Link>
                <p className="mt-2 min-h-[2lh] text-sm leading-relaxed text-faint">{g.text}</p>
                <ul className="mt-6 space-y-1">
                  {g.items.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={href(`/services/${s.slug}`)}
                        onClick={() => setMega(false)}
                        aria-current={isActive(`/services/${s.slug}`) ? "page" : undefined}
                        className="group -mx-3 flex items-center gap-4 rounded-xl px-3 py-2.5 transition-colors duration-300 hover:bg-surface aria-[current=page]:bg-surface"
                      >
                        <ServiceIcon slug={s.slug} small />
                        <span className="min-w-0">
                          <span className="block text-[15px] font-medium text-ink">{s.title}</span>
                          <span className="block truncate text-[13px] text-muted">{s.menu}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                {g.key === "care" && (
                  <div className="brand-border mt-8 rounded-2xl bg-surface/70 p-6">
                    <p className="font-serif text-2xl leading-tight">{t.megaTitle}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{t.megaText}</p>
                    <Link
                      href={href("/contact")}
                      onClick={() => setMega(false)}
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-[13px] font-medium text-white transition-colors duration-300 hover:bg-brand-hover"
                    >
                      {t.megaCta}
                      <Arrow />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="border-t border-line">
            <div className="mx-auto flex max-w-[1600px] items-center justify-between px-12 py-4 text-sm xl:px-16">
              <span className="text-faint">{dict.pages.services}</span>
              <Link
                href={href("/services")}
                onClick={() => setMega(false)}
                className="inline-flex shrink-0 items-center gap-2 pl-8 text-brand-2 transition-colors hover:text-ink"
              >
                {t.allServices}
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Reading progress: fills along the header's bottom edge as the page scrolls. */}
      {!open && !mega && (
        <div
          className="scroll-progress pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-brand via-brand-2 to-brand"
          aria-hidden
        />
      )}

      {/* Dims the page behind the open services menu. */}
      <div
        aria-hidden
        onClick={() => setMega(false)}
        className={`fixed inset-x-0 top-18 bottom-0 -z-10 hidden bg-bg/60 backdrop-blur-sm transition-opacity duration-300 lg:block ${
          mega ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-[max-height] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          open ? "max-h-svh" : "max-h-0"
        }`}
      >
        <ul className="flex h-[calc(100svh-4.5rem)] flex-col justify-center-safe gap-2 overflow-y-auto overscroll-contain px-6 py-8 pb-20">
          {links.map((l) =>
            l.href === "/services" ? (
              <li key={l.href} className="border-b border-line">
                <div className="flex items-center justify-between">
                  <Link
                    href={href(l.href)}
                    onClick={() => setOpen(false)}
                    className={`block flex-1 py-4 font-serif text-4xl ${isActive(l.href) ? "text-brand-2" : ""}`}
                  >
                    {l.label}
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileServices((m) => !m)}
                    aria-expanded={mobileServices}
                    aria-controls="mobile-services"
                    aria-label={t.servicesMenu}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-line-2 text-muted"
                  >
                    <Chevron open={mobileServices} className="h-3.5 w-3.5" />
                  </button>
                </div>
                <div
                  id="mobile-services"
                  className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    mobileServices ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className={`overflow-hidden ${mobileServices ? "" : "invisible"}`}>
                    <div className="space-y-6 pt-1 pb-6">
                      {groups.map((g) => (
                        <div key={g.key}>
                          <p className="text-[11px] uppercase tracking-[0.25em] text-faint">{g.title}</p>
                          <ul className="mt-2">
                            {g.items.map((s) => (
                              <li key={s.slug}>
                                <Link
                                  href={href(`/services/${s.slug}`)}
                                  onClick={() => setOpen(false)}
                                  className={`flex items-center gap-3 py-2 text-[15px] ${
                                    isActive(`/services/${s.slug}`) ? "text-brand-2" : "text-muted"
                                  }`}
                                >
                                  <ServiceIcon slug={s.slug} small />
                                  {s.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ) : (
              <li key={l.href}>
                <Link
                  href={href(l.href)}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-line py-4 font-serif text-4xl ${
                    pathname === l.href ? "text-brand-2" : ""
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ),
          )}
          <li className="pt-8">
            <Link
              href={href("/contact")}
              onClick={() => setOpen(false)}
              className="inline-block rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-white"
            >
              {t.cta}
            </Link>
          </li>
          <li className="pt-10">
            <p className="text-[11px] uppercase tracking-[0.25em] text-faint">
              {t.language}
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {languages.map((l) => (
                <Link
                  key={l}
                  href={localePath(l, pathname)}
                  hrefLang={l}
                  prefetch={false}
                  onClick={(e) => chooseLanguage(e, l)}
                  aria-current={lang === l ? "true" : undefined}
                  className={`flex items-center justify-center gap-2 rounded-full border py-3 text-sm transition-colors duration-300 ${
                    lang === l
                      ? "border-ink bg-ink text-bg"
                      : "border-line-2 text-muted hover:border-ink hover:text-ink"
                  }`}
                >
                  <Flag lang={l} size={18} />
                  {languageNames[l]}
                </Link>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}
