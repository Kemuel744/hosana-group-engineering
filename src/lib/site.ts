/**
 * Informations officielles de l'entreprise.
 *
 * Nom retenu : « HOSANA GROUP ENGINEERING » (graphie du logo, confirmée par le
 * client). Les plaquettes portent « HOSANNA ».
 *
 * Source des autres informations : plaquettes commerciales (sept. 2026).
 * ⚠️ À faire valider par le client avant mise en ligne :
 *   - numéros de téléphone (plusieurs variantes sur les supports existants).
 *   - adresse e-mail professionnelle (contact@… au lieu du Gmail actuel).
 *   - effectif « 30 personnes » et autres chiffres à confirmer.
 */

export const site = {
  name: "HOSANA GROUP ENGINEERING",
  shortName: "Hosana Group Engineering",
  legalId: "P21000000195306W", // NIU
  foundedRegion: "République du Congo & Afrique centrale",

  domain: {
    // À réserver — cf. cahier des charges §20.
    primary: "hosanagroupengineering.com",
    fallback: "hosanaengineering.com",
  },

  url: "https://hosanagroupengineering.com",

  taglines: {
    fr: "L'expertise au service de la mer, de l'industrie et du développement durable",
    en: "Engineering solutions for maritime, industrial & infrastructure projects",
  },

  signature: {
    fr: "Construisons aujourd'hui, les infrastructures de demain.",
    en: "Building today the infrastructure of tomorrow.",
  },

  contact: {
    email: "hosanage2000@gmail.com",
    // Numéro affiché sur le template validé.
    phones: ["+242 06 689 57 88"],
    whatsapp: "+242 06 689 57 88",
    address: {
      line1: "Enceinte Institut Thomas Sankara",
      line2: "Quartier OCH",
      city: "Pointe-Noire",
      country: "République du Congo",
    },
    // Coordonnées approximatives de Pointe-Noire — à préciser avec l'adresse exacte.
    geo: { lat: -4.7924, lng: 11.8639 },
  },

  social: {
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
  },

  // Bandeau de confiance du hero — valeurs du template validé.
  stats: [
    { value: "16+", labelFr: "Domaines d'expertise", labelEn: "Fields of expertise" },
    { value: "24/7", labelFr: "Capacité d'intervention", labelEn: "Response capacity" },
    { value: "100%", labelFr: "Engagement qualité", labelEn: "Quality commitment" },
    { value: "+50", labelFr: "Projets réalisés", labelEn: "Projects delivered" },
  ],
} as const;

export type Site = typeof site;

/** Numéro WhatsApp au format international sans espaces ni « + » (lien wa.me). */
export const whatsappNumber = site.contact.whatsapp.replace(/[^\d]/g, "");

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
