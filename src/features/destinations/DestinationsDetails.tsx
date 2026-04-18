import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, MapPin, Thermometer, CheckCircle2, Send } from 'lucide-react'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import { Map, MapMarker, MarkerContent, MarkerPopup } from '@/components/ui/Map'
import type { Destination } from '@/domain/types/Map'
import { fetchDestinationBySlug } from '@/features/destinations/destinations.service'
import { getPublicStorageUrl } from '@/lib/storage'
import {
  DESTINATION_RESERVATION_TEMPLATE,
  WHATSAPP_NUMBER,
  sendWhatsAppMessage,
} from '@/lib/whatsapp'

export default function DestinationDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [destination, setDestination] = useState<Destination | null>(null)
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState<string | null>(null)

  const [form, setForm] = useState({
    name: '',
    startDate: '',
    endDate: '',
    adults: 1,
    children: 0,
    contact: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    let isMounted = true

    async function loadDestination() {
      if (!slug) {
        if (isMounted) {
          setDestination(null)
          setLoading(false)
        }
        return
      }

      try {
        setLoading(true)
        setLoadError(null)
        const result = await fetchDestinationBySlug(slug)
        if (isMounted) {
          setDestination(result)
        }
      } catch (error) {
        if (isMounted) {
          setLoadError(error instanceof Error ? error.message : 'Error cargando destino')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    void loadDestination()

    return () => {
      isMounted = false
    }
  }, [slug])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <p className="text-lg font-medium text-muted-foreground">Cargando destino...</p>
      </div>
    )
  }

  if (loadError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <p className="text-lg font-medium text-red-500">No se pudo cargar el destino.</p>
        <p className="text-sm text-muted-foreground">{loadError}</p>
        <button onClick={() => navigate(-1)} className="text-sm text-primary hover:underline">
          ← Volver
        </button>
      </div>
    )
  }

  if (!destination) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <p className="text-lg font-medium text-muted-foreground">Destino no encontrado.</p>
        <button onClick={() => navigate(-1)} className="text-sm text-primary hover:underline">
          ← Volver
        </button>
      </div>
    )
  }

  const imageUrl = destination.imageUrl ? getPublicStorageUrl(destination.imageUrl) : ''

  function validate() {
    const newErrors: Record<string, string> = {}
    if (!form.name.trim()) newErrors.name = 'El nombre es requerido'
    if (!form.startDate) newErrors.startDate = 'La fecha de inicio es requerida'
    if (!form.endDate) newErrors.endDate = 'La fecha de fin es requerida'
    if (!form.contact.trim()) newErrors.contact = 'El correo o teléfono es requerido'
    if (form.adults < 1) newErrors.adults = 'Debe haber al menos 1 adulto'
    return newErrors
  }

  function handleReserve() {
    if (!destination) return

    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    sendWhatsAppMessage({
      phone: WHATSAPP_NUMBER,
      template: DESTINATION_RESERVATION_TEMPLATE,
      values: {
        destinationName: destination.name,
        cityName: destination.cityName,
        fullName: form.name,
        startDate: form.startDate,
        endDate: form.endDate,
        adults: form.adults,
        children: form.children,
        contact: form.contact,
      },
    })
  }

  return (
    <div className="px-4 pb-16 pt-4" data-aos="fade-up">
      <Breadcrumbs
        className="mb-4"
        items={[
          { label: 'Inicio', to: '/' },
          { label: 'Destinos', to: '/destinos' },
          { label: 'Nacionales', to: '/destinos/nacionales' },
          { label: destination.name },
        ]}
      />

      <div className="mx-auto max-w-5xl">

      {/* Hero */}
      <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden mb-8 mt-6" data-aos="fade-down">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={destination.name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

        {/* Volver */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 flex items-center gap-2 text-white text-sm bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full hover:bg-black/50 transition"
        >
          <ArrowLeft size={16} />
          Volver
        </button>

        {/* Info sobre imagen */}
        <div className="absolute bottom-6 left-6">
          <div className="flex items-center gap-1.5 text-white/80 text-xs mb-1">
            <MapPin size={12} />
            <span className="uppercase tracking-wide">{destination.cityName}, Colombia</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">{destination.name}</h1>
          <span className="mt-2 inline-block text-xs bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-full">
            {destination.category}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay={80}>

        {/* Columna izquierda */}
        <div className="lg:col-span-2 space-y-8">

          {/* Sobre el destino */}
          <section data-aos="fade-up" data-aos-delay={120}>
            <h2 className="text-xl font-semibold text-foreground mb-3">Sobre este destino</h2>
            {destination.climate && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Thermometer size={16} className="text-primary" />
                <span>Clima: <strong>{destination.climate}</strong></span>
              </div>
            )}
            <p className="text-muted-foreground leading-relaxed">{destination.description}</p>
          </section>

          {/* Actividades */}
          {destination.activities.length > 0 && (
            <section data-aos="fade-up" data-aos-delay={160}>
              <h2 className="text-xl font-semibold text-foreground mb-3">Actividades incluidas</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {destination.activities.map((activity, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                    <span>{activity}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Mapa */}
          <section data-aos="fade-up" data-aos-delay={200}>
            <h2 className="text-xl font-semibold text-foreground mb-3">Ubicación</h2>
            <div className="h-64 rounded-xl overflow-hidden shadow">
              <Map
                center={[destination.lng, destination.lat]}
                zoom={10}
                theme="light"
              >
                <MapMarker longitude={destination.lng} latitude={destination.lat}>
                  <MarkerContent>
                    <div className="size-5 rounded-full bg-primary border-2 border-white shadow-lg" />
                  </MarkerContent>
                  <MarkerPopup>
                    <p className="text-sm font-semibold">{destination.name}</p>
                    <p className="text-xs text-muted-foreground">{destination.cityName}</p>
                  </MarkerPopup>
                </MapMarker>
              </Map>
            </div>
          </section>
        </div>

        {/* Panel de reserva */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 bg-white border border-gray-100 rounded-2xl shadow-md p-5 space-y-4" data-aos="zoom-in" data-aos-delay={180}>
            <h3 className="text-base font-semibold text-foreground">Solicitar reserva</h3>

            {/* Nombre */}
            <div>
              <label htmlFor="name" className="text-xs font-medium text-muted-foreground uppercase tracking-wide block mb-1">
                Nombre completo
              </label>
              <input
                id="name"
                type="text"
                placeholder="Tu nombre"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

            {/* Fechas */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="startDate" className="text-xs font-medium text-muted-foreground uppercase tracking-wide block mb-1">
                  Fecha inicio
                </label>
                <input
                  id="startDate"
                  type="date"
                  value={form.startDate}
                  onChange={e => setForm(f => ({ ...f, startDate: e.target.value }))}
                  className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                {errors.startDate && <p className="text-xs text-red-500 mt-1">{errors.startDate}</p>}
              </div>
              <div>
                <label htmlFor="endDate" className="text-xs font-medium text-muted-foreground uppercase tracking-wide block mb-1">
                  Fecha fin
                </label>
                <input
                  id="endDate"
                  type="date"
                  value={form.endDate}
                  onChange={e => setForm(f => ({ ...f, endDate: e.target.value }))}
                  className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                {errors.endDate && <p className="text-xs text-red-500 mt-1">{errors.endDate}</p>}
              </div>
            </div>

            {/* Viajeros */}
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide block mb-2">
                Viajeros
              </label>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Adultos</p>
                  <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      aria-label="Disminuir adultos"
                      onClick={() => setForm(f => ({ ...f, adults: Math.max(1, f.adults - 1) }))}
                      className="px-3 py-2 text-sm hover:bg-gray-50 transition"
                    >−</button>
                    <span className="flex-1 text-center text-sm font-medium">{form.adults}</span>
                    <button
                      aria-label="Aumentar adultos"
                      onClick={() => setForm(f => ({ ...f, adults: f.adults + 1 }))}
                      className="px-3 py-2 text-sm hover:bg-gray-50 transition"
                    >+</button>
                  </div>
                  {errors.adults && <p className="text-xs text-red-500 mt-1">{errors.adults}</p>}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Niños</p>
                  <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      aria-label="Disminuir niños"
                      onClick={() => setForm(f => ({ ...f, children: Math.max(0, f.children - 1) }))}
                      className="px-3 py-2 text-sm hover:bg-gray-50 transition"
                    >−</button>
                    <span className="flex-1 text-center text-sm font-medium">{form.children}</span>
                    <button
                      aria-label="Aumentar niños"
                      onClick={() => setForm(f => ({ ...f, children: f.children + 1 }))}
                      className="px-3 py-2 text-sm hover:bg-gray-50 transition"
                    >+</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contacto */}
            <div>
              <label htmlFor="contact" className="text-xs font-medium text-muted-foreground uppercase tracking-wide block mb-1">
                Correo o teléfono
              </label>
              <input
                id="contact"
                type="text"
                placeholder="email@ejemplo.com o 300..."
                value={form.contact}
                onChange={e => setForm(f => ({ ...f, contact: e.target.value }))}
                className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              {errors.contact && <p className="text-xs text-red-500 mt-1">{errors.contact}</p>}
            </div>

            {/* Botón */}
            <button
              onClick={handleReserve}
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-4 py-3 rounded-xl hover:opacity-90 transition"
            >
              <Send size={16} />
              Enviar por WhatsApp
            </button>

            <p className="text-[11px] text-muted-foreground text-center">
              Te contactaremos para confirmar disponibilidad y detalles.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}