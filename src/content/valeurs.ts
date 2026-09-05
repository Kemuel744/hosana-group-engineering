import type { Value } from "./types";

/** Engagements / valeurs — source : plaquette « NOS ENGAGEMENTS ». */
export const valeurs: Value[] = [
  {
    icon: "ShieldCheck",
    title: { fr: "Sécurité zéro compromis", en: "Zero-compromise safety" },
    description: {
      fr: "La sécurité de nos équipes et de nos clients est notre priorité absolue.",
      en: "The safety of our teams and clients is our absolute priority.",
    },
  },
  {
    icon: "Award",
    title: { fr: "Qualité & excellence", en: "Quality & excellence" },
    description: {
      fr: "Nous garantissons des prestations conformes aux normes et standards internationaux.",
      en: "We guarantee services compliant with international norms and standards.",
    },
  },
  {
    icon: "Lightbulb",
    title: { fr: "Innovation continue", en: "Continuous innovation" },
    description: {
      fr: "Nous investissons dans les technologies et les méthodes les plus performantes.",
      en: "We invest in the most effective technologies and methods.",
    },
  },
  {
    icon: "Handshake",
    title: { fr: "Intégrité & transparence", en: "Integrity & transparency" },
    description: {
      fr: "Des relations basées sur la confiance, l'éthique et la transparence.",
      en: "Relationships built on trust, ethics and transparency.",
    },
  },
  {
    icon: "Star",
    title: { fr: "Satisfaction client", en: "Client satisfaction" },
    description: {
      fr: "Votre satisfaction est notre plus grande réussite.",
      en: "Your satisfaction is our greatest achievement.",
    },
  },
];

/** Atouts concurrentiels — source : plaquettes « NOS ATOUTS ». */
export const atouts: { fr: string; en: string }[] = [
  { fr: "Équipe qualifiée et expérimentée", en: "Qualified and experienced team" },
  { fr: "Matériels et équipements modernes", en: "Modern equipment and machinery" },
  { fr: "Respect des délais et des budgets", en: "On-time and on-budget delivery" },
  { fr: "Maîtrise des normes HSE et environnementales", en: "Command of HSE and environmental standards" },
  { fr: "Approche intégrée et solutions sur mesure", en: "Integrated approach and tailored solutions" },
  { fr: "Réactivité et proximité", en: "Responsiveness and proximity" },
  {
    fr: "Capacité d'intervention sur tout le territoire et à l'international",
    en: "Ability to operate nationwide and internationally",
  },
];
