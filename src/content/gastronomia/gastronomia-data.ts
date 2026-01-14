import {
  Utensils,
  Coffee,
  Leaf,
  Beer,
  ShoppingBag,
  MapPin,
  Clock,
  Info,
} from "lucide-react";

export const gastronomiaContent = {
  hero: {
    title: "Gastronomía de Puerto Limón",
    subtitle: "Sabores afrocaribeños nacidos en un puerto",
    description:
      "Puerto Limón se entiende mejor con el paladar: es cocina de mar, coco, especias, herencia afrocaribeña y vida de barrio, con recetas que llegaron y se quedaron en familias limonenses desde finales del siglo XIX y se transformaron con ingredientes locales.",
  },
  heritage: {
    title: "La cocina de un puerto",
    description:
      'En Limón, la comida no es solo "típica": es memoria. La cultura afro en Limón se asocia a una herencia de inmigrantes afrocaribeños (especialmente jamaicanos) y a cómo esa presencia marcó costumbres, idioma y gastronomía.',
    market: {
      title: "El corazón gastronómico: Mercado Municipal de Limón",
      description:
        "El Mercado Municipal ha sido históricamente el epicentro de la vida local. El edificio que vemos en la imagen, una pieza arquitectónica icónica de 1941, representa la memoria dorada del puerto. Aunque el mercado ha evolucionado y el espacio no es el mismo hoy día, sigue siendo el punto de referencia donde el aroma a coco y especias cuenta la historia de generaciones.",
      highlight: "Inmueble Histórico (Construcción 1938-1941)",
    },
  },
  dishes: [
    {
      id: "rice-and-beans",
      name: "Rice and Beans",
      subtitle: "Con coco, como tiene que ser",
      description:
        "Arroz y frijoles cocinados con leche de coco y condimentos caribeños. Patrimonio vivo de barrios como Cristóbal Colón y Los Corales.",
      details:
        "En el recetario oficial de cocina tradicional (MCJ/ICT) aparecen versiones presentadas por personas de barrios de Puerto Limón, lo que refuerza que es cocina viva y de ciudad.",
      image: "/assets/gastronomia/RiceAndBeans.jpg",
      tags: ["Clásico", "Coco", "Patrimonio"],
      modalContent: {
        history:
          "Plato emblemático de la cocina limonense y caribeña, distinto del gallo pinto del Valle Central. Se cocina arroz y frijoles con leche de coco y especias (también chile panameño), lo que le da un sabor cremoso y tropical. Forma parte esencial de la identidad culinaria de Limón y se encuentra en barrios como Cristóbal Colón y Los Corales.",
        recipe: {
          ingredients: [
            "2 tazas de arroz",
            "1.5 tazas de leche de coco",
            "1.5 tazas de frijoles cocidos",
            "1 chile panameño o scotch bonnet (opcional)",
            "Tomillo",
            "Sal y pimienta",
          ],
          steps: [
            "En una olla, mezcla la leche de coco con agua y lleva a hervir.",
            "Añade el arroz, el chile entero y el tomillo. Cocina tapado hasta que el arroz esté listo.",
            "Retira el chile y agrega los frijoles. Mezcla bien, sazona y sirve caliente.",
          ],
        },
      },
    },
    {
      id: "rondon",
      name: "Rondón",
      subtitle: "El que resucita muertos",
      description:
        "Sopa/guiso caribeño a base de leche de coco, con pescado o mariscos y tubérculos/verduras.",
      details:
        'Está documentado como manifestación cultural gastronómica. El dicho popular dice que el rondón "resucita a los muertos".',
      image: "/assets/gastronomia/Rondon.jpg",
      tags: ["Sopa", "Mariscos", "Fortaleza"],
      modalContent: {
        history:
          "Sopa/guiso caribeño con base de leche de coco, pescado o mariscos y tubérculos como yuca, ñame, plátano y verduras. Su nombre refleja la mezcla de ingredientes “que rondan”. Se dice que “resucita a los muertos” por su sabor y consistencia.",
        recipe: {
          ingredients: [
            "500 g de pescado o mariscos",
            "1 lata de leche de coco",
            "2 plátanos verdes en trozos",
            "300 g yuca",
            "300 g ñame",
            "1 cebolla picada",
            "1 chile dulce",
            "Jengibre rallado",
            "Tomillo o culantro",
            "Sal y pimienta",
          ],
          steps: [
            "Sofríe cebolla, chile dulce, ajo y jengibre en aceite.",
            "Añade agua y los tubérculos hasta que estén casi cocidos.",
            "Agrega pescado, leche de coco y chile panameño. Cocina 10–15 min más. Rectifica sal y sirve.",
          ],
        },
      },
    },
    {
      id: "pati",
      name: "Patí",
      subtitle: "El snack que manda",
      description:
        'Empanada especiada y picante. Directamente heredada del "pasty" jamaicano.',
      details:
        "Su relación con la cultura jamaiquina y su preservación como receta en la zona lo convierten en el símbolo callejero por excelencia.",
      image: "/assets/gastronomia/Pati.png",
      tags: ["Snack", "Picante", "Callejero"],
      modalContent: {
        history:
          "Empanada caribeña especiada, introducida desde la cocina jamaicana (patties). Muy popular como snack callejero en Limón y otras zonas del Caribe.",
        recipe: {
          ingredients: [
            "2 tazas de harina (para la masa)",
            "100 g mantequilla fría (para la masa)",
            "Agua fría y sal (para la masa)",
            "Carne molida o pollo picado (relleno)",
            "Cebolla, ajo y chile (relleno)",
            "Curry o especias (relleno)",
          ],
          steps: [
            "Mezcla harina, sal y mantequilla hasta obtener migajas; añade agua y forma una masa.",
            "Sofríe la carne con cebolla, ajo, chile y especias para el relleno.",
            "Estira la masa, corta discos, rellena, cierra y hornea a 180 °C por 25 min o hasta dorar.",
          ],
        },
      },
    },
    {
      id: "pan-bon",
      name: "Pan de Negro (Pan Bon)",
      subtitle: "El pan oscuro del Caribe",
      description: "Pan dulce-especiado oscuro de herencia afrocaribeña.",
      details:
        "Manifestación cultural registrada, reconocido ampliamente como uno de los sabores más buscados del Caribe.",
      image: "/assets/gastronomia/PanDeNegro.png",
      tags: ["Dulce", "Especias", "Tradición"],
      modalContent: {
        history:
          "Pan dulce oscuro y especiado de herencia afrocaribeña. Su nombre deriva de “bun”, introducido por inmigrantes jamaicanos en el siglo XIX.",
        recipe: {
          ingredients: [
            "3 tazas de harina",
            "1 taza de azúcar morena o melaza",
            "1/2 taza leche",
            "Especias: jengibre, canela",
            "Pasas (opcional)",
            "Levadura",
          ],
          steps: [
            "Disuelve levadura en leche tibia; mezcla con harina, azúcar y especias.",
            "Amasa hasta suave, deja fermentar 1 h.",
            "Forma el pan y hornea a 175 °C por 30–40 min.",
          ],
        },
      },
    },
    {
      id: "agua-de-sapo",
      name: "Agua de Sapo (Ale / Hiel)",
      subtitle: "La bebida infaltable",
      description: "Refresco hecho con tapa de dulce, limón y jengibre.",
      details:
        "Documentado por el Sistema de Información Cultural y recetarios de la UCR. Elaborado con tapa de dulce, limón mandarina y jengibre puro.",
      image: "/assets/gastronomia/Aguadesapo.jpg",
      tags: ["Bebida", "Refrescante", "Tradición"],
      modalContent: {
        history:
          "Refresco tradicional caribeño hecho con tapa de dulce (panela), limón mandarina y jengibre. Muy consumido para refrescarse en clima cálido.",
        recipe: {
          ingredients: [
            "1 litro de agua",
            "1–2 tazas de tapa de dulce o panela",
            "Jengibre rallado",
            "Jugo de limón",
          ],
          steps: [
            "Hierve agua con la tapa de dulce y jengibre hasta disolver.",
            "Deja enfriar, añade jugo de limón y sirve con hielo.",
          ],
        },
      },
    },
    {
      id: "pine-tart",
      name: "Pine Tart",
      subtitle: "Dulzura de Piña",
      description:
        "Empanadita de piña (el nombre viene del inglés 'Pineapple Tart').",
      details:
        "Hermana del Plantain Tart, es una de las variaciones más dulces y buscadas en las panaderías limonenses.",
      image: "/assets/gastronomia/Pine Tart.png",
      tags: ["Postre", "Piña", "Herencia"],
      modalContent: {
        history:
          "Empanadita dulce de piña con herencia del “pineapple tart” caribeño/anglófono; popular en panaderías limonenses.",
        recipe: {
          ingredients: [
            "Masa de hojaldre o masa básica (harina, mantequilla, agua, sal)",
            "Piña picada (relleno)",
            "Azúcar (relleno)",
            "Canela (relleno)",
          ],
          steps: [
            "Cocina piña con azúcar hasta formar mermelada espesa.",
            "Rellena círculos de masa, sella, hornea 20 min a 180 °C.",
          ],
        },
      },
    },
    {
      id: "plantain-tart",
      name: "Plantain Tart (Plantintá)",
      subtitle: "Dulzura de plátano",
      description:
        "Empanadita de plátano maduro con herencia directa del nombre inglés.",
      details:
        "Registrada como manifestación cultural y presente en todos los materiales turísticos oficiales del Caribe.",
      image: "/assets/gastronomia/Plantain Tart.png",
      tags: ["Postre", "Plátano", "Herencia"],
      modalContent: {
        history:
          "Versión dulce del patí hecha con plátano maduro, su nombre viene del inglés “plantain tart”. Valor cultural en materiales turísticos del Caribe.",
        recipe: {
          ingredients: [
            "Plátanos maduros",
            "Masa similar a patí (harina, mantequilla, agua, sal)",
            "Canela",
            "Azúcar",
          ],
          steps: [
            "Machaca plátanos maduros con azúcar y canela.",
            "Rellena discos de masa, cierra y hornea igual que el patí.",
          ],
        },
      },
    },
    {
      id: "cocadas",
      name: "Cocadas",
      subtitle: "Pura fibra caribeña",
      description:
        "Postre de coco tradicional, vendido en locales y aceras limonenses.",
      details:
        "Se menciona junto al pan bon y patí como los productos que definen el aroma de las calles de Limón.",
      image: "/assets/gastronomia/Cocada.png",
      tags: ["Coco", "Callejero", "Dulce"],
      modalContent: {
        history:
          "Postre dulce de coco tradicional en las calles de Limón, junto al pan bon y patí.",
        recipe: {
          ingredients: ["Coco rallado", "Azúcar", "Leche (o leche de coco)"],
          steps: [
            "Mezcla coco rallado con azúcar y leche hasta formar masa húmeda.",
            "Forma pequeñas bolitas o tartaletas y hornea 15–20 min a 160 °C hasta dorar ligeramente.",
          ],
        },
      },
    },
  ],
};
