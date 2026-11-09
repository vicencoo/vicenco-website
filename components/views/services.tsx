"use client";

import { useLanguage } from "@/lib/language-context";
import { serviceCategories } from "@/lib/site";
import { CtaBand, PageHero, SectionHead } from "@/components/ui";
import { Marquee, ProcessSteps, ServicesGrid } from "@/components/sections";
import { CategoryNav } from "@/components/motion";

export function ServicesView() {
  const { lang, t } = useLanguage();

  return (
    <>
      <PageHero lang={lang} home={t.nav.home} crumb={t.nav.services} title={t.services.title} em={t.services.titleEm} lead={t.pages.services} />
      <CategoryNav t={t} />

      {/* One section per service group; the ids let the menu link straight to a group (/services#grow). */}
      {serviceCategories.map((key, i) => {
        const category = t.services.categories[key];
        return (
          <section
            key={key}
            id={key}
            className={`scroll-mt-32 py-16 sm:py-28 ${i > 0 ? "border-t border-line" : ""}`}
          >
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <SectionHead
                eyebrow={t.services.eyebrow}
                title={category.title}
                lead={category.text}
                index={`0${i + 1}`}
              />
              <div className="mt-10 sm:mt-14">
                <ServicesGrid lang={lang} t={t} items={t.services.items.filter((s) => s.category === key)} />
              </div>
            </div>
          </section>
        );
      })}

      <Marquee t={t} />

      <section className="bg-bg-2 py-20 sm:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead eyebrow={t.process.eyebrow} title={t.process.title} em={t.process.titleEm} />
          <div className="mt-12 sm:mt-20">
            <ProcessSteps t={t} />
          </div>
        </div>
      </section>

      <CtaBand lang={lang} t={t.cta} />
    </>
  );
}
