import type { MetadataRoute } from "next";

import { expertises } from "@/content/expertises";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { site } from "@/lib/site";

type StaticPath = Exclude<
  keyof typeof routing.pathnames,
  "/expertises/[slug]"
>;

const staticPaths: StaticPath[] = [
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

function url(path: string) {
  return new URL(path, site.url).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const pathname of staticPaths) {
    const languages: Record<string, string> = {};
    for (const locale of routing.locales) {
      languages[locale] = url(getPathname({ href: pathname, locale }));
    }
    entries.push({
      url: languages[routing.defaultLocale],
      changeFrequency: pathname === "/" ? "weekly" : "monthly",
      priority: pathname === "/" ? 1 : 0.7,
      alternates: { languages },
    });
  }

  for (const expertise of expertises) {
    const languages: Record<string, string> = {};
    for (const locale of routing.locales) {
      languages[locale] = url(
        getPathname({
          href: { pathname: "/expertises/[slug]", params: { slug: expertise.slug } },
          locale,
        }),
      );
    }
    entries.push({
      url: languages[routing.defaultLocale],
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: { languages },
    });
  }

  return entries;
}
