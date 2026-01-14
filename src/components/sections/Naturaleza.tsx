"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  intro,
  cahuita,
  tortuguero,
  destinations,
  ecoTours,
  wildlife,
  principles,
  routes,
  seasons,
  etiquette,
  ecosystems,
  community,
  gallery,
  outro,
} from "@/content/naturaleza/naturaleza-data";
import {
  TreePine,
  Anchor,
  MapPin,
  Heart,
  Leaf,
  Droplets,
  Bird,
  Binoculars,
  Waves,
  Compass,
  Camera,
  Sun,
  Footprints,
  Info,
  CloudRain,
  Smile,
  Umbrella,
  Users,
  Quote,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Naturaleza = () => {
  const [selectedDest, setSelectedDest] = useState<any>(null);

  return (
    <section
      id="naturaleza"
      className="relative py-24 bg-zinc-50 dark:bg-zinc-950 overflow-hidden scroll-mt-24"
    >
      {/* Ambient Background - Animated */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-limon-selva-100/40 rounded-full blur-[120px] mix-blend-multiply pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 50, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-limon-puerto-100/40 rounded-full blur-[100px] mix-blend-multiply pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10 text-left">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-4 text-zinc-900 tracking-tight">
              Naturaleza y <br />
              <span className="text-limon-selva-600">Turismo Responsable</span>
            </h2>
            <div className="h-1 w-20 bg-limon-amarillo-400 mb-8" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-zinc-600 font-light leading-relaxed font-body max-w-4xl mb-6">
              {intro.description}
            </p>
            {/* Context Banner */}
            <div className="inline-flex items-start gap-3 p-4 bg-limon-selva-50 border border-limon-selva-100 rounded-sm max-w-2xl transition-transform md:hover:scale-[1.01]">
              <Info className="text-limon-selva-600 shrink-0 mt-1" size={20} />
              <p className="text-sm text-limon-selva-800 font-medium">
                {intro.context}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Seasons Section */}
        <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-sm border border-zinc-200 shadow-sm transition-shadow duration-300 md:hover:shadow-md"
          >
            <h3 className="text-2xl font-display font-bold text-zinc-900 mb-6">
              {seasons.title}
            </h3>
            <p className="text-zinc-600 mb-8">{seasons.description}</p>
            <div className="space-y-6">
              {seasons.items.map((item, idx) => {
                const Icon = item.icon || Sun;
                return (
                  <div key={idx} className="flex gap-4 group">
                    <div
                      className={cn(
                        "p-3 rounded-full h-fit transition-transform md:group-hover:scale-110",
                        idx === 0
                          ? "bg-orange-100 text-orange-600"
                          : "bg-limon-selva-100 text-limon-selva-600"
                      )}
                    >
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">{item.season}</h4>
                      <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                        {item.months}
                      </p>
                      <p className="text-sm text-zinc-600">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-limon-selva-900 to-zinc-900 p-8 rounded-sm text-white relative overflow-hidden shadow-lg transition-transform md:hover:scale-[1.01]"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-64 h-64 bg-limon-verde-500/10 rounded-full blur-3xl origin-center"
            />
            <div className="relative z-10">
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <Smile className="text-limon-amarillo-400" />
                {etiquette.title}
              </h3>
              <p className="text-zinc-300 mb-8">{etiquette.intro}</p>
              <ul className="space-y-4">
                {etiquette.items.map((item, idx) => {
                  const Icon = item.icon || Smile;
                  return (
                    <li
                      key={idx}
                      className="flex items-start gap-4 p-3 rounded-sm transition-colors cursor-default md:hover:bg-white/10"
                    >
                      <Icon
                        className="text-limon-amarillo-400 mt-1 shrink-0"
                        size={20}
                      />
                      <div>
                        <p className="font-bold text-lg">{item.text}</p>
                        <p className="text-sm text-zinc-400">{item.sub}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Cahuita Section */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <TreePine className="text-limon-selva-600" size={32} />
              <h3 className="text-3xl font-display font-bold text-zinc-900">
                {cahuita.title}
              </h3>
            </div>
            <p className="text-lg text-limon-selva-700 font-medium mb-4">
              {cahuita.subtitle}
            </p>
            <p className="text-zinc-600 leading-relaxed mb-8">
              {cahuita.description}
            </p>

            <div className="bg-white rounded-sm border border-zinc-200 p-6 shadow-sm md:hover:shadow-md transition-shadow">
              <h4 className="font-bold text-zinc-900 mb-4 flex items-center gap-2">
                <Binoculars size={18} className="text-limon-amarillo-600" />
                Qué hacer
              </h4>
              <ul className="space-y-3">
                {cahuita.activities.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-zinc-700"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-limon-selva-500 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2 group relative md:hover:scale-[1.02] transition-transform duration-500"
          >
            {(cahuita as any).image ? (
              <div className="aspect-[4/3] rounded-sm overflow-hidden relative shadow-lg">
                <Image
                  src={(cahuita as any).image}
                  alt={cahuita.title}
                  fill
                  className="object-cover md:group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            ) : (
              <div className="aspect-[4/3] bg-zinc-200 rounded-sm flex items-center justify-center">
                <TreePine size={64} className="text-zinc-400" />
              </div>
            )}
          </motion.div>
        </div>

        {/* Cahuita Conclusion - Centered Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-24 flex flex-col items-center text-center max-w-4xl mx-auto px-4"
        >
          <Quote
            size={40}
            className="text-limon-selva-300 transform -scale-x-100 mb-6 opacity-40"
          />
          <p className="text-xl md:text-2xl font-display font-bold text-zinc-800 leading-relaxed italic">
            "{cahuita.conclusion}"
          </p>
          <div className="h-1 w-12 bg-limon-amarillo-400 mt-8" />
        </motion.div>

        {/* Ecosystems Grid */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-zinc-900 mb-4">
              {ecosystems.title}
            </h3>
            <p className="text-zinc-600">{ecosystems.description}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ecosystems.items.map((sys, idx) => {
              const Icon = sys.icon || TreePine;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-white p-6 rounded-sm border border-zinc-100 shadow-sm transition-shadow text-center group cursor-pointer md:hover:shadow-lg"
                >
                  <div className="inline-flex p-3 rounded-full bg-limon-selva-50 text-limon-selva-600 mb-4 transition-[transform,background-color,color] duration-300 md:group-hover:bg-limon-selva-600 md:group-hover:text-white md:group-hover:scale-110">
                    <Icon size={28} />
                  </div>
                  <h4 className="font-bold text-zinc-900 mb-2 md:group-hover:text-limon-selva-700 transition-colors">
                    {sys.name}
                  </h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {sys.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tortuguero Section */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group md:hover:scale-[1.02] transition-transform duration-500"
          >
            {(tortuguero as any).image ? (
              <div className="aspect-[4/3] rounded-sm overflow-hidden relative shadow-lg">
                <Image
                  src={(tortuguero as any).image}
                  alt={tortuguero.title}
                  fill
                  className="object-cover md:group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            ) : (
              <div className="aspect-[4/3] bg-zinc-200 rounded-sm flex items-center justify-center">
                <Waves size={64} className="text-zinc-400" />
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Droplets className="text-limon-puerto-600" size={32} />
              <h3 className="text-3xl font-display font-bold text-zinc-900">
                {tortuguero.title}
              </h3>
            </div>
            <p className="text-lg text-limon-puerto-700 font-medium mb-4">
              {tortuguero.subtitle}
            </p>
            <p className="text-zinc-600 leading-relaxed mb-8">
              {tortuguero.description}
            </p>

            <div className="bg-white rounded-sm border border-zinc-200 p-6 shadow-sm md:hover:shadow-md transition-shadow">
              <h4 className="font-bold text-zinc-900 mb-4 flex items-center gap-2">
                <Binoculars size={18} className="text-limon-amarillo-600" />
                Qué hacer
              </h4>
              <ul className="space-y-3">
                {tortuguero.activities.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-zinc-700"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-limon-puerto-500 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Tortuguero Conclusion - Centered Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-24 flex flex-col items-center text-center max-w-4xl mx-auto px-4"
        >
          <Quote
            size={40}
            className="text-limon-puerto-300 transform -scale-x-100 mb-6 opacity-40"
          />
          <p className="text-xl md:text-2xl font-display font-bold text-zinc-800 leading-relaxed italic">
            "{tortuguero.conclusion}"
          </p>
          <div className="h-1 w-12 bg-limon-amarillo-400 mt-8" />
        </motion.div>

        {/* Additional Destinations Grid (Expanded) */}
        <div className="mb-24">
          <h3 className="text-3xl font-display font-bold text-zinc-900 mb-8 text-center">
            Más Tesoros Naturales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {destinations.map((dest, idx) => {
              const Icon = dest.icon || Sun;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-white rounded-sm border border-zinc-200 overflow-hidden shadow-sm group md:hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64 overflow-hidden bg-zinc-100 text-left">
                    {dest.image ? (
                      <Image
                        src={dest.image}
                        alt={dest.title}
                        fill
                        className="object-cover transition-transform duration-500 md:group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200">
                        <Icon size={48} className="text-zinc-300" />
                      </div>
                    )}
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 md:group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-display font-bold text-zinc-900 mb-2 md:group-hover:text-limon-selva-600 transition-colors">
                      {dest.title}
                    </h3>
                    <p className="text-sm font-medium text-limon-selva-600 mb-4">
                      {dest.subtitle}
                    </p>
                    <p className="text-zinc-600 mb-6 text-sm leading-relaxed">
                      {dest.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {dest.activities.map((act, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-xs text-zinc-500"
                        >
                          <span className="w-1 h-1 bg-zinc-400 rounded-full md:group-hover:bg-limon-amarillo-400 transition-colors"></span>
                          {act}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-zinc-400 italic pt-4 border-t border-zinc-50 md:group-hover:border-zinc-100 transition-colors">
                      "{dest.conclusion}"
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Wildlife Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-24 bg-zinc-900 rounded-sm p-8 md:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-96 h-96 bg-limon-verde-500/10 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 text-left">
              <div className="inline-block p-3 bg-limon-amarillo-400 rounded-full text-zinc-900 mb-6">
                <Binoculars size={32} />
              </div>
              <h3 className="text-4xl font-display font-bold mb-4">
                {wildlife.title}
              </h3>
              <p className="text-zinc-300 leading-relaxed opacity-90">
                {wildlife.description}
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {wildlife.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-sm transition-colors md:hover:bg-white/15"
                >
                  <h4 className="text-xl font-bold text-limon-amarillo-300 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-zinc-200 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Eco Tours & Routes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Eco Tours List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-limon-selva-600" />
              <h3 className="text-2xl font-display font-bold text-zinc-900">
                {ecoTours.title}
              </h3>
            </div>
            <p className="text-zinc-600 mb-8">{ecoTours.description}</p>
            <div className="space-y-6">
              {ecoTours.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-4 rounded-sm transition-colors border border-transparent md:hover:bg-zinc-100"
                >
                  <div className="mt-1 text-limon-selva-500">
                    <Leaf size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 text-sm">
                      {item.text}
                    </h4>
                    <p className="text-xs text-zinc-500 mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Suggested Routes Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-50 border border-zinc-200 rounded-sm p-8 transition-shadow duration-300 md:hover:shadow-lg text-left"
          >
            <div className="flex items-center gap-3 mb-8">
              <Footprints className="text-limon-puerto-600" />
              <h3 className="text-2xl font-display font-bold text-zinc-900">
                {routes.title}
              </h3>
            </div>

            <div className="relative border-l-2 border-limon-concreto-200 ml-3 space-y-10 pl-8 py-2">
              {routes.options.map((route, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-white border-4 border-limon-puerto-500 transition-transform md:group-hover:scale-125"></div>
                  <h4 className="text-lg font-bold text-zinc-900 mb-1 transition-colors md:group-hover:text-limon-puerto-800">
                    {route.name}
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {route.steps.map((step, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-medium bg-white border border-zinc-200 px-2 py-0.5 rounded-sm"
                      >
                        {step}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-limon-puerto-600 italic font-medium">
                    {route.note}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Responsible Tourism Principles - Adjusted Colors */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-sm overflow-hidden"
          >
            {/* Background - Deep Jungle Theme */}
            <div className="absolute inset-0 bg-limon-selva-950"></div>
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 15, repeat: Infinity }}
              className="absolute top-0 right-0 w-[600px] h-[600px] bg-limon-selva-800/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"
            />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-limon-puerto-900/30 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 md:p-16 text-left">
              {/* Left Column: Title & Context */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="inline-block p-3 bg-limon-selva-900 border border-limon-selva-800 rounded-sm w-fit mb-6 shadow-sm text-center">
                  <Heart
                    className="text-limon-amarillo-400 mx-auto"
                    size={32}
                  />
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight">
                  {principles.title}
                </h3>
                <p className="text-lg text-limon-selva-100/90 leading-relaxed mb-8 font-light">
                  {principles.description}
                </p>
                <div className="p-6 bg-limon-selva-900/50 border border-limon-selva-800 rounded-sm backdrop-blur-sm">
                  <p className="text-limon-amarillo-200 italic font-medium">
                    "{principles.conclusion}"
                  </p>
                </div>
              </div>

              {/* Right Column: Principles Grid */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {principles.items.map((item, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        "p-6 rounded-sm border transition-[shadow,background-color,border-color] duration-300 group relative overflow-hidden",
                        idx === 0
                          ? "sm:col-span-2 bg-gradient-to-r from-limon-selva-900 to-limon-selva-800 border-limon-selva-700 shadow-md"
                          : "bg-limon-selva-900/40 border-limon-selva-800/60 md:hover:bg-limon-selva-800/60 md:hover:border-limon-selva-700"
                      )}
                    >
                      <div className="flex items-start gap-4 relative z-10">
                        <div
                          className={cn(
                            "mt-1 p-2 rounded-full shrink-0",
                            idx === 0
                              ? "bg-limon-amarillo-400 text-limon-selva-950"
                              : "bg-limon-selva-800 text-limon-selva-300 md:group-hover:bg-limon-selva-700 md:group-hover:text-limon-amarillo-200 transition-colors"
                          )}
                        >
                          {idx === 0 ? (
                            <Heart size={18} fill="currentColor" />
                          ) : (
                            <Leaf size={18} />
                          )}
                        </div>
                        <div>
                          <p
                            className={cn(
                              "font-medium leading-relaxed text-left",
                              idx === 0
                                ? "text-white text-lg"
                                : "text-limon-selva-100 text-base"
                            )}
                          >
                            {item}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Community Section */}
        <div className="mb-24 bg-limon-amarillo-50 border border-limon-amarillo-100 p-8 md:p-12 rounded-sm flex flex-col md:flex-row items-center gap-8 transition-colors md:hover:border-limon-amarillo-300/60">
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-limon-amarillo-100 p-6 rounded-full">
              <Users size={64} className="text-limon-amarillo-600" />
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl font-display font-bold text-zinc-900 mb-4">
              {community.title}
            </h3>
            <p className="text-zinc-700 leading-relaxed mb-6">
              {community.text}
            </p>
            <p className="font-bold text-limon-selva-700 italic">
              "{community.highlight}"
            </p>
          </div>
        </div>

        {/* Outro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-block p-3 rounded-full bg-limon-amarillo-100 text-limon-amarillo-700 mb-6">
            <Bird size={32} />
          </div>
          <h3 className="text-3xl font-display font-bold text-zinc-900 mb-4">
            {outro.title}
          </h3>
          <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
            {outro.text}
          </p>
          <button className="bg-limon-selva-600 md:hover:bg-limon-selva-700 text-white font-bold py-4 px-8 rounded-sm transition-[background-color,shadow] shadow-lg md:hover:shadow-xl">
            {outro.cta}
          </button>
        </motion.div>
      </div>
    </section>
  );
};
