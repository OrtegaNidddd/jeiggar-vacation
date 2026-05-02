import { type LoaderFunctionArgs } from 'react-router-dom'
import {
  listDestinations,
  type DestinationType,
} from '@/features/destinations/services/destinationsAdmin.service'

export interface DestinationListRow {
  id: string
  name: string
  slug: string
  destination_type: string
  is_active: boolean
  is_featured: boolean
  sort_order?: number
  cities?: { name: string } | null
}

export interface DestinationListLoaderData {
  rows: DestinationListRow[]
  total: number
}

function parseType(value: string | null): DestinationType | '' {
  return value === 'national' || value === 'international' ? value : ''
}

export async function loader({ request }: LoaderFunctionArgs): Promise<DestinationListLoaderData> {
  const url = new URL(request.url)
  const type = parseType(url.searchParams.get('type'))
  const featured = url.searchParams.get('featured') === '1'
  const search = url.searchParams.get('q') ?? ''
  const page = Number(url.searchParams.get('page') ?? 0)

  const { data, count } = await listDestinations({
    type: type || undefined,
    featured: featured || undefined,
    search: search || undefined,
    page,
    pageSize: 20,
  })

  const raw = (data ?? []) as Array<Record<string, unknown>>

  const mapped = raw.map(d => {
    const citiesVal = d['cities']
    const cities =
      citiesVal && typeof citiesVal === 'object' && !Array.isArray(citiesVal)
        ? { name: (citiesVal as Record<string, unknown>)['name'] as string }
        : null

    return {
      ...(d as Record<string, unknown>),
      cities,
    }
  })

  const rows = (mapped as unknown as DestinationListRow[]).sort((a, b) => {
    const sa = (a.sort_order ?? 0) as number
    const sb = (b.sort_order ?? 0) as number
    if (sa !== sb) return sa - sb
    return (a.name ?? '').localeCompare(b.name ?? '')
  })

  return {
    rows,
    total: count ?? 0,
  }
}