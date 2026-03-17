import type { LandingCarousel } from "../domain/types/Landing";
import HeroImage from "../assets/images/hero-image.jpeg";
import SierraNevadaImage from "../assets/images/sierra-nevada.jpg";
import EjeCafeteroImage from "../assets/images/eje-cafetero.png";
import AmazonasImage from '@/assets/images/amazonas.jpeg'
import BogotaImage from '@/assets/images/bogota.jpeg'
import MedellinImage from '@/assets/images/medellin.webp'
import CartagenaImage from '@/assets/images/cartagena.jpg'
import SantaMartaImage from '@/assets/images/santa-marta.jpg'
import CaliImage from '@/assets/images/cali.webp'

export const carouselLandingMock: LandingCarousel = {
    title: "Síguenos en nuestra travesía",
    username: "@jeiggarvacation",
    usernameUrl: "https://www.instagram.com/jeiggarvacation/",
    autoplayMs: 3200,
    slides: [
        { id: 1, image: HeroImage, alt: "Paisaje tropical en Colombia" },
        { id: 2, image: SierraNevadaImage, alt: "Montañas de Sierra Nevada" },
        { id: 3, image: BogotaImage, alt: "Experiencia ancestral en Sierra Nevada" },
        { id: 4, image: MedellinImage, alt: "Vista natural de Santa Marta" },
        { id: 5, image: EjeCafeteroImage, alt: "Ruta del eje cafetero" },
        { id: 6, image: AmazonasImage, alt: "Aventura en el Amazonas" },
        { id: 7, image: CaliImage, alt: "Refugio natural tropical" },
        { id: 8, image: SierraNevadaImage, alt: "Sendero montañoso en Sierra Nevada" },
        { id: 9, image: CartagenaImage, alt: "Montañas y cafetales" },
        { id: 10, image: SantaMartaImage, alt: "Río en la selva amazónica" },
    ],
};
