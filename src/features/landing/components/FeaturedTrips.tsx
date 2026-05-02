import { useEffect, useState } from 'react'
import { MapPin } from 'lucide-react'
import ImageCard from "@/components/ui/ImageCard";
import { fetchFeaturedDestinations } from "@/features/destinations/services/destinations.service";
import { getPublicStorageUrl } from "@/lib/storage";
import type { Destination } from "@/domain/types/Map";

export default function FeaturedTrips() {
    const [trips, setTrips] = useState<Destination[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchFeaturedDestinations()
            .then(setTrips)
            .catch(err => console.error("Error fetching featured trips:", err))
            .finally(() => setLoading(false))
    }, [])

    if (loading && trips.length === 0) {
        return (
            <div className="flex items-center justify-center py-20 w-full">
                <span className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
            </div>
        )
    }

    if (trips.length === 0) return null

    return (
        <div className="flex flex-col mx-auto max-w-6xl items-start gap-4 py-12">
            <h2 data-aos="fade-right" className="text-2xl font-bold">Viajes destacados</h2>
            <p data-aos="fade-right" className="text-sm text-(--text-muted)!">Experiencias únicas seleccionadas para ti</p>
            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {trips.map((trip) => (
                    <ImageCard
                        key={trip.slug}
                        title={trip.name}
                        description={trip.shortDescription}
                        image={getPublicStorageUrl(trip.imageUrl || '')}
                        badge={trip.category}
                        meta={[{ icon: MapPin, label: `${trip.cityName}, Colombia` }]}
                        cta={{ label: "Ver detalles" }}
                        to={`/destinos/${trip.slug}`}
                    />
                ))}
            </div>
        </div>
    );
}