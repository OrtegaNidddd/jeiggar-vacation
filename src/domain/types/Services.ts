import type { LucideIcon } from "lucide-react";

export type ServiceItem = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
};

export type ServicesHeroContent = {
  badge: string;
  title: string;
  highlightedWord: string;
  description: string;
};

export type ServicesCtaContent = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref?: string;
};

export type WhyChooseItem = {
  id: string;
  image: string;
  alt: string;
  title: string;
  description: string;
};

export type WhyChooseServicesContent = {
  title: string;
  subtitle: string;
  items: WhyChooseItem[];
};