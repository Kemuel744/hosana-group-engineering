import type { Metadata } from "next";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { CtaBanner } from "@/components/blocks/CtaBanner";
import { PageHeader } from "@/components/blocks/PageHeader";
import { buttonClasses } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { expertises, getExpertise } from "@/content/expertises";
import { t as tr } from "@/content/types";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    expertises.map((e) => ({ locale, slug: e.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const expertise = getExpertise(slug);
  if (!expertise) return {};
  return {
    title: tr(expertise.title, locale),
    description: tr(expertise.summary, locale),
  };
}

export default async function ExpertiseDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const expertise = getExpertise(slug);
  if (!expertise) notFound();

  const loc = (await getLocale()) as "fr" | "en";
  const t = await getTranslations("expertises");
  const common = await getTranslations("common");
  const nav = await getTranslations("nav");

  return (
    <>
      <PageHeader
        kicker={
          <Link href="/expertises" className="hover:text-white">
            ← {common("backToExpertises")}
          </Link>
        }
        title={tr(expertise.title, loc)}
        intro={tr(expertise.summary, loc)}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading as="h2" title={t("detailIntro")} />
            <p className="mt-4 text-lg leading-relaxed text-steel-700">
              {tr(expertise.description, loc)}
            </p>

            <h3 className="mt-10 text-xl text-navy-900">{common("services")}</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {expertise.services.map((s, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 border border-border bg-steel-50 p-4 text-sm text-steel-700"
                >
                  <Icon name="ChevronRight" className="mt-0.5 h-4 w-4 shrink-0 text-ocean-500" />
                  {tr(s, loc)}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-1">
            <div className="border border-border bg-background p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-navy-900">
                {common("means")}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-steel-600">
                {expertise.means.map((m, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Icon name="Check" className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                    {tr(m, loc)}
                  </li>
                ))}
              </ul>
              <Link
                href="/equipements"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-ocean-600"
              >
                {nav("equipment")}
                <Icon name="ArrowRight" className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-5 bg-maritime p-6 text-white">
              <p className="text-sm text-steel-200">{t("relatedCta")}</p>
              <Link
                href="/devis"
                className={buttonClasses("primary", "md") + " mt-4 w-full"}
              >
                {nav("quote")}
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
