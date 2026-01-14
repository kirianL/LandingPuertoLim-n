import { Hero } from "@/components/sections/Hero";
import { HistoriaPatrimonio } from "@/components/sections/HistoriaPatrimonio";
import { Arquitectura } from "@/components/sections/Arquitectura";
import { Cultura } from "@/components/sections/Cultura";
import { Deportes } from "@/components/sections/Deportes";
import { Naturaleza } from "@/components/sections/Naturaleza";
import { Gastronomia } from "@/components/sections/Gastronomia";
import { Dock } from "@/components/Dock";
import RutaRecomendada from "@/components/sections/RutaRecomendada";
import { Eventos } from "@/components/sections/Eventos";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="relative">
        {/* Historia section */}
        <HistoriaPatrimonio />

        {/* Arquitectura section */}
        <Arquitectura />

        {/* Cultura section */}
        <Cultura />

        {/* Deportes section */}
        <Deportes />

        {/* Naturaleza section */}
        <Naturaleza />

        {/* Gastronomía section */}
        <Gastronomia />

        {/* Eventos section */}
        <Eventos />

        {/* Ruta section */}
        <RutaRecomendada />
      </main>

      {/* Dock Navigation */}
      <Dock />

      {/* Simple Footer */}
      <footer id="footer" className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-display italic text-limon-selva-700 dark:text-limon-selva-400 mb-2">
            "Lo mejor de Limón es su gente"
          </p>
          <p className="text-sm text-muted-foreground">
            © 2026{" "}
            <a
              href="https://kirian.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-limon-selva-600 transition-colors font-medium underline-offset-4 hover:underline"
            >
              Kirian.dev
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
