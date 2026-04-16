import { MapPin } from "lucide-react";
import type { FeaturedTrips } from "@/domain/types/Landing";
import { placeImages } from "../shared/place-images.mock";

export const featuredTrips: FeaturedTrips[] = [
  {
    title: "Ruta del Café Premium",
    slug: "eje-cafetero",
    description: "Sumérgete en el aroma del Eje Cafetero con catas privadas y estancias en haciendas tradicionales.",
    badge: "Popular",
    image: placeImages.destinations.rutaCafePremium,
    meta: [
      { icon: MapPin, label: "Salento" },
    ],
    cta: { label: "Ver Detalles", variant: "primary" },
  },
  {
    title: "Sierra Nevada Ancestral",
    slug: "sierra-nevada",
    description: "Explora los pueblos indígenas de la Sierra Nevada y conecta con la cultura y naturaleza del Caribe colombiano.",
    image: placeImages.destinations.sierraNevadaAncestral,
    meta: [
      { icon: MapPin, label: "Santa Marta" },
    ],
    cta: { label: "Ver Detalles", variant: "primary" },
  },
  {
    title: "Amazonas Profundo",
    slug: "amazonas",
    description: "Adéntrate en la selva amazónica, navega sus ríos y descubre una biodiversidad única en el mundo.",
    badge: "Nuevo",
    image: placeImages.destinations.amazonasProfundo,
    meta: [
      { icon: MapPin, label: "Leticia" },
    ],
    cta: { label: "Ver Detalles", variant: "primary" },
  },
];