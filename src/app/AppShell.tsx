import { Suspense } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ScrollToTop from "@/app/ScrollToTop";
import { useAOS } from "@/hooks/useAOS";

function RouteSpinner({ message = "Cargando..." }: { message?: string }) {
  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-white/70 backdrop-blur-[2px]"
      role="status"
      aria-live="polite"
      aria-label={message}
    >
      <div className="flex flex-col items-center gap-3 text-(--text-muted)">
        <span className="h-10 w-10 animate-spin rounded-full border-3 border-border border-t-primary" />
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
}

export default function AppShell() {
  useAOS();
  const navigation = useNavigation();
  const isRouteChanging = navigation.state !== "idle";

  return (
    <>
      {isRouteChanging && <RouteSpinner />}
      <ScrollToTop />
      <Header />
      <main className="min-h-screen bg-(--bg-muted)">
        <Suspense
          fallback={
            <RouteSpinner message="Cargando vista..." />
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
