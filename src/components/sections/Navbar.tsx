"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/magicui/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Historia", href: "#historia" },
  { name: "Patrimonio", href: "#arquitectura" },
  { name: "Cultura", href: "#cultura" },
  { name: "Deportes", href: "#deportes" },
  { name: "Naturaleza", href: "#naturaleza" },
  { name: "Gastronomía", href: "#gastronomia" },
  { name: "Eventos", href: "#eventos" },
  { name: "Mi Ruta", href: "#ruta" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show navbar after scrolling past hero
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsVisible(scrollPos > window.innerHeight * 0.3);

      // Detect active section
      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 transition-all duration-500",
        isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-full pointer-events-none"
      )}
    >
      <div className="flex flex-col gap-2 bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl p-3 shadow-2xl">
        {/* Theme Toggle at top */}
        <div className="pb-2 mb-2 border-b border-border/50 flex justify-center">
          <ThemeToggle />
        </div>

        {/* Navigation Links */}
        {navItems.map((item) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group relative px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 text-left",
                isActive
                  ? "text-primary-foreground bg-primary shadow-md"
                  : "text-foreground/70 hover:text-foreground hover:bg-accent/50"
              )}
              title={item.name}
            >
              {/* Active indicator */}
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary-foreground rounded-r-full -ml-3" />
              )}

              {/* Text */}
              <span className="block whitespace-nowrap">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
