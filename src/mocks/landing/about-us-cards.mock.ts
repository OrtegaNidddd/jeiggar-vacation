import { Target, Eye, Crosshair } from "lucide-react";
import type { AboutUsCardItem, AboutUsContent } from "@/domain/types/AboutUs";


export const aboutUsContentMock: AboutUsContent = {
  title: "¿Quiénes Somos?",
  badge: "Creamos experiencias de viaje auténticas, personalizadas y memorables.",
  historyTitle: "Nuestra Historia",
  historyParagraphs: [
    "En Jeiggar Vacation somos una agencia de viajes especializada en diseñar experiencias personalizadas que conectan a las personas con destinos auténticos y memorables. Liderados por Norly Alejandra, combinamos pasión por el turismo, conocimiento experto y atención al detalle para transformar cada viaje en una vivencia significativa.",
    "Desde nuestros inicios, hemos trabajado con un enfoque claro: no vender simplemente paquetes turísticos, sino crear itinerarios a medida que respondan a los intereses, expectativas y estilo de cada viajero. Creemos que cada destino tiene una historia que merece ser vivida de manera segura, organizada y profundamente enriquecedora.",
    "Nuestro equipo planifica cuidadosamente cada experiencia, ya sea una escapada de descanso, una aventura emocionante o una inmersión cultural. Nos comprometemos a ofrecer un servicio cercano, confiable y profesional, garantizando que cada detalle esté coordinado para que nuestros clientes disfruten sin preocupaciones.",
    "En Jeiggar Vacation entendemos que viajar es más que desplazarse: es descubrir, aprender y conectar. Por eso, trabajamos para que cada experiencia sea auténtica, responsable y diseñada para dejar huella.",
  ],
};

export const aboutUsCardsMock: AboutUsCardItem[] = [
  {
    id: "mission",
    title: "Misión",
    description:
      "Diseñar y ofrecer experiencias de viaje personalizadas, auténticas y memorables, adaptadas a las necesidades de cada cliente, garantizando altos estándares de calidad, atención profesional y turismo responsable.",
    icon: Target,
  },
  {
    id: "vision",
    title: "Visión",
    description:
      "Consolidarnos como una agencia referente en experiencias personalizadas y sostenibles, reconocida por la excelencia en el servicio, la innovación en itinerarios y el compromiso con el turismo responsable.",
    icon: Eye,
  },
  {
    id: "objective",
    title: "Objetivo General",
    description:
      "Posicionar a Jeiggar Vacation como una agencia líder en viajes personalizados y sostenibles, fortaleciendo su reconocimiento de marca mediante estrategias digitales, alianzas estratégicas y experiencias de alto valor.",
    icon: Crosshair,
  },
];