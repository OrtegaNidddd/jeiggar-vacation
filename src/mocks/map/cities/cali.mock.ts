import type { City } from '@/domain/types/Map'
import { placeImages } from '@/mocks/place-images.mock'

export const caliCity: City = {
  id: 'cali',
  name: 'Cali',
  slug: 'cali',
  lat: 3.4516,
  lng: -76.5320,
  zoom: 12,
  description: 'Capital de la salsa, ciudad de rumba, cultura y gastronomía del Pacífico.',
  imageUrl: placeImages.cities.cali,
  destinations: [
    {
      id: 'san-antonio-cali',
      name: 'Barrio San Antonio',
      slug: 'barrio-san-antonio-cali',
      shortDescription: 'Barrio bohemio con arte, cafés y arquitectura colonial.',
      description: 'San Antonio es el barrio más pintoresco de Cali, con calles empedradas, casas coloniales coloridas y cafés bohemios.',
      category: 'Cultura',
      imageUrl: placeImages.destinations.sanAntonioCali,
      lat: 3.4488,
      lng: -76.5441,
      cityId: 'cali',
    },
    {
      id: 'zoologico-cali',
      name: 'Zoológico de Cali',
      slug: 'zoologico-cali',
      shortDescription: 'Uno de los mejores zoológicos de América Latina.',
      description: 'El Zoológico de Cali alberga más de 1.200 animales de 230 especies, muchas endémicas de Colombia, en un entorno natural a orillas del río Cali.',
      category: 'Familia',
      imageUrl: placeImages.destinations.zoologicoCali,
      lat: 3.4601,
      lng: -76.5499,
      cityId: 'cali',
    },
  ],
}
