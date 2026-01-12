"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { amenities, cabinTypes } from "@/lib/data";
import { Check, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { BorderBeam } from "@/components/magicui/border-beam";

export function Accommodation() {
  return (
    <section
      id="hospedaje"
      className="py-20 md:py-32 bg-background scroll-mt-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Hospedaje</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cabañas acogedoras diseñadas para tu comodidad, rodeadas de
              naturaleza
            </p>
          </div>
        </FadeIn>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Gallery */}
          <FadeIn direction="left">
            <div className="space-y-4">
              <div className="relative h-80 rounded-lg overflow-hidden group">
                <Image
                  src="/images/Hospedaje.jpg"
                  alt="Cabaña principal - Brisas del Río"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-40 rounded-lg overflow-hidden group">
                  <Image
                    src="/images/Hospedaje2.jpg"
                    alt="Interior de cabaña"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="relative h-40 rounded-lg overflow-hidden group">
                  <Image
                    src="/images/Hospedaje3.jpg"
                    alt="Vista exterior de cabañas"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Amenities */}
          <FadeIn direction="right">
            <div className="flex flex-col justify-center h-full">
              <h3 className="text-2xl font-semibold mb-6">
                Amenidades de Lujo
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Diseñadas para ofrecerte el máximo confort mientras te sumerges
                en la belleza natural de Costa Rica.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">
                      {amenity}
                    </span>
                  </div>
                ))}
              </div>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto shadow-lg shadow-primary/10"
              >
                <Link href="#contacto">Consultar Disponibilidad</Link>
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Cabin Types */}
        <div className="grid md:grid-cols-3 gap-8">
          {cabinTypes.map((cabin, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-border/50 relative overflow-hidden group">
                <BorderBeam
                  size={250}
                  duration={12}
                  delay={index * 3}
                  colorFrom="#10b981"
                  colorTo="#047857"
                />
                <CardHeader>
                  <CardTitle className="text-2xl">{cabin.name}</CardTitle>
                  <CardDescription className="text-base">
                    {cabin.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {cabin.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-2 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="px-6 pb-6 mt-auto">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  >
                    Reservar Ahora
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
