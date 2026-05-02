import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { supabase } from '@/lib/supabase'
import {
  createDestination,
  updateDestination,
  fetchDestinationById,
  createCity,
  createCountry,
  type DestinationType,
} from '@/features/destinations/services/destinationsAdmin.service'
import { getPublicStorageUrl } from '@/lib/storage'

// ── Helpers ──────────────────────────────────────────────────────────────────
function generateSlug(name: string) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

interface City { id: string; name: string; country?: { name: string } }
interface Country { id: string; name: string; slug: string }

const EMPTY = {
  name: '',
  slug: '',
  short_description: '',
  description: '',
  category: '',
  image_url: '',
  lat: '',
  lng: '',
  climate: '',
  activities: '',
  city_id: '',
  country_id: '',
  destination_type: 'national' as DestinationType,
  is_active: false,
  is_featured: false,
  sort_order_home: 0,
}

// ── Componentes pequeños ─────────────────────────────────────────────────────
function Label({ children }: { children: React.ReactNode }) {
  return <label className="block text-sm font-medium text-(--text) mb-1.5">{children}</label>
}

function Input({ className = '', ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border border-border bg-(--bg-muted) text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--primary)/30 focus:border-primary transition-colors ${className}`}
    />
  )
}

function Textarea({ className = '', ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border border-border bg-(--bg-muted) text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--primary)/30 focus:border-primary transition-colors resize-none ${className}`}
    />
  )
}

function Select({ className = '', ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border border-border bg-(--bg-muted) text-(--text) focus:outline-none focus:ring-2 focus:ring-(--primary)/30 focus:border-primary transition-colors ${className}`}
    />
  )
}

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center justify-between gap-3 cursor-pointer select-none">
      <span className="text-sm text-(--text)">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-200 ${checked ? 'bg-primary' : 'bg-(--bg-muted-2)'}`}
      >
        <span className={`inline-block h-3.5 w-3.5 rounded-full bg-white shadow transition-transform duration-200 ${checked ? 'translate-x-4.5' : 'translate-x-1'}`} />
      </button>
    </label>
  )
}

export default function DestinationForm() {
  const { id } = useParams<{ id?: string }>()
  const isEdit  = !!id
  const navigate = useNavigate()

  const [form, setForm]       = useState(EMPTY)
  const [cities, setCities]   = useState<City[]>([])
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(isEdit)
  const [saving, setSaving]   = useState(false)
  const [error, setError]     = useState<string | null>(null)

  const [showNewCity, setShowNewCity] = useState(false)
  const [newCity, setNewCity] = useState({ name: '', lat: '', lng: '', zoom: '12', description: '', sort_order: '1' })
  const [creatingCity, setCreatingCity] = useState(false)
  const [newCityImage, setNewCityImage] = useState<File | null>(null)
  const [newCityPreview, setNewCityPreview] = useState<string | null>(null)

  const [showNewCountry, setShowNewCountry] = useState(false)
  const [newCountry, setNewCountry] = useState({ name: '', lat: '', lng: '', zoom: '5', description: '', sort_order: '1' })
  const [creatingCountry, setCreatingCountry] = useState(false)

  useEffect(() => {
    if (newCityImage) {
      const url = URL.createObjectURL(newCityImage)
      setNewCityPreview(url)
      return () => URL.revokeObjectURL(url)
    } else {
      setNewCityPreview(null)
    }
  }, [newCityImage])

  const [imageFile, setImageFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  useEffect(() => {
    if (imageFile) {
      const url = URL.createObjectURL(imageFile)
      setPreviewUrl(url)
      return () => URL.revokeObjectURL(url)
    } else {
      setPreviewUrl(null)
    }
  }, [imageFile])

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0]
      if (file.type.startsWith('image/')) {
        setImageFile(file)
      } else {
        setError('Por favor sube un archivo de imagen válido.')
      }
    }
  }

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      if (file.type.startsWith('image/')) {
        setImageFile(file)
      } else {
        setError('Por favor sube un archivo de imagen válido.')
      }
    }
  }

  // Cargar ciudades y países para los selectores
  useEffect(() => {
    supabase.from('cities').select('id, name, countries(name)').order('name').then(({ data }) => {
      setCities((data ?? []) as City[])
    })
    supabase.from('countries').select('id, name').order('name').then(({ data }) => {
      setCountries((data ?? []) as Country[])
    })
  }, [])

  // Cargar destino si es edición
  useEffect(() => {
    if (!isEdit) return
    fetchDestinationById(id!).then(({ data }) => {
      if (!data) return
      setForm({
        name:             data.name ?? '',
        slug:             data.slug ?? '',
        short_description: data.short_description ?? '',
        description:      data.description ?? '',
        category:         data.category ?? '',
        image_url:        data.image_url ?? '',
        lat:              data.lat?.toString() ?? '',
        lng:              data.lng?.toString() ?? '',
        climate:          data.climate ?? '',
        activities:       (data.activities ?? []).join(', '),
        city_id:          data.city_id ?? '',
        country_id:       data.country_id ?? '',
        destination_type: data.destination_type ?? 'national',
        is_active:        data.is_active ?? false,
        is_featured:      data.is_featured ?? false,
        sort_order_home:  data.sort_order_home ?? 0,
      })
      setLoading(false)
    })
  }, [id, isEdit])

  function set(key: keyof typeof EMPTY, value: unknown) {
    setForm(prev => ({ ...prev, [key]: value }))
  }

  function handleNameChange(val: string) {
    set('name', val)
    if (!isEdit) set('slug', generateSlug(val))
  }

  async function handleCreateCity() {
    if (!newCity.name.trim() || !newCity.lat || !newCity.lng) return
    setCreatingCity(true)
    const slug = generateSlug(newCity.name)
    const defaultCountry = countries.find(c => c.slug === 'colombia' || c.name.toLowerCase() === 'colombia')
    const countryId = defaultCountry ? defaultCountry.id : (countries[0]?.id || '')
    
    let finalImageUrl = null
    if (newCityImage) {
      const fileExt = newCityImage.name.split('.').pop()
      const fileName = `city-${slug}-${Date.now()}.${fileExt}`
      
      const { error: uploadError } = await supabase.storage
        .from('destinations')
        .upload(fileName, newCityImage, { upsert: true })

      if (uploadError) {
        setError('Error al subir la imagen de la ciudad: ' + uploadError.message)
        setCreatingCity(false)
        return
      }
      finalImageUrl = fileName
    }

    const { data, error } = await createCity({ 
      name: newCity.name, 
      slug, 
      country_id: countryId,
      lat: parseFloat(newCity.lat),
      lng: parseFloat(newCity.lng),
      zoom: parseFloat(newCity.zoom) || 12,
      description: newCity.description || `${newCity.name}, destino turístico.`,
      sort_order: parseInt(newCity.sort_order) || 1,
      image_url: finalImageUrl,
      is_active: true
    })
    setCreatingCity(false)
    
    if (error) {
      setError('Error creando ciudad: ' + error.message)
      return
    }
    
    if (data) {
      setCities(prev => [...prev, { id: data.id, name: data.name }].sort((a, b) => a.name.localeCompare(b.name)))
      set('city_id', data.id)
      setNewCity({ name: '', lat: '', lng: '', zoom: '12', description: '', sort_order: '1' })
      setNewCityImage(null)
      setShowNewCity(false)
    }
  }

  async function handleCreateCountry() {
    if (!newCountry.name.trim() || !newCountry.lat || !newCountry.lng) return
    setCreatingCountry(true)
    const slug = generateSlug(newCountry.name)
    const { data, error } = await createCountry({ 
      name: newCountry.name, 
      slug,
      lat: parseFloat(newCountry.lat),
      lng: parseFloat(newCountry.lng),
      zoom: parseFloat(newCountry.zoom) || 5,
      description: newCountry.description || `${newCountry.name}, destino turístico.`,
      sort_order: parseInt(newCountry.sort_order) || 1,
      is_active: true
    })
    setCreatingCountry(false)
    
    if (error) {
      setError('Error creando país: ' + error.message)
      return
    }
    
    if (data) {
      setCountries(prev => [...prev, { id: data.id, name: data.name, slug: data.slug }].sort((a, b) => a.name.localeCompare(b.name)))
      set('country_id', data.id)
      setNewCountry({ name: '', lat: '', lng: '', zoom: '5', description: '', sort_order: '1' })
      setShowNewCountry(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSaving(true)

    let finalImageUrl = form.image_url

    if (imageFile) {
      const fileExt = imageFile.name.split('.').pop()
      const slugToUse = form.slug || generateSlug(form.name)
      const fileName = `${slugToUse}-${Date.now()}.${fileExt}`
      
      const { error: uploadError } = await supabase.storage
        .from('destinations')
        .upload(fileName, imageFile, { upsert: true })

      if (uploadError) {
        setError('Error al subir la imagen: ' + uploadError.message)
        setSaving(false)
        return
      }

      finalImageUrl = fileName
    }

    const payload: Record<string, unknown> = {
      name:              form.name,
      slug:              form.slug,
      short_description: form.short_description,
      description:       form.description,
      category:          form.category,
      image_url:         finalImageUrl || null,
      lat:               form.lat ? parseFloat(form.lat as string) : null,
      lng:               form.lng ? parseFloat(form.lng as string) : null,
      climate:           form.climate || null,
      activities:        form.activities
        ? (form.activities as string).split(',').map((a: string) => a.trim()).filter(Boolean)
        : [],
      destination_type:  form.destination_type,
      is_active:         form.is_active,
      is_featured:       form.is_featured,
      sort_order_home:   form.sort_order_home,
      city_id:           form.destination_type === 'national' ? (form.city_id || null) : null,
      country_id:        form.destination_type === 'international' ? (form.country_id || null) : null,
    }

    const { error: dbError } = isEdit
      ? await updateDestination(id!, payload)
      : await createDestination(payload)

    setSaving(false)

    if (dbError) {
      if ((dbError as { code?: string }).code === '23505') {
        setError('Ya existe un destino con ese slug. Elige otro.')
      } else {
        setError(dbError.message)
      }
      return
    }

    navigate('/admin/destinos')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-48">
        <span className="w-6 h-6 border-2 border-border border-t-primary rounded-full animate-spin" />
      </div>
    )
  }

  const isNational = form.destination_type === 'national'

  return (
    <div className="max-w-2xl space-y-5">

      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate('/admin/destinos')}
          className="p-1.5 rounded-lg text-(--text-muted) hover:bg-(--bg-muted) transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div>
          <h1 className="text-xl font-semibold text-(--text)">
            {isEdit ? 'Editar destino' : 'Nuevo destino'}
          </h1>
          <p className="text-sm text-(--text-muted) mt-0.5">
            {isEdit ? form.name : 'Completa los campos para crear el destino'}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Tipo */}
        <div className="bg-white rounded-2xl border border-border shadow-(--shadow-sm) p-5 space-y-4">
          <h2 className="text-sm font-semibold text-(--text)">Tipo de destino</h2>
          <div className="grid grid-cols-2 gap-3">
            {(['national', 'international'] as DestinationType[]).map(t => (
              <button
                key={t}
                type="button"
                onClick={() => set('destination_type', t)}
                className={`py-3 px-4 rounded-xl border-2 text-sm font-medium transition-colors ${
                  form.destination_type === t
                    ? 'border-primary bg-primary/5 text-primary'
                    : 'border-border text-(--text-muted) hover:border-(--primary)/40'
                }`}
              >
                {t === 'national' ? '🇨🇴 Nacional' : '🌍 Internacional'}
              </button>
            ))}
          </div>
        </div>

        {/* Info básica */}
        <div className="bg-white rounded-2xl border border-border shadow-(--shadow-sm) p-5 space-y-4">
          <h2 className="text-sm font-semibold text-(--text)">Información básica</h2>

          <div>
            <Label>Nombre *</Label>
            <Input
              value={form.name}
              onChange={e => handleNameChange(e.target.value)}
              required
              placeholder="Ej: Cañón del Chicamocha"
            />
          </div>

          <div>
            <Label>Slug *</Label>
            <Input
              value={form.slug}
              onChange={e => set('slug', e.target.value)}
              required
              placeholder="canon-del-chicamocha"
            />
            <p className="text-xs text-(--text-muted) mt-1">Se autogenera desde el nombre. Debe ser único.</p>
          </div>

          <div>
            <Label>Categoría *</Label>
            <Input
              value={form.category}
              onChange={e => set('category', e.target.value)}
              required
              placeholder="Ej: Naturaleza, Aventura, Cultural..."
            />
          </div>

          <div>
            <Label>Descripción corta *</Label>
            <Textarea
              value={form.short_description}
              onChange={e => set('short_description', e.target.value)}
              required
              rows={2}
              placeholder="Máximo 160 caracteres recomendado"
            />
          </div>

          <div>
            <Label>Descripción completa *</Label>
            <Textarea
              value={form.description}
              onChange={e => set('description', e.target.value)}
              required
              rows={5}
              placeholder="Descripción detallada del destino..."
            />
          </div>

          <div>
            <Label>Imagen del destino</Label>
            <div 
              className={`mt-1 flex justify-center rounded-xl border border-dashed px-6 py-8 transition-colors ${
                isDragging ? 'border-primary bg-primary/5' : 'border-border bg-(--bg-muted)'
              }`}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
            >
              <div className="text-center">
                {(previewUrl || form.image_url) ? (
                  <div className="relative mb-4 inline-block">
                    <img 
                      src={previewUrl || getPublicStorageUrl(form.image_url)} 
                      alt="Vista previa" 
                      className="mx-auto h-32 w-auto rounded-lg object-cover shadow-sm"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImageFile(null)
                        set('image_url', '')
                      }}
                      className="absolute -right-2 -top-2 rounded-full bg-red-100 p-1 text-red-600 hover:bg-red-200 transition-colors"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <svg className="mx-auto h-12 w-12 text-(--text-muted)" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                  </svg>
                )}
                
                <div className="mt-4 flex text-sm leading-6 text-(--text-muted) justify-center">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-transparent font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-(--primary-700) transition-colors"
                  >
                    <span>Sube un archivo</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/*" onChange={onFileSelect} />
                  </label>
                  <p className="pl-1">o arrastra y suelta</p>
                </div>
                <p className="text-xs leading-5 text-(--text-muted) mt-1">PNG, JPG, WEBP hasta 5MB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ubicación */}
        <div className="bg-white rounded-2xl border border-border shadow-(--shadow-sm) p-5 space-y-4">
          <h2 className="text-sm font-semibold text-(--text)">Ubicación</h2>

          {isNational ? (
            <div>
              <div className="flex items-center justify-between">
                <Label>Ciudad {isNational && '*'}</Label>
                {!showNewCity && (
                  <button type="button" onClick={() => setShowNewCity(true)} className="text-xs text-primary font-medium hover:underline">
                    + Nueva ciudad
                  </button>
                )}
              </div>
              {showNewCity ? (
                <div className="space-y-3 p-4 border border-border rounded-xl bg-(--bg-muted)/50 mt-2">
                  <h4 className="text-sm font-semibold text-(--text)">Crear nueva ciudad</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="col-span-2">
                      <Label>Nombre *</Label>
                      <Input value={newCity.name} onChange={e => setNewCity(prev => ({ ...prev, name: e.target.value }))} placeholder="Ej: San Gil" autoFocus />
                    </div>
                    <div>
                      <Label>Latitud *</Label>
                      <Input type="number" step="any" value={newCity.lat} onChange={e => setNewCity(prev => ({ ...prev, lat: e.target.value }))} placeholder="6.5563" />
                    </div>
                    <div>
                      <Label>Longitud *</Label>
                      <Input type="number" step="any" value={newCity.lng} onChange={e => setNewCity(prev => ({ ...prev, lng: e.target.value }))} placeholder="-73.1352" />
                    </div>
                    <div>
                      <Label>Zoom</Label>
                      <Input type="number" step="any" value={newCity.zoom} onChange={e => setNewCity(prev => ({ ...prev, zoom: e.target.value }))} />
                    </div>
                    <div>
                      <Label>Orden</Label>
                      <Input type="number" value={newCity.sort_order} onChange={e => setNewCity(prev => ({ ...prev, sort_order: e.target.value }))} />
                    </div>
                    <div className="col-span-2">
                      <Label>Descripción</Label>
                      <Textarea value={newCity.description} onChange={e => setNewCity(prev => ({ ...prev, description: e.target.value }))} placeholder="Descripción de la ciudad..." rows={2} />
                    </div>
                    <div className="col-span-2 mt-2">
                      <Label>Imagen de la ciudad (Opcional)</Label>
                      <div className="flex items-center gap-4 mt-1">
                        {newCityPreview && (
                          <div className="relative">
                            <img src={newCityPreview} alt="Vista previa" className="h-16 w-16 object-cover rounded-lg border border-border" />
                            <button
                              type="button"
                              onClick={() => setNewCityImage(null)}
                              className="absolute -top-2 -right-2 bg-red-100 text-red-600 rounded-full p-0.5 hover:bg-red-200"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        )}
                        <label className="cursor-pointer px-4 py-2 bg-(--bg-muted) border border-border rounded-xl text-sm font-medium hover:bg-gray-100 transition-colors">
                          Seleccionar imagen
                          <input 
                            type="file" 
                            accept="image/*" 
                            className="hidden" 
                            onChange={e => {
                              if (e.target.files && e.target.files.length > 0) {
                                setNewCityImage(e.target.files[0])
                              }
                            }}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 mt-4">
                    <button type="button" onClick={() => setShowNewCity(false)} className="px-4 py-2 border border-border text-(--text-muted) text-sm rounded-xl hover:bg-white transition-colors">Cancelar</button>
                    <button type="button" onClick={handleCreateCity} disabled={creatingCity || !newCity.name.trim() || !newCity.lat || !newCity.lng} className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-xl hover:bg-(--primary-700) disabled:opacity-50 transition-colors">
                      {creatingCity ? 'Guardando...' : 'Guardar ciudad'}
                    </button>
                  </div>
                </div>
              ) : (
                <Select
                  value={form.city_id}
                  onChange={e => set('city_id', e.target.value)}
                  required={isNational}
                >
                  <option value="">Selecciona una ciudad...</option>
                  {cities.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </Select>
              )}
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between">
                <Label>País *</Label>
                {!showNewCountry && (
                  <button type="button" onClick={() => setShowNewCountry(true)} className="text-xs text-primary font-medium hover:underline">
                    + Nuevo país
                  </button>
                )}
              </div>
              {showNewCountry ? (
                <div className="space-y-3 p-4 border border-border rounded-xl bg-(--bg-muted)/50 mt-2">
                  <h4 className="text-sm font-semibold text-(--text)">Crear nuevo país</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="col-span-2">
                      <Label>Nombre *</Label>
                      <Input value={newCountry.name} onChange={e => setNewCountry(prev => ({ ...prev, name: e.target.value }))} placeholder="Ej: México" autoFocus />
                    </div>
                    <div>
                      <Label>Latitud *</Label>
                      <Input type="number" step="any" value={newCountry.lat} onChange={e => setNewCountry(prev => ({ ...prev, lat: e.target.value }))} placeholder="23.6345" />
                    </div>
                    <div>
                      <Label>Longitud *</Label>
                      <Input type="number" step="any" value={newCountry.lng} onChange={e => setNewCountry(prev => ({ ...prev, lng: e.target.value }))} placeholder="-102.5528" />
                    </div>
                    <div>
                      <Label>Zoom</Label>
                      <Input type="number" step="any" value={newCountry.zoom} onChange={e => setNewCountry(prev => ({ ...prev, zoom: e.target.value }))} />
                    </div>
                    <div>
                      <Label>Orden</Label>
                      <Input type="number" value={newCountry.sort_order} onChange={e => setNewCountry(prev => ({ ...prev, sort_order: e.target.value }))} />
                    </div>
                    <div className="col-span-2">
                      <Label>Descripción</Label>
                      <Textarea value={newCountry.description} onChange={e => setNewCountry(prev => ({ ...prev, description: e.target.value }))} placeholder="Descripción del país..." rows={2} />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 mt-2">
                    <button type="button" onClick={() => setShowNewCountry(false)} className="px-4 py-2 border border-border text-(--text-muted) text-sm rounded-xl hover:bg-white transition-colors">Cancelar</button>
                    <button type="button" onClick={handleCreateCountry} disabled={creatingCountry || !newCountry.name.trim() || !newCountry.lat || !newCountry.lng} className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-xl hover:bg-(--primary-700) disabled:opacity-50 transition-colors">
                      {creatingCountry ? 'Guardando...' : 'Guardar país'}
                    </button>
                  </div>
                </div>
              ) : (
                <Select
                  value={form.country_id}
                  onChange={e => set('country_id', e.target.value)}
                  required={!isNational}
                >
                  <option value="">Selecciona un país...</option>
                  {countries.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </Select>
              )}
            </div>
          )}

          <div className="grid grid-cols-2 gap-3 mt-4">
            <div>
              <Label>Latitud {isNational && '*'}</Label>
              <Input
                type="number"
                step="any"
                value={form.lat}
                onChange={e => set('lat', e.target.value)}
                required={isNational}
                placeholder="7.893"
              />
            </div>
            <div>
              <Label>Longitud {isNational && '*'}</Label>
              <Input
                type="number"
                step="any"
                value={form.lng}
                onChange={e => set('lng', e.target.value)}
                required={isNational}
                placeholder="-72.507"
              />
            </div>
          </div>
        </div>

        {/* Detalles adicionales */}
        <div className="bg-white rounded-2xl border border-border shadow-(--shadow-sm) p-5 space-y-4">
          <h2 className="text-sm font-semibold text-(--text)">Detalles adicionales</h2>

          <div>
            <Label>Clima</Label>
            <Input
              value={form.climate}
              onChange={e => set('climate', e.target.value)}
              placeholder="Ej: Cálido, Templado..."
            />
          </div>

          <div>
            <Label>Actividades</Label>
            <Input
              value={form.activities}
              onChange={e => set('activities', e.target.value)}
              placeholder="Senderismo, Rafting, Ciclismo  (separadas por coma)"
            />
            <p className="text-xs text-(--text-muted) mt-1">Separa cada actividad con una coma.</p>
          </div>

          <div>
            <Label>Orden en destacados</Label>
            <Input
              type="number"
              min={0}
              value={form.sort_order_home}
              onChange={e => set('sort_order_home', parseInt(e.target.value) || 0)}
            />
          </div>
        </div>

        {/* Publicación */}
        <div className="bg-white rounded-2xl border border-border shadow-(--shadow-sm) p-5 space-y-3">
          <h2 className="text-sm font-semibold text-(--text)">Publicación</h2>
          <Toggle
            label="Publicado (visible en la web pública)"
            checked={form.is_active}
            onChange={v => set('is_active', v)}
          />
          <Toggle
            label="Destacado en el home"
            checked={form.is_featured}
            onChange={v => set('is_featured', v)}
          />
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-red-50 border border-red-100">
            <svg className="w-4 h-4 text-red-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {/* Acciones */}
        <div className="flex items-center gap-3 justify-end pb-6">
          <button
            type="button"
            onClick={() => navigate('/admin/destinos')}
            className="px-5 py-2.5 rounded-xl border border-border text-sm font-medium text-(--text) hover:bg-(--bg-muted) transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-(--primary-700) disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            {saving ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Guardando...
              </span>
            ) : isEdit ? 'Guardar cambios' : 'Crear destino'}
          </button>
        </div>
      </form>
    </div>
  )
}