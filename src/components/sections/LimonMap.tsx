"use client";

import dynamic from "next/dynamic";
import { buildings } from "@/content/edificios/buildings";
import { renderToString } from "react-dom/server";
import {
  Building2,
  Church,
  Trees,
  Anchor,
  School,
  Bed,
  Trophy,
  Star,
  Palette,
  Mail,
  Gamepad2,
} from "lucide-react";
import L from "leaflet";
import { useEffect, useState, useMemo } from "react";
import { useMap } from "react-leaflet";

// Dynamically import map components to avoid SSR issues with Leaflet
const Map = dynamic(
  () => import("@/components/ui/map").then((mod) => mod.Map),
  { ssr: false }
);
const MapMarker = dynamic(
  () => import("@/components/ui/map").then((mod) => mod.MapMarker),
  { ssr: false }
);
const MapPopup = dynamic(
  () => import("@/components/ui/map").then((mod) => mod.MapPopup),
  { ssr: false }
);
const MapTileLayer = dynamic(
  () => import("@/components/ui/map").then((mod) => mod.MapTileLayer),
  { ssr: false }
);
const MapZoomControl = dynamic(
  () => import("@/components/ui/map").then((mod) => mod.MapZoomControl),
  { ssr: false }
);

// Component to handle auto-fitting bounds
const FitBounds = ({ points }: { points: [number, number][] }) => {
  const map = useMap();

  useEffect(() => {
    if (!points.length) return;
    const bounds = L.latLngBounds(points);
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [map, points]);

  return null;
};

// Helper to get Lucide Icon component
const getIconComponent = (id: string) => {
  if (id.includes("correos")) return Mail;
  if (id.includes("episcopal") || id.includes("misionera")) return Church;
  if (id.includes("cultura")) return Palette;
  if (id.includes("black-star")) return Star;
  if (id.includes("parque")) return Trees;
  if (id.includes("portuaria")) return Anchor;
  if (id.includes("domino")) return Gamepad2;
  if (id.includes("escuela")) return School;
  if (id.includes("pension")) return Bed;
  if (id.includes("estadio") || id.includes("big-boy")) return Trophy;
  return Building2;
};

export default function LimonMap() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Memoize icons to perform DOM generation only on client
  const buildingIcons = useMemo(() => {
    if (typeof window === "undefined") return {};

    const icons: Record<string, L.DivIcon> = {};

    buildings.forEach((b) => {
      const IconComponent = getIconComponent(b.id);

      const iconHtml = renderToString(
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "#1E3A2F", // limon-selva-900
              borderRadius: "9999px",
              opacity: 0.9,
              border: "2px solid white",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          />
          <div style={{ position: "relative", zIndex: 10, color: "white" }}>
            <IconComponent size={20} />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "-4px",
              width: "8px",
              height: "8px",
              backgroundColor: "#1E3A2F",
              transform: "rotate(45deg)",
            }}
          />
        </div>
      );

      icons[b.id] = L.divIcon({
        html: iconHtml,
        className: "bg-transparent",
        iconSize: [40, 40],
        iconAnchor: [20, 45],
        popupAnchor: [0, -45],
      });
    });

    return icons;
  }, []);

  if (!isMounted)
    return (
      <div className="h-[60vh] md:h-[70vh] w-full bg-zinc-100 animate-pulse rounded-3xl" />
    );

  return (
    <div className="h-[60vh] md:h-[70vh] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl relative z-10">
      <Map
        center={[9.9932, -83.0281]} // Initial center backup
        zoom={16}
        scrollWheelZoom={false}
        dragging={true}
        touchZoom={true}
        doubleClickZoom={true}
        boxZoom={true}
        keyboard={true}
        className="h-full w-full outline-none"
        zoomControl={false}
      >
        <MapTileLayer />
        <MapZoomControl />

        {/* Auto-fit bounds for mobile/desktop responsiveness */}
        <FitBounds points={buildings.map((b) => b.position)} />

        {buildings.map((b) => (
          <MapMarker
            key={b.id}
            position={b.position}
            icon={buildingIcons[b.id]}
          >
            <MapPopup className="rounded-xl overflow-hidden shadow-xl border-none">
              <div className="space-y-1 min-w-[200px] p-1">
                <div className="font-bold text-zinc-900 text-base">
                  {b.nombre}
                </div>
                <div className="text-xs text-zinc-500 font-medium mb-2">
                  {b.direccion}
                </div>

                <div className="pt-2 text-xs text-zinc-600 border-t border-zinc-100 mt-2 flex flex-wrap gap-2">
                  {b.año && (
                    <span className="bg-zinc-100 px-2 py-0.5 rounded-full text-[10px] font-bold">
                      {b.año}
                    </span>
                  )}
                  {b.estilo && (
                    <span className="bg-limon-selva-50 text-limon-selva-800 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold">
                      {b.estilo}
                    </span>
                  )}
                </div>
              </div>
            </MapPopup>
          </MapMarker>
        ))}
      </Map>
    </div>
  );
}
