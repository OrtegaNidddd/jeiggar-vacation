import type { ProceduresHeroContent } from "@/domain/types/procedures.types";
import { placeImages } from "@/mocks/shared/place-images.mock";

export const proceduresHeroMock: ProceduresHeroContent = {
  badge: "ASESORÍA MIGRATORIA Y DOCUMENTAL",
  title: "Trámites y Documentación",
  description:
    "Le acompañamos en los procesos de visa, pasaporte y documentación internacional con una asesoría clara, organizada y personalizada. Nuestro equipo le orienta en cada etapa para que prepare su viaje con mayor seguridad, confianza y tranquilidad.",
  image: placeImages.heroImages.services.proceduresHero,
  alt: "Trámites de visa y documentación",
};