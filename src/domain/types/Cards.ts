import type { LucideIcon } from "lucide-react";

export type AboutInfoCardProps = {
  title: string;
  description: string;
};

export type SimpleCardProps = {
  title: string;
  description: string;
  icon?: LucideIcon;
  to: string;
};