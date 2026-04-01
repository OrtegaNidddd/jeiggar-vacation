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
        <Outlet />
      </main>
      <Footer />
    </>
  );
}