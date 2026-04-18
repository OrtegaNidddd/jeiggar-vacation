import { supabase } from '@/lib/supabase'
import type { Destination } from '@/domain/types/Map'

export async function fetchDestinationBySlug(slug: string): Promise<Destination | null> {
  const { data, error } = await supabase
    .from('destinations')
    .select(`
      id,
      name,
      slug,
      short_description,
      description,
      category,
      image_url,
      lat,
      lng,
      climate,
      activities,
      city:cities (
        id,
        name,
        slug
      )
    `)
    .eq('slug', slug)
    .single()

  if (error) {
    if (error.code === 'PGRST116') return null
    throw error
  }

  const city = Array.isArray(data?.city) ? data.city[0] : data?.city

  if (!data || !city) {
    return null
  }

  return {
    id: data.id,
    name: data.name,
    slug: data.slug,
    shortDescription: data.short_description,
    description: data.description,
    category: data.category,
    imageUrl: data.image_url,
    lat: data.lat,
    lng: data.lng,
    cityId: city.id,
    cityName: city.name,
    activities: data.activities ?? [],
    climate: data.climate ?? undefined,
  }
}