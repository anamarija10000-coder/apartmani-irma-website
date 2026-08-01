import type { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://apartmaniirma.com";


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

    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
    })),


    ...locales.flatMap((locale) =>
      pages.map((page) => ({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
      }))
    ),


    ...locales.flatMap((locale) =>
      apartments.map((id) => ({
        url:
          `${baseUrl}/${locale}/apartments/${id}`,
        lastModified: new Date(),
      }))
    ),

  ];
}