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
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-border bg-white p-6 shadow-(--shadow-sm)">
        <div className="grid gap-6 xl:grid-cols-[1.8fr_1.2fr]">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-(--primary)">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-(--primary)" />
              Panel de administración
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-(--text)">Dashboard</h1>
              <p className="mt-2 max-w-2xl text-sm text-(--text-muted)">Monitorea el catálogo de destinos, el estado de publicación y las acciones principales desde una vista centralizada.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl bg-(--bg-muted) p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-(--text-muted)">Última actualización</p>
                <p className="mt-2 text-base font-semibold text-(--text)">Datos en tiempo real</p>
              </div>
              <div className="rounded-3xl bg-(--bg-muted) p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-(--text-muted)">Nuevo contenido</p>
                <p className="mt-2 text-base font-semibold text-(--text)">Revisa destinos recientes</p>
              </div>
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-border bg-(--bg-muted) p-5 text-sm text-(--text)">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-(--text-muted)">Acciones rápidas</p>
                <h2 className="mt-2 text-lg font-semibold">Gestiona tu catálogo</h2>
              </div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-(--primary)">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6" />
                </svg>
              </div>
            </div>
            <div className="mt-6 grid gap-3">
              <Link
                to="/admin/destinos/nuevo"
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-(--primary-700) transition-colors"
              >
                Añadir un nuevo destino
              </Link>
              <Link
                to="/admin/destinos"
                className="inline-flex items-center justify-center rounded-2xl border border-border bg-white px-4 py-3 text-sm font-medium text-(--text) hover:bg-(--bg-muted) transition-colors"
              >
                Ver lista de destinos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-28 rounded-[1.75rem] bg-white border border-border animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {cards.map(c => (
            <div key={c.label} className="rounded-[1.75rem] border border-border bg-white p-5 shadow-(--shadow-sm) transition hover:shadow-md">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--text-muted)">{c.label}</p>
                <span className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl ${c.color}`}>●</span>
              </div>
              <p className="mt-5 text-3xl font-bold text-(--text)">{c.value}</p>
            </div>
          ))}
        </div>
      )}

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-border bg-white p-6 shadow-(--shadow-sm)">
          <h2 className="text-base font-semibold text-(--text)">Estado de la colección</h2>
          <p className="text-sm text-(--text-muted) mt-2">Controla la cantidad de destinos publicados, nacionales e internacionales, y los destinos destacados.</p>
          <div className="mt-5 space-y-3">
            <div className="flex items-center justify-between rounded-2xl bg-(--bg-muted) p-4">
              <span className="text-sm text-(--text)">Destinos activos</span>
              <span className="font-semibold text-(--text)">{stats?.published ?? '-'}</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-(--bg-muted) p-4">
              <span className="text-sm text-(--text)">Nacionales</span>
              <span className="font-semibold text-(--text)">{stats?.national ?? '-'}</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-(--bg-muted) p-4">
              <span className="text-sm text-(--text)">Internacionales</span>
              <span className="font-semibold text-(--text)">{stats?.international ?? '-'}</span>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-white p-6 shadow-(--shadow-sm)">
          <h2 className="text-base font-semibold text-(--text)">Siguiente paso</h2>
          <p className="text-sm text-(--text-muted) mt-2">Publica nuevos destinos o revisa los existentes para mantener el catálogo actualizado.</p>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              to="/admin/destinos/nuevo"
              className="inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-(--primary-700) transition-colors"
            >
              Añadir un nuevo destino
            </Link>
            <Link
              to="/admin/destinos"
              className="inline-flex items-center justify-center rounded-2xl border border-border bg-(--bg-muted) px-4 py-3 text-sm font-medium text-(--text) hover:bg-white transition-colors"
            >
              Revisar lista de destinos
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}