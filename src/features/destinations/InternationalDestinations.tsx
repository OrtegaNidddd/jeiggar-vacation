import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import { WHATSAPP_NUMBER } from '@/lib/whatsapp'
import ImageCard from '@/components/ui/ImageCard'
import { fetchInternationalDestinations } from '@/features/destinations/services/destinations.service'
import { getPublicStorageUrl } from '@/lib/storage'
import type { Destination } from '@/domain/types/Map'
import { MapPin } from 'lucide-react'

export default function InternationalDestinations() {
  const [destinations, setDestinations] = useState<Destination[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchInternationalDestinations()
      .then(setDestinations)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <Breadcrumbs
        className="mb-4 pt-4"
        items={[
          { label: "Inicio", to: "/" },
          { label: "Destinos", to: "/destinos" },
          { label: "Internacionales" },
        ]}
      />

      <section className="px-4 py-10" data-aos="fade-up">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-foreground">Destinos Internacionales</h1>
            <p className="mt-3 text-sm text-muted-foreground max-w-2xl mx-auto">
              Explora nuestros planes fuera de Colombia. Si no encuentras lo que buscas, te ayudamos a cotizarlo.
            </p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20 w-full">
              <span className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
            </div>
          ) : destinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((trip) => (
                <ImageCard
                  key={trip.slug}
                  title={trip.name}
                  description={trip.shortDescription}
                  image={getPublicStorageUrl(trip.imageUrl || '')}
                  badge={trip.category}
                  meta={[{ icon: MapPin, label: trip.cityName }]}
                  cta={{ label: "Ver detalles" }}
                  to={`/destinos/${trip.slug}`}
                />
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
              <p className="text-sm text-muted-foreground mb-6">
                Actualmente estamos actualizando nuestro catálogo internacional.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/destinos"
                  className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-gray-50"
                >
                  Ver destinos nacionales
                </Link>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:opacity-90"
                >
                  Cotizar por WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
