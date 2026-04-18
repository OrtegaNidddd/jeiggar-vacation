import { useDeferredValue, useMemo, useState, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ChevronLeft, ChevronRight, Search, MapPin } from 'lucide-react'
import { Map, MapControls, MapMarker, MarkerContent, MarkerLabel, MarkerPopup } from '@/components/ui/Map'
import type { MapRef } from '@/components/ui/Map'
import Button from '@/components/ui/Button'
import type { CountryMapData, City, Destination, MapState } from '@/domain/types/Map'
import { getPublicStorageUrl } from '@/lib/storage'

type MapViewProps = {
  data: CountryMapData
}

export default function MapView({ data }: MapViewProps) {
  const navigate = useNavigate()
  const mapRef = useRef<MapRef>(null)

  const [mapState, setMapState] = useState<MapState>({
    level: 'country',
    selectedCity: null,
  })

  const [sidebarOpen, setSidebarOpen] = useState(() => {
    if (typeof window === 'undefined') {
      return true
    }

    return window.innerWidth >= 768
  })
  const [search, setSearch] = useState('')
  const deferredSearch = useDeferredValue(search)

  const isCountryLevel = mapState.level === 'country'
  const activeCity = mapState.selectedCity

  const center: [number, number] = isCountryLevel
    ? [data.lng, data.lat]
    : [activeCity!.lng, activeCity!.lat]

  const zoom = isCountryLevel ? data.zoom : activeCity!.zoom

  const normalizedSearch = useMemo(
    () => deferredSearch.trim().toLowerCase(),
    [deferredSearch]
  )

  const runAfterMove = useCallback((cb: () => void) => {
    const map = mapRef.current
    if (!map) {
      cb()
      return
    }
    const onEnd = () => {
      map.off("moveend", onEnd)
      cb()
    }
    map.on("moveend", onEnd)
  }, [])

  const handleCityClick = useCallback((city: City) => {
    if (city.destinations.length === 0) {
      mapRef.current?.flyTo({
        center: [city.lng, city.lat],
        zoom: city.zoom,
        duration: 1200,
      })
    } else {
      const lngs = city.destinations.map(d => d.lng)
      const lats = city.destinations.map(d => d.lat)
      mapRef.current?.fitBounds(
        [
          [Math.min(...lngs), Math.min(...lats)],
          [Math.max(...lngs), Math.max(...lats)],
        ],
        { padding: 80, duration: 1200, maxZoom: 14 }
      )
    }

    runAfterMove(() => {
      setMapState({ level: "city", selectedCity: city })
    })
  }, [runAfterMove])

  const handleDestinationClick = useCallback((destination: Destination) => {
    navigate(`/destinos/${destination.slug}`)
  }, [navigate])

  const handleBack = useCallback(() => {
    mapRef.current?.flyTo({
      center: [data.lng, data.lat],
      zoom: data.zoom,
      duration: 1200,
    })

    runAfterMove(() => {
      setMapState({ level: "country", selectedCity: null })
    })
  }, [data.lng, data.lat, data.zoom, runAfterMove])

  const flyToDestination = useCallback((destination: Destination) => {
    mapRef.current?.flyTo({
      center: [destination.lng, destination.lat],
      zoom: 14,
      duration: 1200,
    })
  }, [])

  const sidebarCities = useMemo(() => {
    return data.cities
      .map(city => ({
        ...city,
        filteredDestinations: city.destinations.filter(d =>
          d.name.toLowerCase().includes(normalizedSearch)
        ),
      }))
      .filter(city =>
        city.name.toLowerCase().includes(normalizedSearch) ||
        city.filteredDestinations.length > 0
      )
  }, [data.cities, normalizedSearch])

  const getCityImageUrl = (city: City) =>
    city.imageUrl ? getPublicStorageUrl(city.imageUrl, 'cities') : ''

  const getDestinationImageUrl = (destination: Destination) =>
    destination.imageUrl ? getPublicStorageUrl(destination.imageUrl) : ''

  return (
    <section className="px-4 pt-4" data-aos="fade-up">
      <div className="relative mx-auto flex h-130 w-full max-w-6xl overflow-hidden rounded-xl shadow-lg">

      {/* SIDEBAR */}
      <div
        className={`relative shrink-0 h-full bg-white border-r border-gray-100 transition-all duration-300 overflow-hidden ${sidebarOpen ? 'w-72' : 'w-0'}`}
      >
        <div className="flex flex-col h-full w-72">

          {/* Header */}
          <div className="p-4 border-b border-gray-100">
            <h2 className="text-sm font-semibold text-foreground mb-3">
              {activeCity ? activeCity.name : 'Explorar Colombia'}
            </h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={14} />
              <input
                type="text"
                placeholder="Buscar destino..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>

          {/* Lista */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">

            {/* Nivel country: lista de ciudades */}
            {isCountryLevel && (
              <>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Ciudades
                </p>
                {sidebarCities.map(city => (
                  <div key={city.id}>
                    <button
                      onClick={() => handleCityClick(city)}
                      className="w-full flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors text-left group"
                    >
                      <MapPin size={14} className="text-muted-foreground group-hover:text-primary shrink-0" />
                      {city.name}
                    </button>
                    <div className="mt-1.5 ml-5 space-y-1">
                      {city.destinations
                        .filter(d => d.name.toLowerCase().includes(normalizedSearch))
                        .map(dest => (
                          <button
                            key={dest.id}
                            onClick={() => handleCityClick(city)}
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors text-left w-full"
                          >
                            • {dest.name}
                          </button>
                        ))}
                    </div>
                  </div>
                ))}
              </>
            )}

            {/* Nivel city: atractivos */}
            {!isCountryLevel && activeCity && (
              <>
                <button
                  onClick={handleBack}
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowLeft size={12} />
                  Volver a Colombia
                </button>

                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Atractivos turísticos
                </p>

                {activeCity.destinations
                  .filter(d => d.name.toLowerCase().includes(normalizedSearch))
                  .map(dest => (
                    <div key={dest.id} className="space-y-1">
                      <button
                        onClick={() => flyToDestination(dest)}
                        className="w-full flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors text-left group"
                      >
                        <MapPin size={14} className="text-rose-500 shrink-0" />
                        {dest.name}
                        <span className="ml-auto text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full shrink-0">
                          {dest.category}
                        </span>
                      </button>
                      <p className="text-xs text-muted-foreground ml-5 line-clamp-2">
                        {dest.shortDescription}
                      </p>
                    </div>
                  ))}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setSidebarOpen(prev => !prev)}
        className="absolute top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-200 rounded-full shadow p-1 transition-all duration-300 hover:bg-gray-50"
        style={{ left: sidebarOpen ? '272px' : '8px' }}
      >
        {sidebarOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>

      {/* MAPA */}
      <div className="relative h-full flex-1" data-aos="zoom-in" data-aos-delay="140">
        {!isCountryLevel && (
          <Button
            onClick={handleBack}
            variant="primary"
            className="absolute top-4 left-4 z-10 px-4 py-2 text-sm flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Volver a Colombia
          </Button>
        )}

        <Map ref={mapRef} center={center} zoom={zoom} theme="light">
          <MapControls />

          {/* Nivel country: marcadores de ciudades */}
          {isCountryLevel &&
            data.cities.map((city) => {
              const cityImageUrl = getCityImageUrl(city)

              return (
                <MapMarker
                  key={city.id}
                  longitude={city.lng}
                  latitude={city.lat}
                  onClick={() => handleCityClick(city)}
                >
                  <MarkerContent>
                    <div className="size-4 rounded-full bg-primary border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform" />
                    <MarkerLabel position="bottom">{city.name}</MarkerLabel>
                  </MarkerContent>
                  <MarkerPopup trigger="hover" className="p-0 w-56">
                    {cityImageUrl && (
                      <div className="h-28 overflow-hidden rounded-t-md">
                        <img
                          src={cityImageUrl}
                          alt={city.name}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-3 space-y-1">
                      <h3 className="font-semibold text-sm text-foreground">{city.name}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">{city.description}</p>
                      <p className="text-xs text-primary font-medium pt-1">
                        {city.destinations.length} atractivos turísticos
                      </p>
                    </div>
                  </MarkerPopup>
                </MapMarker>
              )
            })}

          {/* Nivel city: marcadores de atractivos */}
          {!isCountryLevel &&
            activeCity!.destinations.map((dest) => {
              const destinationImageUrl = getDestinationImageUrl(dest)

              return (
                <MapMarker
                  key={dest.id}
                  longitude={dest.lng}
                  latitude={dest.lat}
                >
                  <MarkerContent>
                    <div className="size-4 rounded-full bg-rose-500 border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform" />
                    <MarkerLabel position="bottom">{dest.name}</MarkerLabel>
                  </MarkerContent>
                  <MarkerPopup className="p-0 w-62">
                    {destinationImageUrl && (
                      <div className="h-32 overflow-hidden rounded-t-md">
                        <img
                          src={destinationImageUrl}
                          alt={dest.name}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="space-y-2 p-3">
                      <div>
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          {dest.category}
                        </span>
                        <h3 className="font-semibold text-foreground leading-tight">{dest.name}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {dest.shortDescription}
                      </p>
                      <Button
                        onClick={() => handleDestinationClick(dest)}
                        variant="primary"
                        className="w-full mt-1 text-sm px-3 py-1.5"
                      >
                        Ver detalles →
                      </Button>
                    </div>
                  </MarkerPopup>
                </MapMarker>
              )
            })}
        </Map>
      </div>
      </div>
    </section>
  )
}
