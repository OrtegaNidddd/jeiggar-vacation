import { supabase } from '@/lib/supabase'
import type { CountryMapData } from '@/domain/types/Map'

export async function fetchCountryMapData(slug = 'colombia'): Promise<CountryMapData> {
  const { data, error } = await supabase.rpc('get_country_map_data', {
    p_country_slug: slug,
  })

  if (error) {
    throw error
  }

  if (!data) {
    throw new Error(`No se han encontrado datos para el slug: ${slug}`)
  }

  return data as CountryMapData
}