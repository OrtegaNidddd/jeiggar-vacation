import { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { AuthContext } from './authContext';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  async function checkAdmin(sess: Session | null) {
    if (!sess) { setIsAdmin(false); setLoading(false); return; }
    const { data } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', sess.user.id)
      .single();
    setIsAdmin(data?.role === 'admin');
    setLoading(false);
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(true);
      checkAdmin(data.session);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_e, sess) => {
      setSession(sess);
      setLoading(true);
      checkAdmin(sess);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  };

  const signOut = async (): Promise<void> => {
    setSession(null);
    setIsAdmin(false);
    setLoading(false);
    await supabase.auth.signOut();
  };
  
  return (
    <AuthContext.Provider value={{ session, isAdmin, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

