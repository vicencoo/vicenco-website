import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries/en";
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

export function ServicesGrid({ t }: { t: Dictionary }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {t.services.items.map((s, i) => (
        <Reveal key={s.title} delay={(i % 3) * 120} className="h-full">
          <article className="spotlight group flex h-full flex-col bg-bg p-8 transition-colors duration-500 hover:bg-surface sm:p-10">
            <div className="flex items-start justify-between">
              <ServiceIcon index={i} />
              <span className="font-serif text-lg text-faint transition-colors duration-500 group-hover:text-gold">
                0{i + 1}
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
          </article>
        </Reveal>
      ))}
    </div>
  );
}

/** Compact numbered list used on the home page. */
export function ServicesList({ t }: { t: Dictionary }) {
  return (
    <ul className="border-t border-line">
      {t.services.items.map((s, i) => (
        <Reveal key={s.title} delay={i * 60}>
          <li>
            <Link
              href="/services"
              className="spotlight group grid grid-cols-[auto_1fr_auto] items-center gap-6 border-b border-line px-2 py-7 transition-colors duration-500 hover:bg-surface sm:gap-10 sm:px-6"
            >
              <span className="font-serif text-lg text-faint transition-colors group-hover:text-gold">
                0{i + 1}
              </span>
              <span className="grid gap-2 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-10">
                <span className="font-serif text-3xl transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl">
                  {s.title}
                </span>
                <span className="text-sm leading-relaxed text-muted">
                  {s.text}
                </span>
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line-2 transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-bg">
                <Arrow />
              </span>
            </Link>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}

export function WorkGrid({ t, limit }: { t: Dictionary; limit?: number }) {
  const items = limit ? t.work.items.slice(0, limit) : t.work.items;
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
      {items.map((p, i) => (
        <Reveal
          key={p.name}
          delay={(i % 2) * 150}
          className={i % 2 === 1 ? "md:mt-20" : ""}
        >
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${p.name} — ${t.work.view}`}
            className="group block"
          >
            <div className="gold-border relative aspect-[4/3.2] overflow-hidden rounded-3xl">
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
                <p className="text-[11px] uppercase tracking-[0.25em] text-gold">
                  {p.category}
                </p>
                <h3 className="mt-2 font-serif text-3xl sm:text-4xl">
                  {p.name}
                </h3>
                <p className="mt-3 max-w-md text-muted">{p.text}</p>
              </div>
              <span className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line-2 text-ink transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-bg">
                <Arrow />
              </span>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  );
}

export function ProcessSteps({ t }: { t: Dictionary }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {t.process.steps.map((s, i) => (
        <Reveal key={s.title} delay={i * 120} className="h-full">
          <article className="spotlight group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 sm:p-8">
            <span
              className="pointer-events-none absolute -right-1 -top-5 select-none font-serif text-[7.5rem] leading-none text-ink/[0.04] transition-colors duration-500 group-hover:text-gold/10"
              aria-hidden
            >
              0{i + 1}
            </span>
            <StepIcon index={i} />
            <p className="mt-8 text-[11px] uppercase tracking-[0.25em] text-gold">
              {t.process.step} 0{i + 1}
            </p>
            <h3 className="mt-2 font-serif text-3xl">{s.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
            <span
              className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold to-gold-2 transition-transform duration-700 group-hover:scale-x-100"
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
        <em className="text-gold-gradient">{t.manifesto.quoteEm}</em>”
      </blockquote>
    </Reveal>
  );
}

export function Values({ t }: { t: Dictionary }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line text-left sm:grid-cols-2 lg:grid-cols-4">
      {t.manifesto.values.map((v, i) => (
        <Reveal key={v.title} delay={i * 100} className="h-full">
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

export function FaqList({ t }: { t: Dictionary }) {
  return (
    <div className="border-t border-line">
      {t.faq.items.map((f, i) => (
        <Reveal key={f.q} delay={i * 60}>
          <details className="group border-b border-line">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7">
              <span className="faq-q font-serif text-2xl transition-colors duration-300 sm:text-[1.7rem]">
                {f.q}
              </span>
              <span className="faq-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line-2 text-gold transition-transform duration-500">
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
        <p className="mt-14 text-[11px] uppercase tracking-[0.25em] text-faint">
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
        <div className="gold-border rounded-3xl bg-surface/70 p-7 backdrop-blur-sm sm:p-12">
          <ContactForm t={t.contact} email={site.email} />
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
        <span className="flex items-center gap-3 font-serif text-xl transition-colors group-hover:text-gold-2 sm:text-2xl">
          {value}
          <Arrow className="text-gold" />
        </span>
      </a>
    </li>
  );
}
