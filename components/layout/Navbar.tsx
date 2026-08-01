"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";


export default function Navbar() {

  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const t = useTranslations("navbar");


  const pathLocale = pathname.split("/")[1];

  const locale = ["hr", "en", "de"].includes(pathLocale)
    ? pathLocale
    : "hr";



  const switchLanguage = (lang: string) => {

    let path = pathname;

    if (["/hr", "/en", "/de"].some((x) => pathname.startsWith(x))) {
      path = pathname.replace(/^\/(hr|en|de)/, "");
    }

    return `/${lang}${path === "/" ? "" : path}`;

  };



  const menu = [
    {
      name: t("home"),
      href: `/${locale}`,
    },
    {
      name: t("apartments"),
      href: `/${locale}#apartmani`,
    },
    {
      name: t("about"),
      href: `/${locale}#onama`,
    },
    {
      name: t("rent"),
      href: `/${locale}/rent-paddle`,
    },
    {
      name: t("contact"),
      href: `/${locale}#rezervacija`,
    },
  ];



  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-white/20
        bg-white/90
        backdrop-blur-xl
      "
    >

      <div
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-5
          lg:h-24
          lg:px-8
        "
      >


        <Link
          href={`/${locale}`}
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >

          <div className="overflow-hidden rounded-full shadow-lg">

            <Image
              src="/images/logo.jpeg"
              alt={t("logoAlt")}
              width={52}
              height={52}
              className="transition duration-500 group-hover:scale-105"
            />

          </div>


          <div>

            <h1
              className="
                font-heading
                text-xl
                font-semibold
                text-slate-900
                lg:text-2xl
              "
            >
              Apartmani Irma
            </h1>


            <p
              className="
                text-[11px]
                uppercase
                tracking-[0.25em]
                text-sky-700
                lg:text-sm
              "
            >
              Baška Voda
            </p>

          </div>


        </Link>





        <nav className="hidden lg:block">

          <ul className="flex items-center gap-10">

            {menu.map((item) => (

              <li key={item.name}>

                <Link
                  href={item.href}
                  className="
                    relative
                    text-[15px]
                    font-medium
                    text-slate-700
                    transition
                    hover:text-sky-700
                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[2px]
                    after:w-0
                    after:bg-sky-700
                    after:transition-all
                    hover:after:w-full
                  "
                >
                  {item.name}
                </Link>

              </li>

            ))}

          </ul>

        </nav>





        <div
          className="
            hidden
            items-center
            gap-2
            lg:flex
          "
        >

          {["hr","en","de"].map((lang) => (

            <Link
              key={lang}
              href={switchLanguage(lang)}
              className={`
                rounded-full
                px-3
                py-1
                text-xs
                font-semibold
                uppercase
                transition
                ${
                  locale === lang
                  ? "bg-sky-700 text-white"
                  : "text-slate-700 hover:text-sky-700"
                }
              `}
            >
              {lang}
            </Link>

          ))}

        </div>





        <Link
          href={`/${locale}#rezervacija`}
          className="
            hidden
            rounded-full
            bg-sky-700
            px-7
            py-3.5
            font-semibold
            text-white
            shadow-lg
            shadow-sky-700/20
            transition
            hover:bg-sky-800
            lg:block
          "
        >
          {t("book")}
        </Link>





        <button
          onClick={() => setOpen(!open)}
          className="
            rounded-full
            p-2
            text-slate-800
            lg:hidden
          "
          aria-label={t("menu")}
        >

          {open ? (
            <X size={30}/>
          ) : (
            <Menu size={30}/>
          )}

        </button>


      </div>





      {open && (

        <div
          className="
            border-t
            bg-white
            px-6
            py-8
            shadow-xl
            lg:hidden
          "
        >

          <nav>

            <ul className="flex flex-col gap-6">


              {menu.map((item) => (

                <li key={item.name}>

                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="
                      text-lg
                      font-medium
                      text-slate-700
                      transition
                      hover:text-sky-700
                    "
                  >
                    {item.name}
                  </Link>

                </li>

              ))}


              <li className="flex gap-3 pt-4">

                {["hr","en","de"].map((lang) => (

                  <Link
                    key={lang}
                    href={switchLanguage(lang)}
                    onClick={() => setOpen(false)}
                    className={`
                      rounded-full
                      px-5
                      py-2
                      text-sm
                      font-semibold
                      uppercase
                      ${
                        locale === lang
                        ? "bg-sky-700 text-white"
                        : "bg-slate-100 text-slate-700"
                      }
                    `}
                  >
                    {lang}
                  </Link>

                ))}

              </li>


              <li>

                <Link
                  href={`/${locale}#rezervacija`}
                  onClick={() => setOpen(false)}
                  className="
                    mt-4
                    block
                    rounded-full
                    bg-sky-700
                    px-6
                    py-4
                    text-center
                    font-semibold
                    text-white
                  "
                >
                  {t("book")}
                </Link>

              </li>


            </ul>

          </nav>


        </div>

      )}

    </header>
  );
}