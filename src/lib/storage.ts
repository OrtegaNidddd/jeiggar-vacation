const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL

export function getPublicStorageUrl(path: string, bucket = 'destinations') {
  if (!path) return ''

  // Backward compatible: if DB already has an absolute URL, keep it as-is.
  if (/^https?:\/\//i.test(path)) {
    return path
  }

  // Keep Vite local asset URLs working while migration is in progress.
  if (path.startsWith('/assets/') || path.startsWith('assets/')) {
    return path.startsWith('/') ? path : `/${path}`
  }

  const normalizedPath = path.replace(/^\/+/, '')
  const normalizedBase = (SUPABASE_URL ?? '').replace(/\/+$/, '')

  if (!normalizedBase) {
    return ''
  }

  return `${normalizedBase}/storage/v1/object/public/${bucket}/${normalizedPath}`
}