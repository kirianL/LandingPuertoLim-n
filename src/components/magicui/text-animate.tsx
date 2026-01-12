"use client";

import { motion, Variants } from "framer-motion";

interface TextAnimateProps {
  children: string;
  className?: string;
  delay?: number;
  animation?: "blurInUp" | "fadeIn" | "slideUp";
  by?: "word" | "character";
}

export function TextAnimate({
  children,
  className = "",
  delay = 0,
  animation = "fadeIn",
  by = "word",
}: TextAnimateProps) {
  const items = by === "word" ? children.split(" ") : children.split("");

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: animation === "blurInUp" ? 20 : animation === "slideUp" ? 40 : 0,
      filter: animation === "blurInUp" ? "blur(10px)" : "none",
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: delay + i * (by === "word" ? 0.1 : 0.03),
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    }),
  };

  return (
    <div className={className}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          className="inline-block"
        >
          {item === " " ? "\u00A0" : item}
          {by === "word" && i < items.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </div>
  );
}
