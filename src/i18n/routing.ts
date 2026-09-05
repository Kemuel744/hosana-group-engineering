import { defineRouting } from "next-intl/routing";

/**
 * Routing i18n de HOSANA GROUP ENGINEERING.
 *
 * - Français = langue par défaut, sans préfixe d'URL (`/expertises`).
 * - Anglais = préfixe `/en` (`/en/expertises`).
 *
 * Note : les slugs localisés par langue (ex. `/en/expertise` au lieu de
 * `/en/expertises`) via l'option `pathnames` de next-intl sont désactivés pour
 * l'instant — combinés à `localePrefix: "as-needed"`, ils cassent le routage en
 * mode `next dev` avec Next 16.3 / next-intl 4.14. À réactiver après correctif
 * amont, ou via des `rewrites` dans `next.config.ts`.
 */
export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  localePrefix: "as-needed",
  localeDetection: true,
});

export type Locale = (typeof routing.locales)[number];

/** Routes internes de l'application (segments du dossier `src/app/[locale]`). */
export type AppPathname =
  | "/"
  | "/a-propos"
  | "/expertises"
  | "/expertises/[slug]"
  | "/equipements"
  | "/realisations"
  | "/secteurs"
  | "/documentation"
  | "/actualites"
  | "/contact"
  | "/devis";
