import { Suspense, lazy, useEffect, useState } from "react";
import type { CountryMapData } from "@/domain/types/Map";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { fetchCountryMapData } from './map.service'

const MapView = lazy(() => import("@/features/map/MapView"));

function MapRouteFallback({ message }: { message: string }) {
  return (
    <section className="px-4 pt-4" aria-live="polite" role="status">
      <div className="relative mx-auto flex h-130 w-full max-w-6xl items-center justify-center overflow-hidden rounded-xl bg-white shadow-lg">
        <div className="flex flex-col items-center gap-3 text-(--text-muted)">
          <span className="h-10 w-10 animate-spin rounded-full border-3 border-border border-t-primary" />
          <span className="text-sm font-medium">{message}</span>
        </div>
      </div>
    </section>
  );
}

export default function MapRoute() {
  const [data, setData] = useState<CountryMapData | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true

    async function loadMapRoute() {
      try {
        const [data] = await Promise.all([
          fetchCountryMapData('colombia'),
          import('@/features/map/MapView'),
        ])

        if (isMounted) {
          setData(data)
          setLoadError(null)
        }
      } catch (error) {
        if (isMounted) {
          setData(null)
          setLoadError(error instanceof Error ? error.message : 'No se pudo cargar el mapa')
        }
      }
    }

    void loadMapRoute()

    return () => {
      isMounted = false
    }
  }, [])

  if (loadError) {
    return <MapRouteFallback message="No se pudo cargar el mapa." />;
  }

  if (!data) {
    return <MapRouteFallback message="Cargando mapa..." />;
  }

  return (
    <div className="px-4 pt-4">
      <Breadcrumbs
        className="mb-4"
        items={[
          { label: "Inicio", to: "/" },
          { label: "Destinos", to: "/destinos" },
          { label: "Nacionales" },
        ]}
      />

      <Suspense fallback={<MapRouteFallback message="Cargando visor de mapa..." />}>
        <MapView data={data} />
      </Suspense>
    </div>
  );
}
