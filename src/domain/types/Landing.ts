import type { LucideIcon } from "lucide-react";
import type { Button } from "./Buttons";

export type HeroLanding = {
    badge: string;
    titlePrimary: string;
    titleSecondary: string;
    highlight: string;
    description: string;
    buttons: Button[];
}

export type TravelCategories = {
    title: string;
    subtitle: string;
    categories: string[];
    icon?: LucideIcon[];
    descriptions: string[];
    to: string;
}