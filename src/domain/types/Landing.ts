import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, LinkConfig } from "./Buttons";
import type { TitledContent, WithDescription, WithImage, WithTitle } from "./Common";

export type HeroLanding = {
    badge: string;
    titlePrimary: string;
    titleSecondary: string;
    highlight: string;
} & WithDescription & {
    buttons: ButtonConfig[];
}

export type TravelCategories = LinkConfig & WithTitle & {
    subtitle: string;
    categories: string[];
    icon?: LucideIcon[];
    descriptions: string[];
}

export type FeaturedTrips = WithTitle & {
    slug: string;
    description?: string;
    image: WithImage["image"];
    badge?: string;
    meta?: {
        icon?: LucideIcon;
        label: string;
    }[];
    cta?: ButtonConfig;
}

export type CarouselSlide = {
    id: number;
    image: string;
    alt: string;
}

export type LandingCarousel = WithTitle & {
    username: string;
    usernameUrl: string;
    autoplayMs: number;
    slides: CarouselSlide[];
}

export type LandingCTA = TitledContent & {
    inputPlaceholder: string;
    buttonLabel: string;
    whatsappNumber: string;
    messageTemplate: string;
}