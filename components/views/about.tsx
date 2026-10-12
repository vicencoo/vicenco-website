"use client";

import { useLanguage } from "@/lib/i18n";
import { CtaBand, PageHero, SectionHead } from "@/components/ui";
import { ManifestoQuote, ProcessSteps, Values } from "@/components/sections";

export function AboutView() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        home={t.nav.home}
        crumb={t.nav.about}
        title={t.about.title}
        em={t.about.titleEm}
        lead={t.about.lead}
      />

      {/* Values */}
      <section className="relative overflow-hidden py-28 sm:py-36">
        <div className="orb left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 bg-brand/10" />
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
          <SectionHead
            eyebrow={t.about.approachTitle}
            title={t.process.title}
            em={t.process.titleEm}
          />
          <div className="mt-20">
            <ProcessSteps t={t} />
          </div>
        </div>
      </section>

      <CtaBand t={t.cta} />
    </>
  );
}
