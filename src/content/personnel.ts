import type { I18nText, StaffRole } from "./types";

/**
 * Personnel d'exploitation — source : informations transmises par le client.
 * Effectifs, organisation et méthodologie repris tels quels (français reformulé
 * pour la présentation, sans en modifier le sens). Aucune répartition des postes
 * entre équipes ni horaire supplémentaire n'est fourni ici.
 */

const roles: StaffRole[] = [
  { icon: "Users", count: 2, label: { fr: "Chefs d'équipe", en: "Team leaders" } },
  {
    icon: "Ship",
    count: 2,
    label: {
      fr: "Capitaines de plateforme de dragage",
      en: "Dredging platform captains",
    },
  },
  { icon: "Wrench", count: 4, label: { fr: "Mécaniciens", en: "Mechanics" } },
  { icon: "Zap", count: 4, label: { fr: "Électriciens", en: "Electricians" } },
  { icon: "Flame", count: 2, label: { fr: "Soudeurs", en: "Welders" } },
  { icon: "Anchor", count: 8, label: { fr: "Matelots", en: "Deckhands" } },
  {
    icon: "ShieldCheck",
    count: 4,
    label: { fr: "Agents de sécurité", en: "Security officers" },
  },
];

export const operationalStaff: {
  heading: I18nText;
  intro: I18nText;
  roles: StaffRole[];
  total: { count: number; label: I18nText };
  organisation: { title: I18nText; text: I18nText };
  method: { title: I18nText; text: I18nText };
} = {
  heading: { fr: "Personnel d'exploitation", en: "Operational staff" },
  intro: {
    fr: "26 personnes, réparties en deux équipes.",
    en: "26 people, organised into two teams.",
  },
  roles,
  total: {
    count: 26,
    label: { fr: "personnes au total", en: "people in total" },
  },
  organisation: {
    title: { fr: "Organisation", en: "Organisation" },
    text: {
      fr: "Le personnel est réparti en deux équipes.",
      en: "The staff is divided into two teams.",
    },
  },
  method: {
    title: { fr: "Méthodologie de travail", en: "Working method" },
    text: {
      fr: "Une équipe est présente sur site pendant 24 heures. Le lendemain matin, la seconde équipe vient relever la précédente.",
      en: "One team stays on site for 24 hours. The next morning, the second team comes to relieve the previous one.",
    },
  },
};
