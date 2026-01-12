"use client";

import { cn } from "@/lib/utils";

interface LightRaysProps {
  className?: string;
}

export function LightRays({ className }: LightRaysProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary/20 via-primary/5 to-transparent transform -skew-x-12" />
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-primary/30 via-primary/10 to-transparent transform skew-x-12" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-primary/20 via-primary/5 to-transparent transform -skew-x-12" />
    </div>
  );
}
