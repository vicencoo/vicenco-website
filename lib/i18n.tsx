"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { en, type Dictionary } from "./dictionaries/en";
import { sq } from "./dictionaries/sq";

export const languages = ["en", "sq"] as const;
export type Language = (typeof languages)[number];

const dictionaries: Record<Language, Dictionary> = { en, sq };
const STORAGE_KEY = "lang";
const CHANGE_EVENT = "languagechange-local";

/** Saved choice, otherwise the browser's language, otherwise English. */
function readLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "sq") return saved;
  } catch {}
  return navigator.language?.toLowerCase().startsWith("sq") ? "sq" : "en";
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange); // keeps other open tabs in sync
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function setLanguage(lang: Language) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {}
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

const LanguageContext = createContext<{ lang: Language; t: Dictionary }>({ lang: "en", t: en });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // The server always renders English; the browser switches to the saved language.
  const lang = useSyncExternalStore(subscribe, readLanguage, () => "en" as const);

  useEffect(() => {
    document.documentElement.lang = lang;
    // Reveal the page once it shows the right language (see the script in app/layout.tsx).
    if (lang === readLanguage()) delete document.documentElement.dataset.pending;
  }, [lang]);

  return <LanguageContext value={{ lang, t: dictionaries[lang] }}>{children}</LanguageContext>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

/**
 * Runs before the page is painted: if the visitor's language isn't English,
 * hide the page until React has swapped the text, so English never flashes.
 */
export const languageScript = `try{var l=localStorage.getItem("${STORAGE_KEY}");if(l!=="en"&&l!=="sq")l=(navigator.language||"").toLowerCase().indexOf("sq")===0?"sq":"en";if(l!=="en"){var d=document.documentElement;d.lang=l;d.dataset.pending="1";setTimeout(function(){delete d.dataset.pending},1500)}}catch(e){}`;
