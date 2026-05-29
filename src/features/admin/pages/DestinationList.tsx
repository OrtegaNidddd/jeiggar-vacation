import { useState } from 'react'
import {
    Link,
    useLoaderData,
    useNavigate,
    useRevalidator,
    useSearchParams,
} from 'react-router-dom'
import {
    deleteDestination,
    toggleActive,
    type DestinationType,
} from '@/features/destinations/services/destinationsAdmin.service'
import type { DestinationListLoaderData, DestinationListRow } from './DestinationListLoader'

const PER_PAGE = 20

export default function DestinationList() {
    const navigate = useNavigate()
    const revalidator = useRevalidator()
    const [searchParams, setSearchParams] = useSearchParams()
    const { rows, total } = useLoaderData() as DestinationListLoaderData

    const typeFilter = (searchParams.get('type') as DestinationType | '') || ''
    const featuredFilter = searchParams.get('featured') === '1'
    const search = searchParams.get('q') ?? ''
    const page = Number(searchParams.get('page') ?? 0)
    const [searchInput, setSearchInput] = useState(search)

    const [confirmDelete, setConfirmDelete] = useState<DestinationListRow | null>(null)
    const [actionLoading, setActionLoading] = useState<string | null>(null)

    function handleSearch(e: React.FormEvent) {
        e.preventDefault()
        const next = new URLSearchParams(searchParams)
        next.set('q', searchInput)
        next.set('page', '0')
        setSearchParams(next, { replace: true })
    }

    function updateFilter(nextValues: Partial<{ type: DestinationType | ''; featured: boolean; page: number }>) {
        const next = new URLSearchParams(searchParams)

        if (nextValues.type !== undefined) {
            if (nextValues.type) next.set('type', nextValues.type)
            else next.delete('type')
        }

        if (nextValues.featured !== undefined) {
            if (nextValues.featured) next.set('featured', '1')
            else next.delete('featured')
        }

        if (nextValues.page !== undefined) {
            next.set('page', String(nextValues.page))
        }

        setSearchParams(next, { replace: true })
    }

    async function handleToggle(row: DestinationListRow) {
        setActionLoading(row.id)
        await toggleActive(row.id, !row.is_active)
        setActionLoading(null)
        revalidator.revalidate()
    }

    async function handleDelete() {
        if (!confirmDelete) return
        setActionLoading(confirmDelete.id)
        await deleteDestination(confirmDelete.id)
        setConfirmDelete(null)
        setActionLoading(null)
        revalidator.revalidate()
    }

    const totalPages = Math.ceil(total / PER_PAGE)

    return (
        <div className="space-y-5">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-(--text-muted)">Panel de destinos</p>
                    <h1 className="mt-2 text-3xl font-semibold text-(--text)">Destinos</h1>
                    <p className="text-sm text-(--text-muted) mt-1">{total} destinos disponibles en el administrador.</p>
                </div>
                <Link
                    to="/admin/destinos/nuevo"
                    className="inline-flex items-center gap-2 rounded-3xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-primary/10 transition hover:bg-(--primary-700)"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    Nuevo destino
                </Link>
            </div>

            <div className="grid gap-3 rounded-[2rem] border border-border bg-white p-5 shadow-(--shadow-sm) sm:grid-cols-2 xl:grid-cols-5">
                <form onSubmit={handleSearch} className="flex gap-2 min-w-0 col-span-2 xl:col-span-2">
                    <input
                        type="text"
                        value={searchInput}
                        onChange={e => setSearchInput(e.target.value)}
                        placeholder="Buscar por nombre..."
                        className="flex-1 min-w-0 rounded-3xl border border-border bg-(--bg-muted) px-4 py-3 text-sm text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--primary)/30 focus:border-primary transition-colors"
                    />
                    <button type="submit" className="inline-flex h-12 items-center justify-center rounded-3xl bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-(--primary-700) transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </form>

                <div className="space-y-3">
                    <label className="block text-xs font-semibold uppercase tracking-[0.24em] text-(--text-muted)">Tipo</label>
                    <select
                        value={typeFilter}
                        onChange={e => updateFilter({ type: e.target.value as DestinationType | '', page: 0 })}
                        className="w-full rounded-3xl border border-border bg-(--bg-muted) px-4 py-3 text-sm text-(--text) focus:outline-none focus:ring-2 focus:ring-(--primary)/30 focus:border-primary transition-colors"
                    >
                        <option value="">Todos los tipos</option>
                        <option value="national">Nacionales</option>
                        <option value="international">Internacionales</option>
                    </select>
                </div>

                <div className="space-y-3">
                    <label className="block text-xs font-semibold uppercase tracking-[0.24em] text-(--text-muted)">Destacados</label>
                    <label className="inline-flex w-full items-center justify-between rounded-3xl border border-border bg-(--bg-muted) px-4 py-3 text-sm text-(--text)">
                        <span>Solo destacados</span>
                        <input
                            type="checkbox"
                            checked={featuredFilter}
                            onChange={e => updateFilter({ featured: e.target.checked, page: 0 })}
                            className="h-5 w-5 rounded accent-primary"
                        />
                    </label>
                </div>

                {(typeFilter || featuredFilter || search) ? (
                    <button
                        onClick={() => { setSearchInput(''); setSearchParams(new URLSearchParams(), { replace: true }) }}
                        className="rounded-3xl border border-border bg-(--bg-muted) px-4 py-3 text-left text-sm font-medium text-(--text) hover:bg-white transition-colors"
                    >
                        Limpiar filtros
                    </button>
                ) : (
                    <div className="hidden xl:block" />
                )}
            </div>

            {/* Tabla */}
            <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-(--shadow-sm)">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-(--bg-muted)">
                                <th className="text-left px-5 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-(--text-muted)">Nombre</th>
                                <th className="text-left px-5 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-(--text-muted) hidden sm:table-cell">Tipo</th>
                                <th className="text-left px-5 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-(--text-muted) hidden md:table-cell">Ciudad</th>
                                <th className="text-center px-5 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-(--text-muted)">Estado</th>
                                <th className="text-right px-5 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-(--text-muted)">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {rows.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-5 py-12 text-center text-sm text-(--text-muted)">No se encontraron destinos.</td>
                                </tr>
                            ) : rows.map(row => (
                                <tr key={row.id} className="transition-colors hover:bg-(--bg-muted-2)">
                                    <td className="px-5 py-4">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="font-medium text-(--text) truncate max-w-[18rem]">{row.name}</span>
                                                {row.is_featured && (
                                                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-700">
                                                        <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        Destacado
                                                    </span>
                                                )}
                                            </div>
                                            <span className="text-xs text-(--text-muted)">{row.slug}</span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-4 hidden sm:table-cell">
                                        <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${row.destination_type === 'national'
                                            ? 'bg-sky-50 text-sky-700'
                                            : 'bg-purple-50 text-purple-700'
                                        }`}>
                                            {row.destination_type === 'national' ? 'Nacional' : 'Internacional'}
                                        </span>
                                    </td>
                                    <td className="px-5 py-4 hidden md:table-cell text-(--text-muted)">{row.cities?.name ?? '—'}</td>
                                    <td className="px-5 py-4 text-center">
                                        <button
                                            onClick={() => handleToggle(row)}
                                            disabled={actionLoading === row.id}
                                            title={row.is_active ? 'Publicado — clic para despublicar' : 'Borrador — clic para publicar'}
                                            className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors disabled:opacity-50 ${row.is_active
                                                ? 'bg-green-50 text-green-700 hover:bg-green-100'
                                                : 'bg-(--bg-muted-2) text-(--text-muted) hover:bg-(--bg-muted-2)'
                                            }`}
                                        >
                                            <span className={`h-2.5 w-2.5 rounded-full ${row.is_active ? 'bg-green-500' : 'bg-gray-400'}`} />
                                            {row.is_active ? 'Publicado' : 'Borrador'}
                                        </button>
                                    </td>
                                    <td className="px-5 py-4 text-right">
                                        <div className="inline-flex items-center gap-2">
                                            <button
                                                onClick={() => navigate(`/admin/destinos/${row.id}/editar`)}
                                                className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-(--bg-muted) text-(--text-muted) transition hover:bg-(--bg-muted-2) hover:text-(--text)"
                                                title="Editar"
                                            >
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => setConfirmDelete(row)}
                                                className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-red-50 text-red-600 transition hover:bg-red-100"
                                                title="Eliminar"
                                            >
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Paginación */}
                {totalPages > 1 && (
                    <div className="flex flex-col gap-3 px-5 py-4 border-t border-border sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs text-(--text-muted)">
                            Página {page + 1} de {totalPages}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => updateFilter({ page: page - 1 })}
                                disabled={page === 0}
                                className="rounded-2xl border border-border bg-(--bg-muted) px-3 py-2 text-sm text-(--text) hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                            >
                                Anterior
                            </button>
                            <button
                                onClick={() => updateFilter({ page: page + 1 })}
                                disabled={page >= totalPages - 1}
                                className="rounded-2xl border border-border bg-(--bg-muted) px-3 py-2 text-sm text-(--text) hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                            >
                                Siguiente
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Modal confirmación eliminar */}
            {confirmDelete && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30">
                    <div className="bg-white rounded-2xl border border-border shadow-(--shadow-lg) p-6 w-full max-w-sm">
                        <h3 className="text-base font-semibold text-(--text)">¿Eliminar destino?</h3>
                        <p className="text-sm text-(--text-muted) mt-1.5">
                            Esta acción es irreversible. Se eliminará <strong className="text-(--text)">{confirmDelete.name}</strong> permanentemente.
                        </p>
                        <div className="flex gap-2 mt-5 justify-end">
                            <button
                                onClick={() => setConfirmDelete(null)}
                                className="px-4 py-2 rounded-xl text-sm border border-border text-(--text) hover:bg-(--bg-muted) transition-colors"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleDelete}
                                disabled={!!actionLoading}
                                className="px-4 py-2 rounded-xl text-sm bg-red-500 text-white font-semibold hover:bg-red-600 disabled:opacity-60 transition-colors"
                            >
                                {actionLoading ? 'Eliminando...' : 'Eliminar'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}