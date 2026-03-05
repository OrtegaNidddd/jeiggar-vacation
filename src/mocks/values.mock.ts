import type { Value } from "../domain/types/Value";
import { Heart, Shield, Leaf } from "lucide-react";

export const valuesMock: Value[] = [
  {
    title: "Pasión",
    description:
      "Amamos descubrir nuevos rincones de nuestra tierra y compartir ese asombro con cada viajero.",
    icon: Heart,
  },
  {
    title: "Compromiso",
    description:
      "Dedicación total en cada detalle de tu itinerario para garantizar seguridad y excelencia.",
    icon: Shield,
  },
  {
    title: "Sostenibilidad",
    description:
      "Protegemos la biodiversidad y la cultura local en cada ruta que trazamos por el país.",
    icon: Leaf,
  },
];