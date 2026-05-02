import { Navigate } from 'react-router-dom';
import { useAuth } from '@/auth/useAuth';
import { ReactElement } from 'react'


export function ProtectedRoute({ children }: { children: ReactElement }) {
  const { session, isAdmin, loading } = useAuth();
  if (loading) return <div className='p-8 text-center'>Verificando acceso...</div>;
  if (!session) return <Navigate to='/admin/login' replace />;
  if (!isAdmin) return <Navigate to='/403' replace />;
  return children;
}
