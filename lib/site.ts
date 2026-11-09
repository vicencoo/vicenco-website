// Your company and contact details — edit these and they update everywhere on the site.
// `name` is used in every page text (EN + SQ), the nav, footer and page titles.
export const site = {
  name: "VinsalTech",
  email: "contactvinsaltech@gmail.com",
  whatsapp: "355695743297", // international format, digits only
  instagram: "vinsal_tech",
  url: "https://www.vinsaltech.com",
  // Web3Forms key for the contact form (public by design — safe to keep in the code).
  web3formsKey: "1d2aa2f7-19aa-45bd-951e-f5954933feab",
  year: 2026,
};

// Pages shown in the main menu, in order (each has a folder in app/[lang]/).
export const pageKeys = ["services", "work", "about", "contact"] as const;

// Service groups, in the order they appear in the services menu and on the services page.
export const serviceCategories = ["build", "grow", "care"] as const;
export type ServiceCategory = (typeof serviceCategories)[number];

// Services listed in the footer (all services are in the menu, on the home page and on /services).
export const featuredServices = [
  "website-design",
  "web-applications",
  "e-commerce",
  "seo",
  "google-ads",
  "website-maintenance",
];

// Flag shown next to each language in the language switcher (files in public/flags/).
export const languageFlags = { en: "/flags/eng.png", sq: "/flags/alb.png", it: "/flags/ita.png" } as const;
