import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";


const locales = ["hr", "en", "de"];


export async function generateMetadata({
  params,
}: {
  params: Promise<{
    locale: string;
  }>;
}): Promise<Metadata> {

  const { locale } = await params;


  const seo = {

    hr: {
      title:
        "Apartmani Irma | Baška Voda - Apartmani blizu plaže",

      description:
        "Moderni apartmani Irma u Baškoj Vodi. Smještaj s pogledom na more, besplatan parking i samo nekoliko minuta od plaže.",
    },


    en: {
      title:
        "Apartments Irma | Baška Voda - Near the Beach",

      description:
        "Modern apartments in Baška Voda with sea view, free parking and a perfect location near the beach.",
    },


    de: {
      title:
        "Apartments Irma | Baška Voda - Urlaub am Meer",

      description:
        "Moderne Apartments in Baška Voda mit Meerblick, kostenlosem Parkplatz und perfekter Lage nahe dem Strand.",
    },

  };


  const content =
    seo[locale as keyof typeof seo] || seo.hr;


  return {

    title: content.title,

    description: content.description,


    keywords: [
      "Apartmani Irma",
      "Baška Voda apartmani",
      "apartments Baška Voda",
      "smještaj Baška Voda",
      "Makarska Riviera",
      "Croatia accommodation",
      "apartments near beach",
    ],


    openGraph: {

      title: content.title,

      description: content.description,

      type: "website",

      locale:
        locale === "hr"
          ? "hr_HR"
          : locale === "de"
          ? "de_DE"
          : "en_US",


      images: [
        {
          url: "/images/hero.jpg",
          width: 1200,
          height: 630,
          alt: "Apartmani Irma Baška Voda",
        },
      ],

    },


    twitter: {

      card: "summary_large_image",

      title: content.title,

      description: content.description,

      images: [
        "/images/hero.jpg",
      ],

    },


    robots: {
      index: true,
      follow: true,
    },

  };
}



export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
}) {


  const { locale } = await params;


  if (!locales.includes(locale)) {
    notFound();
  }


  const messages = await getMessages();


  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
    >
      {children}
    </NextIntlClientProvider>
  );
}