import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";

/**
 * Next.js 16 a renommé `middleware` en `proxy`. next-intl fournit le handler
 * de routing i18n (détection de langue, réécriture des `pathnames` localisés,
 * redirections de locale).
 */
export const proxy = createMiddleware(routing);

export const config = {
  // Ignore les routes internes Next.js, l'API et les fichiers statiques.
  matcher: [
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
