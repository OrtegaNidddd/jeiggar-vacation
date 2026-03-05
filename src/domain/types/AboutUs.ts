import type { LucideIcon } from "lucide-react";

export type AboutUsContent = {
  title: string;
  badge: string;
};

export type AboutUsCardItem = {
  id: "mission" | "vision" | "objective";
  title: string;
  description: string;
  icon: LucideIcon;
};
