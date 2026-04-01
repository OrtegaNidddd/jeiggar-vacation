import type { CountryMapData } from '@/domain/types/Map'
import { bogotaCity } from './cities/bogota.mock'
import { medellinCity } from './cities/medellin.mock'
import { cartagenaCity } from './cities/cartagena.mock'
import { santaMartaCity } from './cities/santa-marta.mock'
import { caliCity } from './cities/cali.mock'

export const colombiaMapData: CountryMapData = {
  id: 'colombia',
  name: 'Colombia',
  slug: 'colombia',
  lat: 4.5709,
  lng: -74.2973,
  zoom: 4.5,
  cities: [bogotaCity, medellinCity, cartagenaCity, santaMartaCity, caliCity],
}
