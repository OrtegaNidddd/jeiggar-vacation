import type { MedicalCategoryItem } from "@/domain/types/MedicalAssistance";
import { placeImages } from "@/mocks/shared/place-images.mock";

export const medicalAssistanceMock: MedicalCategoryItem[] = [
  {
    id: "salud",
    title: "Salud",
    image: placeImages.services.assistance.health,
    alt: "Asistencia de salud",
    description:
      "Ofrecemos respaldo médico para enfermedades o accidentes durante el viaje, incluyendo atención por emergencias, medicamentos ambulatorios u hospitalarios, asistencia odontológica y cobertura especial en casos puntuales como accidentes deportivos amateur, embarazo dentro de las condiciones establecidas y apoyo psicológico telefónico cuando se requiera.",
  },
  {
    id: "viaje-traslado",
    title: "Viaje y Traslado",
    image: placeImages.services.assistance.transfer,
    alt: "Viaje y traslado",
    description:
      "Brindamos acompañamiento en situaciones que afecten la movilidad o la permanencia del viajero, como gastos de hotel por cuarentena o convalecencia, desplazamientos necesarios, estadía de acompañante, traslado de familiares por hospitalización y procesos de repatriación sanitaria o funeraria cuando corresponda.",
  },
  {
    id: "cancelacion",
    title: "Cancelación y Reprogramación",
    image: placeImages.services.assistance.cancellation,
    alt: "Cancelación y reprogramación",
    description:
      "Protegemos al pasajero frente a imprevistos que puedan alterar su itinerario, ofreciendo alternativas y coberturas relacionadas con cancelaciones, reprogramaciones y demoras de vuelo, según las condiciones aplicables de cada plan y la causa que origine la modificación del viaje.",
  },
  {
    id: "equipaje-tecnologia",
    title: "Equipaje y Tecnología",
    image: placeImages.services.assistance.luggage,
    alt: "Equipaje y tecnología",
    description:
      "Incluimos asistencia orientada a la protección del equipaje y de dispositivos personales como celulares, tablets, cámaras o portátiles, además de apoyo en casos de demora, pérdida, compensación, indemnización o localización de pertenencias durante el trayecto.",
  },
  {
    id: "emergencias-documentacion",
    title: "Emergencias y Documentación",
    image: placeImages.services.assistance.documentation,
    alt: "Emergencias y documentación",
    description:
      "Acompañamos al viajero en situaciones críticas relacionadas con documentos o comunicación urgente, ofreciendo orientación ante pérdida de documentación o equipaje, transmisión de mensajes importantes, servicio de intérprete y apoyo en procesos especiales como la gestión de pasaporte de emergencia.",
  },
  {
    id: "mascotas",
    title: "Asistencia para Mascotas",
    image: placeImages.services.assistance.pets,
    alt: "Asistencia para mascotas",
    description:
      "También contemplamos apoyo para quienes viajan con sus mascotas, mediante orientación veterinaria telefónica y asistencia en caso de enfermedad o accidente, facilitando una experiencia de viaje más segura y tranquila para todos los integrantes del trayecto.",
  },
  {
    id: "covid",
    title: "COVID-19",
    image: placeImages.services.assistance.covid,
    alt: "Asistencia COVID-19",
    description:
      "Disponemos de coberturas relacionadas con afectaciones derivadas del COVID-19, como reprogramación de vuelos, cancelación de viaje, penalidades en tiquetes, asistencia médica específica, gastos de cuarentena, apoyo psicológico y otras situaciones contempladas dentro de las políticas vigentes del servicio.",
  },
  {
    id: "adicionales",
    title: "Adicionales",
    image: placeImages.services.assistance.additional,
    alt: "Servicios adicionales",
    description:
      "Complementamos la asistencia con beneficios adicionales pensados para reducir el impacto de imprevistos durante el viaje, como adelanto de fianzas, transferencia de fondos, asistencia legal, acceso a sala VIP por demoras o cancelaciones y cobertura en situaciones administrativas que interrumpan el trayecto.",
  },
  {
    id: "integral",
    title: "Cobertura Integral",
    image: placeImages.services.assistance.integral,
    alt: "Cobertura integral de viaje",
    description:
      "Nuestra asistencia médica se concibe como un respaldo amplio que busca acompañar al pasajero antes, durante y después de un imprevisto, articulando atención, orientación, coordinación y apoyo oportuno para que cada viaje se desarrolle con mayor seguridad, confianza y tranquilidad.",
  },
];