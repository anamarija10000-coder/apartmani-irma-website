import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["hr", "en", "de"],
  defaultLocale: "hr",
  localePrefix: "always",
});

export const config = {
  matcher: [
    "/",
    "/(hr|en|de)/:path*",
  ],
};