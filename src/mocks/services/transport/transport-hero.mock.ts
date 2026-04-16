import type { TransportHeroContent } from "@/domain/types/Transport";
import { placeImages } from "@/mocks/shared/place-images.mock";

export const transportHeroMock: TransportHeroContent = {
  badge: "MOVILIDAD Y COMODIDAD PARA SU VIAJE",
  title: "Transporte",
  description:
    "Le ofrecemos alternativas de movilidad pensadas para que disfrute una experiencia más cómoda, organizada y segura. Desde tiquetes de vuelo hasta traslados y alquiler de vehículos, le ayudamos a encontrar opciones prácticas para cada etapa del viaje.",
  image: placeImages.heroImages.services.transportHero,
  alt: "Opciones de transporte para viajes",
};