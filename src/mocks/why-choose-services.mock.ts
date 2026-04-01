import type { WhyChooseServicesContent } from "@/domain/types/Services";

import teamExpertsImage from "@/assets/images/services/team-experts.jpg";
import globalNetworkImage from "@/assets/images/services/global-network.jpg";
import safeTravelImage from "@/assets/images/services/safe-travel.jpg";

export const whyChooseServicesMock: WhyChooseServicesContent = {
  title: "¿Por qué elegir nuestra agencia?",
  subtitle: "Excelencia profesional en cada viaje.",
  items: [
    {
      id: "expert-guide",
      image: teamExpertsImage,
      alt: "Equipo profesional de asesores de viaje",
      title: "Guía Experta",
      description:
        "Nuestros consultores certificados aportan años de experiencia sobre el terreno a su planificación.",
    },
    {
      id: "global-network",
      image: globalNetworkImage,
      alt: "Mapa mundial representando red global",
      title: "Red Global",
      description:
        "Alianzas estratégicas con proveedores de lujo en más de 120 países en todo el mundo.",
    },
    {
      id: "safe-travel",
      image: safeTravelImage,
      alt: "Caja fuerte representando seguridad en el viaje",
      title: "Viaje Seguro",
      description:
        "Protocolos de seguridad integrales para proteger sus datos y su bienestar físico.",
    },
  ],
};