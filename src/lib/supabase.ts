import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  const missingVars = [
    !supabaseUrl ? 'VITE_SUPABASE_URL' : null,
    !supabaseAnonKey ? 'VITE_SUPABASE_ANON_KEY' : null,
  ].filter(Boolean).join(', ')

  throw new Error(
    'Faltan variables de entorno de Supabase: ' + missingVars + '. ' +
    'Define VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en tu archivo .env o en la configuración del hosting.'
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)