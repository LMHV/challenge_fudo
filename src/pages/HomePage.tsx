import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();


  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      navigate('/');
    }
  }, [navigate])

  return (
    <div className="min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="grid place-content-center">
        <h1 className="text-[#fe4f22] font-semibold text-3xl">Bienvenido a DELI</h1>
      </main>
      <Footer />
    </div>
  );
}
