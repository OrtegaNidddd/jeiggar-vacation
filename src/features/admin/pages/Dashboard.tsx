import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '@/lib/supabase'

interface Stats {
  total: number
  published: number
  national: number
  international: number
  featured: number
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from('destinations')
        .select('is_active, destination_type, is_featured')

      if (data) {
        setStats({
          total:         data.length,
          published:     data.filter(d => d.is_active).length,
          national:      data.filter(d => d.destination_type === 'national').length,
          international: data.filter(d => d.destination_type === 'international').length,
          featured:      data.filter(d => d.is_featured).length,
        })
      }
      setLoading(false)
    }
    load()
  }, [])

  const cards = stats
    ? [
        { label: 'Total destinos',      value: stats.total,         color: 'bg-primary/10 text-(--primary)' },
        { label: 'Publicados',          value: stats.published,     color: 'bg-green-50 text-green-600' },
        { label: 'Nacionales',          value: stats.national,      color: 'bg-sky-50 text-sky-600' },
        { label: 'Internacionales',     value: stats.international, color: 'bg-purple-50 text-purple-600' },
        { label: 'Destacados en home',  value: stats.featured,      color: 'bg-amber-50 text-amber-600' },
      ]
    : []

  return (
    <div className="max-w-3xl space-y-6">

      <div>
        <h1 className="text-xl font-semibold text-(--text)">Dashboard</h1>
        <p className="text-sm text-(--text-muted) mt-0.5">Resumen general del contenido</p>
      </div>

      {/* Stats */}
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-20 rounded-2xl bg-white border border-border animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {cards.map(c => (
            <div key={c.label} className="bg-white rounded-2xl border border-border p-4 shadow-(--shadow-sm)">
              <p className="text-xs text-(--text-muted) font-medium">{c.label}</p>
              <p className={`text-2xl font-bold mt-1 ${c.color.split(' ')[1]}`}>{c.value}</p>
            </div>
          ))}
        </div>
      )}

      {/* Accesos rápidos */}
      <div className="bg-white rounded-2xl border border-border p-5 shadow-(--shadow-sm)">
        <h2 className="text-sm font-semibold text-(--text) mb-3">Acciones rápidas</h2>
        <div className="flex flex-wrap gap-2">
          <Link
            to="/admin/destinos/nuevo"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white text-sm font-medium hover:bg-(--primary-700) transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Nuevo destino
          </Link>
          <Link
            to="/admin/destinos"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-(--text) text-sm font-medium hover:bg-(--bg-muted) transition-colors"
          >
            Ver todos los destinos
          </Link>
        </div>
      </div>
    </div>
  )
}