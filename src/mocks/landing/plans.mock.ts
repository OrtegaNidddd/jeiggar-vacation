import { CircleDollarSign, ShieldCheck, UserRound } from "lucide-react";
import type { PlansPageContent } from "@/domain/types/Plans";

import { placeImages } from "@/mocks/shared/place-images.mock";

export const plansPageMock: PlansPageContent = {
  hero: {
    badge: "Experiencias memorables",
    titleLineOne: "Nuestros Planes",
    titleLineTwo: "Exclusivos",
    description:
      "Descubre un mundo de posibilidades diseñado por expertos colombianos. Desde la espiritualidad de las tierras santas hasta la magia de los parques temáticos.",
    image: placeImages.heroImages.mainHero,
    imageAlt: "Panorámica de destino turístico",
    primaryButton: {
      label: "Explorar más destinos",
      to: "/destinos",
    },
  },
  trending: {
    title: "Destinos Tendencia",
    prevButtonAriaLabel: "Ver destino anterior",
    nextButtonAriaLabel: "Ver siguiente destino",
    destinations: [
      {
        name: "Bogotá",
        image: placeImages.cities.bogota,
        imageAlt: "Centro histórico de Bogotá",
      },
      {
        name: "Cali",
        image: placeImages.cities.cali,
        imageAlt: "Vista urbana de Cali",
      },
      {
        name: "Cartagena",
        image: placeImages.cities.cartagena,
        imageAlt: "Ciudad amurallada de Cartagena",
      },
      {
        name: "Medellín",
        image: placeImages.cities.medellin,
        imageAlt: "Panorámica de Medellín",
      },
      {
        name: "Santa Marta",
        image: placeImages.cities.santaMarta,
        imageAlt: "Costa de Santa Marta",
      },
      {
        name: "Tayrona",
        image: placeImages.destinations.parqueTayrona,
        imageAlt: "Playa del Parque Tayrona",
      },
      {
        name: "Eje Cafetero",
        image: placeImages.destinations.rutaCafePremium,
        imageAlt: "Paisaje del Eje Cafetero",
      },
    ],
  },
  cards: [
    {
      title: "Peregrinación",
      description:
        "Viajes espirituales y religiosos que alimentan el alma. Recorre los lugares más sagrados del mundo con guías especializados.",
      image: placeImages.destinations.laCandelaria,
      imageAlt: "Recorrido histórico para peregrinación",
      category: "Incluye guía",
      cta: {
        label: "Ver planes",
      },
    },
    {
      title: "Cruceros",
      description:
        "Aventuras inolvidables en alta mar con todo incluido. Lujo, gastronomía y diversión mientras visitas múltiples puertos.",
      image: placeImages.destinations.islasRosario,
      imageAlt: "Crucero navegando por el mar",
      category: "Ruta oceánica",
      cta: {
        label: "Ver planes",
      },
    },
    {
      title: "Parques",
      description:
        "La magia de Disney World, Universal y más para toda la familia. Entradas, hospedaje y traslados garantizados.",
      image: placeImages.destinations.ciudadAmurallada,
      imageAlt: "Viaje de parques y atracciones",
      category: "Diversión temática",
      cta: {
        label: "Ver planes",
      },
    },
  ],
  benefits: {
    title: "Beneficios de Reservar con Nosotros",
    description:
      "Nos encargamos de cada detalle para que tu única preocupación sea disfrutar de tu viaje.",
    items: [
      {
        title: "Atención 24/7",
        description:
          "Soporte continuo durante todo tu viaje para cualquier emergencia o consulta.",
        icon: ShieldCheck,
      },
      {
        title: "Pagos Flexibles",
        description:
          "Diferentes métodos de pago y planes de ahorro programado sin intereses ocultos.",
        icon: CircleDollarSign,
      },
      {
        title: "Guías Expertos",
        description:
          "Profesionales certificados que conocen profundamente cada destino y cultura.",
        icon: UserRound,
      },
    ],
  },
  finalCta: {
    titleLineOne: "¿Listo para comenzar tu",
    titleLineTwo: "próxima gran aventura?",
    description:
      "Solicita una asesoría personalizada hoy mismo y descubre por qué somos la agencia preferida de los colombianos.",
    primaryButton: {
      label: "Hablar con un asesor",
    },
  },
};
