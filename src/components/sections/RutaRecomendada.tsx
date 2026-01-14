"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const LimonMap = dynamic(() => import("./LimonMap"), { ssr: false });
import { MapPin } from "lucide-react";

export default function RutaRecomendada() {
  return (
    <section
      id="ruta"
      className="relative py-24 bg-zinc-950 overflow-hidden scroll-mt-24"
    >
      {/* Background Decor */}
      {/* Background Decor */}
      {/* <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div> */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="bg-limon-amarillo-400 text-zinc-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Explora
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold mb-4 text-white tracking-tight"
          >
            Tu Ruta <br />
            <span className="text-limon-amarillo-400">Recomendada</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl leading-relaxed"
          >
            Un mapa interactivo con los 12 puntos esenciales del casco
            histórico. Haz clic en los marcadores para ver detalles y planear tu
            caminata.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <LimonMap />
        </motion.div>
      </div>
    </section>
  );
}
