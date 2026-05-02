import { supabase } from '@/lib/supabase'
import type { Destination } from '@/domain/types/Map'

export async function fetchDestinationBySlug(slug: string): Promise<Destination | null> {
  const { data, error } = await supabase
    .from('destinations')
    .select(`
      id, name, slug, short_description, description,
      category, image_url, lat, lng, climate, activities,
      city:cities ( id, name, slug ),
      country:countries ( id, name )
    `)
    .eq('slug', slug)
    .eq('is_active', true)
    .single()

  if (error) {
    if (error.code === 'PGRST116') return null
    throw error
  }

  if (!data) return null

  const city = Array.isArray(data.city) ? data.city[0] : data.city
  const country = Array.isArray(data.country) ? data.country[0] : data.country
  
  const locationId = city?.id ?? country?.id
  const locationName = city?.name ?? country?.name

  if (!locationId) return null

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
    cityId: locationId,
    cityName: locationName,
    activities: data.activities ?? [],
    climate: data.climate ?? undefined,
  }
}

export async function fetchFeaturedDestinations(): Promise<Destination[]> {
  const { data, error } = await supabase
    .from('destinations')
    .select(`
      id, name, slug, short_description, description,
      category, image_url, lat, lng, climate, activities,
      city:cities ( id, name, slug )
    `)
    .eq('is_featured', true)
    .eq('is_active', true)
    .order('sort_order_home', { ascending: true })

  if (error) throw error

  return (data ?? []).map(d => {
    const city = Array.isArray(d.city) ? d.city[0] : d.city
    return {
      id: d.id,
      name: d.name,
      slug: d.slug,
      shortDescription: d.short_description,
      description: d.description,
      category: d.category,
      imageUrl: d.image_url,
      lat: d.lat,
      lng: d.lng,
      cityId: city?.id ?? '',
      cityName: city?.name ?? '',
      activities: d.activities ?? [],
      climate: d.climate ?? undefined,
    }
  })
}

export async function fetchInternationalDestinations(): Promise<Destination[]> {
  const { data, error } = await supabase
    .from('destinations')
    .select(`
      id, name, slug, short_description, description,
      category, image_url, lat, lng, climate, activities,
      country:countries ( id, name )
    `)
    .eq('destination_type', 'international')
    .eq('is_active', true)
    .order('name', { ascending: true })

  if (error) throw error

  return (data ?? []).map(d => {
    const country = Array.isArray(d.country) ? d.country[0] : d.country
    return {
      id: d.id,
      name: d.name,
      slug: d.slug,
      shortDescription: d.short_description,
      description: d.description,
      category: d.category,
      imageUrl: d.image_url,
      lat: d.lat ?? 0,
      lng: d.lng ?? 0,
      cityId: country?.id ?? '',
      cityName: country?.name ?? '',
      activities: d.activities ?? [],
      climate: d.climate ?? undefined,
    }
  })
}