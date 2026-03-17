import { MapPin } from "lucide-react";
import type { FeaturedTrips } from "../domain/types/Landing";
import { placeImages } from "./place-images.mock";

export const featuredTrips: FeaturedTrips[] = [
  {
    title: "Ruta del Café Premium",
    description: "Sumérgete en el aroma del Eje Cafetero con catas privadas y estancias en haciendas tradicionales.",
    badge: "Popular",
    image: placeImages.featuredTrips.rutaCafePremium,
    meta: [
      { icon: MapPin, label: "Salento" },
    ],
    cta: { label: "Ver Detalles", variant: "primary" },
    to: "/tours/ruta-cafe-premium",
  },
  {
    title: "Sierra Nevada Ancestral",
    description: "Explora los pueblos indígenas de la Sierra Nevada y conecta con la cultura y naturaleza del Caribe colombiano.",
    image: placeImages.featuredTrips.sierraNevadaAncestral,
    meta: [
      { icon: MapPin, label: "Santa Marta" },
    ],
    cta: { label: "Ver Detalles", variant: "primary" },
    to: "/tours/sierra-nevada",
  },
  {
    title: "Amazonas Profundo",
    description: "Adéntrate en la selva amazónica, navega sus ríos y descubre una biodiversidad única en el mundo.",
    badge: "Nuevo",
    image: placeImages.featuredTrips.amazonasProfundo,
    meta: [
      { icon: MapPin, label: "Leticia" },
    ],
    cta: { label: "Ver Detalles", variant: "primary" },
    to: "/tours/amazonas",
  },
];