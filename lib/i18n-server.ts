import { lang as langParam } from "next/root-params";
import { notFound } from "next/navigation";
import { en } from "./dictionaries/en";
import { sq } from "./dictionaries/sq";
import { it } from "./dictionaries/it";
import { isLanguage, type Language } from "./i18n";

const dictionaries = { en, sq, it };

/** The language of the current page, read from the [lang] segment of the URL. */
export async function getLanguage(): Promise<Language> {
  const lang = await langParam();
  if (!isLanguage(lang)) notFound();
  return lang;
}

/** The current language and its texts, for server components, pages and metadata. */
export async function getDictionary() {
  const lang = await getLanguage();
  return { lang, t: dictionaries[lang] };
}
