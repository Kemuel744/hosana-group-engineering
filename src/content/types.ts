import { routing } from "@/i18n/routing";

export type Locale = (typeof routing.locales)[number];

/** Chaîne traduite dans toutes les langues supportées. */
export type I18nText = Record<Locale, string>;

/** Aide : résout une valeur traduite pour la locale courante. */
export function t(text: I18nText, locale: string): string {
  return text[locale as Locale] ?? text[routing.defaultLocale];
}

export interface Expertise {
  slug: string;
  /** Clé d'icône (voir src/components/ui/Icon.tsx). */
  icon: string;
  order: number;
  /** Mis en avant sur la page d'accueil. */
  featured: boolean;
  /** Chemin d'une photo (public/media/expertises/…) — sinon emplacement dégradé. */
  image?: string;
  title: I18nText;
  summary: I18nText;
  description: I18nText;
  services: I18nText[];
  /** Moyens / équipements typiquement mobilisés. */
  means: I18nText[];
}

export interface EquipmentItem {
  slug: string;
  icon: string;
  category: I18nText;
  name: I18nText;
  /** Accroche courte affichée sur la grille d'accueil. */
  tagline: I18nText;
  description: I18nText;
  /** Caractéristiques clés : libellé + valeur (valeurs à confirmer par le client). */
  specs: { label: I18nText; value: I18nText }[];
  applications: I18nText[];
}

export interface Realisation {
  slug: string;
  icon: string;
  title: I18nText;
  location: I18nText;
  summary: I18nText;
  /** Expertise(s) liée(s) — slugs. */
  expertises: string[];
}

export interface Sector {
  slug: string;
  icon: string;
  name: I18nText;
  description: I18nText;
}

export interface Partner {
  name: string;
  /** Autorisation d'affichage du logo confirmée par écrit ? (cahier des charges §9) */
  authorized: boolean;
  note?: I18nText;
}

export interface Value {
  icon: string;
  title: I18nText;
  description: I18nText;
}
