import missionIcon from "../assets/icons/mission.svg";
import visionIcon from "../assets/icons/vision.svg";
import objectiveIcon from "../assets/icons/objective.svg";
export type SvgIcon = string;

export type AboutUsCardItem = {
  id: "mission" | "vision" | "objective";
  title: string;
  description: string;
  icon: SvgIcon;
};

export const aboutUsCardsMock: AboutUsCardItem[] = [
  {
    id: "mission",
    title: "Misión",
    description:
      "Diseñar y ofrecer experiencias de viaje personalizadas, auténticas y memorables, adaptadas a las necesidades de cada cliente, garantizando altos estándares de calidad, atención profesional y turismo responsable.",
    icon: missionIcon,
  },
  {
    id: "vision",
    title: "Visión",
    description:
      "Consolidarnos como una agencia referente en experiencias personalizadas y sostenibles, reconocida por la excelencia en el servicio, la innovación en itinerarios y el compromiso con el turismo responsable.",
    icon: visionIcon,
  },
  {
    id: "objective",
    title: "Objetivo General",
    description:
      "Posicionar a Jeiggar Vacation como una agencia líder en viajes personalizados y sostenibles, fortaleciendo su reconocimiento de marca mediante estrategias digitales, alianzas estratégicas y experiencias de alto valor.",
    icon: objectiveIcon,
  },
];