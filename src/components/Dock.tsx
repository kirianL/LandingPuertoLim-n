"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  BookOpen,
  Building2,
  Music,
  Trophy,
  Palmtree,
  UtensilsCrossed,
  Calendar,
  Map,
  X,
} from "lucide-react";
import Link from "next/link";

const navigation = [
  { name: "Inicio", href: "#inicio", icon: Home },
  { name: "Historia", href: "#historia", icon: BookOpen },
  { name: "Patrimonio", href: "#arquitectura", icon: Building2 },
  { name: "Cultura", href: "#cultura", icon: Music },
  { name: "Deportes", href: "#deportes", icon: Trophy },
  { name: "Naturaleza", href: "#naturaleza", icon: Palmtree },
  { name: "Gastronomía", href: "#gastronomia", icon: UtensilsCrossed },
  { name: "Eventos", href: "#eventos", icon: Calendar },

  { name: "Mi Ruta", href: "#ruta", icon: Map },
];

export function Dock() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isInHero, setIsInHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;

      // Hide Dock when scrolled past Hero (roughly 80% of viewport height)
      setIsInHero(scrollPos < window.innerHeight * 0.8);

      const sections = navigation.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Dock - Top Center */}
      <div className="hidden md:flex absolute top-6 left-0 right-0 justify-center z-50 pointer-events-none">
        <nav className="pointer-events-auto">
          <div className="bg-white/80 dark:bg-black/60 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full px-6 py-2 shadow-lg">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);

                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`group relative flex flex-col items-center gap-1 px-4 py-2 rounded-full transition-all ${
                        isActive
                          ? "bg-limon-selva-100 dark:bg-limon-selva-900"
                          : "hover:bg-muted"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 transition-colors ${
                          isActive
                            ? "text-limon-selva-700 dark:text-limon-selva-300"
                            : "text-muted-foreground group-hover:text-foreground"
                        }`}
                      />
                      <span
                        className={`text-xs font-medium transition-colors ${
                          isActive
                            ? "text-limon-selva-700 dark:text-limon-selva-300"
                            : "text-muted-foreground group-hover:text-foreground"
                        }`}
                      >
                        {item.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-limon-selva-600 hover:bg-limon-selva-500 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110"
        aria-label="Toggle menu"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-1"
            >
              <div className="w-5 h-0.5 bg-white rounded" />
              <div className="w-5 h-0.5 bg-white rounded" />
              <div className="w-5 h-0.5 bg-white rounded" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed right-0 top-0 bottom-0 w-80 bg-background border-l border-border shadow-2xl z-40 overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-display font-bold bg-gradient-to-r from-limon-selva-600 to-limon-puerto-600 bg-clip-text text-transparent">
                    Puerto Limón
                  </h2>
                </div>

                <ul className="space-y-2">
                  {navigation.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.href.substring(1);

                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
                            isActive
                              ? "bg-limon-selva-100 dark:bg-limon-selva-900 text-limon-selva-700 dark:text-limon-selva-300"
                              : "hover:bg-muted text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground italic text-center">
                    "Lo mejor de Limón es su gente"
                  </p>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
