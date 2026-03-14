import ImageCard from "../../../components/ui/ImageCard";
import { featuredTrips } from "../../../mocks/featured-trips.mock";

export default function FeaturedTrips() {
    return (
        <div  className="flex flex-col mx-auto max-w-6xl items-start gap-4 py-12">
            <h2 data-aos="fade-right" className="text-2xl font-bold">Viajes destacados</h2>
            <p data-aos="fade-right" className="text-sm text-(--text-muted)!">Experiencias únicas seleccionadas para ti</p>
            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredTrips.map((trip) => (
                    <ImageCard
                        key={trip.to}
                        title={trip.title}
                        description={trip.description}
                        image={trip.image}
                        badge={trip.badge}
                        meta={trip.meta}
                        cta={trip.cta}
                        to={trip.to}
                    />
                ))}
            </div>
        </div>
    );
}