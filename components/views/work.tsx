import { getDictionary } from "@/lib/i18n-server";
import { CtaBand, PageHero } from "@/components/ui";
import { WorkGrid } from "@/components/sections";

export async function WorkView() {
  const { lang, t } = await getDictionary();

  return (
    <>
      <PageHero
        lang={lang}
        home={t.nav.home}
        crumb={t.nav.work}
        title={t.work.title}
        em={t.work.titleEm}
        lead={t.pages.work}
      />

      <section className="py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <WorkGrid lang={lang} t={t} />
        </div>
      </section>

      <CtaBand lang={lang} t={t.cta} />
    </>
  );
}
