import type { LucideIcon } from "lucide-react";
import type { TitledContent, WithTitle } from "./Common";

export type AboutUsContent = WithTitle & {
  badge: string;
  historyTitle: string;
  historyParagraphs: string[];
};

export type AboutUsCardItem = TitledContent & {
  id: "mission" | "vision" | "objective";
  icon: LucideIcon;
};
