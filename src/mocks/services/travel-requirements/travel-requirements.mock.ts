import type { TravelRequirementItem } from "@/domain/types/TravelRequirements";

export const travelRequirementsMock: TravelRequirementItem[] = [
  {
    id: "passport-and-id",
    title: "Documento de Identidad",
    image: "requirements/documento-identidad.webp",
    alt: "Documento de identidad",
    description:
      "Para algunos viajes dentro de Sudamérica, el pasajero colombiano puede ingresar únicamente con cédula de ciudadanía vigente, especialmente en países pertenecientes a acuerdos regionales como la Comunidad Andina y el Mercosur. Sin embargo, es importante verificar previamente las condiciones específicas de ingreso y el estado del documento antes de viajar.",
  },
  {
    id: "visa",
    title: "Visa",
    image: "requirements/visa.webp",
    alt: "Requisitos de visa",
    description:
      "La exigencia de visa depende del destino. Según la información base del sitio anterior, para Norteamérica se requiere visa en Canadá, Estados Unidos y San Pedro y Miquelón; en Centroamérica para Costa Rica y Nicaragua; en África para todos los países salvo Marruecos; en Europa para Irlanda; y en Oceanía para la mayoría de países, con excepciones como Fiyi, Polinesia Francesa y Samoa. En Asia también suele requerirse en la mayoría de casos, aunque hay destinos donde no es obligatoria.",
  },
  {
    id: "passport",
    title: "Pasaporte",
    image: "requirements/passport-id.webp",
    alt: "Pasaporte de viaje",
    description:
      "El pasaporte debe revisarse con anticipación antes de cualquier viaje internacional. Es importante verificar su vigencia, el estado físico del documento y, cuando aplique, la validez mínima exigida por el país de destino. Además, algunos controles migratorios pueden solicitar soportes adicionales como tiquete de regreso, seguro de viaje o prueba de solvencia económica.",
  },
  {
    id: "yellow-fever",
    title: "Vacuna fiebre amarilla",
    image: "requirements/vacuna-fiebre-amarilla.webp",
    alt: "Vacuna fiebre amarilla",
    description:
      "Algunos destinos o rutas de conexión pueden requerir la vacuna contra la fiebre amarilla como medida sanitaria obligatoria. En la información anterior del sitio se destacaban Estados Unidos, Canadá y Australia como países a revisar dentro de esta categoría, por lo que conviene confirmar con anticipación si el itinerario exige certificado internacional de vacunación.",
  },
  {
    id: "covid-19",
    title: "Vacuna COVID-19",
    image: "requirements/vacuna-covid.webp",
    alt: "Vacuna COVID-19",
    description:
      "Aunque las condiciones sanitarias han variado con el tiempo, algunos destinos pueden mantener lineamientos específicos relacionados con vacunación, certificados o controles de ingreso. En el contenido anterior se mencionaban Estados Unidos, Canadá y Australia como referencias dentro de esta sección, por lo que siempre se recomienda validar la regulación vigente antes de viajar.",
  },
  {
    id: "migration-form",
    title: "Formulario de Migración",
    image: "requirements/formulario-migracion.webp",
    alt: "Formulario de migración",
    description:
      "Varios países exigen formularios de ingreso, salida o declaración previa como parte del control migratorio. En la versión anterior del sitio esta sección también remitía a revisiones para Estados Unidos, Canadá y Australia, lo que refuerza la importancia de completar con antelación los formatos solicitados por cada autoridad competente.",
  },
];