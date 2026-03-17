import type { City } from '@/domain/types/Map'
import { placeImages } from '@/mocks/place-images.mock'

export const santaMartaCity: City = {
  id: 'santa-marta',
  name: 'Santa Marta',
  slug: 'santa-marta',
  lat: 11.2408,
  lng: -74.1990,
  zoom: 11,
  description: 'La ciudad más antigua de Colombia, puerta al Tayrona y la Sierra Nevada.',
  imageUrl: placeImages.cities.santaMarta,
  destinations: [
    {
      id: 'parque-tayrona',
      name: 'Parque Tayrona',
      slug: 'parque-tayrona',
      shortDescription: 'Paraíso natural entre la selva y el mar Caribe.',
      description: 'El Parque Nacional Natural Tayrona es uno de los destinos más visitados de Colombia, con playas de aguas turquesas rodeadas de selva tropical.',
      category: 'Naturaleza',
      imageUrl: placeImages.destinations.parqueTayrona,
      lat: 11.3200,
      lng: -73.9200,
      cityId: 'santa-marta',
    },
    {
      id: 'ciudad-perdida',
      name: 'Ciudad Perdida',
      slug: 'ciudad-perdida',
      shortDescription: 'Ciudad arqueológica indígena en la Sierra Nevada.',
      description: 'La Ciudad Perdida es un sitio arqueológico construido alrededor del año 800 d.C. por la cultura Tayrona, accesible mediante trekking de 4 a 6 días.',
      category: 'Aventura',
      imageUrl: placeImages.destinations.ciudadPerdida,
      lat: 11.0390,
      lng: -73.9250,
      cityId: 'santa-marta',
    },
  ],
}
