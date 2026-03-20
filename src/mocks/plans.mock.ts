import { CircleDollarSign, ShieldCheck, UserRound } from "lucide-react";
import type { PlansPageContent } from "@/domain/types/Plans";

import laCandelaria from "@/assets/images/la-candelaria.jpeg";
import islasRosario from "@/assets/images/islas-rosario.jpeg";
import ciudadAmurallada from "@/assets/images/ciudad-amurallada.jpeg";
import heroImage from "@/assets/images/hero-image.jpeg";
import bogotaImage from "@/assets/images/bogota.jpeg";
import caliImage from "@/assets/images/cali.webp";
import cartagenaImage from "@/assets/images/cartagena.jpg";
import medellinImage from "@/assets/images/medellin.webp";
import santaMartaImage from "@/assets/images/santa-marta.jpg";
import tayronaImage from "@/assets/images/parque-tayrona.webp";
import ejeCafeteroImage from "@/assets/images/eje-cafetero.png";

export const plansPageMock: PlansPageContent = {
  hero: {
    badge: "Experiencias memorables",
    titleLineOne: "Nuestros Planes",
    titleLineTwo: "Exclusivos",
    description:
      "Descubre un mundo de posibilidades diseñado por expertos colombianos. Desde la espiritualidad de las tierras santas hasta la magia de los parques temáticos.",
    image: heroImage,
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
      { name: "Bogotá", image: bogotaImage, imageAlt: "Centro histórico de Bogotá" },
      { name: "Cali", image: caliImage, imageAlt: "Vista urbana de Cali" },
      { name: "Cartagena", image: cartagenaImage, imageAlt: "Ciudad amurallada de Cartagena" },
      { name: "Medellín", image: medellinImage, imageAlt: "Panorámica de Medellín" },
      { name: "Santa Marta", image: santaMartaImage, imageAlt: "Costa de Santa Marta" },
      { name: "Tayrona", image: tayronaImage, imageAlt: "Playa del Parque Tayrona" },
      { name: "Eje Cafetero", image: ejeCafeteroImage, imageAlt: "Paisaje del Eje Cafetero" },
    ],
  },
  cards: [
    {
      title: "Peregrinación",
      description:
        "Viajes espirituales y religiosos que alimentan el alma. Recorre los lugares más sagrados del mundo con guías especializados.",
      image: laCandelaria,
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
      image: islasRosario,
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
      image: ciudadAmurallada,
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
