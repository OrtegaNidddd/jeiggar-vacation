import type { LandingCarousel } from "@/domain/types/Landing";

export const carouselLandingMock: LandingCarousel = {
    title: "Síguenos en nuestra travesía",
    username: "@jeiggarvacation",
    usernameUrl: "https://www.instagram.com/jeiggarvacation/",
    autoplayMs: 3200,
    slides: [
        { id: 1, image: "cartagena/ciudad-amurallada.webp", alt: "Vista histórica de las murallas y arquitectura colonial en Cartagena" },
        { id: 2, image: "santa-marta/sierra-nevada.webp", alt: "Picos nevados y vegetación de la Sierra Nevada de Santa Marta" },
        { id: 3, image: "cali/cali-zoo.webp", alt: "Animales y senderos naturales en el Zoológico de Cali" },
        { id: 4, image: "santa-marta/parque-tayrona.webp", alt: "Playa tropical rodeada de selva y rocas en el Parque Tayrona" },
        { id: 5, image: "pereira/eje-cafetero.webp", alt: "Paisaje de cafetales y montañas en el Eje Cafetero" },
        { id: 6, image: "amazonas/amazonas.webp", alt: "Densidad de la selva amazónica y el río Amazonas" },
        { id: 7, image: "medellin/comuna-13.webp", alt: "Grafitis coloridos y escaleras eléctricas de la Comuna 13 en Medellín" },
        { id: 8, image: "medellin/parque-arvi.webp", alt: "Reserva forestal y senderos ecológicos en el Parque Arví" },
        { id: 9, image: "cartagena/islas-rosario.webp", alt: "Aguas cristalinas y arrecifes de coral en las Islas del Rosario" },
        { id: 10, image: "santa-marta/ciudad-perdida.webp", alt: "Terrazas arqueológicas de piedra antiguas en la Sierra Nevada" },
    ],
};
