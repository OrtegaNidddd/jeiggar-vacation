import type { Value } from "../domain/types/Value";

import heartIcon from "../assets/icons/heart.svg";
import shieldIcon from "../assets/icons/shield.svg";
import leafIcon from "../assets/icons/leaf.svg";

export const valuesMock: Value[] = [
  {
    title: "Pasión",
    description:
      "Amamos descubrir nuevos rincones de nuestra tierra y compartir ese asombro con cada viajero.",
    icon: heartIcon,
  },
  {
    title: "Compromiso",
    description:
      "Dedicación total en cada detalle de tu itinerario para garantizar seguridad y excelencia.",
    icon: shieldIcon,
  },
  {
    title: "Sostenibilidad",
    description:
      "Protegemos la biodiversidad y la cultura local en cada ruta que trazamos por el país.",
    icon: leafIcon,
  },
];