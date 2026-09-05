import { getTranslations, setRequestLocale } from "next-intl/server";

import { CtaBanner } from "@/components/blocks/CtaBanner";
import { EquipmentCard } from "@/components/cards/EquipmentCard";
import { ExpertiseCard } from "@/components/cards/ExpertiseCard";
import { SectorCard } from "@/components/cards/SectorCard";
import { buttonClasses } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { equipements } from "@/content/equipements";
import { expertises, featuredExpertises } from "@/content/expertises";
import { secteurs } from "@/content/secteurs";
import { t as tr } from "@/content/types";
import { clientsCibles } from "@/content/partenaires";
import { atouts, valeurs } from "@/content/valeurs";
import { Link } from "@/i18n/navigation";
import { site } from "@/lib/site";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const nav = await getTranslations("nav");
  const common = await getTranslations("common");

  return (
    <>
      {/* ------------------------------------------------------------- Hero */}
      <section className="bg-maritime text-white">
        <Container className="grid gap-10 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ocean-300">
              {t("heroKicker")}
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              {t("heroTitle")}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel-200">
              {t("heroText")}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/devis" className={buttonClasses("primary", "lg")}>
                {nav("quote")}
                <Icon name="ArrowRight" className="h-4 w-4" />
              </Link>
              <Link href="/expertises" className={buttonClasses("onDark", "lg")}>
                {common("discoverExpertises")}
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4 lg:border-l lg:border-white/15 lg:pl-8">
            <p className="font-display text-xl uppercase text-white/90">
              {site.signature[locale as "fr" | "en"] ?? site.signature.fr}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-steel-200">
              {atouts.slice(0, 4).map((a) => (
                <li key={a.fr} className="flex gap-2">
                  <Icon name="Check" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  {tr(a, locale)}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* --------------------------------------------------- Bande de confiance */}
      <section className="border-b border-border bg-navy-900 text-white">
        <Container className="grid grid-cols-2 gap-px overflow-hidden lg:grid-cols-4">
          {site.stats.map((s) => (
            <div key={s.value} className="bg-navy-900 px-4 py-8 text-center">
              <p className="font-display text-4xl text-gold-400 lg:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-steel-300">
                {locale === "en" ? s.labelEn : s.labelFr}
              </p>
            </div>
          ))}
        </Container>
        <Container className="pb-6">
          <p className="text-center text-xs italic text-steel-400">
            {common("toBeValidated")}
          </p>
        </Container>
      </section>

      {/* ------------------------------------------------------- Nos expertises */}
      <Section tone="surface">
        <SectionHeading kicker={t("expertisesKicker")} title={t("expertisesTitle")}>
          {t("expertisesText")}
        </SectionHeading>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredExpertises.map((e) => (
            <ExpertiseCard key={e.slug} expertise={e} />
          ))}
        </div>
        <div className="mt-8">
          <Link href="/expertises" className={buttonClasses("secondary", "md")}>
            {common("allExpertises")} ({expertises.length})
            <Icon name="ArrowRight" className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* ------------------------------------------------------ Nos équipements */}
      <Section>
        <SectionHeading kicker={t("equipmentKicker")} title={t("equipmentTitle")}>
          {t("equipmentText")}
        </SectionHeading>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {equipements.slice(0, 3).map((item) => (
            <EquipmentCard key={item.slug} item={item} />
          ))}
        </div>
        <div className="mt-8">
          <Link href="/equipements" className={buttonClasses("ghost", "md")}>
            {nav("equipment")}
            <Icon name="ArrowRight" className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* ------------------------------------------------ Pourquoi nous choisir */}
      <Section tone="maritime">
        <SectionHeading kicker={t("whyKicker")} title={t("whyTitle")} invert>
          {common("toBeValidated")}
        </SectionHeading>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {atouts.map((a) => (
            <li
              key={a.fr}
              className="flex items-start gap-3 border border-white/15 bg-white/5 p-5 text-sm text-steel-100"
            >
              <Icon name="Check" className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
              {tr(a, locale)}
            </li>
          ))}
        </ul>
      </Section>

      {/* --------------------------------------------------- Secteurs d'activité */}
      <Section tone="surface">
        <SectionHeading kicker={t("sectorsKicker")} title={t("sectorsTitle")} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {secteurs.map((s) => (
            <SectorCard key={s.slug} sector={s} />
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------- Nos valeurs */}
      <Section>
        <SectionHeading kicker={t("valuesKicker")} title={t("valuesTitle")} align="center" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {valeurs.map((v) => (
            <div key={v.icon} className="text-center">
              <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-ocean-300">
                <Icon name={v.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-sm text-navy-900">{tr(v.title, locale)}</h3>
              <p className="mt-2 text-xs leading-relaxed text-steel-500">
                {tr(v.description, locale)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------- Clients & partenaires */}
      <Section tone="surface">
        <SectionHeading title={t("partnersTitle")} align="center" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-steel-500">
          {t("partnersPlaceholder")}
        </p>
        <ul className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2.5">
          {clientsCibles.map((c) => (
            <li
              key={c.fr}
              className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-steel-600"
            >
              {tr(c, locale)}
            </li>
          ))}
        </ul>
      </Section>

      <CtaBanner />
    </>
  );
}
