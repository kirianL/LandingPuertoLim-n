"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { meetingFeatures } from "@/lib/data";

export function MeetingRoom() {
  return (
    <section
      id="sala-reuniones"
      className="py-20 md:py-32 bg-background scroll-mt-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sala de Reuniones
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            El espacio perfecto para eventos corporativos, capacitaciones y
            reuniones de trabajo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Eventos Profesionales en la Naturaleza
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nuestra sala de reuniones combina profesionalismo con un entorno
              natural único. Ideal para retiros empresariales, capacitaciones,
              seminarios y eventos corporativos que requieren un ambiente
              inspirador y productivo.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {meetingFeatures.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="#contacto">Cotizar Sala</Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/SalaReuniones.jpg"
              alt="Sala de Reuniones - Brisas del Río"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
