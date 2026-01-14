import { Trophy, Users, MapPin, Medal, Timer } from "lucide-react";

export const intro = {
  title: "Deportes en Limón",
  description:
    "El deporte es una parte fundamental de la vida social y comunitaria de Puerto Limón. Más allá del fútbol, la provincia se distingue por una amplia diversidad de disciplinas, una fuerte participación juvenil y una conexión directa entre deporte, comunidad e identidad. En Limón, el deporte no es solo competencia: es formación, convivencia y oportunidad.",
};

export const nationalGames = {
  title: "Juegos Deportivos y Paradeportivos Nacionales 2026",
  description:
    "En enero de 2026, la provincia fue sede de los Juegos Deportivos y Paradeportivos Nacionales, el evento multideportivo más importante del país a nivel formativo y competitivo. Limón se convirtió en el centro del deporte nacional, recibiendo a más de 5,000 atletas de todo Costa Rica.",
  dates: "12 al 24 de enero de 2026",
  venue: "Estadio Juan Gobán (Inauguración)",
  stats: [
    { label: "Atletas", value: "+5,000", icon: Users },
    { label: "Comités", value: "81", icon: MapPin },
    { label: "Disciplinas", value: "29", icon: Trophy },
  ],
  cantons: ["Limón", "Pococí", "Guácimo", "Siquirres", "Matina", "Talamanca"],
};

export const disciplines = {
  title: "Diversidad deportiva",
  description:
    "Aunque el fútbol mantiene una presencia relevante, Limón destaca por su participación en múltiples disciplinas deportivas con fuerte arraigo juvenil y comunitario.",
  list: [
    // Row 1 & 2: Atletismo (2x2) + 4 small items
    {
      name: "Atletismo",
      image: "/assets/Deporte/Atletismo.jpg",
      size: "large", // 2x2
    },
    {
      name: "Baloncesto Masculino",
      image: "/assets/Deporte/BaloncestoMasculino.jpg",
      size: "default", // 1x1
    },
    {
      name: "Baloncesto Femenino",
      image: "/assets/Deporte/BaloncestoFemenino.jpg",
      size: "default", // 1x1
    },
    {
      name: "Voleibol Masculino",
      image: "/assets/Deporte/VoleibolMasculino.jpg",
      size: "default", // 1x1
    },
    {
      name: "Voleibol Femenino",
      image: "/assets/Deporte/VoleibolFemenino.jpg",
      size: "default", // 1x1
    },

    // Row 3: Boxeo (2x1) + Judo (2x1)
    {
      name: "Boxeo",
      image: "/assets/Deporte/Boxeo.jpg",
      size: "wide", // 2x1
    },
    {
      name: "Judo",
      image: "/assets/Deporte/Judo.jpg",
      size: "wide", // 2x1
    },

    // Row 4: Ciclismo (2x1) + Taekwondo (1x1) + Rugby (1x1)
    {
      name: "Ciclismo",
      image: "/assets/Deporte/Ciclismo.jpg",
      size: "wide", // 2x1
    },
    {
      name: "Taekwondo",
      image: "/assets/Deporte/Taekwondo.jpg",
      size: "default", // 1x1
    },
    { name: "Rugby", image: "/assets/Deporte/Rugby.jpg", size: "default" },

    // Row 5 & 6: Gimnasia (2x2) + Cricket, Ajedrez on side + Porrismo below
    {
      name: "Gimnasia Rítmica",
      image: "/assets/Deporte/GimnasiaRitmica.jpg",
      size: "large", // 2x2
    },
    { name: "Cricket", image: "/assets/Deporte/Cricket.jpg", size: "default" },
    { name: "Ajedrez", image: "/assets/Deporte/Ajedrez.jpg", size: "default" },
    {
      name: "Porrismo y Surf",
      image: "/assets/Deporte/porrismo.jpg",
      size: "wide", // 2x1 (Spans col 3-4 in Row 6)
    },
  ],
};

export const youth = {
  title: "Deporte juvenil y formación",
  description:
    "Los Juegos Nacionales impulsaron procesos previos de eliminatorias cantonales y competencias escolares. Para muchos atletas, estas competencias representaron su primer escenario nacional, fortaleciendo valores como la disciplina, el trabajo en equipo y la superación personal.",
};

export const infrastructure = {
  title: "Infraestructura y Legado",
  description:
    "La organización de los juegos trajo consigo una mejora significativa en la infraestructura deportiva, con inversiones públicas que benefician a la comunidad a largo plazo.",
  items: [
    "Estadios de fútbol y béisbol",
    "Gimnasios multiuso",
    "Canchas y pistas atléticas",
    "Espacios adaptados para paradeportes",
  ],
};

export const testimonials = [
  {
    name: "Jimena Alvarado",
    role: "Ciclista",
    quote:
      "Trato de generar un cambio dedicándole cada uno de mis entrenamientos a limpiar el nombre de Limón, porque la provincia que es mi hogar alberga una cantidad inmensa de deportistas capaces.",
    image: "/assets/Deporte/Deportistas/Jimena.png",
  },
  {
    name: "Gerald Sequeira",
    role: "Rugbier",
    quote:
      "Cuando uno lo hace con el corazón, ya no se siente como un sacrificio, sino como una lección que nace del amor por lo que se hace.",
    image: "", // Pending
  },
];

export const dailyLife = {
  title: "El deporte en la vida cotidiana",
  items: [
    "Torneos comunales",
    "Ligas barriales",
    "Entrenamientos juveniles",
    "Actividades recreativas",
  ],
};

export const outro = {
  text: "Limón es una provincia que se mueve, entrena y compite. Desde eventos nacionales hasta actividades locales, el deporte sigue siendo una expresión viva de identidad.",
};
