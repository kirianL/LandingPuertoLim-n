import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, MapPin, ExternalLink } from "lucide-react";

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
}

export function HistoryModal({ isOpen, onClose, data }: HistoryModalProps) {
  // Handle ESC key and Body Scroll Lock
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      // Calculate scrollbar width to prevent layout shift
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      // On small screens (mobile), scrollbarWidth is often 0 (overlay scrollbars)
      // and we don't want to add padding if it's not needed.
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }

      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!data) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - High z-index to cover navbar, stronger blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] touch-none"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-zinc-900 w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl flex flex-col md:flex-row pointer-events-auto border border-white/5"
            >
              {/* Image Section (Left/Top) */}
              <div className="w-full md:w-1/2 relative h-48 md:h-auto overflow-hidden">
                <Image
                  src={data.imagen}
                  alt={data.titulo}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 448px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent md:bg-gradient-to-r" />

                {/* Close Button Mobile */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-full text-white md:hidden"
                >
                  <X className="w-5 h-5" />
                </button>
                {data.credito && (
                  <div className="absolute bottom-4 left-4 md:left-auto md:right-4 z-20">
                    <p className="text-[10px] text-white/50 font-medium tracking-wider uppercase">
                      Foto: {data.credito}
                    </p>
                  </div>
                )}
              </div>

              {/* Content Section (Right/Bottom) */}
              <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto overscroll-contain [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/90 text-sm font-medium tracking-wide px-3 py-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-md shadow-sm">
                      {data.año}
                    </span>
                    {/* Close Buttom Desktop */}
                    <button
                      onClick={onClose}
                      className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-white hidden md:block transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2 leading-tight">
                    {data.titulo}
                  </h2>
                  <p className="text-white/60 italic font-medium">
                    "{data.cita}"
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-6 text-white/80 leading-relaxed text-sm md:text-base">
                  <p>{data.descripcion}</p>

                  <div className="space-y-3">
                    <h4 className="text-white font-bold uppercase tracking-wider text-xs border-b border-white/10 pb-2">
                      Detalles Históricos
                    </h4>
                    <ul className="space-y-2">
                      {data.detalles &&
                        data.detalles.map((detalle: string, idx: number) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm"
                          >
                            <span className="text-limon-selva-400 mt-1.5">
                              •
                            </span>
                            <span>{detalle}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Location Section */}
                  {data.ubicacion && (
                    <div className="pt-4 border-t border-white/10 mt-auto">
                      <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors group">
                        <div className="bg-limon-selva-500/20 p-2.5 rounded-lg text-limon-selva-400 group-hover:text-limon-selva-300 transition-colors">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h5 className="text-white font-bold text-sm mb-0.5">
                            Ubicación Exacta
                          </h5>
                          <p className="text-white/60 text-xs mb-2">
                            {data.ubicacion.direccion}
                          </p>
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${data.ubicacion.lat},${data.ubicacion.lng}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-limon-amarillo-400 hover:text-limon-amarillo-300 transition-colors uppercase tracking-wide"
                          >
                            <span>Ver en Google Maps</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
