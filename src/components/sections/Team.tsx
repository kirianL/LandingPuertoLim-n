"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Award, Smile } from "lucide-react";

const teamValues = [
  {
    icon: Heart,
    title: "Pasión por el Servicio",
    description:
      "Cada miembro de nuestro equipo está comprometido con brindar la mejor experiencia",
  },
  {
    icon: Award,
    title: "Experiencia Local",
    description:
      "Conocemos la región y te ayudamos a descubrir los mejores lugares",
  },
  {
    icon: Smile,
    title: "Atención Personalizada",
    description: "Tratamos a cada huésped como parte de nuestra familia",
  },
  {
    icon: Users,
    title: "Equipo Profesional",
    description: "Personal capacitado y dedicado a tu comodidad",
  },
];

import { FadeIn } from "@/components/FadeIn";

export function Team() {
  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un equipo apasionado dedicado a hacer de tu estadía una
              experiencia inolvidable
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Team Image - Shown fully without cropping */}
          <FadeIn direction="left">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-muted/50 transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/images/Personal.jpg"
                  alt="Equipo de Brisas del Río"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </FadeIn>

          {/* Team Description */}
          <FadeIn direction="right">
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-3xl font-bold italic text-primary">
                La Familia Brisas del Río
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Somos un equipo de profesionales apasionados por la hospitalidad
                y el turismo. Cada miembro de nuestra familia está comprometido
                con ofrecer un servicio excepcional y crear experiencias
                memorables para nuestros huéspedes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Con años de experiencia en la región, conocemos los mejores
                secretos de Jiménez y Pococí, y estamos siempre listos para
                compartir recomendaciones y ayudarte a descubrir la belleza
                natural de Costa Rica.
              </p>
              <div className="pt-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider">
                  <Smile size={18} />
                  Hospitalidad con Alma
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Team Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamValues.map((value, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border/50">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
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
