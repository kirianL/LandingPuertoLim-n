import { motion, useScroll, useTransform } from "framer-motion";
import { TextReveal } from "@/components/TextReveal";
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
      className="relative py-24 bg-zinc-50 overflow-hidden scroll-mt-24"
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
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 text-zinc-900 tracking-tight">
            <TextReveal text="Naturaleza y Turismo Responsable" />
          </h1>
          <div className="h-1 w-20 bg-limon-amarillo-400 mb-8" />
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
            <div className="inline-flex items-start gap-3 p-4 bg-limon-selva-50 border border-limon-selva-100 rounded-2xl max-w-2xl transition-transform md:hover:scale-[1.01]">
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
            className="bg-card p-8 rounded-2xl border border-zinc-200/60 shadow-sm transition-shadow duration-300 md:hover:shadow-md"
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
                        "p-3 rounded-full h-fit transition-colors",
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
            className="bg-gradient-to-br from-zinc-50 to-zinc-100 p-8 rounded-2xl text-zinc-800 border border-zinc-200/60 relative overflow-hidden shadow-sm transition-all duration-300 md:hover:shadow-md"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3 text-zinc-900">
                <Smile className="text-limon-selva-600" />
                {etiquette.title}
              </h3>
              <p className="text-zinc-600 mb-8">{etiquette.intro}</p>
              <ul className="space-y-4">
                {etiquette.items.map((item, idx) => {
                  const Icon = item.icon || Smile;
                  return (
                    <li
                      key={idx}
                      className="flex items-start gap-4 p-3 rounded-2xl transition-colors cursor-default md:hover:bg-zinc-200/40"
                    >
                      <Icon
                        className="text-limon-selva-600 mt-1 shrink-0"
                        size={20}
                      />
                      <div>
                        <p className="font-bold text-lg text-zinc-900">{item.text}</p>
                        <p className="text-sm text-zinc-500">{item.sub}</p>
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

            <div className="bg-white rounded-2xl border border-zinc-200/60 p-6 shadow-sm md:hover:shadow-md transition-shadow">
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
            className="order-1 lg:order-2 group relative transition-transform duration-500"
          >
            {(cahuita as any).image ? (
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-sm border border-zinc-200/60">
                <img
                  src={(cahuita as any).image}
                  alt={cahuita.title}
                  className="w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            ) : (
              <div className="aspect-[4/3] bg-zinc-100 rounded-2xl flex items-center justify-center border border-zinc-200/60">
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
                  className="bg-white p-4 sm:p-6 rounded-2xl border border-zinc-200/60 shadow-sm transition-all duration-300 text-center group cursor-pointer md:hover:shadow-md md:hover:-translate-y-1"
                >
                  <div className="inline-flex p-3 rounded-full bg-limon-selva-50 text-limon-selva-600 mb-4 transition-colors duration-300 md:group-hover:bg-limon-selva-600 md:group-hover:text-white">
                    <Icon size={28} />
                  </div>
                  <h4 className="font-bold text-zinc-900 mb-2 md:group-hover:text-limon-selva-700 transition-colors">
                    {sys.name}
                  </h4>
                  <p className="text-xs text-zinc-500 leading-relaxed font-body">
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
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-sm border border-zinc-200/60">
                <img
                  src={(tortuguero as any).image}
                  alt={tortuguero.title}
                  className="w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            ) : (
              <div className="aspect-[4/3] bg-zinc-100 rounded-2xl flex items-center justify-center border border-zinc-200/60">
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

            <div className="bg-white rounded-2xl border border-zinc-200/60 p-6 shadow-sm md:hover:shadow-md transition-shadow">
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
                  className="bg-white rounded-2xl border border-zinc-200/60 overflow-hidden shadow-sm group md:hover:shadow-md md:hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden bg-zinc-100 text-left">
                    {dest.image ? (
                      <img
                        src={dest.image}
                        alt={dest.title}
                        className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
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
          className="mb-24 bg-card border border-zinc-200/80 rounded-3xl p-8 md:p-12 text-zinc-800 relative overflow-hidden shadow-sm"
        >
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-limon-amarillo-400 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 text-left">
              <div className="inline-block p-3 bg-limon-amarillo-100 rounded-full text-limon-amarillo-800 mb-6">
                <Binoculars size={32} />
              </div>
              <h3 className="text-4xl font-display font-bold text-zinc-900 mb-4">
                {wildlife.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed font-body">
                {wildlife.description}
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {wildlife.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-50 border border-zinc-200/60 p-6 rounded-2xl transition-all duration-300 md:hover:bg-zinc-100/80 md:hover:-translate-y-0.5"
                >
                  <h4 className="text-xl font-bold text-limon-selva-700 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-zinc-600 leading-relaxed font-body">
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
                  className="flex gap-4 p-4 rounded-2xl transition-all duration-300 border border-transparent md:hover:bg-zinc-50 md:hover:border-zinc-200/60"
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
            className="bg-card border border-zinc-200/60 rounded-2xl p-8 transition-shadow duration-300 md:hover:shadow-md text-left"
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
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-white border-4 border-limon-puerto-500 transition-colors md:group-hover:border-limon-puerto-600"></div>
                  <h4 className="text-lg font-bold text-zinc-900 mb-1 transition-colors md:group-hover:text-limon-puerto-800">
                    {route.name}
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {route.steps.map((step, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-medium bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-full"
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
            className="relative rounded-3xl overflow-hidden border border-zinc-200/80 bg-card shadow-sm"
          >
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-limon-selva-500 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 p-6 md:p-16 text-left">
              {/* Left Column: Title & Context */}
              <div className="lg:col-span-5 flex flex-col justify-center pl-2">
                <div className="inline-block p-3 bg-limon-selva-50 border border-limon-selva-100 rounded-2xl w-fit mb-6 shadow-sm">
                  <Heart
                    className="text-limon-selva-600 mx-auto"
                    size={32}
                  />
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 mb-6 leading-tight">
                  {principles.title}
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed mb-8 font-light font-body">
                  {principles.description}
                </p>
                <div className="p-6 bg-limon-selva-50 border border-limon-selva-100/60 rounded-2xl">
                  <p className="text-limon-selva-800 italic font-medium font-body">
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
                        "p-6 rounded-2xl border transition-all duration-300 group relative overflow-hidden",
                        idx === 0
                          ? "sm:col-span-2 bg-gradient-to-r from-limon-selva-50 to-limon-selva-100/30 border-limon-selva-200/60 shadow-sm"
                          : "bg-zinc-50 border-zinc-200/60 md:hover:bg-zinc-100/80 md:hover:border-zinc-300"
                      )}
                    >
                      <div className="flex items-start gap-4 relative z-10">
                        <div
                          className={cn(
                            "mt-1 p-2 rounded-full shrink-0",
                            idx === 0
                              ? "bg-limon-selva-600 text-white"
                              : "bg-zinc-200 text-zinc-600 md:group-hover:bg-zinc-300 md:group-hover:text-zinc-800 transition-colors"
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
                                ? "text-limon-selva-900 text-lg font-bold"
                                : "text-zinc-700 text-base"
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
        <div className="mb-24 bg-limon-amarillo-50/50 border border-limon-amarillo-100 p-6 md:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-8 transition-colors md:hover:border-limon-amarillo-300/60">
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
          <button className="bg-limon-selva-600 md:hover:bg-limon-selva-700 text-white font-bold py-4 px-8 rounded-full transition-[background-color,shadow] shadow-md md:hover:shadow-lg">
            {outro.cta}
          </button>
        </motion.div>
      </div>
    </section>
  );
};
