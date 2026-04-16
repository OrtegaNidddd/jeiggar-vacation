import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ScrollToTop from "@/app/ScrollToTop";
import { useAOS } from "@/hooks/useAOS";

export default function AppShell() {
  useAOS();
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen bg-(--bg-muted)">
        <Suspense
          fallback={
            <div
              className="flex min-h-screen items-center justify-center bg-(--bg) text-(--text-muted)"
              role="status"
              aria-live="polite"
            >
              Cargando...
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
