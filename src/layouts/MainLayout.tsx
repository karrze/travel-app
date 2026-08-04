import { Outlet } from "react-router-dom";
import { AppFooter } from "../components/layout/Footer";
import { AppNavbar } from "../components/layout/Navbar";

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <AppNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
}
