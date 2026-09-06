import type { Realisation } from "./types";

/**
 * Réalisations mises en avant sur l'accueil — libellés repris du template.
 * ⚠️ EXEMPLES à valider : contexte, client, dates, volumes et photos réels
 * doivent être fournis par HOSANA GROUP ENGINEERING avant publication.
 * Une simple galerie ne suffit pas : prévoir une étude de cas par projet
 * (cahier des charges §6-7).
 */
export const realisations: Realisation[] = [
  {
    slug: "dragage-portuaire-pointe-noire",
    icon: "Waves",
    title: { fr: "Dragage portuaire", en: "Port dredging" },
    location: { fr: "Pointe-Noire, Congo", en: "Pointe-Noire, Congo" },
    summary: {
      fr: "Désensablement et approfondissement du chenal d'accès.",
      en: "Desanding and deepening of the access channel.",
    },
    expertises: ["dragage-maritime-fluvial", "bathymetrie-hydrographie"],
  },
  {
    slug: "construction-de-quai",
    icon: "Building2",
    title: { fr: "Construction de quai", en: "Quay construction" },
    location: { fr: "Pointe-Noire, Congo", en: "Pointe-Noire, Congo" },
    summary: {
      fr: "Réalisation d'infrastructures portuaires modernes.",
      en: "Delivery of modern port infrastructure.",
    },
    expertises: ["travaux-maritimes-portuaires", "batiment-travaux-publics"],
  },
  {
    slug: "inspection-sous-marine",
    icon: "LifeBuoy",
    title: { fr: "Inspection sous-marine", en: "Underwater inspection" },
    location: { fr: "Congo", en: "Congo" },
    summary: {
      fr: "Inspection et maintenance d'ouvrages immergés.",
      en: "Inspection and maintenance of submerged structures.",
    },
    expertises: ["travaux-sous-marins-plongee", "services-offshore"],
  },
];

export function getRealisation(slug: string) {
  return realisations.find((r) => r.slug === slug);
}
