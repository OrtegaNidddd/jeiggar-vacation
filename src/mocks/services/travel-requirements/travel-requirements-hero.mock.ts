import type { TravelRequirementsHeroContent } from "@/domain/types/TravelRequirements";
import { placeImages } from "@/mocks/shared/place-images.mock";

export const travelRequirementsHeroMock: TravelRequirementsHeroContent = {
  badge: "DOCUMENTACIÓN ESENCIAL PARA SU VIAJE",
  title: "Requisitos de Viaje",
  description:
    "Le orientamos sobre los documentos y condiciones más importantes que debe revisar antes de viajar. Desde pasaporte y visa hasta vacunas y formularios migratorios, organizamos la información para que prepare su salida con mayor claridad, seguridad y confianza.",
  image: placeImages.heroImages.services.travelRequirementsHero,
  alt: "Documentos esenciales para viajar",
};