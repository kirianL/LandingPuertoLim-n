"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/magicui/theme-toggle";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Hospedaje", href: "#hospedaje" },
  { name: "Restaurante", href: "#restaurante" },
  { name: "Sala", href: "#sala-reuniones" },
  { name: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [isInHero, setIsInHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 20);

      // Hide navbar when scrolled past Hero (roughly 80% of viewport height)
      setIsInHero(scrollPos < window.innerHeight * 0.8);

      // Detect active section
      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
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
    <>
      {/* Desktop Navbar - Centered Floating Pill */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-500",
          !isInHero && "opacity-0 -translate-y-full"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center pt-6">
            {/* Floating Pill Container */}
            <div
              className={cn(
                "hidden md:flex items-center gap-1 px-6 py-3 rounded-full pointer-events-auto transition-all duration-300",
                "bg-background/80 backdrop-blur-xl border border-border/50 shadow-lg",
                isScrolled && "shadow-xl"
              )}
            >
              {/* Navigation Links */}
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                      isActive
                        ? "text-primary-foreground bg-primary"
                        : "text-foreground/70 hover:text-foreground hover:bg-accent/50"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Theme Toggle */}
              <div className="ml-2 pl-4 border-l border-border/50">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar - Top Bar */}
      <nav
        className={cn(
          "md:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm transition-all duration-500",
          !isInHero && "opacity-0 -translate-y-full"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Spacer for centering */}
            <div className="w-10"></div>

            {/* Mobile Controls - Centered */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-foreground hover:bg-accent transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Spacer for balance */}
            <div className="w-10"></div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="py-4 border-t border-border">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 text-base font-medium rounded-lg transition-colors mb-1",
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-foreground/80 hover:text-foreground hover:bg-accent/50"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
