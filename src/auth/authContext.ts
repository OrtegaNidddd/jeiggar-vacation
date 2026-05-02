import { createContext } from 'react';
import type { Session } from '@supabase/supabase-js';

export interface AuthCtx {
  session: Session | null;
  isAdmin: boolean;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthCtx | null>(null);