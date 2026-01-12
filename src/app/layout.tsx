import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Brisas del Río - Restaurante y Cabañas en Jiménez, Pococí, Costa Rica",
  description:
    "Disfruta de la naturaleza en Brisas del Río. Cabañas cómodas, restaurante acogedor y sala de reuniones en Jiménez, Pococí, Costa Rica. Hospedaje y experiencias inolvidables.",
  keywords: [
    "Brisas del Río",
    "Jiménez",
    "Pococí",
    "Costa Rica",
    "restaurante",
    "cabañas",
    "hospedaje",
    "sala de reuniones",
    "naturaleza",
    "turismo",
  ],
  authors: [{ name: "Brisas del Río" }],
  openGraph: {
    title: "Brisas del Río - Restaurante y Cabañas",
    description:
      "Cabañas cómodas, restaurante acogedor y sala de reuniones en Jiménez, Pococí, Costa Rica",
    url: "https://brisasdelrio.cr",
    siteName: "Brisas del Río",
    locale: "es_CR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brisas del Río - Restaurante y Cabañas",
    description:
      "Cabañas cómodas, restaurante acogedor y sala de reuniones en Jiménez, Pococí, Costa Rica",
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
              "@type": "LocalBusiness",
              name: "Brisas del Río",
              description:
                "Restaurante y Cabañas en Jiménez, Pococí, Costa Rica. Un refugio de naturaleza y sabor.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jiménez",
                addressLocality: "Pococí",
                addressRegion: "Limón",
                addressCountry: "CR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 10.2108,
                longitude: -83.7447,
              },
              telephone: "+506-1234-5678",
              url: "https://brisasdelrio.cr",
              priceRange: "$$",
              servesCuisine: "Típica Costarricense, Criolla",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "07:00",
                  closes: "21:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
