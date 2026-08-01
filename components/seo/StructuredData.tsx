export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",

    name: "Apartmani Irma",

    description:
      "Moderni apartmani u Baškoj Vodi, 200 m od plaže, s besplatnim parkingom, WiFi-em i klimom.",

    url:
      "https://www.irma-apartments-baskavoda.com",

    telephone:
      "+385959091695",

    address: {
      "@type": "PostalAddress",

      streetAddress:
        "Naputica 28",

      addressLocality:
        "Baška Voda",

      postalCode:
        "21320",

      addressCountry:
        "HR",
    },


    geo: {
      "@type": "GeoCoordinates",

      latitude:
        "43.3568",

      longitude:
        "16.9506",
    },


    image: [

      "https://www.irma-apartments-baskavoda.com/images/hero.jpg",

    ],


    amenityFeature: [

      {
        "@type": "LocationFeatureSpecification",
        name: "Free WiFi",
        value: true,
      },

      {
        "@type": "LocationFeatureSpecification",
        name: "Free parking",
        value: true,
      },

      {
        "@type": "LocationFeatureSpecification",
        name: "Air conditioning",
        value: true,
      },

      {
        "@type": "LocationFeatureSpecification",
        name: "Near beach",
        value: true,
      },

    ],


    sameAs: [

      "https://www.instagram.com/irma_apartments_baskavoda/",

    ],

  };


  return (

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html:
          JSON.stringify(data),
      }}
    />

  );
}