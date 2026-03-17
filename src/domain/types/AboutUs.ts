import type { LucideIcon } from "lucide-react";

export type AboutUsContent = {
  title: string;
  badge: string;
  historyTitle: string;
  historyParagraphs: string[];
};

export type AboutUsCardItem = {
  id: "mission" | "vision" | "objective";
  title: string;
  description: string;
  icon: LucideIcon;
};
