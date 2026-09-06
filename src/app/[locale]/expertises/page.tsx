import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { CtaBanner } from "@/components/blocks/CtaBanner";
import { PageHeader } from "@/components/blocks/PageHeader";
import { ExpertiseCard } from "@/components/cards/ExpertiseCard";
import { Section } from "@/components/ui/Section";
import { expertises } from "@/content/expertises";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "expertises" });
  return { title: t("title"), description: t("intro") };
}

export default async function ExpertisesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("expertises");

  return (
    <>
      <PageHeader kicker={t("eyebrow")} title={t("title")} intro={t("intro")} />
      <Section tone="muted">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expertises
            .slice()
            .sort((a, b) => a.order - b.order)
            .map((e) => (
              <ExpertiseCard key={e.slug} expertise={e} />
            ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
