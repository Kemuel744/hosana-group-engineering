import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { CtaBanner } from "@/components/blocks/CtaBanner";
import { PageHeader } from "@/components/blocks/PageHeader";
import { EquipmentCard } from "@/components/cards/EquipmentCard";
import { Section } from "@/components/ui/Section";
import { equipements } from "@/content/equipements";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "equipment" });
  return { title: t("title"), description: t("intro") };
}

export default async function EquipmentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("equipment");

  return (
    <>
      <PageHeader kicker={t("eyebrow")} title={t("title")} intro={t("intro")} />
      <Section tone="muted">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {equipements.map((item) => (
            <div key={item.slug} id={item.slug} className="scroll-mt-32">
              <EquipmentCard item={item} />
            </div>
          ))}
        </div>
        <p className="mt-8 border-l-2 border-brand-500 pl-4 text-sm text-ink-500">
          {t("specsNote")}
        </p>
      </Section>
      <CtaBanner />
    </>
  );
}
