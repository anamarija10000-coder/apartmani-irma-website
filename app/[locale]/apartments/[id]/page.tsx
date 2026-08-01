import ApartmentHero from "@/components/apartment/ApartmentHero";
import ApartmentGallery from "@/components/apartment/ApartmentGallery";
import ApartmentInfo from "@/components/apartment/ApartmentInfo";
import BookingBenefits from "@/components/apartment/BookingBenefits";
import InquiryForm from "@/components/apartment/InquiryForm";

import { notFound } from "next/navigation";
import { apartments } from "@/data/apartments";
import { getGallery } from "@/lib/gallery";

import { getTranslations } from "next-intl/server";


type Props = {
  params: Promise<{
    id: string;
    locale: string;
  }>;
};



export default async function ApartmentPage({
  params,
}: Props) {


  const { id, locale } = await params;


  const apartment = apartments.find(
    (a) => a.id === id
  );


  if (!apartment) {
    notFound();
  }


  const gallery = getGallery(id);



  const t = await getTranslations({
    locale,
    namespace: "apartments",
  });



  const apartmentName = t(
    `names.${apartment.id}`
  );


  const apartmentSubtitle = t(
    `subtitles.${apartment.id}`
  );



  return (

    <main className="bg-white">


      {/* Hero */}

      <ApartmentHero
        name={apartmentName}
        subtitle={apartmentSubtitle}
        image={apartment.image}
        guests={apartment.guests}
        seaView={apartment.seaView}
        balcony={apartment.balcony}
      />



      {/* Galerija */}

      <ApartmentGallery
        images={gallery}
        name={apartmentName}
      />



      {/* Informacije */}

      <ApartmentInfo
        apartment={{
          id: apartment.id,

          guests: apartment.guests,
          bathrooms: apartment.bathrooms,

          wifi: apartment.wifi,
          parking: apartment.parking,
          airConditioning: apartment.airConditioning,
          kitchen: apartment.kitchen,
          tv: apartment.tv,
          kettle: apartment.kettle,

          balcony: apartment.balcony,
          seaView: apartment.seaView,
        }}
      />



      {/* Prednosti rezervacije */}

      <BookingBenefits />



      {/* Obrazac za upit */}

      <InquiryForm
        apartment={{
          name: apartmentName,
        }}
      />


    </main>

  );
}
