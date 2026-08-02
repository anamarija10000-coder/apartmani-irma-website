"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Counter from "yet-another-react-lightbox/plugins/counter";


type Props = {
  images: string[];
  name: string;
};


export default function ApartmentGallery({
  images,
  name,
}: Props) {

  const t = useTranslations("gallery");


  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);


  if (!images.length) return null;


  const slides = images.map((image) => ({
    src: image,
  }));


  return (
    <section className="mx-auto max-w-7xl px-6 py-24">


      {/* Naslov */}
      <div className="mb-12">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
          {t("label")}
        </p>


        <h2
  className="
    mt-3
    font-heading
    text-4xl
    leading-none
    text-slate-900
    sm:text-5xl
  "
>
          {t("title")}
        </h2>


        <p
  className="
    mt-4
    mb-10
    max-w-2xl
    text-base
    leading-7
    text-slate-500
    lg:text-lg
    lg:leading-8
  "
>
          {t("description")}
        </p>

      </div>



      {/* Grid */}
      <div
  className="
    grid
    grid-cols-2
    gap-3
    lg:grid-cols-4
    lg:gap-4
  "
>


        {/* Glavna fotografija */}
        <div
          onClick={() => {
  setIndex(0);
  setOpen(true);
}}
          className="
            group
            relative
            h-[240px]
sm:h-[320px]
lg:h-[560px]
            cursor-pointer
            overflow-hidden
            rounded-[32px]
            lg:col-span-2
            lg:row-span-2
          "
        >

          <Image
            src={images[0]}
            alt={name}
            fill
            sizes="50vw"
            className="object-cover transition duration-700 group-hover:scale-110"
          />

        </div>



        {/* Male fotografije */}
        {images.slice(1, 5).map((image, index) => {

          const isLast = index === 3 && images.length > 5;


          return (

            <div
              key={index}
              onClick={() => {
  setIndex(index + 1);
  setOpen(true);
}}
              className="
                group
                relative
                h-[120px]
sm:h-[180px]
lg:h-[270px]
                cursor-pointer
                overflow-hidden
                rounded-[28px]
              "
            >

              <Image
                src={image}
                alt={`${name} ${index + 2}`}
                fill
                sizes="25vw"
                className="
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-110
                "
              />



              {isLast && (

                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    bg-black/65
                    backdrop-blur-md
                    transition
                    duration-300
                    group-hover:bg-black/75
                  "
                >

                  <div className="text-center text-white">

                    <p className="text-6xl font-bold">
                      +{images.length - 4}
                    </p>


                    <p className="
                      mt-3
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.35em]
                    ">
                      {t("open")}
                    </p>


                  </div>

                </div>

              )}

            </div>

          );

        })}


      </div>



      {/* Lightbox */}
      <Lightbox

        open={open}
index={index}
        close={() => setOpen(false)}

        slides={slides}

       plugins={[
  Zoom,
  Thumbnails,
  Counter,
]}

        carousel={{
          finite: false,
        }}

        thumbnails={{
          position: "bottom",
          width: 120,
          height: 85,
          border: 2,
          borderRadius: 12,
          gap: 12,
        }}

        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
        }}

        controller={{
          closeOnBackdropClick: true,
        }}
    render={{
  buttonPrev: images.length > 1 ? undefined : () => null,
  buttonNext: images.length > 1 ? undefined : () => null,
}}    
animation={{
  fade: 300,
  swipe: 400,
}}
        styles={{
          container: {
            backgroundColor: "rgba(8,15,25,0.96)",
          },
        }}

      />


    </section>
  );
}