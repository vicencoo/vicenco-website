// Your company and contact details — edit these and they update everywhere on the site.
// `name` is used in every page text (EN + SQ), the nav, footer and page titles.
export const site = {
  name: "VinsalTech",
  email: "contactvinsaltech@gmail.com",
  whatsapp: "355695743297", // international format, digits only
  instagram: "vicenco",
  url: "https://vinsaltech.com",
  // Web3Forms key for the contact form (public by design — safe to keep in the code).
  web3formsKey: "1d2aa2f7-19aa-45bd-951e-f5954933feab",
  year: 2026,
};

// Pages shown in the main menu, in order (each has a folder in app/[lang]/).
export const pageKeys = ["services", "work", "about", "contact"] as const;
