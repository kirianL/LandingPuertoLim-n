import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-[100] touch-none"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl flex flex-col md:flex-row pointer-events-auto border border-zinc-200/60"
            >
              {/* Image Section (Left/Top) */}
              <div className="w-full md:w-1/2 relative h-48 md:h-auto overflow-hidden">
                <img
                  src={data.imagen}
                  alt={data.titulo}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:bg-gradient-to-r" />

                {/* Close Button Mobile */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white text-zinc-800 rounded-full backdrop-blur-md shadow-sm md:hidden border border-zinc-200/60 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                {data.credito && (
                  <div className="absolute bottom-4 left-4 md:left-auto md:right-4 z-20">
                    <p className="text-[10px] text-zinc-500/80 font-medium tracking-wider uppercase">
                      Foto: {data.credito}
                    </p>
                  </div>
                )}
              </div>

              {/* Content Section (Right/Bottom) */}
              <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto overscroll-contain custom-scrollbar">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-zinc-800 text-xs font-semibold tracking-wider uppercase px-3 py-1 bg-zinc-100 rounded-full border border-zinc-200/60 shadow-sm">
                      {data.año}
                    </span>
                    {/* Close Button Desktop */}
                    <button
                      onClick={onClose}
                      className="p-2 bg-zinc-50 hover:bg-zinc-100 rounded-full text-zinc-700 hidden md:block transition-colors border border-zinc-200/60"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 mb-2 leading-tight">
                    {data.titulo}
                  </h2>
                  <p className="text-zinc-600 italic text-sm font-medium">
                    "{data.cita}"
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-6 text-zinc-700 leading-relaxed text-sm md:text-base">
                  <p className="font-body text-zinc-600">{data.descripcion}</p>

                  <div className="space-y-3">
                    <h4 className="text-zinc-900 font-bold uppercase tracking-wider text-xs border-b border-zinc-200/60 pb-2">
                      Detalles Históricos
                    </h4>
                    <ul className="space-y-2">
                      {data.detalles &&
                        data.detalles.map((detalle: string, idx: number) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-zinc-600"
                          >
                            <span className="text-limon-selva-500 mt-1">
                              •
                            </span>
                            <span>{detalle}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Location Section */}
                  {data.ubicacion && (
                    <div className="pt-4 border-t border-zinc-200/60 mt-auto">
                      <div className="flex items-start gap-3 bg-zinc-50 p-4 rounded-2xl border border-zinc-200/60 hover:bg-zinc-100/80 transition-colors group">
                        <div className="bg-limon-selva-100 p-2.5 rounded-xl text-limon-selva-700 group-hover:bg-limon-selva-200 transition-colors">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div className="flex-1 text-left">
                          <h5 className="text-zinc-950 font-bold text-sm mb-0.5">
                            Ubicación Exacta
                          </h5>
                          <p className="text-zinc-600 text-xs mb-2">
                            {data.ubicacion.direccion}
                          </p>
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${data.ubicacion.lat},${data.ubicacion.lng}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-limon-puerto-600 hover:text-limon-puerto-800 transition-colors uppercase tracking-wide"
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
