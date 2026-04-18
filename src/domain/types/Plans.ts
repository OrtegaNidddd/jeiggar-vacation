import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, NavigableButtonConfig } from "./Buttons";
import type { ImageContent, NamedImageContent, TitledContent, WithDescription, WithTitle } from "./Common";

export type PlansHeroContent = ImageContent & {
  badge: string;
  titleLineOne: string;
  titleLineTwo: string;
} & WithDescription & {
  primaryButton: NavigableButtonConfig;
};

export type TrendingDestination = NamedImageContent & {
  storageBucket?: "cities" | "destinations";
};

export type PlansTrendingContent = WithTitle & {
  prevButtonAriaLabel: string;
  nextButtonAriaLabel: string;
  destinations: TrendingDestination[];
};

export type PlanCardContent = TitledContent & ImageContent & {
  category: string;
  cta: ButtonConfig;
};

export type PlansBenefitContent = TitledContent & {
  icon: LucideIcon;
};

export type PlansBenefitsSectionContent = TitledContent & {
  items: PlansBenefitContent[];
};

export type PlansFinalCtaContent = {
  titleLineOne: string;
  titleLineTwo: string;
} & WithDescription & {
  primaryButton: ButtonConfig;
};

export type PlansPageContent = {
  hero: PlansHeroContent;
  trending: PlansTrendingContent;
  cards: PlanCardContent[];
  benefits: PlansBenefitsSectionContent;
  finalCta: PlansFinalCtaContent;
};
