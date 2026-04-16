import type { MedicalAssistanceHeroContent } from "@/domain/types/MedicalAssistance";
import { placeImages } from "@/mocks/shared/place-images.mock";

export const medicalAssistanceHeroMock: MedicalAssistanceHeroContent = {
  badge: "PROTECCIÓN Y RESPALDO EN CADA VIAJE",
  title: "Asistencias",
  description:
    "Brindamos un servicio de apoyo integral pensado para acompañarle ante imprevistos de salud, traslado, documentación, equipaje y otras situaciones que puedan surgir durante el viaje, ofreciendo respaldo oportuno para que se desplace con mayor tranquilidad y seguridad.",
  image: placeImages.heroImages.services.medicalAssistanceHero,
  alt: "Asistencia de salud para viajeros",
};