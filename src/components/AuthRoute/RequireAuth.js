import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function RequireAuth({ allowedRoles }) {
  const { auth } = useAuth();
  const location = useLocation();
  
  return auth && auth.roles && auth.roles.some((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
