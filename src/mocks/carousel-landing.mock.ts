import type { LandingCarousel } from "../domain/types/Landing";
import HeroImage from "../assets/images/hero-image.jpeg";
import SierraNevadaImage from "../assets/images/sierra-nevada.jpg";
import SierraNevadaAncestralImage from "../assets/images/sierra-nevada-ancestral.jpeg";
import SierraNevadaSantaMartaImage from "../assets/images/sierra-nevada-santa-marta.jpeg";
import EjeCafeteroImage from "../assets/images/eje-cafetero.png";
import AmazonasImage from "../assets/images/amazonas.jpeg";

export const carouselLandingMock: LandingCarousel = {
    title: "Siguenos en nuestra travesia",
    username: "@jeiggarvacation",
    usernameUrl: "https://www.instagram.com/jeiggarvacation/",
    autoplayMs: 3200,
    slides: [
        { id: 1, image: HeroImage, alt: "Paisaje tropical en Colombia" },
        { id: 2, image: SierraNevadaImage, alt: "Montanas de Sierra Nevada" },
        { id: 3, image: SierraNevadaAncestralImage, alt: "Experiencia ancestral en Sierra Nevada" },
        { id: 4, image: SierraNevadaSantaMartaImage, alt: "Vista natural de Santa Marta" },
        { id: 5, image: EjeCafeteroImage, alt: "Ruta del eje cafetero" },
        { id: 6, image: AmazonasImage, alt: "Aventura en el Amazonas" },
        { id: 7, image: HeroImage, alt: "Refugio natural tropical" },
        { id: 8, image: SierraNevadaImage, alt: "Sendero montanoso en Sierra Nevada" },
        { id: 9, image: EjeCafeteroImage, alt: "Montanas y cafetales" },
        { id: 10, image: AmazonasImage, alt: "Rio en la selva amazonica" },
    ],
};
