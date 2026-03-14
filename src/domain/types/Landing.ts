import type { LucideIcon } from "lucide-react";
import type { ButtonConfig } from "./Buttons";

export type HeroLanding = {
    badge: string;
    titlePrimary: string;
    titleSecondary: string;
    highlight: string;
    description: string;
    buttons: ButtonConfig[];
}

export type TravelCategories = {
    title: string;
    subtitle: string;
    categories: string[];
    icon?: LucideIcon[];
    descriptions: string[];
    to: string;
}

export type FeaturedTrips = {
    title: string;
    description?: string;
    image: string;
    badge?: string;
    meta?: {
        icon?: LucideIcon;
        label: string;
    }[];
    cta?: ButtonConfig;
    to: string;
}

export type CarouselSlide = {
    id: number;
    image: string;
    alt: string;
}

export type LandingCarousel = {
    title: string;
    username: string;
    usernameUrl: string;
    autoplayMs: number;
    slides: CarouselSlide[];
}

export type LandingCTA = {
    title: string;
    description: string;
    inputPlaceholder: string;
    buttonLabel: string;
    whatsappNumber: string;
    messageTemplate: string;
}