export type BuildingMarker = {
  id: string;
  nombre: string;
  direccion: string;
  position: [number, number];
  año?: number;
  estilo?: string;
  patrimonio?: string;
  estado?: string;
};

export const buildings: BuildingMarker[] = [
  {
    id: "correos-telegrafos",
    nombre: "Edificio de Correos y Telégrafos",
    direccion: "Av. 2, entre calles 1 y 3, Puerto Limón",
    position: [9.991789483423373, -83.02887770695054],
    año: 1911,
    estilo: "Ecléctico",
    patrimonio: "1981",
    estado: "Edificio histórico activo",
  },
  {
    id: "casa-episcopal",
    nombre: "Casa Episcopal",
    direccion: "Calle 3, Av. 2, Puerto Limón",
    position: [9.992660122934568, -83.03076323852713],
    año: 1940,
    estilo: "Neocolonial",
    patrimonio: "2013",
    estado: "Edificio institucional activo",
  },
  {
    id: "casa-cultura",
    nombre: "Casa de la Cultura",
    direccion: "Calle 2, Av. 2, Puerto Limón",
    position: [9.993475811250052, -83.02846665867543],
    año: 1938,
    estilo: "Art Déco",
    patrimonio: "1985",
    estado: "Centro Cultural Activo",
  },
  {
    id: "black-star-line",
    nombre: "Black Star Line / Liberty Hall",
    direccion: "Calle 1, Av. 3, Puerto Limón",
    position: [9.993, -83.029], // Estimated based on nearby points to avoid being off-map
    año: 1922,
    estilo: "Arquitectura caribeña tradicional",
    patrimonio: "2000",
    estado: "Espacio de memoria",
  },
  {
    id: "palacio-municipal",
    nombre: "Palacio Municipal",
    direccion: "Costado norte del Parque Vargas, Puerto Limón",
    position: [9.99313400806893, -83.02545448358426],
    año: 1942,
    estilo: "Neoclásico",
    patrimonio: "2002",
    estado: "Edificio gubernamental activo",
  },
  {
    id: "parque-vargas",
    nombre: "Parque Vargas y Quiosco",
    direccion: "Frente al mar Caribe, Limón Centro",
    position: [9.992771465457897, -83.02511698911988],
    año: 1895,
    estilo: "Victoriano",
    patrimonio: "Patrimonio Cultural",
    estado: "Espacio público activo",
  },
  {
    id: "autoridad-portuaria",
    nombre: "Autoridad Portuaria",
    direccion: "Calle 4, Av. 3, Limón",
    position: [9.993356587693215, -83.02529640601976],
    año: 1930,
    estilo: "Afrocaribeño funcional",
    patrimonio: "1995",
    estado: "Edificio histórico activo",
  },
  {
    id: "casa-domino",
    nombre: "Casa del Dominó",
    direccion: "Centro de Limón (zona tradicional cercana al casco histórico)",
    position: [9.995659547902513, -83.03083478722502],
    año: 1960,
    estilo: "Espacio social tradicional",
    patrimonio: "Patrimonio cultural vivo",
    estado: "Patrimonio cultural vivo",
  },
  {
    id: "escuela-tomas-guardia",
    nombre: "Escuela General Tomás Guardia",
    direccion: "Calle 5, Av. 2, Limón",
    position: [9.992533318790958, -83.02996368907671],
    año: 1940,
    estilo: "Racionalista escolar",
    patrimonio: "1989",
    estado: "Institución educativa histórica",
  },
  {
    id: "pension-costa-rica",
    nombre: "Pensión Costa Rica",
    direccion: "Centro Histórico, Limón",
    position: [9.992783227889277, -83.02669084064912],
    año: 1905,
    estilo: "Ecléctico / Neoclásico",
    patrimonio: "Patrimonio",
    estado: "Edificio histórico",
  },
  {
    id: "estadio-big-boy",
    nombre: "Estadio de Béisbol Big Boy",
    direccion: "Barrio Roosevelt, Limón",
    position: [9.990850886948833, -83.03090044489694],
    año: 1897,
    estilo: "Funcional deportivo",
    patrimonio: "2002",
    estado: "Patrimonio cultural y social",
  },
  {
    id: "casa-misionera-bautista",
    nombre: "Casa Misionera Bautista",
    direccion: "Calle 4, Av. 2, Limón",
    position: [9.995607626826576, -83.03120084753571],
    año: 1890,
    estilo: "Victoriano caribeño",
    patrimonio: "Patrimonio",
    estado: "Patrimonio histórico activo",
  },
];
