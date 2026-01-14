/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base system colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        // Limón color palette
        limon: {
          selva: {
            50: "hsl(var(--limon-selva-50))",
            100: "hsl(var(--limon-selva-100))",
            200: "hsl(var(--limon-selva-200))",
            300: "hsl(var(--limon-selva-300))",
            400: "hsl(var(--limon-selva-400))",
            500: "hsl(var(--limon-selva-500))",
            600: "hsl(var(--limon-selva-600))",
            700: "hsl(var(--limon-selva-700))",
            800: "hsl(var(--limon-selva-800))",
            900: "hsl(var(--limon-selva-900))",
            950: "hsl(var(--limon-selva-950))",
          },
          puerto: {
            50: "hsl(var(--limon-puerto-50))",
            100: "hsl(var(--limon-puerto-100))",
            200: "hsl(var(--limon-puerto-200))",
            300: "hsl(var(--limon-puerto-300))",
            400: "hsl(var(--limon-puerto-400))",
            500: "hsl(var(--limon-puerto-500))",
            600: "hsl(var(--limon-puerto-600))",
            700: "hsl(var(--limon-puerto-700))",
            800: "hsl(var(--limon-puerto-800))",
            900: "hsl(var(--limon-puerto-900))",
            950: "hsl(var(--limon-puerto-950))",
          },
          concreto: {
            50: "hsl(var(--limon-concreto-50))",
            100: "hsl(var(--limon-concreto-100))",
            200: "hsl(var(--limon-concreto-200))",
            300: "hsl(var(--limon-concreto-300))",
            400: "hsl(var(--limon-concreto-400))",
            500: "hsl(var(--limon-concreto-500))",
            600: "hsl(var(--limon-concreto-600))",
            700: "hsl(var(--limon-concreto-700))",
            800: "hsl(var(--limon-concreto-800))",
            900: "hsl(var(--limon-concreto-900))",
            950: "hsl(var(--limon-concreto-950))",
          },
          coral: {
            50: "hsl(var(--limon-coral-50))",
            100: "hsl(var(--limon-coral-100))",
            200: "hsl(var(--limon-coral-200))",
            300: "hsl(var(--limon-coral-300))",
            400: "hsl(var(--limon-coral-400))",
            500: "hsl(var(--limon-coral-500))",
            600: "hsl(var(--limon-coral-600))",
            700: "hsl(var(--limon-coral-700))",
            800: "hsl(var(--limon-coral-800))",
            900: "hsl(var(--limon-coral-900))",
            950: "hsl(var(--limon-coral-950))",
          },
          amarillo: {
            50: "hsl(var(--limon-amarillo-50))",
            100: "hsl(var(--limon-amarillo-100))",
            200: "hsl(var(--limon-amarillo-200))",
            300: "hsl(var(--limon-amarillo-300))",
            400: "hsl(var(--limon-amarillo-400))",
            500: "hsl(var(--limon-amarillo-500))",
            600: "hsl(var(--limon-amarillo-600))",
            700: "hsl(var(--limon-amarillo-700))",
            800: "hsl(var(--limon-amarillo-800))",
            900: "hsl(var(--limon-amarillo-900))",
            950: "hsl(var(--limon-amarillo-950))",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"], // Puyita placeholder
        grotesk: [
          "Space Grotesk",
          "var(--font-sans)",
          "system-ui",
          "sans-serif",
        ],
      },
      animation: {
        "fade-in": "fade-in 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        "fade-in-up": "fade-in-up 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
        "slide-up": "slide-up 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        "slide-in-left": "slide-in-left 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        "slide-in-right": "slide-in-right 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        "scale-in": "scale-in 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        "scroll-indicator": "scroll-indicator 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        steam: "steam 4s ease-in-out infinite", // Para sección gastronomía
        meteor: "meteor 5s linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "scroll-indicator": {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(8px)", opacity: "0.5" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        steam: {
          "0%": {
            transform: "translateY(0) scale(1)",
            opacity: "0.7",
          },
          "50%": {
            transform: "translateY(-20px) scale(1.1)",
            opacity: "0.4",
          },
          "100%": {
            transform: "translateY(-40px) scale(1.2)",
            opacity: "0",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
      spacing: {
        editorial: "1.5rem", // Base editorial spacing
        "editorial-lg": "3rem",
        "editorial-xl": "6rem",
      },
    },
  },
  plugins: [],
};
