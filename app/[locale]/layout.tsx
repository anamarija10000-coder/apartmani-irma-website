import StructuredData from "@/components/seo/StructuredData";
import WhatsAppButton from "@/components/common/WhatsAppButton";
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
        "Apartmani Irma Baška Voda | 200 m od plaže",

      description:
        "Apartmani Irma u Baškoj Vodi nude moderan smještaj 200 m od plaže, besplatan parking, WiFi, klimu i potpuno opremljene apartmane na Makarskoj rivijeri.",
    },


    en: {
      title:
        "Apartments Irma Baška Voda | 200 m from the Beach",

      description:
        "Apartments Irma in Baška Voda offer modern accommodation 200 m from the beach, free parking, WiFi, air conditioning and a perfect holiday location.",
    },


    de: {
      title:
        "Apartments Irma Baška Voda | 200 m vom Strand",

      description:
        "Apartments Irma in Baška Voda bieten moderne Unterkunft, nur 200 m vom Strand entfernt, mit Parkplatz, WLAN und Klimaanlage.",
    },

  };


  const content =
    seo[locale as keyof typeof seo] || seo.hr;


  const baseUrl =
    "https://www.irma-apartments-baskavoda.com";


  return {

    metadataBase:
      new URL(baseUrl),


    title:
      content.title,


    description:
      content.description,


    keywords: [

      "Apartmani Irma",

      "apartmani Baška Voda",

      "smještaj Baška Voda",

      "apartments Baška Voda",

      "Baška Voda accommodation",

      "apartments near beach",

      "Makarska Riviera",

      "Croatia holidays",

    ],


    alternates: {

      canonical:
        `${baseUrl}/${locale}`,

      languages: {

        hr:
          `${baseUrl}/hr`,

        en:
          `${baseUrl}/en`,

        de:
          `${baseUrl}/de`,

      },

    },


    openGraph: {

      title:
        content.title,


      description:
        content.description,


      url:
        `${baseUrl}/${locale}`,


      siteName:
        "Apartmani Irma",


      type:
        "website",


      locale:
        locale === "hr"
          ? "hr_HR"
          : locale === "de"
          ? "de_DE"
          : "en_US",


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
        content.title,

      description:
        content.description,

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


  const { locale } =
    await params;


  if (!locales.includes(locale)) {
    notFound();
  }


  const messages =
    await getMessages();


return (

  <NextIntlClientProvider
    locale={locale}
    messages={messages}
  >

    <StructuredData locale={locale} />

    {children}

    <WhatsAppButton />

  </NextIntlClientProvider>

);

}
