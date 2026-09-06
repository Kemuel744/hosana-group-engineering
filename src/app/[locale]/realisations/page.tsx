import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { CtaBanner } from "@/components/blocks/CtaBanner";
import { PageHeader } from "@/components/blocks/PageHeader";
import { RealisationCard } from "@/components/cards/RealisationCard";
import { Section } from "@/components/ui/Section";
import { realisations } from "@/content/realisations";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });
  return { title: t("title"), description: t("intro") };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("projects");
  const common = await getTranslations("common");

  return (
    <>
      <PageHeader kicker={t("eyebrow")} title={t("title")} intro={t("intro")} />
      <Section tone="muted">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {realisations.map((item) => (
            <RealisationCard key={item.slug} item={item} />
          ))}
        </div>
        <p className="mt-8 border-l-2 border-brand-500 pl-4 text-sm text-ink-500">
          {t("empty")} — {common("toBeValidated")}
        </p>
      </Section>
      <CtaBanner />
    </>
  );
}
