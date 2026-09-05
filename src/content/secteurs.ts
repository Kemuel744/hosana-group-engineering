import type { Sector } from "./types";

/** Secteurs d'activité — source : cahier des charges §8 + plaquettes. */
export const secteurs: Sector[] = [
  {
    slug: "ports-infrastructures-portuaires",
    icon: "Anchor",
    name: { fr: "Ports & infrastructures portuaires", en: "Ports & port infrastructure" },
    description: {
      fr: "Dragage d'entretien, travaux de quais, bathymétrie et maintenance des ouvrages pour les autorités et opérateurs portuaires.",
      en: "Maintenance dredging, berth works, bathymetry and structure upkeep for port authorities and operators.",
    },
  },
  {
    slug: "oil-gas",
    icon: "Flame",
    name: { fr: "Oil & Gas", en: "Oil & Gas" },
    description: {
      fr: "Services offshore, inspection sous-marine et assistance technique aux opérations pétrolières et gazières.",
      en: "Offshore services, underwater inspection and technical support to oil & gas operations.",
    },
  },
  {
    slug: "maritime-transport",
    icon: "Ship",
    name: { fr: "Maritime & transport", en: "Maritime & transport" },
    description: {
      fr: "Construction et réparation navale, logistique maritime et transport de matériel par barges.",
      en: "Shipbuilding and repair, maritime logistics and barge transport of equipment.",
    },
  },
  {
    slug: "btp",
    icon: "Building2",
    name: { fr: "BTP", en: "Construction" },
    description: {
      fr: "Génie civil, bâtiment, voirie et assainissement pour les donneurs d'ordre publics et privés.",
      en: "Civil engineering, building, roadworks and drainage for public and private clients.",
    },
  },
  {
    slug: "mines",
    icon: "Truck",
    name: { fr: "Mines", en: "Mining" },
    description: {
      fr: "Maintenance mécanique, construction métallique et mise à disposition de personnel technique pour les sites miniers.",
      en: "Mechanical maintenance, steelwork and technical staff supply for mining sites.",
    },
  },
  {
    slug: "industrie",
    icon: "Wrench",
    name: { fr: "Industrie", en: "Industry" },
    description: {
      fr: "Maintenance industrielle, chaudronnerie, soudure et installation d'équipements.",
      en: "Industrial maintenance, boilermaking, welding and equipment installation.",
    },
  },
  {
    slug: "secteur-public",
    icon: "Landmark",
    name: { fr: "Secteur public", en: "Public sector" },
    description: {
      fr: "Accompagnement des institutions et organismes publics sur leurs projets d'infrastructures.",
      en: "Support to institutions and public bodies on their infrastructure projects.",
    },
  },
  {
    slug: "environnement-sediments",
    icon: "Waves",
    name: {
      fr: "Environnement & gestion des sédiments",
      en: "Environment & sediment management",
    },
    description: {
      fr: "Extraction, transport et gestion des sédiments dans le respect des normes environnementales.",
      en: "Extraction, transport and management of sediments in line with environmental standards.",
    },
  },
];
