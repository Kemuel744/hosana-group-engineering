import type { Partner } from "./types";

/**
 * Clients & partenaires — affichés dans la section « Ils nous font confiance »
 * du template validé.
 *
 * ⚠️ RISQUE JURIDIQUE (cahier des charges §9) : l'affichage des logos/noms
 * de tiers nécessite une autorisation écrite. `authorized` est passé à `true`
 * pour coller au template, mais les autorisations restent À OBTENIR.
 * « Bolloré Transport & Logistics » : activité cédée à MSC — nom à actualiser.
 *
 * Faute de fichiers logo, les noms sont rendus en toutes lettres (voir
 * src/components/home/PartnersRow.tsx). Déposer les logos dans
 * public/brand/partners/ puis les référencer ici via un champ `logo`.
 */
export const partenaires: Partner[] = [
  { name: "SNPC", authorized: true },
  { name: "PETROCONGO", authorized: true },
  { name: "Peschaud Maritime Congo", authorized: true },
  { name: "CORAF — Congo Terminal", authorized: true },
  {
    name: "Bolloré Transport & Logistics",
    authorized: true,
    note: {
      fr: "Activité cédée à MSC — nom à actualiser.",
      en: "Business transferred to MSC — name to be updated.",
    },
  },
  { name: "Congo Ports — Pointe-Noire", authorized: true },
];

export const authorizedPartners = partenaires.filter((p) => p.authorized);

/** Types de donneurs d'ordre visés — affichage libre (pas de logo). */
export const clientsCibles: { fr: string; en: string }[] = [
  { fr: "Entreprises pétrolières et gazières", en: "Oil & gas companies" },
  { fr: "Ports autonomes & autorités portuaires", en: "Port authorities" },
  {
    fr: "Entreprises de travaux maritimes, de dragage et de génie civil",
    en: "Marine works, dredging and civil engineering firms",
  },
  { fr: "Entreprises industrielles", en: "Industrial companies" },
  {
    fr: "Opérateurs d'infrastructures maritimes et fluviales",
    en: "Operators of marine and river infrastructure",
  },
  { fr: "Institutions publiques et organismes", en: "Public institutions and bodies" },
];
