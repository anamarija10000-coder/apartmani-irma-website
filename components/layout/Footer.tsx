"use client";

import {
  MapPin,
  Phone,
  Mail,
  Car,
  Waves,
  Clock3,
  Wifi,
} from "lucide-react";

import Link from "next/link";
import { useTranslations } from "next-intl";


export default function Footer() {

  const t = useTranslations("footer");


  return (
    <footer className="bg-sky-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-20">


        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">


          {/* Apartmani */}

          <div>

            <h3 className="mb-6 text-2xl font-bold">
              Apartmani Irma
            </h3>


            <p className="leading-8 text-sky-100">
              {t("description")}
            </p>


          </div>





          {/* Kontakt */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              {t("contact")}
            </h3>


            <div className="space-y-4">


              <div className="flex items-center gap-3">

                <Phone size={18}/>

                <a
                  href="tel:+385959091695"
                  className="transition hover:text-sky-300"
                >
                  +385 95 909 1695
                </a>

              </div>




              <div className="flex items-center gap-3">

                <Mail size={18}/>

                <a
                  href="mailto:saric.irma68@gmail.com"
                  className="transition hover:text-sky-300"
                >
                  saric.irma68@gmail.com
                </a>

              </div>




              <div className="flex gap-3">

                <MapPin size={18} className="mt-1 shrink-0"/>

                <span>
                  Naputica 28
                  <br />
                  21320 Baška Voda
                  <br />
                  Hrvatska
                </span>

              </div>


            </div>

          </div>






          {/* Informacije */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              {t("information")}
            </h3>


            <div className="space-y-4">


              <div className="flex items-center gap-3">

                <Car size={18}/>

                <span>
                  {t("parking")}
                </span>

              </div>



              <div className="flex items-center gap-3">

                <Wifi size={18}/>

                <span>
                  {t("wifi")}
                </span>

              </div>



              <div className="flex items-center gap-3">

                <Waves size={18}/>

                <span>
                  {t("distance")}
                </span>

              </div>



              <div className="flex items-center gap-3">

                <Clock3 size={18}/>

                <span>
                  {t("checkIn")}
                </span>

              </div>



              <div className="flex items-center gap-3">

                <Clock3 size={18}/>

                <span>
                  {t("checkOut")}
                </span>

              </div>


            </div>

          </div>






          {/* Navigacija */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              {t("navigation")}
            </h3>


            <div className="space-y-4">


              <Link
                href="/"
                className="block transition hover:text-sky-300"
              >
                {t("home")}
              </Link>


              <Link
                href="#apartmani"
                className="block transition hover:text-sky-300"
              >
                {t("apartments")}
              </Link>


              <Link
                href="#rezervacija"
                className="block transition hover:text-sky-300"
              >
                {t("reservation")}
              </Link>


              <a
                href="https://www.instagram.com/irma_apartments_baskavoda"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-sky-300"
              >
                Instagram
              </a>
<Link
  href="/privacy-policy"
  className="block transition hover:text-sky-300"
>
  {t("privacy")}
</Link>

<Link
  href="/cookie-policy"
  className="block transition hover:text-sky-300"
>
  {t("cookies")}
</Link>

            </div>


          </div>



        </div>





        <div
          className="
            mt-16
            border-t
            border-sky-800
            pt-8
            text-center
            text-sky-300
          "
        >

          © {new Date().getFullYear()} Apartmani Irma.
          {t("rights")}

        </div>



      </div>


    </footer>
  );
}