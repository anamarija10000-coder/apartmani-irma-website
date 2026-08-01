import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import {
  Users,
  Wifi,
  Car,
  Snowflake,
  Waves,
  Home,
} from "lucide-react";


type ApartmentHeroProps = {
  name: string;
  subtitle?: string;
  image: string;
  guests: number;
  seaView?: boolean;
  balcony?: boolean;
};


export default function ApartmentHero({
  name,
  subtitle,
  image,
  guests,
  seaView,
  balcony,
}: ApartmentHeroProps) {


  const t = useTranslations("apartmentHero");


  return (

    <section
      className="
        relative
        h-[75vh]
        min-h-[620px]
        overflow-hidden
        lg:h-[85vh]
        lg:min-h-[650px]
      "
    >

      <Image
        src={image}
        alt={name}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />


      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/45
          via-black/25
          to-black/70
        "
      />



      <div
        className="
          absolute
          bottom-8
          left-0
          w-full
          px-5
          lg:bottom-12
        "
      >


        <div
          className="
            inline-flex
            rounded-full
            bg-white/95
            px-4
            py-2
            text-xs
            font-semibold
            text-sky-900
            backdrop-blur
            sm:text-sm
          "
        >
          {t("location")}
        </div>




        <h1
          style={{ color: "#ffffff" }}
          className="
            mt-4
            font-heading
            text-4xl
            font-bold
            drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]
            sm:text-5xl
            lg:mt-6
            lg:text-7xl
          "
        >
          {name}
        </h1>




        {subtitle && (

          <p
            style={{ color: "#ffffff" }}
            className="
              mt-3
              max-w-xl
              text-base
              leading-6
              drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]
              sm:text-lg
              lg:mt-4
              lg:text-xl
              lg:leading-8
            "
          >
            {subtitle}
          </p>

        )}



        <div
          className="
            mt-5
            flex
            flex-wrap
            gap-2
            lg:mt-8
            lg:gap-3
          "
        >

          <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-medium text-slate-800 sm:px-4 sm:text-sm lg:px-5 lg:py-3">
            <Users size={16}/>
            {t("guests", {count: guests})}
          </div>


          <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-medium text-slate-800 sm:px-4 sm:text-sm lg:px-5 lg:py-3">
            <Wifi size={16}/>
            {t("wifi")}
          </div>


          <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-medium text-slate-800 sm:px-4 sm:text-sm lg:px-5 lg:py-3">
            <Snowflake size={16}/>
            {t("airCondition")}
          </div>


          <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-medium text-slate-800 sm:px-4 sm:text-sm lg:px-5 lg:py-3">
            <Car size={16}/>
            {t("parking")}
          </div>



          {seaView && (
            <div className="flex items-center gap-2 rounded-full bg-sky-100/95 px-3 py-2 text-xs font-medium text-sky-900 sm:px-4 sm:text-sm lg:px-5 lg:py-3">
              <Waves size={16}/>
              {t("seaView")}
            </div>
          )}



          {balcony && (
            <div className="flex items-center gap-2 rounded-full bg-sky-100/95 px-3 py-2 text-xs font-medium text-sky-900 sm:px-4 sm:text-sm lg:px-5 lg:py-3">
              <Home size={16}/>
              {t("balcony")}
            </div>
          )}

        </div>





        <div
          className="
            mt-6
            flex
            flex-col
            gap-3
            sm:flex-row
            lg:mt-10
          "
        >

          <Link
            href="#rezervacija"
            className="
              rounded-full
              bg-sky-700
              px-7
              py-3
              text-center
              text-sm
              font-semibold
              text-white
              shadow-xl
              transition
              hover:bg-sky-800
              lg:px-8
              lg:py-4
              lg:text-base
            "
          >
            {t("sendInquiry")}
          </Link>



          <a
            href="tel:+385959091695"
            className="
              rounded-full
              border
              border-white/50
              bg-white/10
              px-7
              py-3
              text-center
              text-sm
              font-semibold
              text-white
              backdrop-blur
              transition
              hover:bg-white
              hover:text-slate-900
              lg:px-8
              lg:py-4
              lg:text-base
            "
          >
            {t("callUs")}
          </a>

        </div>


      </div>


    </section>

  );
}