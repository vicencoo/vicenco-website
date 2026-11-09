"use client";

// Interactive pieces used across the site: counters, the hero project showcase,
// the tabbed services explorer and the sticky service-group bar.
// Every animation is skipped for visitors who ask their device for reduced motion.

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/dictionaries/en";
import { localePath, type Language } from "@/lib/i18n";
import { serviceCategories, type ServiceCategory } from "@/lib/site";
import { Arrow } from "./Logo";
import { ServiceIcon } from "./ui";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Runs `onVisible` once, the first time the element scrolls into view. */
function useOnVisible<T extends HTMLElement>(onVisible: () => void, threshold = 0.4) {
  const ref = useRef<T>(null);
  const callback = useRef(onVisible);
  useEffect(() => {
    callback.current = onVisible;
  });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        callback.current();
        observer.disconnect();
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return ref;
}

/** A number that counts up when it scrolls into view. The final value is in the HTML for search engines. */
export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [shown, setShown] = useState(value);
  const ref = useOnVisible<HTMLSpanElement>(() => {
    if (prefersReducedMotion()) return;
    const start = performance.now();
    const duration = 1600;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      // easeOutExpo: fast start, soft landing.
      setShown(Math.round(value * (p === 1 ? 1 : 1 - Math.pow(2, -10 * p))));
      if (p < 1) requestAnimationFrame(tick);
    };
    setShown(0);
    requestAnimationFrame(tick);
  });
  return (
    <span ref={ref} className="tabular-nums">
      {shown}
      {suffix}
    </span>
  );
}

/** Row of animated numbers — all of them come from the site's real content. */
export function StatsBand({ t }: { t: Dictionary }) {
  const stats = [
    { value: t.work.items.length, suffix: "+", label: t.home.stats.projects },
    { value: t.services.items.length, suffix: "", label: t.home.stats.services },
    { value: 3, suffix: "", label: t.home.stats.languages },
    { value: 24, suffix: "h", label: t.home.stats.reply },
  ];
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`group relative px-5 py-10 sm:px-8 sm:py-14 ${i % 2 === 1 ? "border-l border-line" : ""} ${
              i >= 2 ? "border-t border-line lg:border-t-0" : ""
            } ${i === 2 ? "lg:border-l" : ""}`}
          >
            <p className="font-serif text-[clamp(2.75rem,6vw,4.5rem)] leading-none text-ink">
              <CountUp value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-muted">{s.label}</p>
            <span
              className="absolute inset-x-5 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-brand to-brand-2 transition-transform duration-700 group-hover:scale-x-100 sm:inset-x-8"
              aria-hidden
            />
          </div>
        ))}
      </div>
    </section>
  );
}

const SHOWCASE_MS = 4500;

/** Browser window that cycles through real projects. Pauses on hover and when the tab is hidden. */
export function ProjectShowcase({ lang, t }: { lang: Language; t: Dictionary }) {
  const items = t.work.items;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || prefersReducedMotion()) return;
    // Restarts whenever the project changes, so a manual pick gets its full time on screen.
    const id = setInterval(() => {
      if (document.visibilityState === "visible") setIndex((i) => (i + 1) % items.length);
    }, SHOWCASE_MS);
    return () => clearInterval(id);
  }, [index, paused, items.length]);

  const project = items[index];
  const host = project.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  const serviceNames = project.services
    .map((slug) => t.services.items.find((s) => s.slug === slug)?.title)
    .filter(Boolean)
    .slice(0, 2);

  return (
    <div
      className="relative"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <p className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-muted">
        <span className="h-px w-8 bg-brand" />
        {t.home.showcase}
      </p>

      <Link
        href={localePath(lang, `/work/${project.slug}`)}
        className="glow-border group block rounded-2xl bg-surface/80 shadow-[0_40px_100px_-30px_rgba(47,107,255,0.45)]"
      >
        {/* Browser bar */}
        <div className="flex items-center gap-3 border-b border-line px-4 py-3">
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
          </span>
          <span className="flex min-w-0 flex-1 items-center gap-2 rounded-full bg-bg/70 px-3 py-1 text-[11px] text-muted">
            <svg viewBox="0 0 16 16" className="h-3 w-3 shrink-0 text-brand-2" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <rect x="3.5" y="7" width="9" height="6.5" rx="1.5" />
              <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" />
            </svg>
            <span className="truncate">{host}</span>
          </span>
        </div>

        {/* Screens, cross-fading */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-b-2xl">
          {items.map((p, i) => (
            <Image
              key={p.slug}
              src={p.image}
              alt={i === index ? p.name : ""}
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className={`object-cover transition-[opacity,scale] duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] ${
                i === index ? "scale-100 opacity-100" : "scale-[1.06] opacity-0"
              }`}
            />
          ))}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute inset-x-5 bottom-4 flex items-end justify-between gap-4">
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.25em] text-brand-2">{project.category}</p>
              <p className="mt-1 truncate font-serif text-2xl text-white">{project.name}</p>
            </div>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-transform duration-500 group-hover:scale-110">
              <Arrow />
            </span>
          </div>
          {/* Time left on this project */}
          {!paused && (
            <span
              key={index}
              className="showcase-timer absolute inset-x-0 bottom-0 h-0.5 bg-brand"
              style={{ "--duration": `${SHOWCASE_MS}ms` } as React.CSSProperties}
              aria-hidden
            />
          )}
        </div>
      </Link>

      {/* Floating labels */}
      <div className="bob pointer-events-none absolute -left-6 top-24 hidden items-center gap-2 rounded-full border border-line-2 bg-bg/90 px-3.5 py-2 text-xs shadow-xl backdrop-blur xl:flex">
        <span className="pulse-dot h-2 w-2 rounded-full bg-[#28c840] text-[#28c840]" />
        {project.year}
      </div>
      {serviceNames.length > 0 && (
        <div
          className="bob pointer-events-none absolute -right-5 bottom-20 hidden max-w-[14rem] flex-col gap-1 rounded-2xl border border-line-2 bg-bg/90 px-4 py-3 text-xs shadow-xl backdrop-blur xl:flex"
          style={{ animationDelay: "-3s" }}
        >
          {serviceNames.map((name) => (
            <span key={name} className="flex items-center gap-2 text-muted">
              <span className="h-1 w-1 rounded-full bg-brand" />
              {name}
            </span>
          ))}
        </div>
      )}

      {/* Pick a project */}
      <div className="mt-5 flex gap-2" role="group" aria-label={t.home.showcase}>
        {items.map((p, i) => (
          <button
            key={p.slug}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={p.name}
            aria-pressed={i === index}
            className={`h-1.5 cursor-pointer rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-brand" : "w-3 bg-line-2 hover:bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/** Home page services: one tab per group, with cards for every service in it. */
export function ServiceExplorer({ lang, t }: { lang: Language; t: Dictionary }) {
  const [active, setActive] = useState<ServiceCategory>(serviceCategories[0]);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const items = t.services.items.filter((s) => s.category === active);

  // Arrow keys move between tabs (the standard keyboard pattern for tabs).
  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (i + step + serviceCategories.length) % serviceCategories.length;
    setActive(serviceCategories[next]);
    tabs.current[next]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label={t.services.eyebrow}
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {serviceCategories.map((key, i) => {
          const selected = key === active;
          const count = t.services.items.filter((s) => s.category === key).length;
          return (
            <button
              key={key}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${key}`}
              aria-selected={selected}
              aria-controls={`panel-${key}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(key)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`flex shrink-0 cursor-pointer items-center gap-3 rounded-full border px-5 py-3 text-sm transition-all duration-500 ${
                selected
                  ? "border-brand bg-brand text-white shadow-[0_10px_40px_-10px_rgba(47,107,255,0.7)]"
                  : "border-line-2 text-muted hover:border-ink hover:text-ink"
              }`}
            >
              <span className="font-serif text-base">0{i + 1}</span>
              {t.services.categories[key].title}
              <span
                className={`flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] ${
                  selected ? "bg-white/20" : "bg-line"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-6 max-w-2xl text-muted">
        {t.services.categories[active].text} {t.home.explorerLead}
      </p>

      <div
        key={active}
        id={`panel-${active}`}
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {items.map((s, i) => (
          <Link
            key={s.slug}
            href={localePath(lang, `/services/${s.slug}`)}
            className="pop-in spotlight group flex flex-col rounded-3xl border border-line bg-surface/40 p-7 transition-[border-color,background-color,translate] duration-500 hover:-translate-y-1 hover:border-brand/40 hover:bg-surface sm:p-8"
            style={{ "--delay": `${i * 70}ms` } as React.CSSProperties}
          >
            <div className="flex items-start justify-between gap-4">
              <ServiceIcon slug={s.slug} />
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line-2 transition-all duration-500 group-hover:rotate-45 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                <Arrow />
              </span>
            </div>
            <h3 className="mt-8 font-serif text-[1.7rem] leading-tight">{s.title}</h3>
            <p className="mt-3 flex-1 leading-relaxed text-muted">{s.text}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {s.tags.map((tag) => (
                <li key={tag} className="rounded-full border border-line-2 px-3 py-1 text-xs text-muted">
                  {tag}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
}

/** Sticky bar on /services: jump to a group, with the group in view highlighted. */
export function CategoryNav({ t }: { t: Dictionary }) {
  const [current, setCurrent] = useState<ServiceCategory>(serviceCategories[0]);

  useEffect(() => {
    const sections = serviceCategories
      .map((key) => document.getElementById(key))
      .filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setCurrent(entry.target.id as ServiceCategory);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label={t.serviceDetail.jump}
      className="sticky top-18 z-30 border-b border-line bg-bg/85 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none] sm:px-8">
        <span className="hidden shrink-0 pr-2 text-[11px] uppercase tracking-[0.22em] text-faint sm:block">
          {t.serviceDetail.jump}
        </span>
        {serviceCategories.map((key, i) => (
          <a
            key={key}
            href={`#${key}`}
            aria-current={current === key ? "true" : undefined}
            className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm transition-all duration-500 ${
              current === key ? "bg-ink text-bg" : "text-muted hover:text-ink"
            }`}
          >
            <span className="font-serif">0{i + 1}</span>
            {t.services.categories[key].title}
          </a>
        ))}
      </div>
    </nav>
  );
}
