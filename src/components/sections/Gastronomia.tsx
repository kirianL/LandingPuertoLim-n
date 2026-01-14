"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { gastronomiaContent } from "@/content/gastronomia/gastronomia-data";
import { cn } from "@/lib/utils";
import {
  X,
  Utensils,
  ShoppingBag,
  MapPin,
  Clock,
  Info,
  ChefHat,
  Cookie,
  Waves,
  History,
  BookOpen,
} from "lucide-react";

export function Gastronomia() {
  const { hero, heritage, dishes } = gastronomiaContent;
  const [selectedDish, setSelectedDish] = useState<any>(null);

  // Handle ESC key and Body Scroll Lock
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedDish(null);
    };

    if (selectedDish) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }

      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [selectedDish]);

  if (!hero || !heritage || !dishes) return null;

  return (
    <section
      id="gastronomia"
      className="relative py-24 bg-background overflow-hidden scroll-mt-24"
    >
      {/* Abstract Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-limon-amarillo-400/5 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-left max-w-5xl"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-4 tracking-tight">
            {hero.title.includes(" ") ? (
              <>
                {hero.title.split(" ").slice(0, 2).join(" ")} <br />
                <span className="text-limon-coral-500">
                  {hero.title.split(" ").slice(2).join(" ")}
                </span>
              </>
            ) : (
              hero.title
            )}
          </h2>
          <div className="h-1 w-20 bg-limon-amarillo-400 mb-8" />
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed font-body">
            {hero.description}
          </p>
        </motion.div>

        {/* Heritage & Market Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-limon-selva-100 dark:bg-limon-selva-900/40 text-limon-selva-700 dark:text-limon-selva-300 rounded-full text-sm font-bold tracking-wider uppercase">
              <Waves className="w-4 h-4" />
              Manifesto Culinario
            </div>
            <h3 className="text-4xl font-display font-bold leading-tight">
              {heritage.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {heritage.description}
            </p>

            <div className="p-8 bg-card border border-border rounded-sm shadow-sm relative overflow-hidden group">
              <div className="absolute top-4 right-4 text-limon-amarillo-400/20 md:group-hover:text-limon-amarillo-400/40 transition-colors">
                <ShoppingBag size={64} />
              </div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-limon-amarillo-400 flex items-center justify-center text-black">
                  <ShoppingBag size={18} />
                </span>
                {heritage.market.title.includes(":")
                  ? heritage.market.title.split(":")[1].trim()
                  : heritage.market.title}
              </h4>
              <p className="text-muted-foreground mb-6">
                {heritage.market.description}
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-bold text-limon-selva-600 dark:text-limon-selva-400">
                <div className="shrink-0">
                  <span className="w-4 h-4 rounded-full bg-limon-amarillo-400 block" />
                </div>
                {heritage.market.highlight}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <Image
                src="/assets/gastronomia/MercadoMunicipal.jpg"
                alt="Antiguo Mercado Municipal de Limón"
                fill
                className="object-cover transition-transform duration-700 md:group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <p className="text-white/90 italic font-body text-lg">
                  "El icónico mercado de 1941: un punto de encuentro que vive en
                  la memoria de todo limonense."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dishes Grid (Bento Style) */}
        <div className="">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Platos que{" "}
                <span className="text-limon-coral-500 underline decoration-limon-amarillo-400 underline-offset-8">
                  definen
                </span>{" "}
                el Centro
              </h3>
              <p className="text-lg text-muted-foreground italic">
                La esencia del Caribe se sirve en platos de colores vibrantes y
                aromas a coco y jengibre. Haz clic para descubrir su historia y
                receta.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {dishes.map((dish: any, idx: number) => {
              const isLarge =
                dish.id === "rice-and-beans" || dish.id === "rondon";
              return (
                <motion.div
                  key={dish.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => setSelectedDish(dish)}
                  className={cn(
                    "group relative bg-card border border-border rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl md:hover:-translate-y-1 flex flex-col cursor-pointer",
                    isLarge
                      ? "md:col-span-12 lg:col-span-6"
                      : "md:col-span-6 lg:col-span-4"
                  )}
                >
                  <div
                    className={cn(
                      "relative overflow-hidden shrink-0",
                      isLarge ? "aspect-[16/10]" : "aspect-[4/3]"
                    )}
                  >
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover transition-transform duration-500 md:group-hover:scale-105"
                      sizes={
                        isLarge
                          ? "(max-width: 1024px) 100vw, 50vw"
                          : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {dish.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-widest rounded-full border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 md:group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/20 backdrop-blur-xl p-4 rounded-full border border-white/30 transform scale-75 md:group-hover:scale-100 transition-transform">
                        <BookOpen size={32} className="text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-2xl font-display font-bold md:group-hover:text-limon-selva-600 dark:md:group-hover:text-limon-selva-400 transition-colors">
                          {dish.name}
                        </h4>
                        <p className="text-limon-coral-500 text-sm font-medium">
                          {dish.subtitle}
                        </p>
                      </div>
                      <ChefHat className="text-muted-foreground md:group-hover:rotate-12 transition-transform" />
                    </div>
                    <p className="text-muted-foreground mb-4 font-body leading-relaxed flex-1">
                      {dish.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal Overlay & Content */}
      <AnimatePresence>
        {selectedDish && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDish(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] touch-none"
            />
            {/* Modal Container */}
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl flex flex-col pointer-events-auto border border-white/5"
              >
                {/* Modal Header/Image */}
                <div className="relative h-[250px] md:h-[350px] shrink-0">
                  <Image
                    src={selectedDish.image}
                    alt={selectedDish.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 896px) 100vw, 896px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <button
                    onClick={() => setSelectedDish(null)}
                    className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-md border border-white/20 transition-colors z-20"
                  >
                    <X size={24} />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6 z-10 text-left">
                    <div className="flex gap-2 mb-2">
                      {selectedDish.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-limon-amarillo-400 text-black text-[10px] uppercase font-bold tracking-widest rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-1">
                      {selectedDish.name}
                    </h2>
                    <p className="text-limon-amarillo-400 font-medium italic">
                      {selectedDish.subtitle}
                    </p>
                  </div>
                </div>

                {/* Modal Body (Scrollable) */}
                <div className="p-6 md:p-10 overflow-y-auto flex-1 custom-scrollbar text-left overscroll-contain">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* History Column */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-limon-coral-500 mb-4">
                        <History size={20} />
                        <h4 className="text-xl font-bold uppercase tracking-wider">
                          Origen y Contexto
                        </h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-lg font-body italic">
                        {selectedDish.modalContent?.history}
                      </p>
                    </div>

                    {/* Recipe Column */}
                    <div className="space-y-8">
                      {/* Ingredients */}
                      <div>
                        <div className="flex items-center gap-3 text-limon-selva-600 dark:text-limon-selva-400 mb-4">
                          <ShoppingBag size={20} />
                          <h4 className="text-xl font-bold uppercase tracking-wider">
                            Receta Sencilla
                          </h4>
                        </div>
                        <h5 className="font-bold mb-3 text-foreground flex items-center gap-2">
                          <div className="w-1.5 h-6 bg-limon-amarillo-400"></div>
                          Ingredientes Básicos
                        </h5>
                        <ul className="space-y-2">
                          {selectedDish.modalContent?.recipe.ingredients.map(
                            (ing: string, i: number) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-muted-foreground"
                              >
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-limon-coral-500 shrink-0" />
                                <span>{ing}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Instructions */}
                      <div>
                        <h5 className="font-bold mb-4 text-foreground flex items-center gap-2">
                          <div className="w-1.5 h-6 bg-limon-selva-600"></div>
                          Instrucciones
                        </h5>
                        <div className="space-y-4">
                          {selectedDish.modalContent?.recipe.steps.map(
                            (step: string, i: number) => (
                              <div key={i} className="flex gap-4">
                                <div className="shrink-0 w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center font-bold text-sm text-muted-foreground">
                                  {i + 1}
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed pt-1">
                                  {step}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 bg-muted/30 border-t border-border text-center">
                  <p className="text-muted-foreground italic text-sm">
                    "Compartir una mesa en Limón es compartir siglos de
                    historia."
                  </p>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
