// Se mantiene Department por si se usa en otro lado
export type Department = {
  id: string
  name: string
  slug: string
  lat: number
  lng: number
  zoom: number
  capital?: string
  description: string
  imageUrl?: string
}

export type Destination = {
  id: string
  name: string
  slug: string
  shortDescription: string
  description: string
  category: string
  imageUrl?: string
  lat: number
  lng: number
  cityId: string
}

export type City = {
  id: string
  name: string
  slug: string
  lat: number
  lng: number
  zoom: number
  description: string
  imageUrl?: string
  destinations: Destination[]
}

export type CountryMapData = {
  id: string
  name: string
  slug: string
  lat: number
  lng: number
  zoom: number
  cities: City[]
}

export type MapLevel = 'country' | 'city'

export type MapState = {
  level: MapLevel
  selectedCity: City | null
}