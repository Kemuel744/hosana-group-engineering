import type { MetadataRoute } from "next";

import { expertises } from "@/content/expertises";
import { getPathname } from "@/i18n/navigation";
import { type AppPathname, routing } from "@/i18n/routing";
import { site } from "@/lib/site";

const staticPaths: Exclude<AppPathname, "/expertises/[slug]">[] = [
  "/",
  "/a-propos",
  "/expertises",
  "/equipements",
  "/realisations",
  "/secteurs",
  "/documentation",
  "/actualites",
  "/contact",
  "/devis",
];

function abs(path: string) {
  return new URL(path, site.url).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...expertises.map((e) => `/expertises/${e.slug}`),
  ];

  return paths.map((href) => {
    const languages: Record<string, string> = {};
    for (const locale of routing.locales) {
      languages[locale] = abs(getPathname({ href, locale }));
    }
    return {
      url: languages[routing.defaultLocale],
      changeFrequency: href === "/" ? "weekly" : "monthly",
      priority: href === "/" ? 1 : href.startsWith("/expertises/") ? 0.6 : 0.7,
      alternates: { languages },
    };
  });
}
