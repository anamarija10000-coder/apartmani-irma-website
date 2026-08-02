import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  metadataBase: new URL(
    "https://www.irma-apartments-baskavoda.com"
  ),

  title:
    "Apartmani Irma Baška Voda | Moderni apartmani 200 m od plaže",

  description:
    "Apartmani Irma u Baškoj Vodi nude moderan smještaj 200 m od plaže, besplatan parking, WiFi, klima uređaj i potpuno opremljene apartmane za odmor na Makarskoj rivijeri.",

  keywords: [
    "Apartmani Irma",
    "apartmani Baška Voda",
    "smještaj Baška Voda",
    "apartmani blizu plaže Baška Voda",
    "privatni smještaj Baška Voda",
    "apartmani Makarska rivijera",
  ],

  authors: [
    {
      name: "Apartmani Irma",
    },
  ],

  creator:
    "Apartmani Irma",

  openGraph: {
    title:
      "Apartmani Irma Baška Voda | 200 m od plaže",

    description:
      "Moderni apartmani u Baškoj Vodi s besplatnim parkingom, WiFi-em i klimom.",

    url:
      "https://www.irma-apartments-baskavoda.com",

    siteName:
      "Apartmani Irma",

    locale:
      "hr_HR",

    type:
      "website",

    images: [
      {
        url:
          "/images/hero.webp",

        width:
          1200,

        height:
          630,

        alt:
          "Apartmani Irma Baška Voda",
      },
    ],
  },


  twitter: {
    card:
      "summary_large_image",

    title:
      "Apartmani Irma Baška Voda",

    description:
      "Moderni apartmani 200 m od plaže u Baškoj Vodi.",

    images:
      ["/images/hero.webp"],
  },


  robots: {
    index:
      true,

    follow:
      true,
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="hr"
      className={`${manrope.variable} ${playfair.variable}`}
    >

      <body className="min-h-screen font-sans antialiased">

        {children}

      </body>

    </html>
  );
}