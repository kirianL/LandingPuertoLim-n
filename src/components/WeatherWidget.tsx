"use client";

import { useEffect, useState } from "react";
import { CloudSun, Sun, CloudRain, Cloud, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function WeatherWidget() {
  const [weather, setWeather] = useState<{
    temp: number;
    condition: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchWeather() {
      try {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), 3000);

        // Puerto Limón Coordinates: 9.99131, -83.0415
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=9.9913&longitude=-83.0415&current=temperature_2m,weather_code&timezone=auto",
          { signal: controller.signal }
        );
        clearTimeout(id);

        if (!res.ok) throw new Error("Weather API error");

        const data = await res.json();

        if (isMounted && data.current) {
          // Artificial delay for smoother sequence if it's too fast
          if (Date.now() % 2 === 0)
            await new Promise((r) => setTimeout(r, 800));

          setWeather({
            temp: Math.round(data.current.temperature_2m),
            condition: getWeatherCondition(data.current.weather_code),
          });
        }
      } catch (error) {
        if (isMounted) {
          setWeather({ temp: 30, condition: "sunny" });
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchWeather();

    return () => {
      isMounted = false;
    };
  }, []);

  function getWeatherCondition(code: number) {
    // Codes based on WMO Weather interpretation codes (WW)
    // 0: Clear sky
    // 1, 2, 3: Mainly clear, partly cloudy, and overcast
    // 45, 48: Fog
    // 51, 53, 55: Drizzle
    // 56, 57: Freezing Drizzle
    // 61, 63, 65: Rain
    // 66, 67: Freezing Rain
    // 71, 73, 75: Snow fall
    // 77: Snow grains
    // 80, 81, 82: Rain showers
    // 85, 86: Snow showers
    // 95: Thunderstorm
    // 96, 99: Thunderstorm with slight and heavy hail

    if (code <= 3) return "sunny"; // Covers clear and partly cloudy
    if (
      (code >= 51 && code <= 67) ||
      (code >= 80 && code <= 82) ||
      (code >= 95 && code <= 99)
    )
      return "rainy"; // Covers drizzle, rain, showers, thunderstorms

    // Default fallback for clouds/fog or other
    return "cloudy";
  }

  return (
    <div className="relative min-w-[160px] h-[50px]">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center gap-2 p-2 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
          >
            <Loader2 className="w-6 h-6 text-white/50 animate-spin" />
            <span className="text-white/50 text-sm">Cargando...</span>
          </motion.div>
        ) : (
          <motion.div
            key="weather"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 transition-colors rounded-full border border-white/10 backdrop-blur-sm group cursor-help px-5"
            title="Clima actual en Puerto Limón"
          >
            <div className="flex items-center gap-3">
              {weather?.condition === "sunny" && (
                <Sun className="w-6 h-6 text-limon-amarillo-400 animate-pulse-slow" />
              )}
              {weather?.condition === "rainy" && (
                <CloudRain className="w-6 h-6 text-limon-azul-puerto-300" />
              )}
              {weather?.condition === "cloudy" && (
                <Cloud className="w-6 h-6 text-white/70" />
              )}

              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none tracking-tight">
                  {weather?.temp}°C
                </span>
                <span className="text-[10px] text-white/60 uppercase tracking-wider leading-none mt-0.5 group-hover:text-white/90 transition-colors">
                  Puerto Limón
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
