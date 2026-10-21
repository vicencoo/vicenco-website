// Shared language helpers, safe to use in both server and client components.
// English lives at the root (/services), the other languages under a prefix (/sq/services, /it/services).

export const languages = ["en", "sq", "it"] as const;
export type Language = (typeof languages)[number];
export const defaultLanguage: Language = "en";

export const languageNames: Record<Language, string> = { en: "English", sq: "Shqip", it: "Italiano" };
export const ogLocales: Record<Language, string> = { en: "en_US", sq: "sq_AL", it: "it_IT" };

export function isLanguage(value: unknown): value is Language {
  return languages.includes(value as Language);
}

/** "/services" in Albanian → "/sq/services". English paths stay unprefixed. */
export function localePath(lang: Language, path: string) {
  if (lang === defaultLanguage) return path;
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
}

/** "/sq/services" → "/services"; also strips the internal "/en" prefix used during prerendering. */
export function stripLanguage(pathname: string) {
  const [, first, ...rest] = pathname.split("/");
  if (!isLanguage(first)) return pathname;
  return `/${rest.join("/")}`;
}

const STORAGE_KEY = "lang";

/** Remembers the language a visitor picked in the switcher. */
export function saveLanguage(lang: Language) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {}
}

/**
 * Runs before the page is painted. On a visitor's first visit to an English page, if their
 * browser is set to Albanian or Italian, it sends them once to the same page in that language.
 * Pages under /sq and /it are never redirected, so search engines can always crawl them.
 */
export const languageScript = `try{var k="${STORAGE_KEY}",a=${JSON.stringify(languages)},d=document.documentElement;if(d.lang==="${defaultLanguage}"&&!localStorage.getItem(k)){var b=(navigator.language||"").toLowerCase(),l="${defaultLanguage}";for(var i=0;i<a.length;i++)if(b.indexOf(a[i])===0)l=a[i];localStorage.setItem(k,l);if(l!=="${defaultLanguage}"){d.dataset.pending="1";var p=location.pathname;location.replace("/"+l+(p==="/"?"":p)+location.search+location.hash)}}}catch(e){}`;
