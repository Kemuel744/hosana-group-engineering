import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageHeader } from "@/components/blocks/PageHeader";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { t as tr } from "@/content/types";
import { atouts } from "@/content/valeurs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "quote" });
  return { title: t("title"), description: t("intro") };
}

export default async function QuotePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("quote");

  return (
    <>
      <PageHeader kicker={t("kicker")} title={t("title")} intro={t("intro")} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_20rem]">
          <div className="max-w-2xl">
            <QuoteForm />
          </div>
          <aside className="h-fit border border-border bg-steel-50 p-6">
            <ul className="space-y-3 text-sm text-steel-700">
              {atouts.slice(0, 5).map((a) => (
                <li key={a.fr} className="flex items-start gap-2">
                  <Icon name="Check" className="mt-0.5 h-4 w-4 shrink-0 text-ocean-500" />
                  {tr(a, locale)}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}
