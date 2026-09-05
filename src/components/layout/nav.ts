import type { AppPathname } from "@/i18n/routing";

/** Routes de navigation : on exclut les routes dynamiques (gérées via objet). */
export type NavHref = Exclude<AppPathname, "/expertises/[slug]">;

/** Élément de navigation : clé de message `nav.*` + route interne. */
export type NavItem = { key: string; href: NavHref };

export const mainNav: NavItem[] = [
  { key: "about", href: "/a-propos" },
  { key: "expertises", href: "/expertises" },
  { key: "equipment", href: "/equipements" },
  { key: "projects", href: "/realisations" },
  { key: "sectors", href: "/secteurs" },
  { key: "documentation", href: "/documentation" },
  { key: "news", href: "/actualites" },
  { key: "contact", href: "/contact" },
];
