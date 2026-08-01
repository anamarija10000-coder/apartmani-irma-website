"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";


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


        <h2 className="mt-3 font-heading text-5xl text-slate-900">
          {t("title")}
        </h2>


        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-500">
          {t("description")}
        </p>

      </div>



      {/* Grid */}
      <div className="grid gap-4 lg:grid-cols-4">


        {/* Glavna fotografija */}
        <div
          onClick={() => setOpen(true)}
          className="
            group
            relative
            h-[560px]
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
              onClick={() => setOpen(true)}
              className="
                group
                relative
                h-[270px]
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

        close={() => setOpen(false)}

        slides={slides}

        plugins={[
          Zoom,
          Thumbnails,
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

        styles={{
          container: {
            backgroundColor: "rgba(8,15,25,0.96)",
          },
        }}

      />


    </section>
  );
}