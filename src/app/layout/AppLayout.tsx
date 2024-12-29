import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../../hooks/useAuth.ts";
import { useEffect, useState } from "react";

export function AppLayout() {
  const { isAuthenticated, token, userId } = useAuth();
  const location = useLocation();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setRedirect(true);
    }
  }, [isAuthenticated, token]);

  if (redirect) {
    return <Navigate to="sign-in" replace />;
  }

  if (location.pathname === "/") {
    return <Navigate to={`/users/${userId}`} replace />;
  }

  return (
    <main className="flex justify-center items-center h-screen px-16">
      <Outlet />
    </main>
  );
}
