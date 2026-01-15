import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const puyita = localFont({
  src: "../../public/assets/fonts/puyita-sans.otf",
  variable: "--font-display",
  display: "block", // Ensures font is hidden until loaded, preventing layout shift, or swap if preferred but block fixes "instant load" feel once cached
});

export const metadata: Metadata = {
  title: "Puerto Limón - Historia Viva del Caribe Costarricense",
  description:
    "Experiencia editorial digital sobre Limón, Costa Rica. Historia portuaria, cultura afrocaribeña auténtica, patrimonio arquitectónico y turismo responsable. Limón es más que playa.",
  keywords: [
    "Puerto Limón",
    "Limón Costa Rica",
    "cultura afrocaribeña",
    "Carnaval de Limón",
    "historia caribeña",
    "turismo Limón",
    "Parque Nacional Cahuita",
    "Tortuguero",
    "patrimonio cultural",
    "arquitectura limonense",
    "gastronomía caribeña",
    "rice and beans",
  ],
  authors: [{ name: "Landing Puerto Limón" }],
  openGraph: {
    title: "Puerto Limón - Historia Viva del Caribe Costarricense",
    description:
      "Historia portuaria, identidad urbana, cultura afrocaribeña y turismo responsable. Una experiencia editorial contemporánea sobre Limón, Costa Rica.",
    url: "https://puertolim on.cr",
    siteName: "Puerto Limón",
    locale: "es_CR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Puerto Limón - Historia Viva del Caribe Costarricense",
    description:
      "Historia, cultura afrocaribeña y turismo responsable. Limón es más que playa.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristDestination",
              name: "Puerto Limón",
              description:
                "Puerto Limón: historia viva, ciudad portuaria, cultura afrocaribeña auténtica y destino turístico con identidad propia.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Puerto Limón",
                addressRegion: "Limón",
                addressCountry: "CR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 10.0011,
                longitude: -83.0339,
              },
              url: "https://puertolimon.cr",
              touristType: ["Historia", "Cultura", "Naturaleza", "Playa"],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${puyita.variable} font-sans antialiased min-h-screen bg-background text-foreground overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
