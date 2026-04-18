import type { ProceduresCountryItem } from "@/domain/types/procedures.types";

export const proceduresCountriesMock: ProceduresCountryItem[] = [
  {
    id: "usa",
    title: "Estados Unidos",
    image: "regions/bandera_usa.webp",
    alt: "Asesoría de trámites para Estados Unidos",
    description:
      "Brindamos acompañamiento en procesos de visa y preparación documental para este destino, con orientación en requisitos, formularios, organización de soportes y revisión previa de la información presentada.",
  },
  {
    id: "canada",
    title: "Canadá",
    image: "regions/bandera_canada.webp",
    alt: "Asesoría de trámites para Canadá",
    description:
      "Ofrecemos asesoría para solicitudes que requieren precisión, soporte documental y seguimiento ordenado, facilitando una preparación más clara y segura según las condiciones del trámite.",
  },
  {
    id: "australia",
    title: "Australia",
    image: "regions/bandera_australia.webp",
    alt: "Asesoría de trámites para Australia",
    description:
      "Le guiamos en la preparación de requisitos y documentos para este destino, procurando que cada etapa del proceso se aborde con mayor organización, claridad y confianza.",
  },
];