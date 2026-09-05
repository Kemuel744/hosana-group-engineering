import type { Expertise } from "./types";

/**
 * 14 domaines d'expertise — source : plaquette « NOS DOMAINES D'EXPERTISE ».
 * Textes FR issus des supports commerciaux ; traductions EN à faire relire
 * par un traducteur technique avant mise en ligne.
 */
export const expertises: Expertise[] = [
  {
    slug: "ingenierie-maritime-construction-navale",
    icon: "Ship",
    order: 1,
    featured: true,
    title: {
      fr: "Ingénierie maritime & construction navale",
      en: "Marine engineering & shipbuilding",
    },
    summary: {
      fr: "Conception, fabrication et réparation de navires et d'embarcations, études techniques et modélisation 3D.",
      en: "Design, construction and repair of vessels and craft, technical studies and 3D modelling.",
    },
    description: {
      fr: "Nous accompagnons les projets maritimes de l'étude à la mise à l'eau : dimensionnement de structures, construction et réparation de barges et de plateformes flottantes, modification d'équipements maritimes et modélisation 3D des ouvrages.",
      en: "We support marine projects from study to launch: structural sizing, construction and repair of barges and floating platforms, modification of marine equipment and 3D modelling of structures.",
    },
    services: [
      { fr: "Conception et études techniques", en: "Design and technical studies" },
      { fr: "Construction de barges et de plateformes flottantes", en: "Construction of barges and floating platforms" },
      { fr: "Réparation de barges et de bateaux", en: "Repair of barges and boats" },
      { fr: "Fabrication de structures métalliques", en: "Fabrication of steel structures" },
      { fr: "Modification d'équipements maritimes", en: "Modification of marine equipment" },
      { fr: "Modélisation 3D des ouvrages", en: "3D modelling of structures" },
    ],
    means: [
      { fr: "Atelier de chaudronnerie et de soudure", en: "Boilermaking and welding workshop" },
      { fr: "Moyens de levage et de manutention", en: "Lifting and handling equipment" },
    ],
  },
  {
    slug: "dragage-maritime-fluvial",
    icon: "Waves",
    order: 2,
    featured: true,
    title: {
      fr: "Dragage maritime & fluvial",
      en: "Maritime & inland dredging",
    },
    summary: {
      fr: "Dragage d'entretien, désensablement, récupération du tirant d'eau, évacuation et transport des sédiments.",
      en: "Maintenance dredging, desanding, draught recovery, sediment removal and transport.",
    },
    description: {
      fr: "Nous réalisons des opérations de dragage portuaire, de dragage de quais, de dragage de chenaux et de dragage d'entretien, avec refoulement et transport des sédiments par barges, y compris en eaux peu profondes.",
      en: "We carry out port dredging, berth dredging, channel dredging and maintenance dredging, with discharge and barge transport of sediments, including in shallow water.",
    },
    services: [
      { fr: "Dragage portuaire et dragage de quais", en: "Port and berth dredging" },
      { fr: "Dragage de chenaux et d'entretien", en: "Channel and maintenance dredging" },
      { fr: "Désensablement et extraction de sédiments", en: "Desanding and sediment extraction" },
      { fr: "Dragage avec refoulement", en: "Dredging with discharge pipeline" },
      { fr: "Transport des sédiments par barges", en: "Barge transport of sediments" },
    ],
    means: [
      { fr: "Dragues aspiratrices", en: "Suction dredgers" },
      { fr: "Pompes de dragage", en: "Dredge pumps" },
      { fr: "Barges et plateformes flottantes", en: "Barges and floating platforms" },
      { fr: "Tuyaux HDPE", en: "HDPE pipes" },
    ],
  },
  {
    slug: "travaux-sous-marins-plongee",
    icon: "LifeBuoy",
    order: 3,
    featured: true,
    title: {
      fr: "Travaux sous-marins & plongée professionnelle",
      en: "Underwater works & professional diving",
    },
    summary: {
      fr: "Inspection et maintenance des ouvrages immergés, travaux subaquatiques spécialisés et recherche d'objets.",
      en: "Inspection and maintenance of submerged structures, specialised subaquatic works and object recovery.",
    },
    description: {
      fr: "Nos équipes de plongeurs professionnels interviennent sur les quais, les coques et les ouvrages immergés : inspection, maintenance, découpe et soudage sous-marins, assistance aux travaux portuaires.",
      en: "Our professional diving teams work on berths, hulls and submerged structures: inspection, maintenance, underwater cutting and welding, support to port operations.",
    },
    services: [
      { fr: "Inspection sous-marine de quais et de coques", en: "Underwater inspection of berths and hulls" },
      { fr: "Maintenance d'ouvrages immergés", en: "Maintenance of submerged structures" },
      { fr: "Découpe et soudage sous-marins", en: "Underwater cutting and welding" },
      { fr: "Recherche et récupération d'objets", en: "Search and recovery of objects" },
      { fr: "Assistance aux travaux portuaires", en: "Support to port works" },
    ],
    means: [
      { fr: "Équipements de plongée professionnelle", en: "Professional diving equipment" },
      { fr: "Moyens nautiques d'assistance", en: "Support vessels" },
    ],
  },
  {
    slug: "services-offshore",
    icon: "Anchor",
    order: 4,
    featured: true,
    title: { fr: "Services offshore", en: "Offshore services" },
    summary: {
      fr: "Maintenance d'infrastructures maritimes, inspection sous-marine et assistance technique aux opérations pétrolières.",
      en: "Maintenance of marine infrastructure, underwater inspection and technical support to oil & gas operations.",
    },
    description: {
      fr: "Nous fournissons aux opérateurs Oil & Gas des prestations d'inspection sous-marine de structures offshore, de maintenance d'infrastructures maritimes et d'assistance technique sur site.",
      en: "We provide oil & gas operators with underwater inspection of offshore structures, maintenance of marine infrastructure and on-site technical assistance.",
    },
    services: [
      { fr: "Inspection sous-marine de structures offshore", en: "Underwater inspection of offshore structures" },
      { fr: "Maintenance d'infrastructures maritimes", en: "Maintenance of marine infrastructure" },
      { fr: "Assistance technique aux opérations pétrolières", en: "Technical support to oil operations" },
    ],
    means: [
      { fr: "Équipes de plongeurs certifiés", en: "Certified diving teams" },
      { fr: "Moyens d'inspection et de mesure", en: "Inspection and survey equipment" },
    ],
  },
  {
    slug: "batiment-travaux-publics",
    icon: "Building2",
    order: 5,
    featured: true,
    title: { fr: "Bâtiment & travaux publics", en: "Building & civil works" },
    summary: {
      fr: "Construction, rénovation, voirie, assainissement et gestion de chantier.",
      en: "Construction, renovation, roadworks, drainage and site management.",
    },
    description: {
      fr: "Nous menons des projets de génie civil et de BTP : terrassement, construction et rénovation de bâtiments, travaux de voirie et d'assainissement, avec une gestion de chantier rigoureuse.",
      en: "We deliver civil engineering and building projects: earthworks, construction and renovation of buildings, roadworks and drainage, with rigorous site management.",
    },
    services: [
      { fr: "Terrassement et génie civil", en: "Earthworks and civil engineering" },
      { fr: "Construction et rénovation de bâtiments", en: "Building construction and renovation" },
      { fr: "Voirie et assainissement", en: "Roadworks and drainage" },
      { fr: "Structures métalliques et soudure industrielle", en: "Steel structures and industrial welding" },
      { fr: "Gestion et coordination de chantier", en: "Site management and coordination" },
    ],
    means: [
      { fr: "Engins de terrassement", en: "Earthmoving machinery" },
      { fr: "Ateliers de construction métallique", en: "Steel fabrication workshops" },
    ],
  },
  {
    slug: "ntic-cybersecurite",
    icon: "ShieldCheck",
    order: 6,
    featured: true,
    title: { fr: "NTIC & cybersécurité", en: "IT & cybersecurity" },
    summary: {
      fr: "Développement d'applications, installation de réseaux sécurisés, audit et protection des systèmes d'information.",
      en: "Application development, secure network deployment, audit and protection of information systems.",
    },
    description: {
      fr: "Notre pôle technologique conçoit des applications métier, déploie des réseaux sécurisés et réalise des audits de cybersécurité pour protéger les systèmes d'information de nos clients.",
      en: "Our technology division builds business applications, deploys secure networks and performs cybersecurity audits to protect our clients' information systems.",
    },
    services: [
      { fr: "Développement d'applications métier", en: "Business application development" },
      { fr: "Installation de réseaux sécurisés", en: "Secure network deployment" },
      { fr: "Audit de cybersécurité", en: "Cybersecurity audits" },
      { fr: "Protection des systèmes d'information", en: "Information system protection" },
    ],
    means: [
      { fr: "Équipe d'ingénieurs logiciels et réseaux", en: "Software and network engineering team" },
    ],
  },
  {
    slug: "energie-solaire",
    icon: "SunMedium",
    order: 7,
    featured: false,
    title: { fr: "Énergie solaire", en: "Solar energy" },
    summary: {
      fr: "Études de dimensionnement, installation de panneaux photovoltaïques et maintenance des installations.",
      en: "Sizing studies, photovoltaic panel installation and maintenance of installations.",
    },
    description: {
      fr: "Nous réalisons des études de dimensionnement énergétique, l'installation de systèmes photovoltaïques et leur maintenance, pour des sites industriels, tertiaires ou isolés.",
      en: "We carry out energy sizing studies, install photovoltaic systems and maintain them, for industrial, commercial or off-grid sites.",
    },
    services: [
      { fr: "Étude de dimensionnement énergétique", en: "Energy sizing study" },
      { fr: "Installation de panneaux photovoltaïques", en: "Photovoltaic panel installation" },
      { fr: "Maintenance des installations solaires", en: "Solar installation maintenance" },
    ],
    means: [{ fr: "Techniciens qualifiés photovoltaïque", en: "Qualified PV technicians" }],
  },
  {
    slug: "maintenance-mecanique-industrielle",
    icon: "Wrench",
    order: 8,
    featured: false,
    title: {
      fr: "Maintenance mécanique & industrielle",
      en: "Mechanical & industrial maintenance",
    },
    summary: {
      fr: "Maintenance préventive et corrective, réparation d'équipements hydrauliques, mécaniques et électromécaniques.",
      en: "Preventive and corrective maintenance, repair of hydraulic, mechanical and electromechanical equipment.",
    },
    description: {
      fr: "Nous assurons la maintenance préventive et corrective d'équipements industriels, la réparation de composants hydrauliques et mécaniques, ainsi que l'installation d'équipements.",
      en: "We provide preventive and corrective maintenance of industrial equipment, repair of hydraulic and mechanical components, and equipment installation.",
    },
    services: [
      { fr: "Maintenance préventive et corrective", en: "Preventive and corrective maintenance" },
      { fr: "Réparation d'équipements hydrauliques et mécaniques", en: "Repair of hydraulic and mechanical equipment" },
      { fr: "Maintenance électromécanique", en: "Electromechanical maintenance" },
      { fr: "Installation d'équipements", en: "Equipment installation" },
    ],
    means: [
      { fr: "Groupes électrogènes et composants", en: "Generator sets and components" },
      { fr: "Atelier mécanique mobile", en: "Mobile mechanical workshop" },
    ],
  },
  {
    slug: "transport-logistique-maritime",
    icon: "Truck",
    order: 9,
    featured: false,
    title: {
      fr: "Transport & logistique maritime",
      en: "Maritime transport & logistics",
    },
    summary: {
      fr: "Transport de matériaux, d'équipements et de sédiments, logistique et acheminement vers les zones de travaux.",
      en: "Transport of materials, equipment and sediments, logistics and delivery to work sites.",
    },
    description: {
      fr: "Nous organisons le transport par voie maritime de matériaux et d'équipements, l'acheminement vers les zones de travaux et l'assistance logistique aux opérations.",
      en: "We organise the maritime transport of materials and equipment, delivery to work sites and logistical support to operations.",
    },
    services: [
      { fr: "Transport maritime de matériel", en: "Maritime transport of equipment" },
      { fr: "Acheminement vers les zones de travaux", en: "Delivery to work sites" },
      { fr: "Assistance logistique aux opérations", en: "Logistical support to operations" },
      { fr: "Installation de tuyauteries flottantes", en: "Installation of floating pipelines" },
    ],
    means: [
      { fr: "Barges de transport", en: "Transport barges" },
      { fr: "Moyens de remorquage", en: "Towing means" },
    ],
  },
  {
    slug: "chaudronnerie-soudure-metallique",
    icon: "Flame",
    order: 10,
    featured: false,
    title: {
      fr: "Chaudronnerie, soudure & construction métallique",
      en: "Boilermaking, welding & steelwork",
    },
    summary: {
      fr: "Fabrication et réparation de structures métalliques, soudure industrielle, fabrication de barges et de plateformes.",
      en: "Fabrication and repair of steel structures, industrial welding, construction of barges and platforms.",
    },
    description: {
      fr: "Notre atelier réalise la fabrication et la réparation de structures métalliques, la soudure industrielle certifiée et la construction de barges et de plateformes.",
      en: "Our workshop handles fabrication and repair of steel structures, certified industrial welding and construction of barges and platforms.",
    },
    services: [
      { fr: "Fabrication de structures métalliques", en: "Steel structure fabrication" },
      { fr: "Soudure industrielle certifiée", en: "Certified industrial welding" },
      { fr: "Réparation de barges et de plateformes", en: "Repair of barges and platforms" },
      { fr: "Tuyauterie industrielle", en: "Industrial piping" },
    ],
    means: [
      { fr: "Postes de soudure et de découpe", en: "Welding and cutting stations" },
      { fr: "Moyens de manutention lourde", en: "Heavy handling equipment" },
    ],
  },
  {
    slug: "mise-a-disposition-personnel",
    icon: "Users",
    order: 11,
    featured: false,
    title: {
      fr: "Mise à disposition de personnel & d'expertise",
      en: "Technical staff & expertise supply",
    },
    summary: {
      fr: "Équipes spécialisées, opérateurs d'engins, soudeurs, plongeurs, techniciens et personnel technique.",
      en: "Specialised teams, machine operators, welders, divers, technicians and technical staff.",
    },
    description: {
      fr: "Nous mettons à disposition des donneurs d'ordre du personnel technique qualifié : soudeurs, mécaniciens, plongeurs professionnels, conducteurs d'engins, techniciens et personnel de chantier ou maritime.",
      en: "We supply clients with qualified technical staff: welders, mechanics, professional divers, machine operators, technicians and site or marine personnel.",
    },
    services: [
      { fr: "Soudeurs et chaudronniers", en: "Welders and boilermakers" },
      { fr: "Plongeurs professionnels", en: "Professional divers" },
      { fr: "Conducteurs d'engins", en: "Machine operators" },
      { fr: "Mécaniciens et techniciens", en: "Mechanics and technicians" },
      { fr: "Personnel maritime et de chantier", en: "Marine and site personnel" },
    ],
    means: [{ fr: "Vivier de techniciens qualifiés", en: "Pool of qualified technicians" }],
  },
  {
    slug: "barges-plateformes-flottants",
    icon: "Sailboat",
    order: 12,
    featured: false,
    title: {
      fr: "Barges, plateformes & moyens flottants",
      en: "Barges, platforms & floating means",
    },
    summary: {
      fr: "Mise à disposition de barges, de plateformes, de pompes de dragage, de groupes électrogènes et d'équipements auxiliaires.",
      en: "Supply of barges, platforms, dredge pumps, generator sets and auxiliary equipment.",
    },
    description: {
      fr: "Nous louons et opérons des moyens flottants : barges, plateformes de travail, pompes de dragage et équipements auxiliaires, avec ou sans personnel d'exploitation.",
      en: "We hire out and operate floating means: barges, work platforms, dredge pumps and auxiliary equipment, with or without operating crew.",
    },
    services: [
      { fr: "Location de barges et de plateformes", en: "Barge and platform hire" },
      { fr: "Pompes de dragage et équipements auxiliaires", en: "Dredge pumps and auxiliary equipment" },
      { fr: "Groupes électrogènes", en: "Generator sets" },
      { fr: "Exploitation avec personnel dédié", en: "Operation with dedicated crew" },
    ],
    means: [
      { fr: "Flotte de barges et de plateformes", en: "Fleet of barges and platforms" },
    ],
  },
  {
    slug: "bathymetrie-hydrographie",
    icon: "Radar",
    order: 13,
    featured: true,
    title: { fr: "Bathymétrie & hydrographie", en: "Bathymetry & hydrography" },
    summary: {
      fr: "Levés bathymétriques, cartographie des fonds, calcul des volumes de sédiments et production de rapports techniques.",
      en: "Bathymetric surveys, seabed mapping, sediment volume calculation and technical reporting.",
    },
    description: {
      fr: "Nous réalisons les levés bathymétriques et les sondages des fonds, la cartographie sous-marine, le suivi des volumes dragués et les contrôles avant / après travaux, avec production de rapports techniques.",
      en: "We carry out bathymetric surveys and seabed soundings, underwater mapping, monitoring of dredged volumes and before / after checks, with technical reporting.",
    },
    services: [
      { fr: "Levés bathymétriques et sondages des fonds", en: "Bathymetric surveys and seabed soundings" },
      { fr: "Cartographie sous-marine", en: "Underwater mapping" },
      { fr: "Suivi des volumes dragués", en: "Monitoring of dredged volumes" },
      { fr: "Contrôles avant / après travaux", en: "Before / after works checks" },
      { fr: "Rapports techniques", en: "Technical reports" },
    ],
    means: [
      { fr: "Équipements de sondage", en: "Survey equipment" },
      { fr: "Embarcations de levé", en: "Survey boats" },
    ],
  },
  {
    slug: "travaux-maritimes-portuaires",
    icon: "Construction",
    order: 14,
    featured: false,
    title: {
      fr: "Travaux maritimes & portuaires",
      en: "Maritime & port works",
    },
    summary: {
      fr: "Entretien des ouvrages portuaires, travaux sur quais, aménagement et maintenance des installations.",
      en: "Maintenance of port structures, berth works, development and upkeep of installations.",
    },
    description: {
      fr: "Nous réalisons les travaux de quais, le désensablement, l'aménagement maritime, les travaux de stabilisation et l'assistance aux opérations portuaires.",
      en: "We carry out berth works, desanding, marine development, stabilisation works and support to port operations.",
    },
    services: [
      { fr: "Travaux de quais", en: "Berth works" },
      { fr: "Désensablement et aménagement maritime", en: "Desanding and marine development" },
      { fr: "Travaux de stabilisation", en: "Stabilisation works" },
      { fr: "Assistance aux opérations portuaires", en: "Support to port operations" },
    ],
    means: [
      { fr: "Barges et plateformes", en: "Barges and platforms" },
      { fr: "Pelles longue portée", en: "Long-reach excavators" },
    ],
  },
];

export function getExpertise(slug: string) {
  return expertises.find((e) => e.slug === slug);
}

export const featuredExpertises = expertises.filter((e) => e.featured);
