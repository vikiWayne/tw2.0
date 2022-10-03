import { APP_ROUTES } from "config/app";
import { useAuth } from "hooks";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function RequireAuth() {
  const { user } = useAuth();
  const location = useLocation();
  return user ? (
    <Outlet />
  ) : (
    <Navigate to={APP_ROUTES.LOGIN} state={{ from: location }} replace />
  );
}

export default RequireAuth;
