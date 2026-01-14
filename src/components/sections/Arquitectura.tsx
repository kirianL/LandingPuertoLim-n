"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import edificiosData from "@/content/edificios/edificios.json";
import { Building2, MapPin, Calendar, ArrowUpRight } from "lucide-react";

import { HistoryModal } from "./HistoryModal";

export function Arquitectura() {
  const [selectedEdificio, setSelectedEdificio] = useState<any>(null);

  // Function to determine grid span based on index for a "Bento" look
  const getGridClass = (index: number) => {
    // Pattern:
    // Row 1: Big (8) + Small (4)
    // Row 2: Small (4) + Small (4) + Small (4)
    // Row 3: Medium (6) + Medium (6)
    const pattern = [
      "md:col-span-8",
      "md:col-span-4",
      "md:col-span-4",
      "md:col-span-4",
      "md:col-span-4",
      "md:col-span-6",
      "md:col-span-6",
    ];
    return pattern[index % pattern.length] || "md:col-span-4";
  };

  return (
    <section
      id="arquitectura"
      className="relative py-24 bg-zinc-50 dark:bg-zinc-950/50 scroll-mt-24"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold mb-4 text-zinc-900 dark:text-white tracking-tight"
          >
            Arquitectura <br />
            <span className="text-limon-selva-600">Emblemática</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="h-1 w-20 bg-limon-amarillo-400 mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Un recorrido visual por las estructuras que narran nuestra historia.
            Del victoriano caribeño al art déco, cada edificio es un testigo del
            tiempo.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[400px] md:auto-rows-[500px]">
          {edificiosData.map((edificio, index) => (
            <motion.div
              key={edificio.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-sm ${getGridClass(
                index
              )} cursor-pointer`}
              onClick={() => setSelectedEdificio(edificio)}
            >
              {/* Card Content */}
              <div className="absolute inset-0 bg-zink-900 block w-full h-full">
                <Image
                  src={edificio.imagen}
                  alt={edificio.nombre}
                  fill
                  className="object-cover transition-transform duration-700 md:group-hover:scale-105"
                  sizes={
                    index % 7 === 0
                      ? "(max-width: 768px) 100vw, 66vw"
                      : index % 7 >= 5
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 100vw, 33vw"
                  }
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 md:group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Floating Info */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                {/* Top Tags */}
                <div className="flex items-start justify-between">
                  <span className="bg-limon-selva-900/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-white/10 shadow-lg">
                    {edificio.estilo}
                  </span>
                  {edificio.año && (
                    <span className="bg-black/40 backdrop-blur-md text-white px-4 py-1 rounded-full font-display font-bold text-lg border border-white/10 shadow-lg">
                      {edificio.año}
                    </span>
                  )}
                </div>

                {/* Bottom Text */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 leading-tight">
                    {edificio.nombre}
                  </h3>
                  <p className="text-white/70 text-sm line-clamp-2 md:line-clamp-3 mb-4">
                    {edificio.descripcion}
                  </p>

                  <div className="flex items-center gap-2 text-limon-amarillo-400 font-bold text-sm uppercase tracking-wider md:group-hover:text-limon-amarillo-300">
                    <span>Ver detalles</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Walking Route CTA Refined */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col md:flex-row items-center justify-between bg-limon-selva-900 border border-limon-selva-800 p-8 md:p-12 rounded-[2rem] overflow-hidden relative"
        >
          {/* <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div> */}

          <div className="relative z-10 max-w-xl mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-3xl font-display font-bold text-white mb-4">
              Explora el Casco Histórico
            </h3>
            <p className="text-limon-selva-100/80 text-lg">
              Todos estos edificios están conectados por una ruta caminable de
              1.5km. Descubre la historia paso a paso.
            </p>
          </div>

          <a
            href="#footer"
            className="relative z-10 flex items-center gap-3 bg-white text-limon-selva-900 px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-limon-amarillo-400 transition-colors shadow-xl"
          >
            <MapPin className="w-5 h-5" />
            <span>Ver Mapa de Ruta</span>
          </a>
        </motion.div>
      </div>

      {/* Reuse HistoryModal with mapped data */}
      {selectedEdificio && (
        <HistoryModal
          isOpen={!!selectedEdificio}
          onClose={() => setSelectedEdificio(null)}
          data={{
            ...selectedEdificio,
            titulo: selectedEdificio.nombre,
            cita: `Estilo ${selectedEdificio.estilo} • ${selectedEdificio.estado}`,
          }}
        />
      )}
    </section>
  );
}
