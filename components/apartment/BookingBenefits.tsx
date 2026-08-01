"use client";

import { useTranslations } from "next-intl";

import {
  Clock3,
  CreditCard,
  ShieldCheck,
  Car,
  Wifi,
  CalendarCheck,
} from "lucide-react";


export default function BookingBenefits() {

  const t = useTranslations("bookingBenefits");


  const benefits = [
    {
      icon: Clock3,
      title: t("fastResponseTitle"),
      text: t("fastResponseText"),
    },
    {
      icon: CreditCard,
      title: t("depositTitle"),
      text: t("depositText"),
    },
    {
      icon: ShieldCheck,
      title: t("cancelTitle"),
      text: t("cancelText"),
    },
    {
      icon: CalendarCheck,
      title: t("arrivalTitle"),
      text: t("arrivalText"),
    },
    {
      icon: Car,
      title: t("parkingTitle"),
      text: t("parkingText"),
    },
    {
      icon: Wifi,
      title: t("wifiTitle"),
      text: t("wifiText"),
    },
  ];


  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="mb-14 text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
          {t("label")}
        </p>


        <h2 className="mt-3 font-heading text-5xl text-slate-900">
          {t("title")}
        </h2>


        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-500">
          {t("description")}
        </p>

      </div>



      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {benefits.map((benefit) => {

          const Icon = benefit.icon;


          return (

            <div
              key={benefit.title}
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >


              <div
                className="
                  mb-6
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-sky-100
                "
              >

                <Icon
                  size={28}
                  className="text-sky-700"
                />

              </div>



              <h3 className="text-xl font-semibold text-slate-900">
                {benefit.title}
              </h3>



              <p className="mt-3 leading-7 text-slate-600">
                {benefit.text}
              </p>



            </div>

          );

        })}

      </div>


    </section>
  );
}