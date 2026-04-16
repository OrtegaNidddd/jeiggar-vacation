import type { WhyChooseServicesContent } from "@/domain/types/Services";
import { placeImages } from "@/mocks/shared/place-images.mock";

export const whyChooseServicesMock: WhyChooseServicesContent = {
  title: "¿Por qué elegir nuestra agencia?",
  subtitle: "Excelencia profesional en cada viaje.",
  items: [
    {
      id: "expert-guide",
      image: placeImages.services.teamExperts,
      alt: "Equipo profesional de asesores de viaje",
      title: "Guía Experta",
      description:
        "Nuestros consultores certificados aportan años de experiencia sobre el terreno a su planificación.",
    },
    {
      id: "global-network",
      image: placeImages.services.globalNetwork,
      alt: "Mapa mundial representando red global",
      title: "Red Global",
      description:
        "Alianzas estratégicas con proveedores de lujo en más de 120 países en todo el mundo.",
    },
    {
      id: "safe-travel",
      image: placeImages.services.safeTravel,
      alt: "Caja fuerte representando seguridad en el viaje",
      title: "Viaje Seguro",
      description:
        "Protocolos de seguridad integrales para proteger sus datos y su bienestar físico.",
    },
  ],
};