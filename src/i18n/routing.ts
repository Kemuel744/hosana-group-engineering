import { defineRouting } from "next-intl/routing";

/**
 * Routing i18n de HOSANNA GROUP ENGINEERING.
 *
 * - Français = langue par défaut, sans préfixe d'URL (`/expertises`).
 * - Anglais = préfixe `/en` avec des slugs dédiés au SEO (`/en/expertise`).
 *
 * Les `pathnames` ci-dessous définissent, pour chaque route interne (celle du
 * système de fichiers `src/app/[locale]/...`), l'URL publique par langue.
 */
export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  localePrefix: "as-needed",
  localeDetection: true,
  pathnames: {
    "/": "/",
    "/a-propos": { fr: "/a-propos", en: "/about" },
    "/expertises": { fr: "/expertises", en: "/expertise" },
    "/expertises/[slug]": { fr: "/expertises/[slug]", en: "/expertise/[slug]" },
    "/equipements": { fr: "/equipements", en: "/equipment" },
    "/realisations": { fr: "/realisations", en: "/projects" },
    "/secteurs": { fr: "/secteurs", en: "/sectors" },
    "/documentation": { fr: "/documentation", en: "/documentation" },
    "/actualites": { fr: "/actualites", en: "/news" },
    "/contact": { fr: "/contact", en: "/contact" },
    "/devis": { fr: "/devis", en: "/request-a-quote" },
  },
});

export type Locale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;
