"use client";

import { useLanguage } from "@/lib/i18n";
import { CtaBand, PageHero } from "@/components/ui";
import { WorkGrid } from "@/components/sections";

export function WorkView() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        home={t.nav.home}
        crumb={t.nav.work}
        title={t.work.title}
        em={t.work.titleEm}
        lead={t.pages.work}
      />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <WorkGrid t={t} />
        </div>
      </section>

      <CtaBand t={t.cta} />
    </>
  );
}
