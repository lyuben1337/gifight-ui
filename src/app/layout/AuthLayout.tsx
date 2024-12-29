import { Navigate, Outlet } from "react-router";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { getUsers } from "../../shared/api/users.ts";

export function AuthLayout() {
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      await getUsers();
      setAuthChecked(true);
    };

    checkAuthStatus();
  }, []);

  useEffect(() => {
    if (authChecked) {
      toast.error("You are already authenticated!");
    }
  }, [authChecked]);

  if (authChecked) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="flex justify-center items-center h-screen px-16">
      <Outlet />
    </main>
  );
}
