"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Hero() {

  const t = useTranslations("hero");


  return (
    <section
      className="
  relative
  isolate
  overflow-hidden
  bg-cover
  bg-center
  pt-24
  pb-56
  min-h-[620px]
  lg:flex
  lg:min-h-screen
  lg:items-center
  lg:pt-0
  lg:pb-32
"
      style={{
  backgroundImage: "url('/images/hero.jpg')",
  backgroundPosition: "center top",
}}
    >

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/80
          via-black/55
          to-black/30
        "
      />


      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-7xl
          items-center
          px-5
          lg:min-h-screen
          lg:px-8
        "
      >

        <div className="max-w-3xl">

          <p
            className="
              mb-4
              text-xs
              font-semibold
              uppercase
              tracking-[0.35em]
              text-sky-200
              sm:text-sm
            "
          >
            {t("welcome")}
          </p>


          <h1
            className="
              font-heading
              text-4xl
              font-semibold
              leading-none
              !text-white
              drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]
              sm:text-5xl
              lg:text-8xl
            "
          >
            {t("title")}
            <br />
            <span className="!text-white">
              {t("title2")}
            </span>
          </h1>


          <p
            className="
  mt-4
  max-w-md
  text-base
  leading-8
  !text-slate-100
  drop-shadow-lg
  sm:text-lg
  lg:mt-8
  lg:max-w-xl
  lg:text-xl
  lg:leading-9
"
          >
            {t("description")}
          </p>


          <div className="mt-8 lg:mt-12">

            <Link
              href="#apartmani"
              className="
inline-flex
w-full
justify-center
rounded-full
bg-sky-700
px-8
py-3
text-base
font-semibold
text-white
shadow-xl
transition
hover:bg-sky-800
sm:w-auto
lg:px-10
lg:py-4
lg:text-lg
"
            >
              {t("button")}
            </Link>

          </div>

        </div>



        <div
          className="
            absolute
            bottom-0
            left-1/2
            w-full
            max-w-6xl
            -translate-x-1/2
            translate-y-[35%]
lg:translate-y-1/2
            px-5
            lg:px-6
          "
        >

          <div
            className="
              grid
              grid-cols-2
              gap-3
              rounded-[24px]
              border
              border-white/10
              bg-white/10
              p-3
              backdrop-blur-2xl
              lg:grid-cols-4
              lg:gap-4
              lg:rounded-[32px]
              lg:p-6
            "
          >

            {[
              ["🏖️", t("features.beach")],
              ["🚗", t("features.parking")],
              ["📶", t("features.wifi")],
              ["🌊", t("features.sea")],
            ].map(([icon, text]) => (

              <div
                key={text}
               className="
  rounded-xl
  bg-white/10
  p-3
  text-center
  lg:rounded-2xl
  lg:p-5
"
              >

                <div className="text-xl lg:text-3xl">
                  {icon}
                </div>


                <p
                  className="
                    mt-2
                    text-[11px]
leading-4
                    uppercase
                    tracking-[0.18em]
                    !text-sky-100
                    lg:mt-3
                    lg:text-xs
                  "
                >
                  {text}
                </p>

              </div>

            ))}

          </div>

        </div>


      </div>

    </section>
  );
}