import Link from "next/link";
import Image from "next/image";

export default function RentPaddlePage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <section
        className="
          relative
          flex
          min-h-screen
          items-center
          justify-center
          overflow-hidden
        "
      >

        <Image
          src="/images/rent-paddle.png"
          alt="Rent & Paddle Baška Voda"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />


        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/50
            via-black/60
            to-black/75
          "
        />



        {/* Sadržaj */}

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-4xl
            px-6
            text-center
            text-white
          "
        >


          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.45em]
              text-sky-200
            "
          >
            Apartmani Irma • Baška Voda
          </p>



          <h1
            className="
              mt-6
              font-heading
              text-6xl
              font-semibold
              md:text-8xl
            "
          >
            Rent & Paddle
          </h1>



          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-xl
              leading-9
              text-slate-200
            "
          >
            Uskoro vam donosimo mogućnost najma električnih romobila,
            SUP dasaka i opreme za istraživanje Baške Vode,
            skrivenih uvala i prekrasne obale Makarske rivijere.
          </p>



          <div
            className="
              mt-12
              inline-flex
              rounded-full
              border
              border-white/20
              bg-white/10
              px-10
              py-4
              text-lg
              font-semibold
              backdrop-blur-xl
            "
          >
            Coming Soon
          </div>



          <div className="mt-10">

            <Link
              href="/"
              className="
                inline-flex
                rounded-full
                bg-sky-700
                px-10
                py-4
                font-semibold
                text-white
                shadow-xl
                transition
                hover:-translate-y-1
                hover:bg-sky-800
              "
            >
              Nazad na početnu
            </Link>

          </div>


        </div>


      </section>

    </main>
  );
}


