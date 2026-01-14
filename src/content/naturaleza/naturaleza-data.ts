import {
  TreePine,
  Waves,
  Bird,
  Heart,
  MapPin,
  Anchor,
  Sun,
  Camera,
  Compass,
  Footprints,
  Umbrella,
  Info,
  Binoculars,
  CloudRain,
  Users,
  Smile,
  Leaf,
} from "lucide-react";

export const intro = {
  title: "Naturaleza y Turismo Responsable",
  description:
    "Puerto Limón es un destino extraordinario para quienes aman la naturaleza en su estado más puro. Su posición en la costa Caribe de Costa Rica hace de esta región un crisol de bosques tropicales, playas vírgenes, manglares, ríos, canales y vida silvestre diversa, todo accesible de forma responsable y respetuosa con el medio ambiente.",
  highlight:
    "Esta sección celebra los lugares más hermosos y las experiencias sostenibles que hacen de Limón un paraíso para el ecoturismo y la vida al aire libre.",
  context:
    "Limón posee el mayor porcentaje de tierras protegidas del país, con una enorme biodiversidad en bosques tropicales, playas y montañas, lo que lo convierte en un destino ideal para ecoturismo responsable.",
};

export const cahuita = {
  title: "Parque Nacional Cahuita",
  subtitle: "Selva, playa y arrecifes",
  description:
    "El Parque Nacional Cahuita es uno de los destinos naturales más emblemáticos del Caribe costarricense. Aquí naturaleza y mar se encuentran: senderos selváticos bordean largas playas de arena blanca, mientras arrecifes coralinos vibran bajo las olas.",
  activities: [
    "Recorrer el sendero costero rodeado de selva",
    "Observar fauna como monos, iguanas y aves",
    "Hacer snorkel en aguas turquesas",
    "Caminar por playas naturales",
    "Visitas guiadas con naturalistas locales",
  ],
  conclusion:
    "Cahuita es ideal para experimentar la naturaleza sin barreras: puedes ver animales y plantas en su ambiente natural, mientras aprendes de guías comprometidos con turismo responsable.",
  icon: TreePine,
  image: "/assets/naturaleza/ParqueNacionalCahuita.jpeg",
};

export const tortuguero = {
  title: "Canales de Tortuguero",
  subtitle: "Naturaleza desde el agua",
  description:
    "A poca distancia de Puerto Limón están los canales de Tortuguero, una red de lagos y ríos que serpentean entre bosques húmedos y pantanos.",
  activities: [
    "Navegar por canales en bote ecológico",
    "Avistar aves acuáticas y fauna silvestre",
    "Explorar manglares y humedales",
    "Observación de fauna con guías especializados",
  ],
  conclusion:
    "Los paseos por los canales permiten ver caimanes, tortugas, aves exóticas y fauna acuática en un entorno que parece sacado de un documental.",
  icon: Anchor,
  image: "/assets/naturaleza/CanalesTortuguero.jpg",
};

export const destinations = [
  {
    title: "Isla Uvita (Quiribrí)",
    subtitle: "Historia y naturaleza frente al puerto",
    description:
      "Frente a las costas de Puerto Limón se alza la Isla Uvita, un sitio de enorme valor histórico donde Cristóbal Colón arribó en 1502. Hoy es un destino perfecto para una escapada rápida de naturaleza y surf.",
    activities: [
      "Tour en bote desde el puerto",
      "Surf en olas de clase mundial",
      "Caminatas por senderos históricos",
      "Picnic en áreas designadas",
    ],
    conclusion:
      "Un pequeño oasis insular que combina la historia del encuentro de culturas con la belleza escénica del Caribe.",
    icon: Compass,
    image: "/assets/naturaleza/IslaUvita.jpg",
  },
  {
    title: "Refugio Gandoca-Manzanillo",
    subtitle: "Biodiversidad extrema",
    description:
      "Al sur de la provincia, este refugio protege algunos de los ecosistemas más diversos de Costa Rica, incluyendo arrecifes, humedales y bosques lluviosos intactos.",
    activities: [
      "Observación de delfines (tours responsables)",
      "Desove de tortugas (en temporada)",
      "Caminata al mirador de Manzanillo",
      "Playas de aguas cristalinas",
    ],
    conclusion:
      "El lugar perfecto para quienes buscan desconexión total y contacto íntimo con la vida silvestre.",
    icon: Bird,
    image: "/assets/naturaleza/RefugioGandoca.jpg",
  },
  {
    title: "Veragua Rainforest Park",
    subtitle: "Aventura y educación",
    description:
      "Parque de naturaleza con actividades de aventuras y educación sobre la fauna y flora tropical; ofrece canopy tours, jardines de mariposas y senderos interpretativos.",
    activities: [
      "Canopy tours",
      "Jardín de mariposas",
      "Senderos interpretativos",
      "Investigación científica",
    ],
    conclusion:
      "Un centro de investigación y aventura inmerso en la selva tropical.",
    icon: TreePine,
    image: "/assets/naturaleza/VeraguaRainforestPark.jpg",
  },
  {
    title: "Playa Bonita",
    subtitle: "Descanso cerca del puerto",
    description:
      "Playa cercana a Puerto Limón con arena blanca y ambientes más tranquilos, perfecta para descanso y baño responsable.",
    activities: [
      "Baño responsable",
      "Relajación en la arena",
      "Restaurantes locales",
      "Surf (en ciertas condiciones)",
    ],
    conclusion: "El escape perfecto a minutos del centro de la ciudad.",
    icon: Umbrella,
    image: "/assets/naturaleza/PlayaBonita.jpg",
  },
];

export const ecoTours = {
  title: "Tours ecológicos y experiencias guiadas",
  description:
    "Estas actividades refuerzan el enfoque de turismo responsable y dan ideas de experiencias reales que los visitantes y locales pueden disfrutar:",
  items: [
    {
      text: "Paseos guiados por manglares y canales",
      detail:
        "Tour en bote por los canales de Tortuguero con guías especializados.",
    },
    {
      text: "Senderismo interpretativo con guías locales",
      detail:
        "Caminatas acompañadas por naturalistas que enseñan sobre especies y ecosistemas.",
    },
    {
      text: "Experiencias culturales + naturaleza",
      detail:
        "Tours que combinan naturaleza con historia, plantaciones y pueblos cercanos.",
    },
    {
      text: "Tour de cacao y productos agrícolas sostenibles",
      detail:
        "Visitas a fincas ecológicas para probar chocolate artesanal local.",
    },
  ],
  conclusion:
    "Estas experiencias te permiten conectar con la fauna y flora tropical sin interferir en sus ciclos naturales.",
  icon: MapPin,
};

export const wildlife = {
  title: "Fauna y Observación",
  description:
    "Sugerencias de experiencias centradas en los animales como parte de un turismo responsable:",
  items: [
    {
      title: "Observación respetuosa",
      desc: "Tours de perezosos, monos y aves en su hábitat natural sin perturbarlos.",
    },
    {
      title: "Santuarios y Rescate",
      desc: "Visita centros que promueven el bienestar animal y la rehabilitación.",
    },
  ],
  icon: Binoculars,
};

export const seasons = {
  title: "¿Cuándo visitar Limón?",
  description:
    "El Caribe tiene su propio microclima, distinto al resto del país. Aquí 'Invierno' y 'Verano' se mezclan para mantener la selva siempre viva.",
  items: [
    {
      season: "Temporada Seca (El 'Verano' Caribeño)",
      months: "Febrero - Marzo y Septiembre - Octubre",
      desc: "Los meses más soleados y con el mar más calmo. Ideales para snorkel, buceo y disfrutar de las playas transparentes de Cahuita y Manzanillo.",
      icon: Sun,
    },
    {
      season: "Temporada Verde (Lluvias)",
      months: "Mayo - Julio y Noviembre - Enero",
      desc: "Las lluvias revitalizan la selva y aumentan el caudal de los canales de Tortuguero, facilitando la navegación y activando la vida silvestre. Es la mejor época para ver tortugas desovar.",
      icon: CloudRain,
    },
  ],
};

export const etiquette = {
  title: "Reglas no escritas del Caribe",
  intro: "Principios simples para fluir con la cultura local:",
  items: [
    {
      text: "Respeto al ritmo local",
      sub: "Aquí el tiempo fluye diferente. Relájate, no hay prisa.",
      icon: Smile,
    },
    {
      text: "Pregunta antes de la foto",
      sub: "Especialmente con personas. Un '¿puedo?' y una sonrisa abren puertas.",
      icon: Camera,
    },
    {
      text: "Manejo consciente de residuos",
      sub: "Si lo trajiste, llévatelo. Especialmente plásticos en las playas.",
      icon: Leaf,
    },
    {
      text: "Observación, no interacción",
      sub: "Disfruta la fauna desde lejos. No alimentes ni toques animales silvestres.",
      icon: Binoculars,
    },
  ],
};

export const ecosystems = {
  title: "Ecosistemas de Limón",
  description: "Un mosaico de vida en pocos kilómetros.",
  items: [
    {
      name: "Arrecifes Coralinos",
      desc: "Jardines submarinos llenos de vida en Cahuita y Manzanillo.",
      icon: Waves,
    },
    {
      name: "Bosque Tropical Húmedo",
      desc: "El pulmón verde denso y siempre activo que cubre la montañas.",
      icon: TreePine,
    },
    {
      name: "Manglares y Canales",
      desc: "Laberintos de agua salobre vitales para la reproducción marina.",
      icon: Anchor,
    },
    {
      name: "Playas Selváticas",
      desc: "Donde el bosque llega hasta la orilla del mar.",
      icon: Umbrella,
    },
  ],
};

export const community = {
  title: "Naturaleza y Comunidad",
  text: "El turismo responsable es el motor que permite a muchas familias limonenses prosperar sin destruir su entorno. Al contratar un guía local, comprar artesanía auténtica o visitar una reserva familiar, estás inyectando recursos directamente en la conservación.",
  highlight:
    "Conectar con la naturaleza es también conectar con quienes la cuidan.",
};

export const principles = {
  title: "Turismo responsable: principios para preservar Limón",
  description:
    "El turismo responsable en Limón no solo consiste en visitar lugares hermosos; se trata también de protegerlos para futuras generaciones.",
  items: [
    "Buscar certificaciones turísticas sostenibles (CST).",
    "Preferir guías locales certificados con conocimiento real.",
    "Respetar senderos y límites marcados en áreas protegidas.",
    "No alimentar ni acercarse forzosamente a la fauna.",
    "Participar en actividades que beneficien a las comunidades.",
  ],
  conclusion:
    "Este enfoque permite que las bellezas naturales de Limón sigan intactas, generando bienestar local.",
  icon: Heart,
};

export const routes = {
  title: "Rutas y combinaciones de experiencias",
  options: [
    {
      name: "Ruta Día Natural",
      steps: ["Cahuita", "Canales Tortuguero", "Playa Bonita"],
      note: "Con guía, agua y snacks locales.",
    },
    {
      name: "Ruta Eco Cultural",
      steps: ["Tour de Cacao", "Caminata en bosque", "Veragua Rainforest"],
      note: "Inmersión total.",
    },
    {
      name: "Ruta Aventura Suave",
      steps: ["Botes por manglares", "Snorkeling en Cahuita", "Atardecer"],
      note: "Ideal para familias.",
    },
  ],
  icon: Footprints,
};

export const gallery = {
  title: "Vistas de Limón",
  description: "Una pequeña muestra de la biodiversidad que te espera.",
  images: [
    // Add paths here when available
    "",
    "",
    "",
    "",
  ],
};

export const outro = {
  title: "Conectar con la naturaleza desde el respeto",
  text: "La naturaleza de Limón no es solo un fondo de postal: es un sistema vivo, lleno de historias, sonidos, colores y sensaciones únicas.",
  cta: "Limón te invita a caminar sus senderos, navegar sus canales y descansar en sus playas. Elige experiencias sostenibles y cuida lo que visitas.",
};
