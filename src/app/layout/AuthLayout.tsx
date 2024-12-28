import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <main className="flex justify-center items-center h-screen px-16">
      <Outlet />
    </main>
  );
}
