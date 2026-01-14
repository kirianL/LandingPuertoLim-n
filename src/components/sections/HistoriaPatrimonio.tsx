"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import timelineData from "@/content/historia/timeline.json";
import { ArrowUpRight } from "lucide-react";
import { HistoryModal } from "./HistoryModal";

export function HistoriaPatrimonio() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedHito, setSelectedHito] = useState<any>(null);
  const historiaArray = Object.values(timelineData);

  return (
    <section
      id="historia"
      className="relative py-24 bg-background overflow-hidden scroll-mt-24"
    >
      {/* Background Texture/Text */}
      <div className="absolute top-20 right-0 -mr-20 text-[15vw] font-display font-bold text-limon-concreto-100 dark:text-limon-concreto-900/50 leading-none select-none z-0 pointer-events-none opacity-50">
        LIMÓN
      </div>

      {/* Subtle Noise Texture Overlay */}
      {/* Subtle Noise Texture Overlay */}
      {/* <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold mb-4 text-zinc-900 dark:text-white tracking-tight"
          >
            Cronología <br />
            <span className="text-limon-puerto-600">Viva</span>
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
            Momentos que forjaron nuestra identidad. Pasa el cursor para
            descubrir la historia detrás de cada época.
          </motion.p>
        </div>

        {/* Creative "Magazine" Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 lg:gap-x-12">
          {historiaArray.map((hito, index) => {
            // Dynamic spanning adjustments for better proportions
            // Mobile: col-span-1 (stacked)
            // Desktop: alternating 7/5 columns split
            const colSpan = index % 2 === 0 ? "md:col-span-7" : "md:col-span-5";
            const offset = index % 2 === 1 ? "md:translate-y-16" : "";

            return (
              <motion.div
                key={hito.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${colSpan} ${offset} group relative flex flex-col`}
                onMouseEnter={() => setActiveId(hito.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-sm mb-4 bg-muted">
                  <Image
                    src={hito.imagen}
                    alt={hito.titulo}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes={
                      index % 2 === 0
                        ? "(max-width: 768px) 100vw, 55vw"
                        : "(max-width: 768px) 100vw, 40vw"
                    }
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

                  {/* Large Year Display Overlay - Adjusted Size */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-xl tracking-tighter">
                      {hito.año.split(" ")[0]}
                    </span>
                  </div>

                  {/* Action Icon */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedHito(hito);
                    }}
                    className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 cursor-pointer hover:bg-white/30 z-20"
                  >
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Text Content - Adjusted Spacing */}
                <div className="pr-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="h-px w-6 bg-limon-selva-500"></span>
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-limon-selva-600 dark:text-limon-selva-400">
                      {hito.epoca}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-display font-bold leading-tight mb-2 group-hover:text-limon-puerto-600 transition-colors">
                    {hito.titulo}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {hito.descripcion}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <HistoryModal
        isOpen={!!selectedHito}
        onClose={() => setSelectedHito(null)}
        data={selectedHito}
      />
    </section>
  );
}
