"use client";

import { createContext, useContext, useState } from "react";
import { usePathname } from "next/navigation";
import { en } from "./dictionaries/en";
import { sq } from "./dictionaries/sq";
import { it } from "./dictionaries/it";
import { defaultLanguage, isLanguage, localePath, saveLanguage, stripLanguage, type Language } from "./i18n";

const dictionaries = { en, sq, it };

/** "/sq/services" → "sq", "/services" (and "/en/services" while prerendering) → "en". */
function languageFromPath(pathname: string): Language {
  const first = pathname.split("/")[1];
  return isLanguage(first) ? first : defaultLanguage;
}

type LanguageState = {
  lang: Language;
  t: (typeof dictionaries)[Language];
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageState>({ lang: defaultLanguage, t: en, setLanguage: () => {} });

/**
 * Each language is a real page on the server (/services, /sq/services…), so search engines see every
 * translation. Switching language in the browser only swaps the texts and updates the address bar,
 * without loading a page — so it is instant, however often it is tapped.
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const urlLang = languageFromPath(usePathname());
  const [lang, setLang] = useState(urlLang);
  const [lastUrlLang, setLastUrlLang] = useState(urlLang);

  // Follow the address when it changes another way (links, back/forward).
  if (urlLang !== lastUrlLang) {
    setLastUrlLang(urlLang);
    setLang(urlLang);
  }

  const setLanguage = (next: Language) => {
    saveLanguage(next);
    setLang(next);
    document.documentElement.lang = next;
    const { pathname, search, hash } = window.location;
    window.history.replaceState(null, "", localePath(next, stripLanguage(pathname)) + search + hash);
  };

  return <LanguageContext value={{ lang, t: dictionaries[lang], setLanguage }}>{children}</LanguageContext>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
