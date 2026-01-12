"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LightRays } from "@/components/magicui/light-rays";
import { Meteors } from "@/components/magicui/meteors";
import { TextAnimate } from "@/components/magicui/text-animate";
import { FadeIn } from "@/components/FadeIn";
import { benefits } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { WeatherWidget } from "@/components/WeatherWidget";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex items-end md:items-center overflow-hidden bg-black"
    >
      {/* Background Image - Optimized for visibility */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Hospedaje.jpg"
          alt="Brisas del Río - Vista panorámica de las cabañas y naturaleza"
          fill
          className="object-cover object-[center_30%] md:object-center opacity-80"
          priority
          quality={100}
        />
        {/* Dynamic Orbs for depth */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-[120px] animate-pulse delay-700" />

        {/* Multi-stage gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/20 md:to-transparent" />
      </div>

      {/* FX Layer */}
      <LightRays className="z-10 opacity-20" />
      <Meteors number={15} className="z-10 opacity-50" />

      {/* Content Container - Flex centered with better overflow protection */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end md:justify-center pt-20 pb-8 md:pt-16 md:pb-12 [@media(max-height:750px)]:pt-14 [@media(max-height:750px)]:pb-6">
        <div className="flex flex-col md:flex-row items-center md:items-center">
          {/* Main Glass Card - Adaptive Height */}
          <div className="w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl lg:translate-y-4">
            <motion.div
              initial={{ opacity: 0, y: 30, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, y: 0, backdropFilter: "blur(24px)" }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-black/40 border border-white/10 p-5 sm:p-6 md:p-7 lg:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl relative overflow-hidden text-center md:text-left"
            >
              {/* Weather & Logo - Top Row on MD+ */}
              <div className="mb-4 md:mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Logo with White Background for Presence */}
                <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center p-3 sm:p-4 shadow-[0_0_20px_rgba(255,255,255,0.2)] shrink-0 group-hover:scale-105 transition-transform duration-500">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/LogoBrisasDelRio.png"
                      alt="Logo Brisas del Río"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Weather Widget */}
                <div className="flex">
                  <WeatherWidget />
                </div>
              </div>

              {/* Animated Headline - SEO H1 */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 md:mb-3 leading-[1.05] tracking-tight [@media(max-height:750px)]:text-2xl [@media(max-height:750px)]:mb-1">
                <TextAnimate animation="blurInUp" by="word">
                  Naturaleza, Sabor y Descanso en Pococí
                </TextAnimate>
              </h1>

              {/* Subtitle & Info - Compact & Centered */}
              <FadeIn delay={0.5}>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-4 md:mb-5 text-emerald-400 font-bold tracking-wider text-[10px] md:text-xs uppercase [@media(max-height:750px)]:mb-2">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 border border-emerald-500/10 rounded-full">
                    <MapPin size={10} />
                    Jiménez, Costa Rica
                  </span>
                  <span className="w-1 h-1 bg-white/20 rounded-full hidden sm:block" />
                  <span className="px-3 py-1 bg-white/5 rounded-full text-white/90">
                    Restaurante & Cabañas
                  </span>
                </div>

                <p className="text-sm md:text-base text-white/70 mb-6 md:mb-7 max-w-lg mx-auto md:mx-0 leading-relaxed [@media(max-height:750px)]:mb-4 [@media(max-height:750px)]:text-xs">
                  Escápate a un refugio tropical único donde la montaña se une
                  con el río. Disfruta de hospedaje acogedor y la mejor cocina
                  criolla de la zona.
                </p>
              </FadeIn>

              {/* Actions - Centered on mobile */}
              <FadeIn delay={0.7}>
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mb-6 md:mb-8 [@media(max-height:750px)]:mb-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 h-12 md:h-13 text-sm font-bold shadow-xl shadow-primary/25 rounded-xl md:rounded-2xl group"
                  >
                    <Link href="#contacto" className="flex items-center gap-2">
                      Reservar Mi Estancia
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-white/20 bg-white/5 hover:bg-white/10 text-white h-12 md:h-13 px-8 backdrop-blur-sm rounded-xl md:rounded-2xl text-sm"
                  >
                    <Link href="#hospedaje">Explorar Cabañas</Link>
                  </Button>
                </div>
              </FadeIn>

              {/* Benefits Mini-Grid - Centered on mobile */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 border-t border-white/5 pt-5 md:pt-6 [@media(max-height:750px)]:pt-3">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex flex-row md:flex-col items-center justify-center md:items-start gap-2 md:gap-1"
                  >
                    <div className="p-1.5 bg-primary/20 rounded-lg shrink-0">
                      <benefit.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex flex-col text-left md:text-left">
                      <span className="text-[10px] md:text-xs font-bold text-white leading-tight">
                        {benefit.title}
                      </span>
                      <span className="text-[8px] text-white/40 hidden lg:block uppercase tracking-tighter">
                        {benefit.description.split(" ")[0]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
