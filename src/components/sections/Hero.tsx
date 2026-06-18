import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { WeatherWidget } from "@/components/WeatherWidget";
import NumberTicker from "@/components/magicui/number-ticker";
import { TextReveal } from "@/components/TextReveal";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-start overflow-hidden pt-24 pb-12">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero/Hero-Limon.webp"
          alt="Puerto Limón Panorama"
          className="w-full h-full object-cover transition-opacity duration-1000"
          loading="eager"
        />
        {/* Sophisticated editorial overlay: dark gradient from bottom and left */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/95 via-black/75 to-black/30 z-10" />
      </div>

      {/* Subtle Noise Texture Overlay */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] z-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.webp')] mix-blend-overlay" />
      </div>

      {/* Main Content Layout Container */}
      <div className="relative z-20 container mx-auto px-4 md:px-8 lg:px-12 w-full flex flex-col justify-end min-h-[75vh] md:min-h-0">
        <div className="max-w-4xl text-left space-y-8">
          
          {/* Símbolos de Identidad y Widget del Clima */}
          <div className="flex flex-wrap items-center gap-4 relative z-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-2.5 pr-5 backdrop-blur-md"
            >
              {/* Bandera */}
              <div className="relative w-10 h-7 rounded-[4px] overflow-hidden bg-black/20 ring-1 ring-white/10">
                <img
                  src="/assets/hero/bandera-limon.svg"
                  alt="Bandera de Limón"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Divider */}
              <div className="h-6 w-px bg-white/15" />

              {/* Escudo */}
              <div className="relative w-6 h-8">
                <img
                  src="/assets/hero/escudo-limon.webp"
                  alt="Escudo de Limón"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Divider */}
              <div className="h-6 w-px bg-white/15" />

              {/* Text Label */}
              <div className="flex flex-col">
                <span className="text-[9px] text-white/50 uppercase tracking-widest leading-none mb-0.5">
                  Provincia de
                </span>
                <span className="text-xs font-bold text-white tracking-wide uppercase">
                  Limón, Costa Rica
                </span>
              </div>
            </motion.div>

            {/* Weather Widget Island */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <WeatherWidget />
            </motion.div>
          </div>

          {/* Títulos y Subtítulo con Animación TextReveal */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.95] tracking-tight">
              <TextReveal text="Naturaleza, Cultura" className="text-white" delay={0.3} />
              <br />
              <TextReveal 
                text="y Sabor Caribeño" 
                className="text-transparent bg-clip-text bg-gradient-to-r from-limon-amarillo-400 via-limon-amarillo-300 to-white" 
                delay={0.5} 
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-xl font-light"
            >
              Historia viva, arquitectura patrimonial y la auténtica esencia del
              Caribe. Descubre el corazón de Limón más allá de los clichés.
            </motion.p>
          </div>

          {/* Estadísticas de la Ciudad y Acción Principal */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8 border-t border-white/10">
            {/* HUD-like Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 md:flex md:items-center gap-6 md:gap-10 w-full md:w-auto"
            >
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold font-display text-white">
                  1854
                </span>
                <span className="text-[9px] text-white/40 uppercase tracking-widest mt-0.5">
                  Fundación
                </span>
              </div>

              <div className="hidden sm:block w-px h-8 bg-white/10" />

              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold font-display text-white">
                  +50
                </span>
                <span className="text-[9px] text-white/40 uppercase tracking-widest mt-0.5">
                  Patrimonio
                </span>
              </div>

              <div className="hidden sm:block w-px h-8 bg-white/10" />

              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold font-display text-white min-w-[120px] tabular-nums">
                  <NumberTicker value={100621} />
                </span>
                <span className="text-[9px] text-white/40 uppercase tracking-widest mt-0.5">
                  Población
                </span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="w-full md:w-auto"
            >
              <a
                href="#historia"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("main")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-white hover:bg-limon-amarillo-400 text-black rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-limon-amarillo-400/20 group"
              >
                <span>Explorar Contenido</span>
                <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
