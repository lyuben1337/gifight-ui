import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <main className="flex justify-center items-center h-screen px-16">
      <Outlet />
    </main>
  );
}
