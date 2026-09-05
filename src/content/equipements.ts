import type { EquipmentItem } from "./types";

/**
 * Catalogue des équipements — source : cahier des charges §5 + plaquettes.
 * ⚠️ Les valeurs chiffrées (capacité, puissance, profondeur…) ne figurent pas
 * sur les supports fournis. Elles sont marquées « à confirmer » : à renseigner
 * par le client avant mise en ligne — aucun chiffre ne doit être inventé.
 */

const TBC = { fr: "à confirmer", en: "to be confirmed" };

export const equipements: EquipmentItem[] = [
  {
    slug: "drague-aspiratrice",
    category: { fr: "Dragage", en: "Dredging" },
    name: { fr: "Drague aspiratrice", en: "Suction dredger" },
    description: {
      fr: "Unité de dragage par aspiration pour l'extraction et le refoulement des sédiments en milieu portuaire et fluvial.",
      en: "Suction dredging unit for extraction and pipeline discharge of sediments in port and river environments.",
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
    category: { fr: "Dragage", en: "Dredging" },
    name: { fr: "Pompe de dragage", en: "Dredge pump" },
    description: {
      fr: "Pompe centrifuge à sédiments (type Toyo ou équivalent) pour l'aspiration et le transfert de matériaux chargés.",
      en: "Centrifugal slurry pump (Toyo type or equivalent) for suction and transfer of loaded materials.",
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
    slug: "barge",
    category: { fr: "Moyens flottants", en: "Floating means" },
    name: { fr: "Barge", en: "Barge" },
    description: {
      fr: "Barge de transport et de travail pour l'acheminement de matériel, de sédiments et le support des opérations maritimes.",
      en: "Transport and work barge for moving equipment and sediments and supporting marine operations.",
    },
    specs: [
      { label: { fr: "Longueur × largeur", en: "Length × beam" }, value: TBC },
      { label: { fr: "Charge utile", en: "Payload" }, value: TBC },
      { label: { fr: "Tirant d'eau", en: "Draught" }, value: TBC },
    ],
    applications: [
      { fr: "Transport de matériel et de sédiments", en: "Transport of equipment and sediments" },
      { fr: "Plateforme d'appui aux travaux", en: "Support platform for works" },
    ],
  },
  {
    slug: "plateforme-flottante",
    category: { fr: "Moyens flottants", en: "Floating means" },
    name: { fr: "Plateforme flottante", en: "Floating platform" },
    description: {
      fr: "Plateforme de travail modulaire équipée de treuils pour les interventions de dragage, de battage ou de manutention sur l'eau.",
      en: "Modular work platform fitted with winches for dredging, piling or handling operations on water.",
    },
    specs: [
      { label: { fr: "Dimensions", en: "Dimensions" }, value: TBC },
      { label: { fr: "Nombre de treuils", en: "Number of winches" }, value: TBC },
      { label: { fr: "Capacité de travail", en: "Working capacity" }, value: TBC },
    ],
    applications: [
      { fr: "Support de dragage", en: "Dredging support" },
      { fr: "Travaux de quais", en: "Berth works" },
      { fr: "Manutention sur l'eau", en: "On-water handling" },
    ],
  },
  {
    slug: "pelle-longue-portee",
    category: { fr: "Engins de chantier", en: "Site machinery" },
    name: { fr: "Pelle longue portée", en: "Long-reach excavator" },
    description: {
      fr: "Pelle hydraulique à bras long pour le curage, le terrassement et les travaux sous-marins peu profonds.",
      en: "Long-boom hydraulic excavator for dredging, earthworks and shallow underwater works.",
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
    slug: "equipements-de-plongee",
    category: { fr: "Plongée", en: "Diving" },
    name: { fr: "Équipements de plongée professionnelle", en: "Professional diving equipment" },
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
    slug: "materiel-de-levage",
    category: { fr: "Levage & chantier", en: "Lifting & site" },
    name: { fr: "Matériel de levage & de chantier", en: "Lifting & site equipment" },
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
