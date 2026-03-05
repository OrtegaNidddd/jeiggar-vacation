import type { LucideIcon } from "lucide-react";

export type AnimatedCardProps = {
  title: string;
  description: string;
  icon?: LucideIcon;
  centerText?: boolean;
};

export type SimpleCardProps = {
  title: string;
  description: string;
  icon?: LucideIcon;
  to: string;
};