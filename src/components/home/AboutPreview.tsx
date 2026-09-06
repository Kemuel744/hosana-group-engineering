import { getLocale, getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { buttonClasses } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Section } from "@/components/ui/Section";
import { valeurs } from "@/content/valeurs";
import { t as tr } from "@/content/types";
import { site } from "@/lib/site";

export async function AboutPreview() {
  const locale = await getLocale();
  const t = await getTranslations("about");
  const home = await getTranslations("home");

  const pillars = [
    { icon: "Binoculars", title: t("visionTitle"), text: t("vision") },
    { icon: "Target", title: t("missionTitle"), text: t("mission") },
    {
      icon: "Users",
      title: t("valuesTitle"),
      text: valeurs.map((v) => tr(v.title, locale)).join(" · "),
    },
  ];

  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        {/* Colonne texte */}
        <div className="lg:col-span-4">
          <p className="eyebrow">{home("aboutEyebrow")}</p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-ink-400">
            {site.name}
          </p>
          <h2 className="mt-3 text-2xl normal-case leading-tight text-navy-900 sm:text-[1.75rem]">
            {home("aboutHeading")}
          </h2>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-500">
            {t("intro")} {t("body")}
          </p>
          <Link
            href="/a-propos"
            className={buttonClasses("primary", "md") + " mt-6"}
          >
            {home("aboutCta")}
            <Icon name="ArrowRight" className="h-4 w-4" />
          </Link>
        </div>

        {/* Colonne image */}
        <div className="lg:col-span-4">
          <MediaSlot
            bare
            src="/media/about-team.png"
            alt={
              locale === "en"
                ? "HOSANA Group Engineering technician on a port site"
                : "Technicien HOSANA Group Engineering sur un site portuaire"
            }
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="h-72 rounded-[var(--radius-card)] lg:h-full"
          />
        </div>

        {/* Colonne piliers */}
        <div className="space-y-4 lg:col-span-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="flex gap-4 rounded-[var(--radius-card)] border border-border bg-surface p-5"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy-800 text-brand-300">
                <Icon name={p.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-[0.95rem] font-semibold text-navy-900">
                  {p.title}
                </h3>
                <p className="mt-1 text-[0.85rem] leading-snug text-ink-500">
                  {p.text}
                </p>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-4 rounded-[var(--radius-card)] bg-brand-700 p-5 text-white">
            <Icon name="Waves" className="h-8 w-8 shrink-0 text-brand-200" />
            <p className="font-display text-sm font-medium leading-snug">
              {site.signature[locale === "en" ? "en" : "fr"]}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
