import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, LinkConfig } from "./Buttons";
import type { TitledContent } from "./Common";

export type AnimatedCardProps = TitledContent & {
  icon?: LucideIcon;
  centerText?: boolean;
};

export type SimpleCardProps = LinkConfig & TitledContent & {
  icon?: LucideIcon;
};

export interface ImageCardProps extends LinkConfig {
  title: TitledContent["title"];
  description?: string;
  image?: string;
  badge?: string;
  meta?: { icon?: LucideIcon; label: string }[];
  cta?: ButtonConfig;
}