import type { ConnectivityHeroContent } from "@/domain/types/Connectivity";
import { placeImages } from "@/mocks/shared/place-images.mock";

export const connectivityHeroMock: ConnectivityHeroContent = {
  badge: "INTERNET INTERNACIONAL PARA SU VIAJE",
  title: "Conectividad",
  description:
    "Le ofrecemos soluciones de eSIM y SIM internacionales para que se mantenga conectado durante su viaje. Contamos con planes pensados para diferentes destinos y duraciones, facilitando la comunicación, la navegación y el acceso a información en tiempo real desde cualquier lugar.",
  image: placeImages.heroImages.services.connectivityHero,
  alt: "Conectividad internacional para viajeros",
};