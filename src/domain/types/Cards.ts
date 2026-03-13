import type { LucideIcon } from "lucide-react";
import type { ButtonConfig } from "./Buttons";

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

export interface ImageCardProps {
  title: string;
  description?: string;
  image?: string;
  badge?: string;
  meta?: { icon?: LucideIcon; label: string }[];
  cta?: ButtonConfig;
  to: string;
}