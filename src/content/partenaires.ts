import type { Partner } from "./types";

/**
 * Clients & partenaires cités sur les plaquettes.
 *
 * ⚠️ RISQUE JURIDIQUE — cahier des charges §9 : les logos ne peuvent être
 * affichés qu'avec autorisation écrite. Tant que `authorized` est `false`,
 * aucun logo ni nom ne doit apparaître publiquement (le composant les masque).
 * « Bolloré Transport & Logistics » : marque cédée à MSC — à retirer ou à mettre
 * à jour avant toute publication.
 */
export const partenaires: Partner[] = [
  { name: "Peschaud Maritime Congo", authorized: false },
  { name: "PETROCONGO", authorized: false },
  { name: "SNPC — Société Nationale des Pétroles du Congo", authorized: false },
  { name: "CORAF", authorized: false },
  { name: "Congo Terminal", authorized: false },
  {
    name: "Bolloré Transport & Logistics",
    authorized: false,
    note: {
      fr: "Marque cédée à MSC — à retirer ou actualiser.",
      en: "Brand transferred to MSC — remove or update.",
    },
  },
  { name: "Congo Ports (Port Autonome de Pointe-Noire)", authorized: false },
];

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
  {
    fr: "Entreprises de transport et de logistique maritime",
    en: "Maritime transport and logistics companies",
  },
  { fr: "Institutions publiques et organismes", en: "Public institutions and bodies" },
  { fr: "Donneurs d'ordre et gestionnaires de projets", en: "Principals and project managers" },
];

export const authorizedPartners = partenaires.filter((p) => p.authorized);
