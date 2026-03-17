import type { City } from '@/domain/types/Map'
import { placeImages } from '@/mocks/place-images.mock'

export const cartagenaCity: City = {
  id: 'cartagena',
  name: 'Cartagena',
  slug: 'cartagena',
  lat: 10.3910,
  lng: -75.4794,
  zoom: 12,
  description: 'Ciudad amurallada, patrimonio de la humanidad y joya del Caribe colombiano.',
  imageUrl: placeImages.cities.cartagena,
  destinations: [
    {
      id: 'ciudad-amurallada',
      name: 'Ciudad Amurallada',
      slug: 'ciudad-amurallada',
      shortDescription: 'Centro histórico declarado Patrimonio de la Humanidad.',
      description: 'La Ciudad Amurallada de Cartagena es uno de los conjuntos históricos mejor conservados de América. Sus murallas, plazas y calles adoquinadas transportan al visitante a la época colonial.',
      category: 'Cultura',
      imageUrl: placeImages.destinations.ciudadAmurallada,
      lat: 10.4236,
      lng: -75.5486,
      cityId: 'cartagena',
    },
    {
      id: 'islas-rosario',
      name: 'Islas del Rosario',
      slug: 'islas-del-rosario',
      shortDescription: 'Archipiélago coralino de aguas cristalinas en el Caribe.',
      description: 'Las Islas del Rosario son un archipiélago de 27 islas con arrecifes de coral y aguas cristalinas ideales para el buceo y el snorkel.',
      category: 'Playa',
      imageUrl: placeImages.destinations.islasRosario,
      lat: 10.1667,
      lng: -75.7500,
      cityId: 'cartagena',
    },
  ],
}
