"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Testimonios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lo que dicen nuestros huéspedes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold">— {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
