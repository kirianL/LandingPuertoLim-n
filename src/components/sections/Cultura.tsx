"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  intro,
  music,
  carnival,
  language,
  social,
  community,
  theater,
  cinema,
  media,
  arts,
  calypso_legacy,
  dates,
  outro,
} from "@/content/cultura/cultura-data";
import {
  Music,
  PartyPopper,
  MessageSquare,
  Grid3X3,
  Trophy,
  Calendar,
  Sparkles,
  Users,
  Film,
  Radio,
  Drama,
  Video,
  Palette,
  Disc,
} from "lucide-react";

export const Cultura = () => {
  return (
    <section
      id="cultura"
      className="relative py-24 bg-zinc-950 overflow-hidden scroll-mt-24"
    >
      {/* Background Ambience */}
      {/* Background Ambience */}
      {/* <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div> */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-limon-selva-900/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-limon-amarillo-500/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 text-left">
        {/* Consistent Header */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-display font-bold mb-4 text-white tracking-tight"
          >
            Cultura y <br />
            <span className="text-limon-amarillo-400">Vida Local</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-1 w-20 bg-limon-amarillo-400 mb-8"
          />
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed font-body max-w-2xl"
          >
            "{intro.subtitle}" {intro.description}
          </motion.p>
        </div>

        {/* Music & Carnival Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Music Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900/50 backdrop-blur-sm rounded-sm border border-white/5 overflow-hidden group flex flex-col"
          >
            {/* Photo Template */}
            <div className="h-64 w-full bg-zinc-800/50 relative overflow-hidden flex items-center justify-center border-b border-white/5 group-hover:bg-zinc-800/80 transition-colors">
              <Image
                src={music.image}
                alt={music.title}
                fill
                className="object-cover opacity-80 md:group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60"></div>
              {/* Credit */}
              {music.credit && (
                <div className="absolute bottom-2 right-2 text-[10px] text-white/50 font-medium tracking-wide">
                  Foto: {music.credit}
                </div>
              )}
            </div>

            <div className="p-8 md:p-12 flex-1 flex flex-col">
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                {music.title}
              </h3>
              <p className="text-zinc-400 mb-6 leading-relaxed flex-1">
                {music.description}
              </p>
              <div className="bg-limon-selva-950/50 p-6 rounded-sm border border-limon-selva-800/30">
                <p className="text-limon-amarillo-400 font-display italic text-lg">
                  "{music.highlight}"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Carnival Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-limon-rojo-900/10 to-zinc-900/50 backdrop-blur-sm rounded-sm border border-white/5 overflow-hidden group flex flex-col"
          >
            {/* Photo Template */}
            <div className="h-64 w-full bg-zinc-800/50 relative overflow-hidden flex items-center justify-center border-b border-white/5 group-hover:bg-zinc-800/80 transition-colors">
              <Image
                src={carnival.image}
                alt={carnival.title}
                fill
                className="object-cover opacity-80 md:group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60"></div>
              {/* Credit */}
              {carnival.credit && (
                <div className="absolute bottom-2 right-2 text-[10px] text-white/50 font-medium tracking-wide">
                  Foto: {carnival.credit}
                </div>
              )}
            </div>

            <div className="p-8 md:p-12 flex-1 flex flex-col">
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                {carnival.title}
              </h3>
              <p className="text-zinc-400 mb-8 leading-relaxed flex-1">
                {carnival.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {carnival.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-zinc-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-limon-rojo-500" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- Featured: Walter Ferguson Tribute --- */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-limon-selva-950 to-zinc-900 rounded-sm border border-limon-amarillo-500/20 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Disc
                size={200}
                className="text-limon-amarillo-400 animate-spin-slow"
                style={{ animationDuration: "10s" }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Portrait Placeholder */}
              <div className="bg-zinc-800 relative min-h-[300px] md:h-full flex items-center justify-center border-b md:border-b-0 md:border-r border-white/5">
                <Image
                  src={calypso_legacy.image}
                  alt={calypso_legacy.title}
                  fill
                  className="object-cover opacity-60 contrast-125 grayscale mix-blend-multiply"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-10 md:col-span-2 flex flex-col justify-center relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-1 w-12 bg-limon-amarillo-400"></div>
                  <span className="text-limon-amarillo-400 font-bold uppercase tracking-widest text-sm">
                    Leyenda Cultural
                  </span>
                </div>

                <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">
                  {calypso_legacy.title}
                </h3>
                <p className="text-xl text-zinc-300 italic font-display mb-6 opacity-80">
                  {calypso_legacy.subtitle}
                </p>

                <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-2xl">
                  {calypso_legacy.description}
                </p>

                <div className="bg-black/30 p-6 rounded-sm border-l-4 border-limon-amarillo-400 backdrop-blur-sm">
                  <p className="text-white font-display italic text-xl">
                    "{calypso_legacy.quote}"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Language Section - Mekatelyu Dictionary */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 flex items-center justify-center gap-3">
              <MessageSquare className="text-limon-amarillo-400" />
              Speak like a Limonense
            </h3>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              {language.description}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4">
            {language.phrases.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-zinc-900 hover:bg-zinc-800 transition-colors p-4 md:p-6 rounded-sm border border-white/5 hover:border-limon-amarillo-500/30 group"
              >
                <div className="text-limon-amarillo-400 font-display font-bold text-lg md:text-2xl mb-1 md:mb-2 md:group-hover:translate-x-1 transition-transform">
                  "{item.phrase}"
                </div>
                <div className="text-white font-medium mb-1 text-sm md:text-base leading-snug">
                  {item.meaning}
                </div>
                <div className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-wider">
                  {item.context}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social & Games */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {social.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="bg-zinc-800 p-4 rounded-sm shrink-0 text-limon-selva-400">
                {(() => {
                  const items = { Grid3X3, Trophy };
                  const Icon = items[item.icon as keyof typeof items];
                  return Icon ? <Icon size={32} /> : null;
                })()}
              </div>
              <div>
                <h4 className="text-2xl font-display font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- New Extended Content: Community, Arts, Media --- */}

        {/* Community Highlight */}
        <div className="mb-24 relative rounded-sm overflow-hidden bg-zinc-900 border border-white/5">
          {/* Community Background */}
          <div className="absolute inset-0 bg-zinc-800">
            <Image
              src={community.image}
              alt={community.title}
              fill
              className="object-cover opacity-60"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent"></div>
            {/* Credit */}
            {community.credit && (
              <div className="absolute bottom-3 right-4 text-[10px] text-white/40 font-medium tracking-wide z-10">
                Foto: {community.credit}
              </div>
            )}
          </div>

          <div className="relative z-10 py-20 px-4 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center p-3 bg-limon-amarillo-400/10 rounded-full text-limon-amarillo-400 mb-6"
            >
              <Users size={24} />
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              {community.title}
            </h3>
            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
              {community.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {community.highlights.map((h, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-zinc-950/50 rounded-sm text-limon-amarillo-100 font-medium border border-white/10 backdrop-blur-md"
                >
                  “{h.text}”
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Arts Section (New) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-800/50 h-80 rounded-sm border border-white/5 relative flex items-center justify-center overflow-hidden"
          >
            <Image
              src={arts.image}
              alt={arts.title}
              fill
              className="object-cover opacity-80"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-40"></div>
            {/* Credit */}
            {arts.credit && (
              <div className="absolute bottom-2 right-3 text-[10px] text-white/50 font-medium tracking-wide">
                Foto: {arts.credit}
              </div>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8"
          >
            <h3 className="text-3xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <Palette className="text-limon-rojo-400" />
              {arts.title || "Arte y Creatividad"}
            </h3>
            <ul className="grid grid-cols-1 gap-4">
              {(arts.items || []).map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-zinc-300">
                  <div className="h-1.5 w-1.5 bg-limon-amarillo-500 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Arts, Cinema & Media Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {/* Theater */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900/50 rounded-sm border border-white/5 overflow-hidden flex flex-col"
          >
            {/* Theater Photo Template */}
            <div className="h-48 w-full bg-zinc-800/50 relative overflow-hidden flex items-center justify-center border-b border-white/5 group-hover:bg-zinc-800/80 transition-colors">
              <Image
                src={theater.image}
                alt={theater.title}
                fill
                className="object-cover opacity-80 md:group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60"></div>
            </div>

            <div className="p-8">
              <h4 className="text-2xl font-display font-bold text-white mb-4">
                {theater.title}
              </h4>
              <p className="text-zinc-400 leading-relaxed">
                {theater.description}
              </p>
            </div>
          </motion.div>

          {/* Cinema */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-zinc-900/50 p-6 md:p-8 rounded-sm border border-white/5 lg:col-span-2"
          >
            <div className="flex items-center gap-4 mb-8">
              <Film className="text-limon-azul-400" size={32} />
              <h4 className="text-2xl font-display font-bold text-white">
                {cinema.title}
              </h4>
            </div>
            <p className="text-zinc-400 mb-8">{cinema.description}</p>
            <div className="grid grid-cols-1 gap-6">
              {cinema.films.map((film, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-950 rounded-sm border border-white/5 overflow-hidden flex flex-col sm:flex-row group"
                >
                  {/* Movie Poster - Compact Mobile Side-by-Side */}
                  <div className="w-full h-64 sm:w-40 sm:h-auto shrink-0 bg-zinc-900 relative border-b sm:border-b-0 sm:border-r border-white/5 overflow-hidden">
                    <Image
                      src={film.image}
                      alt={film.title}
                      fill
                      className="object-cover opacity-90 transition-opacity hover:opacity-100 md:group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, 160px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent to-zinc-950/60"></div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-center min-w-0">
                    <div className="flex flex-col mb-3">
                      <h5 className="text-white font-bold text-xl font-display leading-tight">
                        {film.title}
                      </h5>
                      <p className="text-xs text-limon-azul-300 uppercase tracking-widest font-medium">
                        {film.director}
                      </p>
                    </div>

                    <p className="text-sm text-zinc-400 mb-5 leading-relaxed">
                      {film.desc}
                    </p>

                    {/* Awards - Minimalist & Compact */}
                    {film.awards && (
                      <div className="mt-auto pt-3 border-t border-white/5">
                        <ul className="space-y-1.5">
                          {film.awards.map((award, i) => (
                            <li
                              key={i}
                              className="text-[11px] text-zinc-400 font-medium tracking-wide flex items-start gap-2"
                            >
                              <Trophy
                                size={12}
                                className="text-limon-amarillo-500 shrink-0 mt-[2px]"
                              />
                              <span className="leading-tight opacity-95">
                                {award}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Media & Radio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-zinc-900/50 rounded-sm border border-white/5 lg:col-span-3 overflow-hidden"
          >
            <div className="flex flex-col">
              <div className="p-8 w-full">
                <h4 className="text-2xl font-display font-bold text-white mb-6">
                  {media.title}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  {media.items.map((item, id) => (
                    <div key={id} className="flex gap-4">
                      <div className="bg-zinc-800 h-10 w-10 shrink-0 flex items-center justify-center rounded-sm text-white">
                        <Radio size={18} />
                      </div>
                      <div>
                        <h5 className="text-white font-bold mb-1">
                          {item.title}
                        </h5>
                        <p className="text-sm text-zinc-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline Dates */}
        <div className="border-t border-white/10 pt-16">
          <h3 className="text-center text-white font-bold uppercase tracking-widest text-sm mb-12 opacity-50 flex items-center justify-center gap-2">
            <Calendar size={16} />
            Fechas para no olvidar
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {dates.map((d, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative py-2 px-4 text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-limon-amarillo-300 mb-2 drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                  {d.date}
                </div>
                <div className="text-white font-bold text-sm md:text-lg tracking-wide uppercase">
                  {d.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Outro */}
        <div className="mt-24 text-center">
          <p className="text-2xl md:text-3xl font-display font-bold text-white max-w-3xl mx-auto italic opacity-80">
            "{outro.text}"
          </p>
        </div>
      </div>
    </section>
  );
};
