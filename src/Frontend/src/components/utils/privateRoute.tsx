import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../store/Auth';

export default function PrivateRoute() {
  const { isAuthenticated } = useAuthStore();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
