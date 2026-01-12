"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Formspree integration (replace with actual endpoint)
    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("¡Mensaje enviado! Nos pondremos en contacto pronto.");
        setFormData({ name: "", contact: "", message: "" });
      }
    } catch (error) {
      alert("Hubo un error. Por favor intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-muted/30 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos para reservas o consultas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">
              Información de Contacto
            </h3>

            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Ubicación</h4>
                  <p className="text-muted-foreground">
                    Jiménez, Pococí, Costa Rica
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Teléfono / WhatsApp</h4>
                  <p className="text-muted-foreground">+506 1234-5678</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Correo Electrónico</h4>
                  <p className="text-muted-foreground">info@brisasdelrio.cr</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Nombre completo"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Input
                  placeholder="Teléfono o Email"
                  value={formData.contact}
                  onChange={(e) =>
                    setFormData({ ...formData, contact: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tu mensaje"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={6}
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                <Send className="mr-2" size={18} />
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Cómo Llegar
          </h3>
          <div className="relative h-96 rounded-lg overflow-hidden border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15768.123456789!2d-83.5!3d10.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDE4JzAwLjAiTiA4M8KwMzAnMDAuMCJX!5e0!3m2!1ses!2scr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Brisas del Río"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Busca "Brisas del Río Jiménez Pococí Costa Rica" en Google Maps
          </p>
        </div>
      </div>
    </section>
  );
}
