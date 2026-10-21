import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries/en";
import { localePath, type Language } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { Arrow } from "./Logo";

export function SectionHead({
  eyebrow,
  title,
  em,
  lead,
  index,
}: {
  eyebrow: string;
  title: string;
  em?: string;
  lead?: string;
  index?: string;
}) {
  return (
    <Reveal>
      <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-muted">
        {index && (
          <span className="font-serif text-base normal-case tracking-normal text-brand">
            {index}
          </span>
        )}
        <span className="h-px w-10 bg-line-2" />
        {eyebrow}
      </div>
      <h2 className="mt-6 max-w-4xl font-serif text-[clamp(2.4rem,5.5vw,4.75rem)] leading-[1.02] tracking-[-0.015em]">
        {title} {em && <em className="text-brand-gradient pr-1">{em}</em>}
      </h2>
      {lead && (
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {lead}
        </p>
      )}
    </Reveal>
  );
}

export function PageHero({
  lang,
  home,
  parent,
  crumb,
  title,
  em,
  lead,
  children,
}: {
  lang: Language;
  home: string;
  parent?: { href: string; label: string };
  crumb: string;
  title: string;
  em?: string;
  lead: string;
  /** Optional buttons shown under the lead. */
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-32 pb-14 sm:pt-48 sm:pb-28">
      <div className="orb -left-40 -top-20 h-105 w-105 bg-brand/15" />
      <div className="orb -right-40 top-20 h-95 w-95 bg-[#1d3a7a]/25 [animation-delay:-6s]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:88px_88px] [mask-image:radial-gradient(ellipse_at_top,#000_10%,transparent_65%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <nav
          className="fade-up flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted"
          aria-label="Breadcrumb"
        >
          <Link
            href={localePath(lang, "/")}
            className="transition-colors hover:text-brand-2"
          >
            {home}
          </Link>
          <span className="h-px w-6 bg-brand" />
          {parent && (
            <>
              <Link
                href={localePath(lang, parent.href)}
                className="transition-colors hover:text-brand-2"
              >
                {parent.label}
              </Link>
              <span className="h-px w-6 bg-brand" />
            </>
          )}
          <span className="text-brand-2">{crumb}</span>
        </nav>
        <h1 className="mt-8 max-w-5xl font-serif text-[clamp(2.8rem,8vw,7rem)] leading-[0.98] tracking-[-0.02em]">
          <span className="line-reveal">
            <span style={{ animationDelay: "100ms" }}>{title}</span>
          </span>
          {em && (
            <span className="line-reveal">
              <span style={{ animationDelay: "250ms" }}>
                <em className="text-brand-gradient pr-2">{em}</em>
              </span>
            </span>
          )}
        </h1>
        <p
          className="fade-up mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
          style={{ animationDelay: "500ms" }}
        >
          {lead}
        </p>
        {children && (
          <div
            className="fade-up mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "650ms" }}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

export function MoreLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 rounded-full border border-line-2 px-7 py-3.5 text-sm transition-all duration-500 hover:border-brand hover:text-brand-2"
    >
      {children}
      <Arrow />
    </Link>
  );
}

/** Closing call-to-action shown at the bottom of most pages. */
export function CtaBand({ lang, t }: { lang: Language; t: Dictionary["cta"] }) {
  return (
    <section className="relative overflow-hidden border-t border-line py-20 sm:py-36">
      <div className="orb left-1/2 top-1/2 h-115 w-115 -translate-x-1/2 -translate-y-1/2 bg-brand/15" />
      <Reveal className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <h2 className="font-serif text-[clamp(2.6rem,7vw,6rem)] leading-none tracking-[-0.02em]">
          {t.title} <em className="text-brand-gradient pr-2">{t.titleEm}</em>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg text-muted">{t.lead}</p>
        <Link
          href={localePath(lang, "/contact")}
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-brand px-9 py-4 text-sm font-semibold text-white transition-all duration-500 hover:bg-brand-hover hover:shadow-[0_0_50px_-5px_rgba(47,107,255,0.6)]"
        >
          {t.button}
          <Arrow />
        </Link>
      </Reveal>
    </section>
  );
}

export function RotatingBadge({ text, href }: { text: string; href: string }) {
  return (
    <Link
      href={href}
      className="group relative hidden h-40 w-40 shrink-0 lg:block"
      aria-hidden
      tabIndex={-1}
    >
      <svg viewBox="0 0 200 200" className="spin-slow h-full w-full">
        <defs>
          <path
            id="circle"
            d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
          />
        </defs>
        <text className="fill-muted text-[13px] uppercase tracking-[0.32em]">
          <textPath href="#circle">{text.repeat(2)}</textPath>
        </text>
      </svg>
      <span className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white transition-transform duration-500 group-hover:scale-110">
        <Arrow className="h-5 w-5" />
      </span>
    </Link>
  );
}

export function Star({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} shrink-0 text-brand`}
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0 C12.6 7.2 16.8 11.4 24 12 C16.8 12.6 12.6 16.8 12 24 C11.4 16.8 7.2 12.6 0 12 C7.2 11.4 11.4 7.2 12 0Z" />
    </svg>
  );
}

export function Check({ small = false }: { small?: boolean }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full border border-brand/40 text-brand ${small ? "mt-0.5 h-4 w-4" : "h-9 w-9"}`}
    >
      <svg
        viewBox="0 0 16 16"
        className={small ? "h-2.5 w-2.5" : "h-4 w-4"}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <path
          d="M3 8.5 L6.5 12 L13 4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function ServiceIcon({ index }: { index: number }) {
  const paths = [
    // website
    <>
      <rect x="3" y="5" width="26" height="20" rx="2" />
      <path d="M3 10h26M7 7.5h.01M10 7.5h.01" />
    </>,
    // platform
    <>
      <rect x="4" y="4" width="10" height="10" rx="1.5" />
      <rect x="18" y="4" width="10" height="10" rx="1.5" />
      <rect x="4" y="18" width="10" height="10" rx="1.5" />
      <path d="M18 23h10M23 18v10" />
    </>,
    // ecommerce
    <>
      <path d="M5 6h3l3 15h14l3-10H10" />
      <circle cx="13" cy="26" r="1.5" />
      <circle cx="23" cy="26" r="1.5" />
    </>,
    // design
    <>
      <path d="M6 26 L20 12 l4 4 L10 30Z" transform="translate(0 -4)" />
      <path d="M20 8 l4-4 4 4-4 4" />
    </>,
    // seo
    <>
      <circle cx="14" cy="14" r="8" />
      <path d="M20 20 l7 7M10 16 l3-3 2 2 3-4" />
    </>,
    // care
    <>
      <path d="M16 27 C6 20 4 15 4 11.5 A6 6 0 0 1 16 9 a6 6 0 0 1 12 2.5 C28 15 26 20 16 27Z" />
    </>,
  ];
  return <IconTile>{paths[index % paths.length]}</IconTile>;
}

export function StepIcon({ index }: { index: number }) {
  const paths = [
    // discover
    <>
      <path d="M5 8a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H13l-6 5v-5H8a3 3 0 0 1-3-3Z" />
      <path d="M11 11.5h10M11 15.5h6" />
    </>,
    // design
    <>
      <rect x="4" y="5" width="24" height="22" rx="2.5" />
      <path d="M4 11h24M12 11v16" />
    </>,
    // develop
    <>
      <path d="M11 10 5 16l6 6M21 10l6 6-6 6M18 7l-4 18" />
    </>,
    // launch
    <>
      <path d="M16 4c5 3 7.5 8 6.2 14.5L19.5 21h-7l-2.7-2.5C8.5 12 11 7 16 4Z" />
      <circle cx="16" cy="12.5" r="2.5" />
      <path d="M10 17.5 6 21l1.5 4.5 4.5-3M22 17.5l4 3.5-1.5 4.5-4.5-3M14 24.5l2 3.5 2-3.5" />
    </>,
  ];
  return <IconTile>{paths[index % paths.length]}</IconTile>;
}

function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-line-2 bg-bg-2 text-brand transition-all duration-500 group-hover:border-brand/50 group-hover:shadow-[0_0_30px_-8px_rgba(47,107,255,0.5)]">
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        {children}
      </svg>
    </span>
  );
}
