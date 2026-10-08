"use client";

import { useLanguage } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { CtaBand, PageHero, SectionHead } from "@/components/ui";
import { ManifestoQuote, ProcessSteps, Stats, Values } from "@/components/sections";

export function AboutView() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero home={t.nav.home} crumb={t.nav.about} title={t.about.title} em={t.about.titleEm} lead={t.about.lead} />

      {/* Story */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-muted">
              <span className="h-px w-10 bg-gold" />
              {t.about.storyTitle}
            </div>
            <div className="gold-border relative mt-10 hidden aspect-square max-w-sm overflow-hidden rounded-3xl bg-[radial-gradient(ellipse_at_top,#3a2e1c,#0a0908_75%)] lg:block">
              <span className="absolute inset-0 flex items-center justify-center font-serif text-[11rem] italic leading-none text-gold-gradient">V</span>
            </div>
          </Reveal>
          <div className="space-y-8">
            {t.about.story.map((p, i) => (
              <Reveal key={i} delay={i * 120}>
                <p className={i === 0 ? "font-serif text-3xl leading-snug sm:text-4xl" : "text-lg leading-relaxed text-muted"}>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Stats t={t} />

      {/* Values */}
      <section className="relative overflow-hidden py-28 sm:py-36">
        <div className="orb left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 bg-gold/10" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <ManifestoQuote t={t} />
          <div className="mt-20">
            <Values t={t} />
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-t border-line bg-bg-2 py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead eyebrow={t.about.approachTitle} title={t.process.title} em={t.process.titleEm} />
          <div className="mt-20">
            <ProcessSteps t={t} />
          </div>
        </div>
      </section>

      <CtaBand t={t.cta} />
    </>
  );
}
