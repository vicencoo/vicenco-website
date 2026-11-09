import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries/en";
import { localePath, type Language } from "@/lib/i18n";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";
import Image from "next/image";
import { Arrow, Logo } from "./Logo";
import { Check, ServiceIcon, Star, StepIcon } from "./ui";

export function Marquee({ t }: { t: Dictionary }) {
  return (
    <div
      className="marquee overflow-hidden border-b border-line py-4 sm:py-5"
      aria-hidden
    >
      <div className="marquee-track flex w-max">
        {[...t.marquee, ...t.marquee].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-5 pr-5 font-serif text-lg italic text-ink/75 sm:gap-6 sm:pr-6 sm:text-xl"
          >
            {item}
            <Star className="h-3 w-3" />
          </span>
        ))}
      </div>
    </div>
  );
}

type Service = Dictionary["services"]["items"][number];

export function ServicesGrid({ lang, t, items }: { lang: Language; t: Dictionary; items: Service[] }) {
  return (
    // Groups of 2 or 4 fill a 2-column grid; everything else uses 3 columns.
    <div
      className={`grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 ${
        items.length % 3 !== 0 && items.length % 2 === 0 ? "" : "lg:grid-cols-3"
      }`}
    >
      {items.map((s, i) => (
        <Reveal key={s.slug} delay={(i % 3) * 120} className="h-full">
          <Link
            href={localePath(lang, `/services/${s.slug}`)}
            className="spotlight group flex h-full flex-col bg-bg p-8 transition-colors duration-500 hover:bg-surface sm:p-10"
          >
            <div className="flex items-start justify-between">
              <ServiceIcon slug={s.slug} />
              <span className="font-serif text-lg text-faint transition-colors duration-500 group-hover:text-brand">
                {String(t.services.items.indexOf(s) + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-10 font-serif text-3xl">{s.title}</h3>
            <p className="mt-4 flex-1 leading-relaxed text-muted">{s.text}</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {s.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line-2 px-3 py-1 text-xs tracking-wide text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <span className="mt-8 inline-flex items-center gap-2 text-sm text-brand-2">
              {t.serviceDetail.learnMore}
              <Arrow />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export function WorkGrid({
  lang,
  t,
  items = t.work.items,
  limit,
}: {
  lang: Language;
  t: Dictionary;
  items?: Dictionary["work"]["items"];
  limit?: number;
}) {
  if (limit) items = items.slice(0, limit);
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
      {items.map((p, i) => (
        <Reveal
          key={p.name}
          delay={(i % 2) * 150}
          className={i % 2 === 1 ? "md:mt-20" : ""}
        >
          <Link href={localePath(lang, `/work/${p.slug}`)} className="group block">
            <div className="brand-border relative aspect-[4/3.2] overflow-hidden rounded-3xl">
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
              <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
                {p.year}
              </div>
            </div>
            <div className="mt-6 flex items-start justify-between gap-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-brand">
                  {p.category}
                </p>
                <h3 className="mt-2 font-serif text-3xl sm:text-4xl">
                  {p.name}
                </h3>
                <p className="mt-3 max-w-md text-muted">{p.text}</p>
              </div>
              <span className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line-2 text-ink transition-all duration-500 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                <Arrow />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export function ProcessSteps({ t }: { t: Dictionary }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {t.process.steps.map((s, i) => (
        <Reveal key={i} delay={i * 120} className="h-full">
          <article className="spotlight group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 sm:p-8">
            <span
              className="pointer-events-none absolute -right-1 -top-5 select-none font-serif text-[7.5rem] leading-none text-ink/[0.04] transition-colors duration-500 group-hover:text-brand/10"
              aria-hidden
            >
              0{i + 1}
            </span>
            <StepIcon index={i} />
            <p className="mt-8 text-[11px] uppercase tracking-[0.25em] text-brand">
              {t.process.step} 0{i + 1}
            </p>
            <h3 className="mt-2 font-serif text-3xl">{s.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
            <span
              className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-brand to-brand-2 transition-transform duration-700 group-hover:scale-x-100"
              aria-hidden
            />
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function ManifestoQuote({ t }: { t: Dictionary }) {
  return (
    <Reveal className="text-center">
      <Logo className="mx-auto h-14 w-14" />
      <blockquote className="mx-auto mt-10 max-w-5xl font-serif text-[clamp(2rem,5vw,4.5rem)] leading-[1.08] tracking-[-0.01em]">
        “{t.manifesto.quote}{" "}
        <em className="text-brand-gradient">{t.manifesto.quoteEm}</em>”
      </blockquote>
    </Reveal>
  );
}

export function Values({ t }: { t: Dictionary }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line text-left sm:grid-cols-2 lg:grid-cols-4">
      {t.manifesto.values.map((v, i) => (
        <Reveal key={i} delay={i * 100} className="h-full">
          <div className="h-full bg-bg-2 p-7">
            <Check />
            <h3 className="mt-5 text-base font-semibold">{v.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-t border-line">
      {items.map((f, i) => (
        <Reveal key={i} delay={i * 60}>
          <details className="group border-b border-line">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7">
              <span className="faq-q font-serif text-2xl transition-colors duration-300 sm:text-[1.7rem]">
                {f.q}
              </span>
              <span className="faq-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line-2 text-brand transition-transform duration-500">
                <svg
                  viewBox="0 0 16 16"
                  className="h-3.5 w-3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <path d="M8 2v12M2 8h12" strokeLinecap="round" />
                </svg>
              </span>
            </summary>
            <p className="max-w-2xl pb-8 leading-relaxed text-muted">{f.a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}

export function ContactBlock({ t }: { t: Dictionary }) {
  return (
    <div className="relative grid gap-16 lg:grid-cols-[1fr_1.15fr]">
      <Reveal>
        <ul className="space-y-4">
          {t.contact.promises.map((p) => (
            <li key={p} className="flex items-center gap-4 text-lg">
              <Check />
              {p}
            </li>
          ))}
        </ul>
        <p className="mt-10 sm:mt-14 text-[11px] uppercase tracking-[0.25em] text-faint">
          {t.contact.or}
        </p>
        <ul className="mt-5 space-y-1">
          <ContactLink
            label={t.contact.emailLabel}
            value={site.email}
            href={`mailto:${site.email}`}
          />
          <ContactLink
            label={t.contact.whatsapp}
            value={`+${site.whatsapp}`}
            href={`https://wa.me/${site.whatsapp}`}
          />
          <ContactLink
            label={t.contact.instagram}
            value={`@${site.instagram}`}
            href={`https://instagram.com/${site.instagram}`}
          />
        </ul>
      </Reveal>
      <Reveal delay={150}>
        <div id="form" className="brand-border scroll-mt-28 rounded-3xl bg-surface/70 p-7 sm:p-12 sm:backdrop-blur-sm">
          <ContactForm
            t={t.contact}
            email={site.email}
            services={t.services.items.map((s) => ({ slug: s.slug, title: s.title }))}
          />
        </div>
      </Reveal>
    </div>
  );
}

function ContactLink({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        className="group flex items-center justify-between gap-6 border-b border-line py-5"
      >
        <span className="text-sm text-muted">{label}</span>
        <span className="flex items-center gap-3 font-serif text-xl transition-colors group-hover:text-brand-2 sm:text-2xl">
          {value}
          <Arrow className="text-brand" />
        </span>
      </a>
    </li>
  );
}
