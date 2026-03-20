import type { HeroLanding } from "@/domain/types/Landing";

export const heroLandingMock: HeroLanding = {
    badge: "TU REFUGIO EN EL TRÓPICO",
    titlePrimary: "Descubre la Magia",
    titleSecondary: "Sutil de ",
    highlight: "Colombia",
    description: "Viajes diseñados para el alma. Encuentra la paz entre montañas cafeteras, brisas del Caribe y la calidez de nuestra gente.",
    buttons: [
        {
            to: "/destinos",
            label: "Explorar Destinos",
            variant: "primary"
        },
        {
            label: "Reservar ahora",
            variant: "secondary"
        }
    ]
}