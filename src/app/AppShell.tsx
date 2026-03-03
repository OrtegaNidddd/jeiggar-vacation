import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function AppShell() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-(--bg-muted)">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}