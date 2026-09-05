import type { Metadata } from "next";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";

import { CtaBanner } from "@/components/blocks/CtaBanner";
import { PageHeader } from "@/components/blocks/PageHeader";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { t as tr } from "@/content/types";
import { atouts, valeurs } from "@/content/valeurs";
import { site } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("title"), description: t("intro") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const common = await getTranslations("common");
  const loc = (await getLocale()) as "fr" | "en";

  return (
    <>
      <PageHeader kicker={t("kicker")} title={t("title")} intro={t("intro")} />

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <p className="text-lg leading-relaxed text-steel-700 lg:col-span-2">
            {t("body")}
          </p>
          <dl className="space-y-4 border-l-2 border-gold-500 pl-6 text-sm">
            <div>
              <dt className="font-semibold uppercase tracking-widest text-navy-900">
                {common("address")}
              </dt>
              <dd className="mt-1 text-steel-600">
                {site.contact.address.line1}, {site.contact.address.line2}
                <br />
                {site.contact.address.city}, {site.contact.address.country}
              </dd>
            </div>
            <div>
              <dt className="font-semibold uppercase tracking-widest text-navy-900">
                {loc === "en" ? "Coverage" : "Zone d'intervention"}
              </dt>
              <dd className="mt-1 text-steel-600">{site.foundedRegion}</dd>
            </div>
            <div>
              <dt className="font-semibold uppercase tracking-widest text-navy-900">
                NIU
              </dt>
              <dd className="mt-1 text-steel-600">{site.legalId}</dd>
            </div>
          </dl>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="border border-border bg-background p-8">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-navy-900 text-ocean-300">
              <Icon name="Radar" className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-2xl text-navy-900">{t("visionTitle")}</h2>
            <p className="mt-3 leading-relaxed text-steel-600">{t("vision")}</p>
          </div>
          <div className="border border-border bg-background p-8">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-navy-900 text-ocean-300">
              <Icon name="Anchor" className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-2xl text-navy-900">{t("missionTitle")}</h2>
            <p className="mt-3 leading-relaxed text-steel-600">{t("mission")}</p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading title={t("teamTitle")}>{t("teamText")}</SectionHeading>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {atouts.map((a) => (
            <div
              key={a.fr}
              className="flex items-start gap-3 border border-border bg-background p-5 text-sm text-steel-700"
            >
              <Icon name="Check" className="mt-0.5 h-5 w-5 shrink-0 text-ocean-500" />
              {tr(a, locale)}
            </div>
          ))}
        </div>
      </Section>

      <Section tone="maritime">
        <SectionHeading title={t("strengthsTitle")} invert align="center" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {valeurs.map((v) => (
            <div key={v.icon} className="text-center">
              <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-ocean-200">
                <Icon name={v.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-sm text-white">{tr(v.title, locale)}</h3>
              <p className="mt-2 text-xs leading-relaxed text-steel-300">
                {tr(v.description, locale)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
