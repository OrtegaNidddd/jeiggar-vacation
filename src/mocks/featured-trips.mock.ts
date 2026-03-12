import { MapPin } from "lucide-react";
import type { FeaturedTrips } from "../domain/types/Landing";
import EjeCafeteroImage from "../assets/images/eje-cafetero.png";
import SierraNevadaImage from "../assets/images/sierra-nevada.jpg";
import AmazonasImage from "../assets/images/amazonas.jpeg";

export const featuredTrips: FeaturedTrips[] = [
  {
    title: "Ruta del Café Premium",
    description: "Sumérgete en el aroma del Eje Cafetero con catas privadas y estancias en haciendas tradicionales.",
    badge: "Popular",
    image: EjeCafeteroImage,
    meta: [
      { icon: MapPin, label: "Salento" },
    ],
    cta: { label: "Ver Detalles", variant: "primary" },
    to: "/tours/ruta-cafe-premium",
  },
  {
    title: "Sierra Nevada Ancestral",
    description: "Explora los pueblos indígenas de la Sierra Nevada y conecta con la cultura y naturaleza del Caribe colombiano.",
    image: SierraNevadaImage,
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
    image: AmazonasImage,
    meta: [
      { icon: MapPin, label: "Leticia" },
    ],
    cta: { label: "Ver Detalles", variant: "primary" },
    to: "/tours/amazonas",
  },
];