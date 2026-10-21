import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries/en";
import { localePath, type Language } from "@/lib/i18n";
import { Arrow } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { Check, CtaBand, MoreLink, PageHero, SectionHead } from "@/components/ui";
import { WorkGrid } from "@/components/sections";

type Project = Dictionary["work"]["items"][number];

/** A case study per project: overview, what we built, services used and a link to the live site. */
export function WorkDetailView({ lang, t, project }: { lang: Language; t: Dictionary; project: Project }) {
  const d = t.workDetail;
  const services = t.services.items.filter((s) => project.services.includes(s.slug));
  const others = t.work.items.filter((w) => w.slug !== project.slug);

  return (
    <>
      <PageHero
        lang={lang}
        home={t.nav.home}
        parent={{ href: "/work", label: t.nav.work }}
        crumb={project.name}
        title={project.name}
        lead={project.text}
      >
        <a
          href={project.url}
          target="_blank"
          rel="noopener"
          className="group inline-flex items-center gap-3 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white transition-all duration-500 hover:bg-brand-hover hover:shadow-[0_0_50px_-5px_rgba(47,107,255,0.6)]"
        >
          {d.visitCta}
          <Arrow />
        </a>
        <Link
          href={localePath(lang, "/contact")}
          className="inline-flex items-center gap-3 rounded-full border border-line-2 px-8 py-4 text-sm transition-colors duration-500 hover:border-ink"
        >
          {t.nav.cta}
        </Link>
      </PageHero>

      <section className="py-14 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* The screenshot also opens the live site. */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener"
            aria-label={`${d.visitCta}: ${project.name}`}
            className="group brand-border relative block aspect-[5/4] overflow-hidden rounded-3xl"
          >
            <Image
              src={project.image}
              alt={`${project.name} — ${project.category}`}
              fill
              preload
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            />
            <span className="absolute bottom-5 right-5 z-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-5 py-2.5 text-sm text-white backdrop-blur transition-colors duration-500 group-hover:border-brand group-hover:bg-brand sm:bottom-7 sm:right-7">
              {d.visitCta}
              <Arrow />
            </span>
          </a>

          {/* Key facts */}
          <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            <div className="bg-bg p-7">
              <dt className="text-[11px] uppercase tracking-[0.25em] text-faint">{d.industry}</dt>
              <dd className="mt-3 text-lg">{project.category}</dd>
            </div>
            <div className="bg-bg p-7">
              <dt className="text-[11px] uppercase tracking-[0.25em] text-faint">{d.services}</dt>
              <dd className="mt-3 flex flex-col gap-1 text-lg">
                {services.map((s) => (
                  <Link key={s.slug} href={localePath(lang, `/services/${s.slug}`)} className="transition-colors hover:text-brand-2">
                    {s.title}
                  </Link>
                ))}
              </dd>
            </div>
            <div className="bg-bg p-7">
              <dt className="text-[11px] uppercase tracking-[0.25em] text-faint">{d.visit}</dt>
              <dd className="mt-3 text-lg">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener"
                  className="group inline-flex items-center gap-2 text-brand-2 transition-colors hover:text-ink"
                >
                  {project.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                  <Arrow />
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Overview */}
      <section className="border-t border-line bg-bg-2 py-16 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <Reveal>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.05]">{d.overview}</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              {project.overview.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* What we built: features grouped by part of the product (website, admin dashboard…) */}
      <section className="border-t border-line py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead eyebrow={project.name} title={d.features} />
          <div className="mt-10 sm:mt-16 space-y-16">
            {project.features.map((group, gi) => (
              <div key={group.title}>
                <Reveal>
                  <h3 className="flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-brand-2">
                    <span className="font-serif text-base normal-case tracking-normal text-brand">0{gi + 1}</span>
                    {group.title}
                    <span className="h-px flex-1 bg-line" />
                  </h3>
                </Reveal>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((f, i) => (
                    <li key={f.title} className="h-full">
                      <Reveal delay={(i % 3) * 100} className="h-full">
                        <div className="flex h-full gap-4 rounded-2xl border border-line bg-surface/40 p-7 transition-colors duration-500 hover:border-brand/40">
                          <Check small />
                          <div>
                            <h4 className="font-semibold">{f.title}</h4>
                            <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
                          </div>
                        </div>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More projects */}
      <section className="border-t border-line py-20 sm:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHead eyebrow={t.work.eyebrow} title={d.more} />
            <Reveal className="shrink-0">
              <MoreLink href={localePath(lang, "/work")}>{t.more.work}</MoreLink>
            </Reveal>
          </div>
          <div className="mt-10 sm:mt-16">
            <WorkGrid lang={lang} t={t} items={others} limit={2} />
          </div>
        </div>
      </section>

      <CtaBand lang={lang} t={t.cta} />
    </>
  );
}
