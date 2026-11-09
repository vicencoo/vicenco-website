"use client";

import { useLanguage } from "@/lib/language-context";
import Link from "next/link";
import { localePath } from "@/lib/i18n";
import { Arrow } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { CtaBand, MoreLink, SectionHead } from "@/components/ui";
import { ManifestoQuote, Marquee, ProcessSteps, Values, WorkGrid } from "@/components/sections";
import { ProjectShowcase, ServiceExplorer } from "@/components/motion";

export function HomeView() {
  const { lang, t } = useLanguage();

  return (
    <>
      {/* ───────────── HERO ───────────── */}
      <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-16 sm:pb-20">
        <div className="orb -left-40 top-10 h-105 w-105 text-brand/20" />
        <div className="orb -right-32 bottom-0 h-130 w-130 text-[#1d3a7a]/30 [animation-delay:-6s]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:88px_88px] [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]"
          aria-hidden
        />

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div
            className="fade-up flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted"
            style={{ animationDelay: "100ms" }}
          >
            <span className="h-px w-10 bg-brand" />
            {t.hero.eyebrow}
          </div>

          <h1 className="mt-8 font-serif text-[clamp(2.9rem,8.5vw,7.75rem)] leading-[0.95] tracking-[-0.02em]">
            <span className="line-reveal">
              <span style={{ animationDelay: "200ms" }}>{t.hero.titleA}</span>
            </span>
            <span className="line-reveal">
              <span style={{ animationDelay: "350ms" }}>
                {t.hero.titleB}{" "}
                <em className="text-brand-gradient pr-2">{t.hero.titleEm}</em>
              </span>
            </span>
          </h1>

          <div className="mt-12 grid items-start gap-14 lg:grid-cols-[1fr_minmax(0,32rem)] lg:gap-16">
            <div>
              <p
                className="fade-up max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
                style={{ animationDelay: "700ms" }}
              >
                {t.hero.lead}
              </p>
              <div
                className="fade-up mt-10 flex flex-wrap items-center gap-4"
                style={{ animationDelay: "850ms" }}
              >
                <Link
                  href={localePath(lang, "/contact")}
                  className="btn-shine group inline-flex items-center gap-3 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white transition-all duration-500 hover:bg-brand-hover hover:shadow-[0_0_50px_-5px_rgba(47,107,255,0.6)]"
                >
                  {t.hero.primary}
                  <Arrow />
                </Link>
                <Link
                  href={localePath(lang, "/work")}
                  className="inline-flex items-center gap-3 rounded-full border border-line-2 px-8 py-4 text-sm transition-colors duration-500 hover:border-ink"
                >
                  {t.hero.secondary}
                </Link>
              </div>

              {/* Quick picks: one tap to the service a visitor is looking for. */}
              <div className="fade-up mt-12" style={{ animationDelay: "1000ms" }}>
                <p className="text-[11px] uppercase tracking-[0.25em] text-faint">{t.home.pickLabel}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {t.home.picks.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={localePath(lang, `/services/${p.slug}`)}
                        className="group inline-flex items-center gap-2 rounded-full border border-line-2 bg-bg/40 py-2 pr-3 pl-4 text-sm text-ink/90 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:bg-brand/10 hover:text-ink"
                      >
                        {p.label}
                        <Arrow className="h-3 w-3 text-brand transition-transform duration-300 group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="fade-up" style={{ animationDelay: "600ms" }}>
              <ProjectShowcase lang={lang} t={t} />
            </div>
          </div>
        </div>
      </section>

      <Marquee t={t} />

      {/* ───────────── SERVICES ───────────── */}
      <section id="services" className="py-20 sm:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHead
              eyebrow={t.services.eyebrow}
              title={t.services.title}
              em={t.services.titleEm}
              lead={t.services.lead}
              index="01"
            />
            <Reveal className="shrink-0">
              <MoreLink href={localePath(lang, "/services")}>
                {t.more.services}
              </MoreLink>
            </Reveal>
          </div>
          <div className="mt-10 sm:mt-16">
            <ServiceExplorer lang={lang} t={t} />
          </div>
        </div>
      </section>

      {/* ───────────── FEATURED WORK ───────────── */}
      <section className="border-t border-line bg-bg-2 py-20 sm:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHead
              eyebrow={t.work.eyebrow}
              title={t.work.title}
              em={t.work.titleEm}
              lead={t.work.lead}
              index="02"
            />
            <Reveal className="shrink-0">
              <MoreLink href={localePath(lang, "/work")}>
                {t.more.work}
              </MoreLink>
            </Reveal>
          </div>
          <div className="mt-10 sm:mt-16">
            <WorkGrid lang={lang} t={t} limit={2} />
          </div>
        </div>
      </section>

      {/* ───────────── PROCESS ───────────── */}
      <section className="border-t border-line py-20 sm:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead
            eyebrow={t.process.eyebrow}
            title={t.process.title}
            em={t.process.titleEm}
            index="03"
          />
          <div className="mt-12 sm:mt-20">
            <ProcessSteps t={t} />
          </div>
        </div>
      </section>

      {/* ───────────── MANIFESTO ───────────── */}
      <section className="relative overflow-hidden border-t border-line py-20 sm:py-40">
        <div className="orb left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 text-brand/10" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <ManifestoQuote t={t} />
          <div className="mt-12 sm:mt-20">
            <Values t={t} />
          </div>
          <Reveal className="mt-10 sm:mt-14 text-center">
            <MoreLink href={localePath(lang, "/about")}>
              {t.more.about}
            </MoreLink>
          </Reveal>
        </div>
      </section>

      <CtaBand lang={lang} t={t.cta} />
    </>
  );
}
