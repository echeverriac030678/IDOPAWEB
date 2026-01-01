import { Product } from './types';

// Centralized Inventory Management
export const INVENTORY: Product[] = [
  // Repuestos Agrícolas
  {
    id: 101,
    name: "Cabezal Desbrozadora Universal",
    category: "agricultural",
    price: 15.50,
    image: "https://picsum.photos/seed/tool1/800/800",
    description: "Cabezal de aluminio reforzado compatible con el 95% de las desbrozadoras del mercado. Ideal para trabajo pesado.",
    specs: ["Material: Aluminio", "Carga fácil", "Hilo hasta 4mm"],
    unit: "Unidad",
    stock: 50
  },
  {
    id: 102,
    name: "Kit Cilindro Motosierra 52cc",
    category: "agricultural",
    price: 45.00,
    image: "https://picsum.photos/seed/tool2/800/800",
    description: "Kit completo de reparación para motosierras chinas de 52cc. Incluye pistón, anillos y juntas.",
    specs: ["Diámetro: 45mm", "Aleación térmica", "Incluye pasador"],
    unit: "Kit",
    stock: 20
  },
  {
    id: 103,
    name: "Bomba de Fumigación Espalda 20L",
    category: "agricultural",
    price: 38.99,
    image: "https://picsum.photos/seed/tool3/800/800",
    description: "Pulverizador de mochila manual con lanza de acero inoxidable y boquillas intercambiables.",
    specs: ["Capacidad: 20 Litros", "Presión: 2-4 Bar", "Peso: 3.5kg"],
    unit: "Unidad",
    stock: 15
  },
  // Tornillería
  {
    id: 201,
    name: "Tornillo Hexagonal G5 1/2 x 2\"",
    category: "screws",
    price: 0.25,
    image: "https://picsum.photos/seed/screw1/800/800",
    description: "Tornillería de alta resistencia grado 5. Zincado para resistencia a la corrosión.",
    specs: ["Grado: 5", "Rosca: UNC", "Acabado: Zincado"],
    unit: "Unidad",
    stock: 5000
  },
  {
    id: 202,
    name: "Tuerca de Seguridad 3/8 (Caja)",
    category: "screws",
    price: 12.00,
    image: "https://picsum.photos/seed/screw2/800/800",
    description: "Caja de tuercas con inserto de nylon para evitar aflojamientos por vibración.",
    specs: ["Medida: 3/8", "Cantidad: 100 uds", "Tipo: Autofrenante"],
    unit: "Caja 100u",
    stock: 40
  },
  // Herramientas / General
  {
    id: 301,
    name: "Juego de Llaves Combinadas 8-24mm",
    category: "tools",
    price: 28.50,
    image: "https://picsum.photos/seed/tool4/800/800",
    description: "Set profesional de llaves cromo-vanadio. Acabado satinado para mejor agarre.",
    specs: ["Piezas: 12", "Material: Cr-V", "Estuche incluido"],
    unit: "Set",
    stock: 10
  },
  {
    id: 302,
    name: "Taladro Percutor Industrial 850W",
    category: "tools",
    price: 89.99,
    image: "https://picsum.photos/seed/tool5/800/800",
    description: "Herramienta robusta para construcción y taller. Mandril metálico de 13mm.",
    specs: ["Potencia: 850W", "Velocidad Variable", "Modo Percutor"],
    unit: "Unidad",
    stock: 8
  },
  {
    id: 303,
    name: "Aceite 2 Tiempos Sintético",
    category: "general",
    price: 8.50,
    image: "https://picsum.photos/seed/oil1/800/800",
    description: "Lubricante de alto rendimiento para motores de 2 tiempos enfriados por aire.",
    specs: ["Volumen: 1 Litro", "Baja emisión de humo", "Norma JASO FD"],
    unit: "Botella",
    stock: 100
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'Todo el Catálogo' },
  { id: 'agricultural', label: 'Repuestos Agrícolas' },
  { id: 'screws', label: 'Tornillería' },
  { id: 'tools', label: 'Herramientas' },
  { id: 'general', label: 'Ferretería General' },
];