"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";


import {
  Mail,
  Phone,
  User,
  Users,
  CalendarDays,
  MessageSquare,
} from "lucide-react";
function formatDate(date: string) {
  if (!date) return "";

  const d = new Date(date);

  return d.toLocaleDateString("hr-HR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}


type Props = {
  apartment?: {
    name: string;
    subtitle?: string;
  };
};

export default function InquiryForm({ apartment }: Props) {

  const t = useTranslations("inquiryForm");
  const locale = useLocale();
 

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);


  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    checkIn: "",
    checkOut: "",
    message: "",
  });



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };



  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError(false);


    try {

      const response = await fetch("/api/inquiry", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },


   body: JSON.stringify({

  apartment: apartment?.name ?? "Apartman",

  locale,

  name: form.name,
  email: form.email,
  phone: form.phone,
  guests: form.guests,

  checkIn: formatDate(form.checkIn),
  checkOut: formatDate(form.checkOut),

  message: form.message,

}),

      });



      if (response.ok) {

        setSuccess(true);


        setForm({

          name: "",
          email: "",
          phone: "",
          guests: "",
          checkIn: "",
          checkOut: "",
          message: "",

        });


      } else {

        setError(true);

      }


    } catch {

      setError(true);


    } finally {

      setLoading(false);

    }

  };
    return (

    <section
      id="rezervacija"
      className="
        bg-stone-50
        py-16 lg:py-24
      "
    >


      <div
        className="
          mx-auto
          max-w-6xl
          px-4 sm:px-6
        "
      >



        {/* NASLOV */}


        <div
          className="
            mb-14
            text-center
          "
        >

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.35em]
              text-sky-700
            "
          >
            {t("reservation")}
          </p>



         <h2
  className="
    mt-3
    font-heading
    text-4xl
    text-slate-900
    sm:text-5xl
  "
>
            {t("title")}
          </h2>



          {apartment && (

            <p
              className="
                mt-4
                text-lg
                font-medium
                text-sky-700
              "
            >
              {t("inquiryFor")}: {apartment.name}
            </p>

          )}



          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
             text-base
leading-7
sm:text-lg
sm:leading-8
              text-slate-500
            "
          >
            {t("description")}
          </p>


        </div>





       <div
className="
  grid
  gap-4 sm:gap-6
  lg:gap-12
  lg:grid-cols-3
  items-stretch
"
>



          {/* FORMA */}


          <div
  className="
    rounded-[32px]
    bg-white
    p-5 sm:p-8
    shadow-xl
    lg:col-span-2
  "
>



            {success && (

              <div
                className="
                  mb-8
                  rounded-2xl
                  border
                  border-green-200
                  bg-green-50
                  p-5
                  text-green-700
                "
              >
                ✅ {t("success")}
              </div>

            )}



            {error && (

              <div
                className="
                  mb-8
                  rounded-2xl
                  border
                  border-red-200
                  bg-red-50
                  p-5
                  text-red-700
                "
              >
                ❌ {t("error")}
              </div>

            )}





            <form
              onSubmit={handleSubmit}
              className="
                grid
               gap-4 sm:gap-6
                md:grid-cols-2
              "
            >

                       {/* IME I PREZIME */}

              <div className="relative">

                <User
                  size={20}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />


                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t("name")}
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    py-3 sm:py-4
                    pl-12
                    pr-4
                    outline-none
                    transition
                    focus:border-sky-600
                  "
                />

              </div>





              {/* EMAIL */}

              <div className="relative">

                <Mail
                  size={20}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />


                <input
                  required
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder={t("email")}
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    py-3 sm:py-4
                    pl-12
                    pr-4
                    outline-none
                    transition
                    focus:border-sky-600
                  "
                />

              </div>





              {/* TELEFON */}

              <div className="relative">

                <Phone
                  size={20}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />


                <input
                  required
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder={t("phone")}
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    py-3 sm:py-4
                    pl-12
                    pr-4
                    outline-none
                    transition
                    focus:border-sky-600
                  "
                />

              </div>





              {/* BROJ OSOBA */}

              <div className="relative">

                <Users
                  size={20}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />


                <input
                  required
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  type="number"
                  placeholder={t("guests")}
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    py-3 sm:py-4
                    pl-12
                    pr-4
                    outline-none
                    transition
                    focus:border-sky-600
                  "
                />

              </div>





              {/* DOLAZAK */}

              <div className="relative">

                <CalendarDays
                  size={20}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />


                <input
                  required
                  name="checkIn"
                  value={form.checkIn}
                  onChange={handleChange}
                  type="date"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    py-3 sm:py-4
                    pl-12
                    pr-4
                    outline-none
                    transition
                    focus:border-sky-600
                  "
                />

              </div>





              {/* ODLASAK */}

              <div className="relative">

                <CalendarDays
                  size={20}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />


                <input
                  required
                  name="checkOut"
                  value={form.checkOut}
                  onChange={handleChange}
                  type="date"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    py-3 sm:py-4
                    pl-12
                    pr-4
                    outline-none
                    transition
                    focus:border-sky-600
                  "
                />

              </div>
                            {/* PORUKA */}

              <div
                className="
                  relative
                  md:col-span-2
                "
              >

                <MessageSquare
                  size={20}
                  className="
                    absolute
                    left-4
                    top-5
                    text-slate-400
                  "
                />


                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder={t("message")}
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    py-3 sm:py-4
                    pl-12
                    pr-4
                    outline-none
                    transition
                    focus:border-sky-600
                  "
                />

              </div>





              {/* GUMB */}

              <button
                disabled={loading}
                className="
                  md:col-span-2
                  rounded-full
                  bg-sky-700
                  py-3 sm:py-4
text-base
sm:py-5
sm:text-lg
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-sky-800
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >

                {loading
                  ? t("sending")
                  : t("send")
                }

              </button>


            </form>

          </div>

{/* KONTAKT KARTICA */}

<div
  className="
  rounded-[32px]
  bg-slate-900
  p-5 sm:p-8
  text-white
  shadow-xl
  flex
  flex-col
"
>

<h3
  className="
    mb-4
    font-heading
    text-2xl sm:text-3xl
    text-white
  "
>
  {t("contactTitle")}
</h3>


<p
  className="
    leading-8
    text-slate-300
  "
>
  {t("contactDescription")}
</p>
<div className="mt-6 space-y-3">

    <div className="flex items-center gap-4">

      <div
        className="
          flex
         h-9
w-9
sm:h-10
sm:w-10
          items-center
          justify-center
          rounded-xl
          bg-white/10
        "
      >
        <Phone
          size={20}
          className="text-sky-400"
        />
      </div>

      <span>
        +385 95 909 1695
      </span>

    </div>


    <div className="flex items-center gap-4">

      <div
        className="
          flex
       h-9
w-9
sm:h-10
sm:w-10
          items-center
          justify-center
          rounded-xl
          bg-white/10
        "
      >
        <Mail
          size={20}
          className="text-sky-400"
        />
      </div>

      <span className="break-all">
  saric.irma68@gmail.com
</span>

    </div>

  </div>


  <div
    className="
      mt-5
      border-t
      border-white/10
      pt-4
      space-y-2
      text-sm
      text-slate-300
    "
  >
<p>
  📍 {t("address")}
</p>

<p>
  🏖️ {t("distance")}
</p>

<p>
  🚗 {t("parkingInfo")}
</p>

<p>
  📶 {t("wifiInfo")}
</p>
    <p>
      📷 Instagram:
      <a
        href="https://www.instagram.com/irma_apartments_baskavoda"
        target="_blank"
        className="
          ml-1
          text-sky-400
          hover:text-sky-300
        "
      >
        @irma_apartments_baskavoda
      </a>
    </p>

  </div>
<div className="mt-5">
  <iframe
    src="https://www.google.com/maps?q=Naputica+28,+Baška+Voda&output=embed"
    className="h-52 sm:h-72 w-full rounded-2xl"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

<a
  href="https://maps.google.com/?q=Naputica+28,+Baška+Voda"
  target="_blank"
  rel="noopener noreferrer"
  className="
    mt-3
    flex
    w-full
    items-center
    justify-center
    rounded-xl
    bg-sky-600
    px-4
    py-3
    font-semibold
    text-white
    transition
    hover:bg-sky-700
  "
>
  📍 Otvori u Google Maps
</a>

</div>

        </div>


      </div>


    </section>

  );

}