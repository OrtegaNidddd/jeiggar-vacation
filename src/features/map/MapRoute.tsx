import { Suspense, lazy, useEffect, useState } from "react";
import type { CountryMapData } from "@/domain/types/Map";

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

  useEffect(() => {
    let isMounted = true;

    async function loadMapRoute() {
      const [mockData] = await Promise.all([
        import("@/mocks/map.mock"),
        import("@/features/map/MapView"), // precalienta el chunk del componente
      ]);
      if (isMounted) setData(mockData.colombiaMapData);
    }

    void loadMapRoute();
    return () => {
      isMounted = false;
    };
  }, []);

  if (!data) {
    return <MapRouteFallback message="Cargando mapa..." />;
  }

  return (
    <Suspense fallback={<MapRouteFallback message="Cargando visor de mapa..." />}>
      <MapView data={data} />
    </Suspense>
  );
}
