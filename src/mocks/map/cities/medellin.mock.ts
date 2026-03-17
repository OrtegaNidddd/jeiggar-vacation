import type { City } from '@/domain/types/Map'
import { placeImages } from '@/mocks/place-images.mock'

export const medellinCity: City = {
  id: 'medellin',
  name: 'Medellín',
  slug: 'medellin',
  lat: 6.2442,
  lng: -75.5812,
  zoom: 12,
  description: 'La ciudad de la eterna primavera, referente mundial de innovación urbana.',
  imageUrl: placeImages.cities.medellin,
  destinations: [
    {
      id: 'comuna-13',
      name: 'Comuna 13',
      slug: 'comuna-13',
      shortDescription: 'Barrio transformado en ícono de arte urbano y resiliencia.',
      description: 'La Comuna 13 es uno de los barrios más visitados de Medellín. Las escaleras eléctricas, los murales y el grafiti narran la historia de un pueblo que superó la violencia con arte.',
      category: 'Cultura',
      imageUrl: placeImages.destinations.comuna13,
      lat: 6.2389,
      lng: -75.6068,
      cityId: 'medellin',
    },
    {
      id: 'parque-arvi',
      name: 'Parque Arví',
      slug: 'parque-arvi',
      shortDescription: 'Reserva natural accesible en metrocable desde Medellín.',
      description: 'El Parque Arví es una reserva ecológica en las montañas orientales de Medellín. Ofrece senderismo, mercado campesino y naturaleza exuberante.',
      category: 'Naturaleza',
      imageUrl: placeImages.destinations.parqueArvi,
      lat: 6.2731,
      lng: -75.4997,
      cityId: 'medellin',
    },
  ],
}
