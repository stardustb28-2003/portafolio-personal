import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SobreMi from "./components/SobreMi";
import Stack from "./components/Stack";
import Trayectoria from "./components/Trayectoria";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <ScrollProgress />
      <Header />
      <Hero />
      <Proyectos />
      <Stack />
      <Trayectoria />
      <SobreMi />
      <Contacto />
      <WhatsAppFloat />
    </main>
  );
}