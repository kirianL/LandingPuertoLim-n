"use client";

import { useState, useEffect } from "react";
import {
  Cloud,
  Sun,
  CloudRain,
  CloudLightning,
  Thermometer,
  Wind,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

interface WeatherData {
  temp: number;
  condition: string;
  icon: React.ReactNode;
  description: string;
  humidity: number;
}

const getWeatherInfo = (code: number) => {
  if (code === 0)
    return {
      icon: <Sun className="w-5 h-5 text-yellow-400" />,
      text: "Cielo Despejado",
    };
  if (code <= 3)
    return {
      icon: <Cloud className="w-5 h-5 text-emerald-400" />,
      text: "Parcialmente Nublado",
    };
  if (code <= 48)
    return {
      icon: <Cloud className="w-5 h-5 text-slate-400" />,
      text: "Niebla/Bruma",
    };
  if (code <= 67 || (code >= 80 && code <= 82))
    return {
      icon: <CloudRain className="w-5 h-5 text-blue-400" />,
      text: "Lluvia",
    };
  if (code >= 95)
    return {
      icon: <CloudLightning className="w-5 h-5 text-purple-400" />,
      text: "Tormenta",
    };
  return {
    icon: <Cloud className="w-5 h-5 text-emerald-400" />,
    text: "Nublado",
  };
};

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=10.21&longitude=-83.74&current=temperature_2m,relative_humidity_2m,weather_code&timezone=auto"
        );
        const data = await response.json();

        if (data.current) {
          const info = getWeatherInfo(data.current.weather_code);
          setWeather({
            temp: Math.round(data.current.temperature_2m),
            condition: info.text,
            icon: info.icon,
            description: "Clima Real",
            humidity: data.current.relative_humidity_2m,
          });
        }
      } catch (error) {
        console.error("Error fetching weather:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading)
    return (
      <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 animate-pulse">
        <div className="w-4 h-4 bg-white/20 rounded-full" />
        <div className="w-12 h-3 bg-white/20 rounded-full" />
      </div>
    );

  if (!weather) return null;

  return (
    <FadeIn direction="right" delay={0.4}>
      <div className="flex items-center gap-4 px-4 py-2.5 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl group hover:bg-black/40 transition-all duration-300">
        <div className="flex items-center gap-2 pr-4 border-r border-white/10">
          <div className="p-1.5 bg-emerald-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
            {weather.icon}
          </div>
          <span className="text-xl font-bold text-white leading-none">
            {weather.temp}°
            <span className="text-xs font-normal text-white/50 ml-0.5">C</span>
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest leading-none mb-1">
            {weather.condition}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-white/50 leading-none">
              Jiménez, Pococí
            </span>
            <div className="flex items-center gap-1">
              <Wind className="w-2.5 h-2.5 text-white/30" />
              <span className="text-[8px] text-white/30 font-medium">
                82% Hum.
              </span>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
