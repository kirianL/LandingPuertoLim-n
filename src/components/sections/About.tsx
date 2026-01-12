"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Utensils, Home, Calendar } from "lucide-react";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { FadeIn } from "@/components/FadeIn";

const features = [
  {
    icon: Home,
    title: "Hospedaje Confortable",
    description: "Cabañas equipadas con todas las comodidades para tu descanso",
  },
  {
    icon: Utensils,
    title: "Gastronomía Auténtica",
    description: "Sabores tradicionales costarricenses preparados con amor",
  },
  {
    icon: Calendar,
    title: "Eventos Especiales",
    description: "Espacios perfectos para reuniones, retiros y celebraciones",
  },
  {
    icon: Leaf,
    title: "Naturaleza Pura",
    description: "Rodeado de vegetación tropical y el sonido del río",
  },
];

export function About() {
  return (
    <section
      id="nosotros"
      className="relative py-24 md:py-40 bg-muted/30 overflow-hidden scroll-mt-24"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <DotPattern className="opacity-40 [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Bienvenido a Brisas del Río
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Un refugio de tranquilidad en el corazón de Pococí, donde la
              naturaleza se encuentra con la hospitalidad costarricense. Desde
              hace años, hemos acogido a familias, parejas y viajeros que buscan
              desconectar del bullicio y reconectar con lo esencial.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Ya sea que vengas a disfrutar de nuestras cabañas, saborear
              nuestra cocina tradicional, o celebrar un evento especial, te
              garantizamos una experiencia auténtica y memorable en un entorno
              natural único.
            </p>
          </div>
        </FadeIn>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="hover:shadow-lg transition-all hover:scale-105 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
