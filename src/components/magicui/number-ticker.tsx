"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

import { cn } from "@/lib/utils";

export default function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
}: {
  value: number;
  direction?: "up" | "down";
  className?: string;
  delay?: number; // delay in s
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        import("framer-motion").then(({ animate }) => {
          animate(motionValue, direction === "down" ? 0 : value, {
            duration: 1.5,
            ease: "easeOut",
          });
        });
      }, delay * 1000);
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(() => {
    motionValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Number(latest.toFixed(0))
        );
      }
    });
  }, [motionValue]);

  return (
    <span
      className={cn(
        "inline-block tabular-nums text-white tracking-wider",
        className
      )}
      ref={ref}
    />
  );
}
