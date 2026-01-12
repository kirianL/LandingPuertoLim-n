"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="preguntas" className="py-20 md:py-32 bg-muted/30 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Respuestas a las dudas más comunes
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left"
              >
                <CardContent className="p-6 flex items-center justify-between">
                  <h3 className="font-semibold pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 flex-shrink-0 transition-transform",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </CardContent>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
