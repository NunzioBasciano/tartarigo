import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { Poppins, Roboto } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // Pesi ideali per titoli e CTA
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500"], // Ottimo per il corpo del testo
});
// 1. I METADATI
export const metadata: Metadata = {
  metadataBase: new URL("https://www.tuobnb.it"),
  title: {
    default: "Nome B&B | Charme e Relax nel cuore di [Città]",
    template: "%s | Nome B&B",
  },
  description:
    "Prenota il tuo soggiorno nel miglior B&B a [Città]. Camere accoglienti, colazione tipica e posizione centrale. Miglior prezzo garantito sul sito ufficiale.",
  keywords: [
    "B&B città",
    "dormire a città",
    "offerte b&b",
    "alloggio centro storico",
  ],
  authors: [{ name: "Nome B&B" }],
  creator: "Nome B&B",
  openGraph: {
    title: "Nome B&B | Charme e Relax a [Città]",
    description:
      "Vivi un’esperienza autentica a [Città]. Camere panoramiche e ospitalità familiare.",
    url: "https://www.tuobnb.it",
    siteName: "Nome B&B",
    images: [
      {
        url: "/images/og-image-home.jpg",
        width: 1200,
        height: 630,
        alt: "La facciata accogliente del nostro B&B",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nome B&B | Soggiorno indimenticabile a [Città]",
    description: "Scopri le nostre stanze e le offerte speciali.",
    images: ["/images/og-image-home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// 2. IL COMPONENTE JSON-LD (Funzione interna, non esportata come default)
function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BedAndBreakfast",
    name: "Nome del tuo B&B",
    image: "https://www.tuobnb.it/images/esterno.jpg",
    "@id": "https://www.tuobnb.it",
    url: "https://www.tuobnb.it",
    telephone: "+390123456789",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Roma 123",
      addressLocality: "Città",
      postalCode: "00100",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.8902,
      longitude: 12.4922,
    },
    priceRange: "€€",
    servesCuisine: "Colazione continentale",
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "WiFi Gratis",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Aria Condizionata",
        value: true,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// 3. IL LAYOUT (L'UNICO EXPORT DEFAULT)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${poppins.variable} ${roboto.variable} antialiased`}>
        <Header></Header>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
