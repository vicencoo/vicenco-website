"use client";

import { useLanguage } from "@/lib/i18n";
import { CtaBand, PageHero, SectionHead } from "@/components/ui";
import { Marquee, ProcessSteps, ServicesGrid } from "@/components/sections";

export function ServicesView() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero home={t.nav.home} crumb={t.nav.services} title={t.services.title} em={t.services.titleEm} lead={t.pages.services} />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ServicesGrid t={t} />
        </div>
      </section>

      <Marquee t={t} />

      <section className="bg-bg-2 py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead eyebrow={t.process.eyebrow} title={t.process.title} em={t.process.titleEm} />
          <div className="mt-20">
            <ProcessSteps t={t} />
          </div>
        </div>
      </section>

      <CtaBand t={t.cta} />
    </>
  );
}
