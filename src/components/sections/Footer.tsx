import Link from "next/link";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Brisas del Río</h3>
            <p className="text-sm text-muted-foreground">
              Restaurante y Cabañas en el corazón de Jiménez, Pococí, Costa
              Rica. Naturaleza, tranquilidad y experiencias inolvidables.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#hospedaje"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Hospedaje
                </Link>
              </li>
              <li>
                <Link
                  href="#restaurante"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Restaurante
                </Link>
              </li>
              <li>
                <Link
                  href="#sala-reuniones"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sala de Reuniones
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+506 1234-5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@brisasdelrio.cr</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Brisas del Río. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
