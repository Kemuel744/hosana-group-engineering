import type { EquipmentItem } from "./types";

/**
 * Catalogue des moyens — source : cahier des charges §5 + plaquettes + template.
 * ⚠️ Les valeurs chiffrées (capacité, puissance, profondeur…) ne figurent pas
 * sur les supports fournis. Elles sont marquées « à confirmer » : à renseigner
 * par le client avant mise en ligne — aucun chiffre ne doit être inventé.
 */

const TBC = { fr: "à confirmer", en: "to be confirmed" };

export const equipements: EquipmentItem[] = [
  {
    slug: "drague-aspiratrice",
    icon: "Ship",
    category: { fr: "Dragage", en: "Dredging" },
    name: { fr: "Dragues aspiratrices", en: "Suction dredgers" },
    tagline: {
      fr: "Capacité de pompage élevée pour tous types de sédiments.",
      en: "High pumping capacity for all types of sediment.",
    },
    description: {
      fr: "Unités de dragage par aspiration pour l'extraction et le refoulement des sédiments en milieu portuaire et fluvial.",
      en: "Suction dredging units for extraction and pipeline discharge of sediments in port and river environments.",
    },
    specs: [
      { label: { fr: "Capacité de pompage", en: "Pumping capacity" }, value: TBC },
      { label: { fr: "Concentration de solides", en: "Solids concentration" }, value: TBC },
      { label: { fr: "Profondeur maximale", en: "Maximum depth" }, value: TBC },
      { label: { fr: "Distance de refoulement", en: "Discharge distance" }, value: TBC },
    ],
    applications: [
      { fr: "Dragage portuaire et de chenaux", en: "Port and channel dredging" },
      { fr: "Désensablement", en: "Desanding" },
      { fr: "Entretien des plans d'eau", en: "Waterway maintenance" },
    ],
  },
  {
    slug: "pompe-de-dragage",
    icon: "Wrench",
    category: { fr: "Dragage", en: "Dredging" },
    name: { fr: "Pompes de dragage", en: "Dredge pumps" },
    tagline: {
      fr: "Puissance et fiabilité pour vos projets.",
      en: "Power and reliability for your projects.",
    },
    description: {
      fr: "Pompes centrifuges à sédiments (type Toyo ou équivalent) pour l'aspiration et le transfert de matériaux chargés.",
      en: "Centrifugal slurry pumps (Toyo type or equivalent) for suction and transfer of loaded materials.",
    },
    specs: [
      { label: { fr: "Débit", en: "Flow rate" }, value: TBC },
      { label: { fr: "Puissance", en: "Power" }, value: TBC },
      { label: { fr: "Diamètre de sortie", en: "Outlet diameter" }, value: TBC },
    ],
    applications: [
      { fr: "Refoulement de sédiments", en: "Sediment discharge" },
      { fr: "Assèchement et transfert", en: "Dewatering and transfer" },
    ],
  },
  {
    slug: "barges-plateformes",
    icon: "Sailboat",
    category: { fr: "Moyens flottants", en: "Floating means" },
    name: { fr: "Barges et plateformes", en: "Barges and platforms" },
    tagline: {
      fr: "Solutions de transport et de travaux maritimes.",
      en: "Transport and marine works solutions.",
    },
    description: {
      fr: "Barges de transport et de travail et plateformes modulaires équipées de treuils, pour l'acheminement de matériel et le support des opérations maritimes.",
      en: "Transport and work barges and modular winch-equipped platforms, for moving equipment and supporting marine operations.",
    },
    specs: [
      { label: { fr: "Longueur × largeur", en: "Length × beam" }, value: TBC },
      { label: { fr: "Charge utile", en: "Payload" }, value: TBC },
      { label: { fr: "Tirant d'eau", en: "Draught" }, value: TBC },
      { label: { fr: "Nombre de treuils", en: "Number of winches" }, value: TBC },
    ],
    applications: [
      { fr: "Transport de matériel et de sédiments", en: "Transport of equipment and sediments" },
      { fr: "Support de dragage et travaux de quais", en: "Dredging support and berth works" },
    ],
  },
  {
    slug: "equipements-de-plongee",
    icon: "LifeBuoy",
    category: { fr: "Plongée", en: "Diving" },
    name: { fr: "Équipements de plongée", en: "Diving equipment" },
    tagline: {
      fr: "Interventions sous-marines en toute sécurité.",
      en: "Safe underwater operations.",
    },
    description: {
      fr: "Ensemble d'équipements de plongée professionnelle pour l'inspection, la maintenance et les travaux subaquatiques.",
      en: "Professional diving equipment set for inspection, maintenance and subaquatic works.",
    },
    specs: [
      { label: { fr: "Profondeur d'intervention", en: "Operating depth" }, value: TBC },
      { label: { fr: "Alimentation en surface", en: "Surface-supplied air" }, value: TBC },
      { label: { fr: "Outillage sous-marin", en: "Underwater tooling" }, value: TBC },
    ],
    applications: [
      { fr: "Inspection de quais et de coques", en: "Inspection of berths and hulls" },
      { fr: "Découpe et soudage sous-marins", en: "Underwater cutting and welding" },
    ],
  },
  {
    slug: "pelle-longue-portee",
    icon: "Construction",
    category: { fr: "Engins de chantier", en: "Site machinery" },
    name: { fr: "Pelles longue portée", en: "Long-reach excavators" },
    tagline: {
      fr: "Curage, terrassement et travaux sous-marins peu profonds.",
      en: "Dredging, earthworks and shallow underwater works.",
    },
    description: {
      fr: "Pelles hydrauliques à bras long pour le curage, le terrassement et les travaux sous-marins peu profonds.",
      en: "Long-boom hydraulic excavators for dredging, earthworks and shallow underwater works.",
    },
    specs: [
      { label: { fr: "Portée", en: "Reach" }, value: TBC },
      { label: { fr: "Profondeur de travail", en: "Working depth" }, value: TBC },
      { label: { fr: "Marteau hydraulique", en: "Hydraulic hammer" }, value: TBC },
    ],
    applications: [
      { fr: "Curage et terrassement", en: "Dredging and earthworks" },
      { fr: "Travaux sous-marins peu profonds", en: "Shallow underwater works" },
    ],
  },
  {
    slug: "materiel-de-levage",
    icon: "Anchor",
    category: { fr: "Levage & chantier", en: "Lifting & site" },
    name: { fr: "Matériel de levage & de chantier", en: "Lifting & site equipment" },
    tagline: {
      fr: "Manutention pour la construction métallique et les opérations portuaires.",
      en: "Handling for steelwork and port operations.",
    },
    description: {
      fr: "Moyens de levage et de manutention pour la construction métallique, l'assemblage de barges et les opérations portuaires.",
      en: "Lifting and handling means for steelwork, barge assembly and port operations.",
    },
    specs: [
      { label: { fr: "Capacité de levage", en: "Lifting capacity" }, value: TBC },
      { label: { fr: "Type d'engins", en: "Equipment type" }, value: TBC },
    ],
    applications: [
      { fr: "Assemblage de structures métalliques", en: "Steel structure assembly" },
      { fr: "Manutention sur chantier et sur quai", en: "Site and quayside handling" },
    ],
  },
];

export function getEquipment(slug: string) {
  return equipements.find((e) => e.slug === slug);
}

/** Les 4 moyens mis en avant sur l'accueil (template validé). */
export const homeEquipment = [
  "drague-aspiratrice",
  "pompe-de-dragage",
  "barges-plateformes",
  "equipements-de-plongee",
].map((slug) => equipements.find((e) => e.slug === slug)!);
