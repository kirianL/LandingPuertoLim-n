"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { WeatherWidget } from "@/components/WeatherWidget";
import NumberTicker from "@/components/magicui/number-ticker";

export function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("historia");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Background Image - Optimized with next/image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero/Hero-Limon.png"
          alt="Puerto Limón Panorama"
          fill
          priority
          sizes="100vw"
          className="object-cover transition-opacity duration-1000"
        />
        {/* Subtle vignette only at edges */}
        <div className="absolute inset-0 bg-black/10 z-10" />
      </div>

      {/* Caribbean Vibes - Subtle Leaf Shadows/Texture */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 z-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
      </div>

      {/* Glass Card Content - Mobile Centered */}
      <div className="relative z-20 container mx-auto px-4 md:px-6 lg:px-8 flex flex-col justify-center items-center md:block min-h-[60vh] md:min-h-0">
        <div className="w-full max-w-3xl bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl mx-auto md:mx-0 overflow-hidden relative">
          {/* Decorative blurred glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-limon-selva-500/20 blur-[80px] rounded-full pointer-events-none" />

          {/* Header Row: Identity & Weather */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mb-10 w-full relative z-20">
            {/* Identity Block - Redesigned for Visibility */}
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-3 pr-6 backdrop-blur-md">
              {/* Symbols Container */}
              <div className="flex items-center gap-3">
                {/* Flag - Large */}
                <div className="relative w-12 h-8 rounded-[4px] overflow-hidden shadow-lg ring-1 ring-white/10 hover:scale-105 transition-transform bg-black/20">
                  <Image
                    src="/assets/hero/bandera-limon.svg"
                    alt="Bandera de Limón"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                {/* Divider */}
                <div className="h-8 w-px bg-white/10" />

                {/* Escudo - Large */}
                <div className="relative w-8 h-10 drop-shadow-lg hover:scale-105 transition-transform">
                  <Image
                    src="/assets/hero/escudo-limon.png"
                    alt="Escudo de Limón"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Text Label */}
              <div className="flex flex-col">
                <span className="text-[10px] text-white/50 uppercase tracking-widest leading-none mb-1">
                  Provincia de
                </span>
                <span className="text-sm font-bold text-white tracking-wide uppercase">
                  Limón, Costa Rica
                </span>
              </div>
            </div>

            {/* Weather Widget */}
            <div className="scale-100 origin-center md:origin-right">
              <WeatherWidget />
            </div>
          </div>

          {/* Main Content Group */}
          <div className="space-y-6 text-center md:text-left relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[0.9] tracking-tight">
              Naturaleza, Cultura <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009400] via-[#009400] to-white">
                y Sabor Caribeño
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mx-auto md:mx-0 font-light">
              Historia viva, arquitectura patrimonial y la auténtica esencia del
              Caribe. Descubre el corazón de Limón más allá de los clichés.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-10" />

          {/* Footer Row: Stats & CTAs */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-10">
            {/* Elegant Horizontal Stats - Left Aligned */}
            <div className="grid grid-cols-2 md:flex md:items-center gap-y-8 gap-x-6 md:gap-8 w-full md:w-auto justify-items-center md:justify-start">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-3xl font-bold font-display text-white leading-none">
                  1854
                </span>
                <span className="text-[10px] text-white/50 uppercase tracking-widest mt-1">
                  Fundación
                </span>
              </div>

              <div className="hidden md:block w-px h-8 bg-white/10" />

              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-3xl font-bold font-display text-white leading-none">
                  +50
                </span>
                <span className="text-[10px] text-white/50 uppercase tracking-widest mt-1">
                  Patrimonio
                </span>
              </div>

              <div className="hidden md:block w-px h-8 bg-white/10" />

              <div className="flex flex-col col-span-2 md:col-span-1 items-center md:items-start text-center md:text-left">
                <div className="text-3xl font-bold font-display text-white leading-none md:min-w-[140px] tabular-nums">
                  <NumberTicker value={100621} />
                </div>
                <span className="text-[10px] text-white/50 uppercase tracking-widest mt-1">
                  Población
                </span>
              </div>
            </div>

            {/* CTAs - Right Aligned (Single Button) */}
            <div className="w-full md:w-auto">
              <a
                href="#historia"
                className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-white text-limon-selva-900 hover:bg-limon-amarillo-300 rounded-xl font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-limon-amarillo-400/20 group"
              >
                Explorar Historia
                <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
