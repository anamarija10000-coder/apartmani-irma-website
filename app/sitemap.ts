import type { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.irma-apartments-baskavoda.com";


  const locales = [
    "hr",
    "en",
    "de",
  ];


  const apartments = [
    "a5",
    "a6",
    "a7",
    "a8",
  ];


  const pages = [
    "",
    "/apartments",
    "/rent-paddle",
  ];


  return [

    // Glavne jezične stranice
    ...locales.map((locale) => ({

      url:
        `${baseUrl}/${locale}`,

      lastModified:
        new Date(),

      changeFrequency:
        "weekly" as const,

      priority:
        1,

    })),



    // Ostale stranice
    ...locales.flatMap((locale) =>
      pages
        .filter((page) => page !== "")
        .map((page) => ({

          url:
            `${baseUrl}/${locale}${page}`,

          lastModified:
            new Date(),

          changeFrequency:
            "monthly" as const,

          priority:
            0.8,

        }))
    ),



    // Apartmani
    ...locales.flatMap((locale) =>
      apartments.map((id) => ({

        url:
          `${baseUrl}/${locale}/apartments/${id}`,

        lastModified:
          new Date(),

        changeFrequency:
          "monthly" as const,

        priority:
          0.7,

      }))
    ),

  ];
}
