"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import {
  intro,
  personasRelax,
  musicos,
  juventud,
  trajes,
  fraseFinal,
} from "@/content/eventos/eventos-data";
import {
  Quote,
  Music,
  Users,
  Camera,
  Star,
  Sparkles,
  Heart,
} from "lucide-react";

export const Eventos = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      id="eventos"
      ref={containerRef}
      className="relative bg-white overflow-hidden scroll-mt-24"
    >
      {/* Capas de Fondo Caribeño - Impacto Visual Mejorado */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Capa de Difuminado Inicial (Para suavizar transición con sección anterior) */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent z-10" />

        {/* Gradiente Radial Superior (Amarillo Limón) - Movido un poco más abajo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] opacity-15 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,#FAE100,rgba(255,255,255,0))]" />

        {/* Gradiente Radial Central (Verde Selva) */}
        <div className="absolute top-1/4 -right-1/4 w-full h-[1200px] opacity-[0.15] bg-[radial-gradient(circle_at_center,rgba(0,77,64,0.4),transparent_70%)]" />

        {/* Gradiente Radial Inferior (Ámbar/Tierra) */}
        <div className="absolute bottom-0 -left-1/4 w-full h-[1000px] opacity-[0.12] bg-[radial-gradient(circle_at_center,rgba(250,225,0,0.3),transparent_70%)]" />

        {/* Textura de Grano Reforzada */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

        {/* Líneas de Escaneo Sutiles (Toque Editorial) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.02)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.01),rgba(0,0,255,0.01))] bg-[length:100%_2px,3px_100%]" />
      </div>

      {/* 1. SECCIÓN: PERSONAS RELAX / VIDA DEL EVENTO */}
      <div className="py-24 border-b border-zinc-100 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="mb-16 max-w-4xl"
          >
            <h2 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tighter text-zinc-900">
              {intro.title}
            </h2>
            <div className="h-1 w-24 bg-limon-amarillo-400 mb-12" />
            <p className="text-xl md:text-2xl text-limon-selva-800 font-bold mb-6 italic">
              “{personasRelax.text}”
            </p>
            <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl font-body">
              {intro.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[16/9] rounded-sm overflow-hidden shadow-2xl bg-zinc-50 group"
              >
                <Image
                  src={personasRelax.images[0]}
                  alt="Vida del evento en Limón"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute bottom-2 right-2 text-[10px] text-white/50 font-medium tracking-wide bg-black/20 px-2 py-0.5 rounded-sm backdrop-blur-sm">
                  Foto: Xavier Sandí Castillo
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-4 space-y-6">
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-limon-selva-600 block">
                Vida en comunidad
              </p>
              <h3 className="text-3xl font-display font-bold text-zinc-900 leading-tight">
                La fiesta también se vive con calma
              </h3>
              <p className="text-zinc-600 leading-relaxed font-body">
                {personasRelax.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-sm overflow-hidden border border-zinc-100 shadow-sm group">
                  <Image
                    src={personasRelax.images[1]}
                    alt="Comunidad"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                  <div className="absolute bottom-1 right-1 text-[8px] text-white/40 font-medium tracking-wide bg-black/10 px-1 rounded-sm">
                    Foto: Xavier Sandí Castillo
                  </div>
                </div>
                <div className="relative aspect-square rounded-sm overflow-hidden border border-zinc-100 shadow-sm group">
                  <Image
                    src={personasRelax.images[3]}
                    alt="Encuentro"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                  <div className="absolute bottom-1 right-1 text-[8px] text-white/40 font-medium tracking-wide bg-black/10 px-1 rounded-sm">
                    Foto: Xavier Sandí Castillo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SECCIÓN: PÚBLICO Y MULTITUDES (Parallax) */}
      <div className="relative h-[80vh] overflow-hidden group">
        <motion.div
          style={{ y: parallaxY }}
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
        >
          <Image
            src={personasRelax.images[2]}
            alt="Público en Limón"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-32 right-4 text-[10px] text-white/30 font-medium tracking-wide">
            Foto: Xavier Sandí Castillo
          </div>
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white max-w-4xl"
          >
            <span className="text-limon-amarillo-400 font-bold tracking-[0.5em] uppercase text-xs mb-6 block">
              Magnitud
            </span>
            <h2 className="text-5xl md:text-8xl font-display font-bold mb-8 leading-tight tracking-tighter">
              Limón se reúne.
              <br /> La calle es escenario.
            </h2>
            <div className="h-1 w-20 bg-white mx-auto opacity-50" />
          </motion.div>
        </div>
      </div>

      {/* 3. SECCIÓN: MÚSICOS E INSTRUMENTOS */}
      <div className="py-32 bg-zinc-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex p-4 bg-limon-amarillo-400 rounded-full mb-8 text-zinc-900"
            >
              <Music size={32} />
            </motion.div>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 mb-6">
              {musicos.title}
            </h3>
            <p className="text-xl text-zinc-500 italic max-w-xl mx-auto">
              “{musicos.text}”
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {musicos.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-sm border border-zinc-100 overflow-hidden shadow-sm md:hover:shadow-xl transition-all duration-500 group"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 md:group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-2 right-2 text-[10px] text-white/50 font-medium tracking-wide bg-black/20 px-2 py-0.5 rounded-sm backdrop-blur-sm">
                    Foto: Xavier Sandí Castillo
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-display font-bold text-zinc-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-zinc-500 font-body">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. SECCIÓN: JUVENTUD (Grid Moderno) */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <span className="text-limon-selva-600 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
                Evolución
              </span>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 mb-8 leading-tight">
                {juventud.title}
              </h3>
              <div className="h-1 w-12 bg-limon-amarillo-400 mb-8" />
              <p className="text-xl text-zinc-500 italic font-medium leading-relaxed mb-8">
                “{juventud.text}”
              </p>
              <p className="text-zinc-600 font-body">
                La identidad de Limón se transforma en las manos de quienes la
                heredan, manteniendo las raíces mientras crean nuevos gestos y
                miradas.
              </p>
            </div>
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
              {juventud.images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[3/4] w-full rounded-sm overflow-hidden shadow-lg border border-zinc-100 bg-zinc-50 group"
                >
                  <Image
                    src={img}
                    alt="Juventud de Limón"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 md:hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-2 right-2 text-[10px] text-white/50 font-medium tracking-wide bg-black/20 px-2 py-0.5 rounded-sm backdrop-blur-sm">
                    Foto: Xavier Sandí Castillo
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5. SECCIÓN ESTRELLA: TRAJES */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <span className="text-limon-amarillo-600 font-bold tracking-[0.4em] uppercase text-sm mb-4 block">
              Sección Estrella
            </span>
            <h3 className="text-5xl md:text-8xl font-display font-bold text-zinc-900 tracking-tighter">
              {trajes.title}
            </h3>
          </div>

          {/* Bloque 1: Impacto */}
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 1, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square rounded-sm overflow-hidden shadow-2xl z-20 bg-zinc-50 group"
              >
                <Image
                  src={trajes.impact.image}
                  alt="Impacto Traje"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-4 right-4 text-[10px] text-white/50 font-medium tracking-wide bg-black/20 px-2 py-0.5 rounded-sm backdrop-blur-sm">
                  Foto: Xavier Sandí Castillo
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 1, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
                className="lg:-ml-24 bg-white p-12 md:p-20 shadow-xl border border-zinc-100 relative z-10"
              >
                <Quote
                  size={48}
                  className="text-limon-amarillo-400 mb-8 opacity-40"
                />
                <h4 className="text-3xl md:text-5xl font-display font-bold text-zinc-900 leading-tight italic">
                  “{trajes.impact.text}”
                </h4>
              </motion.div>
            </div>
          </div>

          {/* Bloque 2: Lenguaje del Color (Grid 2x2) */}
          <div className="mb-32 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {trajes.categories.map((cat: any, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative h-[500px] overflow-hidden rounded-sm bg-zinc-900"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-700 md:group-hover:scale-105 md:group-hover:opacity-40"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent md:group-hover:from-zinc-900 md:group-hover:via-zinc-900/80 transition-all duration-500">
                  <span className="text-limon-amarillo-400 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                    {cat.tag}
                  </span>
                  <h5 className="text-2xl font-display font-bold text-white mb-1">
                    {cat.title}
                  </h5>
                  <p className="text-white/90 text-sm font-medium mb-4 italic">
                    {cat.subtitle}
                  </p>
                  <div className="overflow-hidden max-h-0 md:group-hover:max-h-48 transition-all duration-500 ease-in-out">
                    <p className="text-white/70 text-sm leading-relaxed border-t border-white/10 pt-4 mt-auto">
                      {cat.description}
                    </p>
                  </div>
                </div>
                <div className="absolute top-2 right-2 text-[8px] text-white/30 font-medium tracking-wide">
                  Foto: Xavier Sandí Castillo
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bloque 3: Movimiento */}
          <div className="mb-32 relative h-[60vh] rounded-sm overflow-hidden group">
            <Image
              src={trajes.movement.image}
              alt="Movimiento"
              fill
              className="object-cover transition-transform duration-[2000ms] md:group-hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
                className="text-center text-white"
              >
                <h4 className="text-4xl md:text-7xl font-display font-bold italic tracking-tighter">
                  “{trajes.movement.text}”
                </h4>
              </motion.div>
            </div>
            <div className="absolute bottom-4 right-4 text-[10px] text-white/40 font-medium tracking-wide">
              Foto: Xavier Sandí Castillo
            </div>
          </div>

          {/* Bloque 4: Detalles */}
          <div className="mb-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-xl">
                <span className="text-limon-amarillo-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                  Significado
                </span>
                <h3 className="text-4xl font-display font-bold text-zinc-900 italic">
                  “{trajes.details.text}”
                </h3>
              </div>
              <p className="text-zinc-500 font-medium md:text-right max-w-xs">
                Abanicos, joyas y tocados que cargan con el peso de la historia.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trajes.details.images.map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-square rounded-sm overflow-hidden shadow-lg border border-zinc-100 group"
                >
                  <Image
                    src={img}
                    alt="Detalle Traje"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute bottom-2 right-2 text-[8px] text-white/40 font-medium tracking-wide bg-black/10 px-1 rounded-sm">
                    Foto: Xavier Sandí Castillo
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bloque 5: Cierre Emocional */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <div className="h-0.5 w-16 bg-limon-amarillo-400" />
                  <h4 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 leading-tight italic">
                    “{trajes.closure.text}”
                  </h4>
                  <p className="text-xl text-zinc-500 font-medium">
                    Vestirse no es un acto cotidiano; es un acto de afirmación
                    cultural y orgullo ancestral.
                  </p>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
                className="order-1 lg:order-2 relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl bg-zinc-50 group"
              >
                <Image
                  src={trajes.closure.image}
                  alt="Orgullo Limonense"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-4 right-4 text-[10px] text-white/50 font-medium tracking-wide bg-black/20 px-2 py-0.5 rounded-sm backdrop-blur-sm">
                  Foto: Xavier Sandí Castillo
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. FRASE FINAL */}
      <div className="py-48 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="group inline-flex p-4 border border-white/20 rounded-full mb-12 hover:bg-white hover:text-zinc-900 transition-all duration-300"
          >
            <Heart size={40} className="group-hover:fill-current" />
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-display font-bold max-w-5xl mx-auto leading-tight italic tracking-tighter">
            “{fraseFinal}”
          </h2>
          <div className="h-1 w-12 bg-limon-amarillo-400 mx-auto mt-16" />
        </div>
      </div>
    </section>
  );
};
