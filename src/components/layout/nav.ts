import { equipements } from "@/content/equipements";
import { featuredExpertises } from "@/content/expertises";
import type { I18nText } from "@/content/types";
import type { AppPathname } from "@/i18n/routing";

export type NavHref = Exclude<AppPathname, "/expertises/[slug]"> | string;

export type NavChild = {
  href: string;
  /** clé i18n dans `nav.*` */
  key?: string;
  /** libellé bilingue explicite (noms d'expertises / de moyens) */
  i18n?: I18nText;
};

export type NavItem = {
  key: string;
  href: NavHref;
  children?: NavChild[];
};

/** Navigation principale — structure du template validé. */
export const mainNav: NavItem[] = [
  { key: "home", href: "/" },
  {
    key: "company",
    href: "/a-propos",
    children: [
      { key: "about", href: "/a-propos" },
      { key: "vision", href: "/a-propos#vision" },
      { key: "mission", href: "/a-propos#mission" },
      { key: "values", href: "/a-propos#valeurs" },
      { key: "team", href: "/a-propos#equipe" },
    ],
  },
  {
    key: "expertises",
    href: "/expertises",
    children: [
      ...featuredExpertises.slice(0, 6).map((e) => ({
        href: `/expertises/${e.slug}`,
        i18n: e.title,
      })),
      { key: "allExpertises", href: "/expertises" },
    ],
  },
  {
    key: "equipment",
    href: "/equipements",
    children: [
      ...equipements.slice(0, 5).map((e) => ({
        href: `/equipements#${e.slug}`,
        i18n: e.name,
      })),
      { key: "allEquipment", href: "/equipements" },
    ],
  },
  { key: "projects", href: "/realisations" },
  { key: "news", href: "/actualites" },
  { key: "contact", href: "/contact" },
];
