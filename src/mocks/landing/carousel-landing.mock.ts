import type { LandingCarousel } from "@/domain/types/Landing";
import { placeImages } from "@/mocks/shared/place-images.mock";

export const carouselLandingMock: LandingCarousel = {
    title: "Síguenos en nuestra travesía",
    username: "@jeiggarvacation",
    usernameUrl: "https://www.instagram.com/jeiggarvacation/",
    autoplayMs: 3200,
    slides: [
        { id: 1, image: placeImages.destinations.ciudadAmurallada, alt: "Vista histórica de las murallas y arquitectura colonial en Cartagena" },
        { id: 2, image: placeImages.destinations.sierraNevadaAncestral, alt: "Picos nevados y vegetación de la Sierra Nevada de Santa Marta" },
        { id: 3, image: placeImages.destinations.zoologicoCali, alt: "Animales y senderos naturales en el Zoológico de Cali" },
        { id: 4, image: placeImages.destinations.parqueTayrona, alt: "Playa tropical rodeada de selva y rocas en el Parque Tayrona" },
        { id: 5, image: placeImages.destinations.rutaCafePremium, alt: "Paisaje de cafetales y montañas en el Eje Cafetero" },
        { id: 6, image: placeImages.destinations.amazonasProfundo, alt: "Densidad de la selva amazónica y el río Amazonas" },
        { id: 7, image: placeImages.destinations.comuna13, alt: "Grafitis coloridos y escaleras eléctricas de la Comuna 13 en Medellín" },
        { id: 8, image: placeImages.destinations.parqueArvi, alt: "Reserva forestal y senderos ecológicos en el Parque Arví" },
        { id: 9, image: placeImages.destinations.islasRosario, alt: "Aguas cristalinas y arrecifes de coral en las Islas del Rosario" },
        { id: 10, image: placeImages.destinations.ciudadPerdida, alt: "Terrazas arqueológicas de piedra antiguas en la Sierra Nevada" },
    ],
};
