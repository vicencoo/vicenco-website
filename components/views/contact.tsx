import { getDictionary } from "@/lib/i18n-server";
import { PageHero, SectionHead } from "@/components/ui";
import { ContactBlock, FaqList } from "@/components/sections";

export async function ContactView() {
  const { lang, t } = await getDictionary();

  return (
    <>
      <PageHero lang={lang} home={t.nav.home} crumb={t.nav.contact} title={t.contact.title} em={t.contact.titleEm} lead={t.pages.contact} />

      <section className="relative overflow-hidden py-16 sm:py-32">
        <div className="orb -right-40 top-20 h-[480px] w-[480px] text-brand/15" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <ContactBlock t={t} />
        </div>
      </section>

      <section className="border-t border-line bg-bg-2 py-20 sm:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr]">
          <SectionHead eyebrow={t.faq.eyebrow} title={t.faq.title} em={t.faq.titleEm} />
          <FaqList items={t.faq.items} />
        </div>
      </section>
    </>
  );
}
