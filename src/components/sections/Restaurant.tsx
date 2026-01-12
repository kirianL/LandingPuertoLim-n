"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { specialties } from "@/lib/data";
import { Clock, FileText, Utensils } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export function Restaurant() {
  return (
    <section
      id="restaurante"
      className="py-20 md:py-32 bg-muted/20 relative overflow-hidden scroll-mt-24"
    >
      {/* Decorative pulse background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Restaurante</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sabores auténticos de Costa Rica en un ambiente acogedor
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <FadeIn direction="left">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group border-8 border-background/50">
              <Image
                src="/images/Restaurante.jpg"
                alt="Restaurante Brisas del Río"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.3em] mb-2 text-primary">
                  Tradición
                </p>
                <h3 className="text-3xl font-bold">Un viaje al paladar</h3>
              </div>
            </div>
          </FadeIn>

          {/* Description & Hours */}
          <FadeIn direction="right">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Experiencia Gastronómica
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nuestro restaurante ofrece una experiencia culinaria única,
                combinando recetas tradicionales costarricenses con ingredientes
                frescos de la región. Disfruta de nuestros platillos en un
                ambiente rodeado de naturaleza.
              </p>

              <div className="bg-background/80 backdrop-blur-sm border rounded-2xl p-8 mb-8 shadow-sm">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold">Horarios de Atención</h4>
                </div>
                <div className="space-y-4 text-base">
                  <div className="flex justify-between items-center border-b border-border/50 pb-3">
                    <span className="text-muted-foreground font-medium">
                      Desayuno:
                    </span>
                    <span className="font-bold">7:00 AM - 10:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border/50 pb-3">
                    <span className="text-muted-foreground font-medium">
                      Almuerzo:
                    </span>
                    <span className="font-bold">12:00 PM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground font-medium">
                      Cena:
                    </span>
                    <span className="font-bold">6:00 PM - 9:00 PM</span>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full sm:w-auto shadow-xl shadow-primary/20"
              >
                <FileText className="mr-2" size={18} />
                Ver Menú Completo
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Specialties */}
        <div>
          <FadeIn>
            <h3 className="text-3xl font-bold mb-10 text-center uppercase tracking-tight">
              Nuestras Especialidades
            </h3>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-background border-border/50 group overflow-hidden">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 w-12 h-12 text-primary/40 group-hover:text-primary transition-colors duration-500">
                      <Utensils className="w-full h-full" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {specialty.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-sm leading-relaxed">
                      {specialty.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
