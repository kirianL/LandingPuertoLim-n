"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  intro,
  nationalGames,
  disciplines,
  youth,
  infrastructure,
  testimonials,
  dailyLife,
  outro,
} from "@/content/deportes/deportes-data";
import {
  Trophy,
  Users,
  MapPin,
  Calendar,
  Medal,
  Activity,
  Quote,
} from "lucide-react";

export const Deportes = () => {
  return (
    <section
      id="deportes"
      className="relative py-24 bg-white overflow-hidden scroll-mt-24"
    >
      {/* Background Ambience */}
      {/* <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-[0.02] mix-blend-multiply pointer-events-none"></div> */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-limon-azul-200/30 rounded-full blur-[120px] mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-limon-verde-200/30 rounded-full blur-[100px] mix-blend-multiply pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-20 text-left">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold mb-4 text-zinc-900 tracking-tight"
          >
            Deportes en <br />
            <span className="text-limon-azul-600">Limón</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="h-1 w-20 bg-limon-amarillo-400 mb-8"
          />
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-600 font-light leading-relaxed font-body max-w-3xl"
          >
            {intro.description}
          </motion.p>
        </div>

        {/* National Games Highlight */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-50 rounded-sm border border-zinc-200 overflow-hidden p-8 md:p-12 relative shadow-sm"
          >
            {/* Decorative Background Icon */}
            <div className="absolute -right-10 -bottom-10 text-zinc-200/50 pointer-events-none">
              <Trophy size={300} />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Medal className="text-limon-amarillo-600" size={32} />
                <h3 className="text-3xl md:text-4xl font-display font-bold text-zinc-900">
                  {nationalGames.title}
                </h3>
              </div>
              <p className="text-zinc-600 text-lg leading-relaxed mb-10 max-w-4xl">
                {nationalGames.description}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div className="bg-white p-6 rounded-sm border border-zinc-200 shadow-sm">
                  <div className="text-limon-azul-600 mb-2">
                    <Calendar size={24} />
                  </div>
                  <div className="font-bold text-zinc-900 text-lg">Fechas</div>
                  <div className="text-zinc-500">{nationalGames.dates}</div>
                </div>
                {nationalGames.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-sm border border-zinc-200 shadow-sm"
                  >
                    <div className="text-limon-azul-600 mb-2">
                      <stat.icon size={24} />
                    </div>
                    <div className="font-bold text-zinc-900 text-lg">
                      {stat.value}
                    </div>
                    <div className="text-zinc-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Cantons */}
              <div className="border-t border-zinc-200 pt-8">
                <h4 className="text-zinc-500 uppercase tracking-widest text-sm font-bold mb-4">
                  Cantones Sede
                </h4>
                <div className="flex flex-wrap gap-3">
                  {nationalGames.cantons.map((cantor, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-white rounded-full text-zinc-600 border border-zinc-200 text-sm font-medium"
                    >
                      {cantor}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Disciplines Grid */}
        <div className="grid grid-cols-1 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-zinc-50 rounded-sm border border-zinc-200"
          >
            <h3 className="text-2xl font-display font-bold text-zinc-900 mb-6 flex items-center gap-3">
              <Activity className="text-limon-verde-600" />
              {disciplines.title}
            </h3>
            <p className="text-zinc-600 mb-8">{disciplines.description}</p>

            {/* Masonry Layout for Natural Image Sizes */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
              {disciplines.list.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="break-inside-avoid relative group overflow-hidden rounded-sm shadow-sm border border-zinc-200 bg-zinc-100"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                  <div className="absolute bottom-0 left-0 p-5 md:p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-white font-display font-bold text-2xl md:text-3xl leading-none mb-2">
                      {item.name}
                    </h4>
                    <div className="h-1 w-12 bg-limon-amarillo-400 group-hover:w-full transition-all duration-300 rounded-full"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Youth & Infrastructure Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 bg-zinc-50 rounded-sm border border-zinc-200 h-full"
          >
            <h3 className="text-2xl font-display font-bold text-zinc-900 mb-4">
              {youth.title}
            </h3>
            <p className="text-zinc-600 leading-relaxed">{youth.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 bg-zinc-50 rounded-sm border border-zinc-200 h-full"
          >
            <h3 className="text-2xl font-display font-bold text-zinc-900 mb-4">
              {infrastructure.title}
            </h3>
            <p className="text-zinc-600 mb-4">{infrastructure.description}</p>
            <ul className="space-y-2">
              {infrastructure.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-zinc-700 text-sm"
                >
                  <span className="text-limon-verde-600">✓</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Testimonials - Redesigned for a "fino" and modern look */}
        <div className="mb-32 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 mb-4">
              Voces de Limón
            </h3>
            <div className="h-1 w-12 bg-limon-amarillo-400 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group h-full"
              >
                <div className="bg-white rounded-sm border border-zinc-200 p-8 md:p-10 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center h-full relative">
                  <div className="relative mb-8">
                    <Quote
                      size={32}
                      strokeWidth={1.5}
                      className="text-limon-amarillo-400 absolute -top-4 -left-8 opacity-50"
                    />
                    <p className="text-lg md:text-xl text-zinc-700 font-medium leading-relaxed italic relative z-10 px-4">
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="mt-auto pt-8 w-full border-t border-zinc-100">
                    <div className="text-xl font-display font-bold text-zinc-900 tracking-tight">
                      {t.name}
                    </div>
                    <div className="text-xs uppercase tracking-[0.2em] text-limon-azul-600 font-extrabold mt-1">
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Outro */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-2xl md:text-3xl font-display font-bold text-zinc-900 mb-8">
            {outro.text}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-zinc-500 text-sm font-medium uppercase tracking-widest">
            {dailyLife.items.map((item, idx) => (
              <span key={idx} className="flex items-center gap-2">
                {idx > 0 && <span className="text-zinc-300">•</span>}
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
