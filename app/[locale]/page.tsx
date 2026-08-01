import Image from "next/image";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Apartments from "@/components/home/Apartments";
import Footer from "@/components/layout/Footer";
import InquiryForm from "@/components/apartment/InquiryForm";

import { getTranslations } from "next-intl/server";


export default async function Home() {

  const t = await getTranslations("home");


  return (
    <>
      <Navbar />

      <Hero />

      <Apartments />


      {/* About */}

      <section
  id="onama"
  className="
    bg-white
    py-20
    lg:py-32
  "
>

        <div
          className="
  mx-auto
  grid
  max-w-7xl
  gap-10
  px-5
  lg:gap-16
  lg:px-6
  lg:grid-cols-2
  lg:items-center
"
        >


          <div
           className="
  relative
  h-[300px]
  overflow-hidden
  rounded-[32px]
  shadow-xl
  sm:h-[420px]
  lg:h-[520px]
  lg:rounded-[40px]
"
          >

            <Image
              src="/images/about.png"
              alt="Apartments Irma Baška Voda"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="
object-cover
object-center
lg:object-cover
"
            />

          </div>




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
              {t("aboutLabel")}
            </p>



            <h2
              className="
                mt-4
                font-heading
                text-4xl
sm:text-5xl
                leading-tight
                text-slate-900
              "
            >
              {t("aboutTitle")}
            </h2>



            <p
              className="
                mt-6
text-base
leading-8
lg:mt-8
lg:text-lg
lg:leading-9
                text-slate-600
              "
            >
              {t("aboutText1")}
            </p>



            <p
              className="
  mt-6
  text-base
  leading-8
  text-slate-600
  lg:text-lg
  lg:leading-9
"
            >
              {t("aboutText2")}
            </p>





            <div
              className="
               mt-8
grid
grid-cols-2
gap-3
lg:mt-10
lg:gap-4
              "
            >


              <div className="rounded-2xl bg-sky-50 p-4 lg:p-5">
              <p className="text-xl lg:text-2xl">🌊</p>

                <p className="mt-2 font-semibold text-slate-800">
                  {t("seaView")}
                </p>
              </div>



              <div className="rounded-2xl bg-sky-50 p-4 lg:p-5">
               <p className="text-xl lg:text-2xl">🏖️</p>

                <p className="mt-2 font-semibold text-slate-800">
                  {t("beach")}
                </p>
              </div>




              <div className="rounded-2xl bg-sky-50 p-4 lg:p-5">
                <p className="text-xl lg:text-2xl">🚗</p>

                <p className="mt-2 font-semibold text-slate-800">
                  {t("parking")}
                </p>
              </div>




              <div className="rounded-2xl bg-sky-50 p-4 lg:p-5">
                <p className="text-xl lg:text-2xl">🏡</p>

                <p className="mt-2 font-semibold text-slate-800">
                  {t("family")}
                </p>
              </div>



            </div>


          </div>


        </div>


      </section>




      <section id="rezervacija">

        <InquiryForm />

      </section>



      <Footer />


    </>
  );
}
