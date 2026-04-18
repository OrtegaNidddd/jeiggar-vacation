import type { TransportItem } from "@/domain/types/Transport";

export const transportMock: TransportItem[] = [
  {
    id: "flight-tickets",
    title: "Tickets de vuelo",
    image: "tickets.webp",
    alt: "Tickets de vuelo y transporte aéreo",
    description:
      "Le acompañamos en la búsqueda de opciones de vuelo acordes con su destino, fechas y tipo de viaje. Nuestro servicio de asesoría facilita la organización del trayecto aéreo para que pueda contar con alternativas más convenientes en itinerario, duración y comodidad.",
  },
  {
    id: "transfer",
    title: "Traslado",
    image: "transport/traslado.webp",
    alt: "Servicio de traslado",
    description:
      "Ofrecemos orientación para coordinar traslados que faciliten la movilidad del pasajero desde y hacia puntos clave del viaje, como aeropuertos, hoteles o lugares de interés. Este servicio busca brindar una experiencia más cómoda, puntual y práctica durante la estadía.",
  },
  {
    id: "vehicle-rental",
    title: "Alquiler de Vehículos",
    image: "transport/alquiler-vehiculos.webp",
    alt: "Alquiler de vehículos",
    description:
      "Le ayudamos a identificar opciones de alquiler de vehículos para que pueda desplazarse con mayor autonomía y flexibilidad. Este servicio resulta ideal para quienes desean recorrer su destino con comodidad, adaptando el transporte a su propio ritmo de viaje.",
  },
];