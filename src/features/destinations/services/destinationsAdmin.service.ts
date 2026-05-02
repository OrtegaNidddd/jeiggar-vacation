import { supabase } from '@/lib/supabase'   // mismo path que el otro

export type DestinationType = 'national' | 'international'

export async function listDestinations(filters?: {
  type?: DestinationType
  featured?: boolean
  search?: string
  page?: number
  pageSize?: number
}) {
  let q = supabase
    .from('destinations')
    .select(
      `id, name, slug, short_description, image_url,
       is_active, is_featured, destination_type, sort_order,
       cities ( id, name, slug,
         countries ( id, name, slug )
       )`,
      { count: 'exact' }
    )

  if (filters?.type)     q = q.eq('destination_type', filters.type)
  if (filters?.featured) q = q.eq('is_featured', true)
  if (filters?.search)   q = q.ilike('name', `%${filters.search}%`)

  const page = filters?.page ?? 0
  const size = filters?.pageSize ?? 20
  q = q.range(page * size, (page + 1) * size - 1).order('sort_order')

  return q
}

export async function fetchDestinationById(id: string) {
  return supabase
    .from('destinations')
    .select(`
      *,
      cities ( id, name, slug, country_id,
        countries ( id, name, slug )
      )
    `)
    .eq('id', id)
    .single()
}

export async function createDestination(data: Record<string, unknown>) {
  return supabase.from('destinations').insert(data).select().single()
}

export async function updateDestination(id: string, data: Record<string, unknown>) {
  return supabase.from('destinations').update(data).eq('id', id).select().single()
}

export async function deleteDestination(id: string) {
  return supabase.from('destinations').delete().eq('id', id)
}

export async function toggleActive(id: string, value: boolean) {
  return supabase.from('destinations').update({ is_active: value }).eq('id', id)
}

export async function createCity(data: Record<string, unknown>) {
  return supabase.from('cities').insert(data).select().single()
}

export async function createCountry(data: Record<string, unknown>) {
  return supabase.from('countries').insert(data).select().single()
}