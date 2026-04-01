import type { ConnectivityItem } from "@/domain/types/Connectivity";

import banderaEEUU from "@/assets/images/services/bandera_estados_unidos.jpg";
import banderaEuropa from "@/assets/images/services/Europa.png";
import banderaCanada from "@/assets/images/services/bandera_canada.jpg";
import banderaAsia from "@/assets/images/services/Asia.png";
import banderaMexico from "@/assets/images/services/bandera_mexico.jpg";
import banderaRestoMundo from "@/assets/images/services/mundo.jpg";

export const connectivityMock: ConnectivityItem[] = [
  {
    id: "usa",
    title: "Estados Unidos",
    image: banderaEEUU,
    alt: "Bandera de Estados Unidos",
    description:
      "Nuestros planes para Estados Unidos están pensados para viajeros que necesitan conexión estable durante toda su estadía. Son ideales para navegación, mapas, redes sociales, mensajería y comunicación constante con familiares, acompañantes o clientes.",
    plans: [
      "Ilimitado - 4G LTE - 5 Días",
      "Ilimitado - 4G LTE - 7 Días",
      "Ilimitado - 4G LTE - 10 Días",
      "Ilimitado - 4G LTE - 15 Días",
      "15 GB - 4G LTE - 30 Días",
      "25 GB - 4G LTE - 30 Días",
      "50 GB - 4G LTE - 30 Días",
      "Ilimitado - 4G LTE - 30 Días",
    ],
  },
  {
    id: "canada",
    title: "Canadá",
    image: banderaCanada,
    alt: "Bandera de Canadá",
    description:
      "Los planes para Canadá permiten mantenerse conectado durante recorridos turísticos, viajes familiares o desplazamientos de trabajo. Ofrecen una solución práctica para consultar rutas, reservar servicios, usar aplicaciones de transporte y mantenerse comunicado en todo momento.",
    plans: [
      "2 GB - 4G LTE - 7 Días",
      "Ilimitado - 4G LTE - 10 Días",
      "Ilimitado - 4G LTE - 15 Días",
      "Ilimitado - 4G LTE - 30 Días",
    ],
  },
  {
    id: "europa",
    title: "Europa",
    image: banderaEuropa,
    alt: "Conectividad en Europa",
    description:
      "Para quienes viajan por varios destinos del continente europeo, ofrecemos opciones de conectividad que facilitan una experiencia más cómoda y flexible. Estos planes permiten contar con datos móviles durante trayectos turísticos o de negocios en diferentes países.",
    plans: [
      "2 GB - 4G LTE - 7 Días",
      "5 GB - 4G LTE - 30 Días",
      "10 GB - 4G LTE - 30 Días",
      "Ilimitado - 4G LTE - 30 Días",
    ],
  },
  {
    id: "asia",
    title: "Asia",
    image: banderaAsia,
    alt: "Conectividad en Asia",
    description:
      "Los planes para Asia están diseñados para brindar acceso a internet móvil en destinos de alta movilidad. Son útiles para aplicaciones de traducción, navegación, mensajería y consulta de itinerarios, ofreciendo apoyo durante toda la estadía.",
    plans: [
      "Ilimitado - 4G LTE - 8 Días",
      "Ilimitado - 4G LTE - 12 Días",
      "Ilimitado - 4G LTE - 15 Días",
      "Ilimitado - 4G LTE - 30 Días",
    ],
  },
  {
    id: "mexico",
    title: "México",
    image: banderaMexico,
    alt: "Conectividad en México",
    description:
      "Para viajes a México contamos con planes de datos que facilitan la comunicación, la consulta de mapas, el uso de plataformas turísticas y el acceso continuo a servicios digitales durante todo el recorrido.",
    plans: [
      "2 GB - 4G LTE - 7 Días",
      "Ilimitado - 4G LTE - 7 Días",
      "Ilimitado - 4G LTE - 10 Días",
      "Ilimitado - 4G LTE - 15 Días",
      "Ilimitado - 4G LTE - 30 Días",
    ],
  },
  {
    id: "rest-of-world",
    title: "Resto del mundo",
    image: banderaRestoMundo,
    alt: "Conectividad para resto del mundo",
    description:
      "También ofrecemos alternativas de conectividad para otros destinos internacionales, permitiendo al pasajero contar con internet móvil en diversos países y adaptarse a distintas duraciones de viaje según sus necesidades.",
    plans: [
      "1 GB - 4G LTE - 5 Días",
      "2 GB - 4G LTE - 5 Días",
      "Ilimitado - 4G LTE - 5 Días",
      "Ilimitado - 4G LTE - 7 Días",
      "Ilimitado - 4G LTE - 10 Días",
      "Ilimitado - 4G LTE - 15 Días",
      "Ilimitado - 4G LTE - 20 Días",
      "Ilimitado - 4G LTE - 25 Días",
    ],
  },
];