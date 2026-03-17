import type { City } from '@/domain/types/Map'
import { placeImages } from '@/mocks/place-images.mock'

export const bogotaCity: City = {
  id: 'bogota',
  name: 'Bogotá',
  slug: 'bogota',
  lat: 4.7110,
  lng: -74.0721,
  zoom: 12,
  description: 'Capital de Colombia, ciudad vibrante con historia, cultura y gastronomía.',
  imageUrl: placeImages.cities.bogota,
  destinations: [
    {
      id: 'monserrate',
      name: 'Monserrate',
      slug: 'monserrate',
      shortDescription: 'Cerro icónico con vista panorámica de Bogotá.',
      description: 'El Cerro de Monserrate es uno de los símbolos más representativos de Bogotá. Desde su cima a 3.152 metros de altura ofrece una vista espectacular de toda la ciudad.',
      category: 'Naturaleza',
      imageUrl: placeImages.destinations.monserrate,
      lat: 4.6051,
      lng: -74.0557,
      cityId: 'bogota',
    },
    {
      id: 'candelaria',
      name: 'La Candelaria',
      slug: 'la-candelaria',
      shortDescription: 'Centro histórico colonial de Bogotá.',
      description: 'La Candelaria es el corazón histórico de Bogotá, lleno de calles coloniales, museos, teatros y arte urbano.',
      category: 'Cultura',
      imageUrl: placeImages.destinations.laCandelaria,
      lat: 4.5981,
      lng: -74.0761,
      cityId: 'bogota',
    },
  ],
}
