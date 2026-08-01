"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

import {
  Users,
  BedDouble,
  Bath,
  ArrowRight,
  Waves,
} from "lucide-react";

import { apartments } from "@/data/apartments";


export default function Apartments() {

  const pathname = usePathname();

  const t = useTranslations("apartments");

  const pathLocale = pathname.split("/")[1];

const locale = ["hr", "en", "de"].includes(pathLocale)
  ? pathLocale
  : "hr";


  return (
    <section
      id="apartmani"
      className="
  scroll-mt-20
  bg-stone-50
  py-12
  lg:py-32
"
    >

      <div className="
        mx-auto
        max-w-7xl
        px-5
        lg:px-6
      ">


        <div className="
          mb-10
          text-center
          lg:mb-20
        ">

          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.35em]
              text-sky-700
              sm:text-sm
            "
          >
            {t("label")}
          </span>


          <h2
            className="
              mt-3
              font-heading
              text-3xl
              text-slate-900
              sm:text-5xl
              lg:mt-4
              lg:text-6xl
            "
          >
            {t("title")}
          </h2>


          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
leading-6
sm:text-base
lg:text-xl
lg:leading-9
              text-slate-500
              lg:mt-6
            "
          >
            {t("description")}
          </p>

        </div>





        <div
        className="
  mx-auto
  grid
  max-w-md
  gap-6
  md:max-w-none
  md:grid-cols-2
  lg:gap-10
  xl:grid-cols-4
"
        >

          {apartments.map((apartment) => (

            <Link
              key={apartment.id}
              href={`/${locale}/apartments/${apartment.id}`}
              className="
                group
                overflow-hidden
                rounded-[28px]
                bg-white
                shadow-[0_15px_40px_rgba(0,0,0,0.08)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]
              "
            >


              <div
                className="
                  relative
                  h-56
                  overflow-hidden
                  lg:h-80
                "
              >

                <Image
  src={apartment.image}
  alt={t(`names.${apartment.id}`)}
  fill
  sizes="
    (max-width:768px) 100vw,
    (max-width:1280px) 50vw,
    25vw
  "
  className="
    object-cover
    object-center
    transition
    duration-700
    group-hover:scale-110
  "
/>


                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/75
                    via-black/10
                    to-transparent
                  "
                />



                <div
                  className="
                    absolute
                    left-4
                    top-4
                    lg:left-6
                    lg:top-6
                  "
                >

                  <div
                    className="
                      rounded-full
                      bg-white
                      px-3
                      py-1.5
                      text-xs
                      font-semibold
                      text-sky-700
                      shadow-lg
                      lg:px-4
                      lg:py-2
                      lg:text-sm
                    "
                  >
                    {apartment.id.toUpperCase()}
                  </div>

                </div>





                <div
                  className="
                    absolute
                    bottom-4
                    left-4
                    right-4
                    lg:bottom-6
                    lg:left-6
                    lg:right-6
                  "
                >

                  <h3
                    style={{color:"#ffffff"}}
                    className="
                      font-heading
                      text-2xl
                      font-semibold
                      drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]
                      lg:text-3xl
                    "
                  >
                    {t(`names.${apartment.id}`)}
                  </h3>


                  <p
                    style={{color:"#ffffff"}}
                    className="
                      mt-1
                      text-xs
                      font-medium
                      leading-5
                      drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]
                      lg:mt-2
                      lg:text-sm
                    "
                  >
                    {t(`subtitles.${apartment.id}`)}
                  </p>


                </div>


              </div>





              <div
                className="
                  p-5
                  lg:p-7
                "
              >

                <div className="space-y-3 lg:space-y-4">


                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <Users size={17} className="text-sky-700"/>
                    {t("guests", {count: apartment.guests})}
                  </div>



                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <BedDouble size={17} className="text-sky-700"/>
                    {t(`beds.${apartment.id}`)}
                  </div>



                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <Bath size={17} className="text-sky-700"/>
                    {t("bathrooms", {count: apartment.bathrooms})}
                  </div>



                  {apartment.seaView && (

                    <div
                      className="
                        flex
                        items-center
                        gap-3
                        text-sm
                        font-medium
                        text-sky-700
                      "
                    >
                      <Waves size={17}/>
                      {t("seaView")}
                    </div>

                  )}


                </div>





                <div
                  className="
                    mt-6
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-sky-700
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition
                    duration-300
                    group-hover:bg-sky-800
                    lg:mt-8
                    lg:py-4
                    lg:text-base
                  "
                >

                  {t("view")}

                  <ArrowRight
                    size={17}
                    className="
                      transition
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                </div>


              </div>


            </Link>

          ))}

        </div>


      </div>

    </section>
  );
}