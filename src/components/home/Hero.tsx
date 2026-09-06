import { getLocale, getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { buttonClasses } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { site } from "@/lib/site";

const statIcons = ["BarChart3", "Clock", "ShieldCheck", "Award"];

export async function Hero() {
  const locale = await getLocale();
  const t = await getTranslations("home");
  const nav = await getTranslations("nav");
  const common = await getTranslations("common");

  return (
    <section className="relative isolate flex min-h-[36rem] flex-col overflow-hidden bg-navy-900 text-white lg:min-h-[42rem]">
      {/* Image de fond — remplacer par une photo réelle de drague / port */}
      <MediaSlot
        bare
        className="absolute inset-0 -z-10"
        /* src="/media/hero-drague.jpg" alt="Drague aspiratrice en opération portuaire" */
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/92 via-navy-950/70 to-navy-950/30" />

      <Container className="flex flex-1 flex-col justify-center py-16 lg:py-24">
        <p className="eyebrow on-dark">{t("heroKicker")}</p>
        <h1 className="mt-5 max-w-3xl text-[2.25rem] uppercase leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
          <span className="block">{t("heroTitleLine1")}</span>
          <span className="block text-brand-300">{t("heroTitleLine2")}</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg">
          {t("heroText")}
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link href="/expertises" className={buttonClasses("accent", "lg")}>
            {common("discoverExpertises")}
            <Icon name="ArrowRight" className="h-4 w-4" />
          </Link>
          <Link href="/devis" className={buttonClasses("onDark", "lg")}>
            {nav("quote")}
            <Icon name="ArrowRight" className="h-4 w-4" />
          </Link>
        </div>
        <p className="mt-10 self-end text-right text-xs italic text-ink-300">
          {t("heroImageCaption")}
        </p>
      </Container>

      {/* Bandeau de confiance */}
      <div className="border-t border-white/10 bg-navy-950/55 backdrop-blur-sm">
        <Container className="grid grid-cols-2 gap-x-6 gap-y-6 py-6 lg:grid-cols-4">
          {site.stats.map((s, i) => (
            <div key={s.value} className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-300">
                <Icon name={statIcons[i]} className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-display text-xl font-bold leading-none">
                  {s.value}
                </span>
                <span className="mt-1 block text-[0.7rem] uppercase tracking-wide text-ink-300">
                  {locale === "en" ? s.labelEn : s.labelFr}
                </span>
              </span>
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}
