"use client";

import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icon in Next.js
const iconFix = () => {
  delete (L.Icon.Default.prototype as any)._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  });
};

export const Map = ({ children, ...props }: any) => {
  useEffect(() => {
    iconFix();
  }, []);

  return (
    <MapContainer key={new Date().getTime()} {...props}>
      {children}
    </MapContainer>
  );
};

export const MapTileLayer = () => (
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
  />
);

export const MapMarker = Marker;
export const MapPopup = Popup;
export const MapZoomControl = ({
  position,
}: {
  position?: "topleft" | "topright" | "bottomleft" | "bottomright";
}) => <ZoomControl position={position || "topright"} />;
