"use client";

import { useEffect } from "react";
import Script from "next/script";
import { useTranslations } from "next-intl";
import { useCookieConsent } from "@/hooks/useCookieConsent";

export default function CookieBanner() {
  const { consent, accept, reject } = useCookieConsent();
  const t = useTranslations("cookies");

  useEffect(() => {
    if (consent === "accepted" && typeof window !== "undefined") {
      window.dispatchEvent(new Event("cookie-consent-accepted"));
    }
  }, [consent]);

  return (
    <>
      {consent === "accepted" && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-JNFCJF2ZD6"
            strategy="afterInteractive"
          />

          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];

              function gtag() {
                dataLayer.push(arguments);
              }

              window.gtag = gtag;

              gtag("consent", "default", {
                analytics_storage: "granted",
                ad_storage: "denied",
                ad_user_data: "denied",
                ad_personalization: "denied",
              });

              gtag("js", new Date());

              gtag("config", "G-JNFCJF2ZD6", {
                anonymize_ip: true,
              });
            `}
          </Script>
        </>
      )}

      {consent === null && (
        <div
          className="
            fixed
            bottom-6
            left-1/2
            z-50
            w-[95%]
            max-w-2xl
            -translate-x-1/2
            rounded-[32px]
            border
            border-white/40
            bg-white/95
            p-7
            shadow-[0_20px_60px_rgba(0,0,0,0.18)]
            backdrop-blur-xl
          "
        >
          <h3 className="text-xl font-bold text-slate-900">
            {t("title")}
          </h3>

          <p className="mt-3 text-[15px] leading-7 text-slate-600">
            {t("description")}
          </p>

          <div className="mt-7 flex flex-wrap justify-end gap-3">
            <button
              onClick={reject}
              className="
                rounded-full
                border
                border-slate-300
                px-6
                py-2.5
                font-medium
                text-slate-700
                transition
                hover:bg-slate-100
              "
            >
              {t("reject")}
            </button>

            <button
              onClick={accept}
              className="
                rounded-full
                bg-sky-600
                px-6
                py-2.5
                font-medium
                text-white
                transition
                hover:bg-sky-700
              "
            >
              {t("accept")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
