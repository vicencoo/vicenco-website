import { getDictionary } from "@/lib/i18n-server";
import Link from "next/link";
import { site } from "@/lib/site";
import { localePath } from "@/lib/i18n";
import { Arrow } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { CtaBand, MoreLink, RotatingBadge, SectionHead } from "@/components/ui";
import {
  ManifestoQuote,
  Marquee,
  ServicesList,
  Values,
  WorkGrid,
} from "@/components/sections";

export async function HomeView() {
  const { lang, t } = await getDictionary();

  return (
    <>
      {/* ───────────── HERO ───────────── */}
      <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-16">
        <div className="orb -left-40 top-10 h-[420px] w-[420px] text-brand/20" />
        <div className="orb -right-32 bottom-0 h-[520px] w-[520px] text-[#1d3a7a]/30 [animation-delay:-6s]" />
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

          <h1 className="mt-8 font-serif text-[clamp(2.9rem,9vw,8.5rem)] leading-[0.95] tracking-[-0.02em]">
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

          <div className="mt-12 grid items-end gap-10 lg:grid-cols-[1fr_auto]">
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
                  className="group inline-flex items-center gap-3 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white transition-all duration-500 hover:bg-brand-hover hover:shadow-[0_0_50px_-5px_rgba(47,107,255,0.6)]"
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
            </div>

            <RotatingBadge
              text={`${t.hero.eyebrow} • ${site.name} • `}
              href={localePath(lang, "/contact")}
            />
          </div>
        </div>

        <a
          href="#services"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-faint sm:flex"
        >
          {t.hero.scroll}
          <span className="h-12 w-px overflow-hidden bg-line">
            <span className="block h-1/2 w-full animate-[drip_2s_ease-in-out_infinite] bg-brand" />
          </span>
        </a>
      </section>

      <Marquee t={t} />

      {/* ───────────── SERVICES PREVIEW ───────────── */}
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
              <MoreLink href={localePath(lang, "/services")}>{t.more.services}</MoreLink>
            </Reveal>
          </div>
          <div className="mt-10 sm:mt-16">
            <ServicesList lang={lang} t={t} />
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
              <MoreLink href={localePath(lang, "/work")}>{t.more.work}</MoreLink>
            </Reveal>
          </div>
          <div className="mt-10 sm:mt-16">
            <WorkGrid lang={lang} t={t} limit={2} />
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
            <MoreLink href={localePath(lang, "/about")}>{t.more.about}</MoreLink>
          </Reveal>
        </div>
      </section>

      <CtaBand lang={lang} t={t.cta} />
    </>
  );
}
