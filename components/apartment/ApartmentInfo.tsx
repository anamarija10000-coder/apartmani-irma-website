"use client";

import { useTranslations } from "next-intl";

import {
  Users,
  BedDouble,
  Bath,
  Wifi,
  Car,
  Snowflake,
  Coffee,
  Tv,
  CookingPot,
  Waves,
  Home,
} from "lucide-react";


type Props = {
  apartment: {
    id: string;

    guests: number;
    bathrooms: number;

    wifi: boolean;
    parking: boolean;
    airConditioning: boolean;
    kitchen: boolean;
    tv: boolean;
    kettle: boolean;

    balcony?: boolean;
    seaView?: boolean;
  };
};



export default function ApartmentInfo({ apartment }: Props) {

  const t = useTranslations("apartmentInfo");
  const a = useTranslations("apartments");


  const info = [

    {
      show: true,
      icon: Users,
      text: t("guests", {
        count: apartment.guests,
      }),
    },

    {
      show: true,
      icon: BedDouble,
      text: a(`beds.${apartment.id}`),
    },

    {
      show: true,
      icon: Bath,
      text: t("bathrooms", {
        count: apartment.bathrooms,
      }),
    },

    {
      show: apartment.seaView,
      icon: Waves,
      text: t("seaView"),
    },

    {
      show: apartment.balcony,
      icon: Home,
      text: t("balcony"),
    },

    {
      show: apartment.wifi,
      icon: Wifi,
      text: t("wifi"),
    },

    {
      show: apartment.airConditioning,
      icon: Snowflake,
      text: t("airCondition"),
    },

    {
      show: apartment.parking,
      icon: Car,
      text: t("parking"),
    },

    {
      show: apartment.kitchen,
      icon: CookingPot,
      text: t("kitchen"),
    },

    {
      show: apartment.tv,
      icon: Tv,
      text: t("tv"),
    },

    {
      show: apartment.kettle,
      icon: Coffee,
      text: t("kettle"),
    },

  ];



  return (

    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="grid gap-16 lg:grid-cols-2">


        <div>

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.35em]
              text-sky-700
            "
          >
            {t("label")}
          </p>


          <h2
            className="
              mt-3
              font-heading
              text-5xl
              text-slate-900
            "
          >
            {t("title")}
          </h2>



          <p
            className="
              mt-8
              text-lg
              leading-9
              text-slate-600
            "
          >
            {a(`descriptions.${apartment.id}`)}
          </p>



          <p
            className="
              mt-6
              text-lg
              leading-8
              text-slate-600
            "
          >
            {t("description")}
          </p>


        </div>




        <div
          className="
            rounded-[32px]
            bg-slate-50
            p-10
            shadow-xl
          "
        >


          <h2
            className="
              mb-8
              text-3xl
              font-bold
              text-slate-900
            "
          >
            {t("amenities")}
          </h2>



          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >

          {info
            .filter((item) => item.show)
            .map((item) => {

              const Icon = item.icon;


              return (

                <div
                  key={item.text}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    bg-white
                    p-4
                    shadow-sm
                    transition
                    hover:shadow-md
                  "
                >

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-sky-100
                    "
                  >

                    <Icon
                      size={22}
                      className="text-sky-700"
                    />

                  </div>


                  <span
                    className="
                      text-sm
                      font-medium
                      text-slate-700
                    "
                  >
                    {item.text}
                  </span>


                </div>

              );


            })}


          </div>


        </div>


      </div>


    </section>

  );

}