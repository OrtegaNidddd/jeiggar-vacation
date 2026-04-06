import { BadgeCheck, Car, FileText, HeartPulse, Wifi } from "lucide-react";
import type { ServiceItem } from "@/domain/types/Services";

export const servicesMock: ServiceItem[] = [
  {
    id: "medical-assistance",
    icon: HeartPulse,
    title: "Asistencia Médica",
    description:
      "Viaje con tranquilidad sabiendo que tiene acceso las 24 horas, los 7 días de la semana, a redes internacionales de salud. Gestionamos la coordinación de seguros, evacuaciones de emergencia y brindamos apoyo multilingüe.",
    href: "/servicios/asistencia-medica",
  },
  {
    id: "documentation",
    icon: FileText,
    title: "Trámites y Documentación",
    description:
      "Nuestros expertos manejan las complejidades de las solicitudes de visa, permisos de residencia y traducciones oficiales. Agilizamos todo el proceso de trámites para que pueda concentrarse en su aventura.",
    href: "/servicios/tramites-y-documentacion",
  },
  {
    id: "travel-requirements",
    icon: BadgeCheck,
    title: "Requisitos de Viaje",
    description:
      "Cumpla con las regulaciones globales en constante cambio. Desde vacunas obligatorias y certificados de salud hasta declaraciones de aduanas, brindamos actualizaciones en tiempo real para su itinerario.",
    href: "/servicios/requisitos-de-viaje",
  },
  {
    id: "connectivity",
    icon: Wifi,
    title: "Conectividad",
    description:
      "No pierda nunca el contacto con lo que importa. Organizamos eSIMs locales de alta velocidad, alquiler de Wi-Fi de bolsillo y paquetes de roaming premium para garantizar una comunicación sin interrupciones.",
    href: "/servicios/conectividad",
  },
  {
    id: "transport",
    icon: Car,
    title: "Transporte",
    description:
      "Desde traslados privados al aeropuerto hasta alquiler de vehículos y servicios de conductor, gestionamos toda su logística de tránsito. Disfrute de un movimiento puntual, cómodo y seguro.",
    href: "/servicios/transporte",
  },
];