import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { CtaBanner } from "@/components/blocks/CtaBanner";
import { PageHeader } from "@/components/blocks/PageHeader";
import { SectorCard } from "@/components/cards/SectorCard";
import { Section } from "@/components/ui/Section";
import { secteurs } from "@/content/secteurs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "sectors" });
  return { title: t("title"), description: t("intro") };
}

export default async function SectorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("sectors");

  return (
    <>
      <PageHeader kicker={t("kicker")} title={t("title")} intro={t("intro")} />
      <Section tone="surface">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {secteurs.map((s) => (
            <SectorCard key={s.slug} sector={s} />
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
