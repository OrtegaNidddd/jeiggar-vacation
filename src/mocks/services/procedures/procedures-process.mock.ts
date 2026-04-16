import type { ProceduresProcessItem } from "@/domain/types/procedures.types";

export const proceduresProcessMock: ProceduresProcessItem[] = [
  {
    id: "contact",
    step: "01",
    title: "Contacto inicial",
    description:
      "Nuestros asesores realizan una primera orientación para identificar el trámite requerido, resolver dudas principales y brindar una visión general del proceso desde el comienzo.",
  },
  {
    id: "advisory",
    step: "02",
    title: "Asesoría personalizada",
    description:
      "Agendamos una atención especializada para revisar su caso, explicar cada etapa con claridad y definir los requisitos y documentos necesarios según el destino elegido.",
  },
  {
    id: "documents",
    step: "03",
    title: "Preparación documental",
    description:
      "Le guiamos en la organización de pasaporte, formularios, fotografías, pagos y demás soportes necesarios para presentar el trámite con una mejor preparación y orden.",
  },
];