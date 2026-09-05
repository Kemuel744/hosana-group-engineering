/**
 * Informations officielles de l'entreprise.
 *
 * Source : plaquettes commerciales HOSANNA GROUP ENGINEERING (sept. 2026).
 * ⚠️ À faire valider par le client avant mise en ligne :
 *   - graphie retenue : « HOSANNA » (2 N) — le logo actuel porte « HOSANA ».
 *   - numéros de téléphone (plusieurs variantes sur les supports existants).
 *   - adresse e-mail professionnelle (contact@… au lieu du Gmail actuel).
 *   - effectif « 30 personnes » et autres chiffres à confirmer.
 */

export const site = {
  name: "HOSANNA GROUP ENGINEERING",
  shortName: "Hosanna Group Engineering",
  legalId: "P21000000195306W", // NIU
  foundedRegion: "République du Congo & Afrique centrale",

  domain: {
    // À réserver — cf. cahier des charges §20.
    primary: "hosannagroupengineering.com",
    fallback: "hosanna-engineering.com",
  },

  url: "https://hosannagroupengineering.com",

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
    phones: ["+242 06 06 689 5788", "+242 04 418 3836"],
    whatsapp: "+242 04 418 3836",
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
  },

  stats: [
    { value: "30", labelFr: "collaborateurs qualifiés", labelEn: "skilled staff" },
    { value: "16+", labelFr: "domaines d'expertise", labelEn: "fields of expertise" },
    { value: "5", labelFr: "secteurs stratégiques servis", labelEn: "strategic sectors served" },
    { value: "H24", labelFr: "réactivité d'intervention", labelEn: "response readiness" },
  ],
} as const;

export type Site = typeof site;

/** Numéro WhatsApp au format international sans espaces ni « + » (lien wa.me). */
export const whatsappNumber = site.contact.whatsapp.replace(/[^\d]/g, "");

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
