import type { Metadata } from "next";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";

import { PageHeader } from "@/components/blocks/PageHeader";
import { Section } from "@/components/ui/Section";
import { allExpertises } from "@/content/expertises";
import { equipements } from "@/content/equipements";
import { t as tr } from "@/content/types";
import { Link } from "@/i18n/navigation";
import { mainNav } from "@/components/layout/nav";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return { title: t("sitemapTitle") };
}

export default async function SiteMapPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal");
  const nav = await getTranslations("nav");
  const loc = await getLocale();

  return (
    <>
      <PageHeader title={t("sitemapTitle")} />
      <Section>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="font-display text-sm font-semibold uppercase text-navy-900">
              {nav("home")}
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {mainNav
                .filter((i) => !i.children)
                .map((i) => (
                  <li key={i.key}>
                    <Link href={i.href} className="text-ink-600 hover:text-brand-600">
                      {nav(i.key)}
                    </Link>
                  </li>
                ))}
              <li>
                <Link href="/a-propos" className="text-ink-600 hover:text-brand-600">
                  {nav("about")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-sm font-semibold uppercase text-navy-900">
              {nav("expertises")}
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {allExpertises.map((e) => (
                <li key={e.slug}>
                  <Link
                    href={`/expertises/${e.slug}`}
                    className="text-ink-600 hover:text-brand-600"
                  >
                    {tr(e.title, loc)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-sm font-semibold uppercase text-navy-900">
              {nav("equipment")}
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {equipements.map((e) => (
                <li key={e.slug}>
                  <Link
                    href={`/equipements#${e.slug}`}
                    className="text-ink-600 hover:text-brand-600"
                  >
                    {tr(e.name, loc)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
