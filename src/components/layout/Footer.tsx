import { getLocale, getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/lib/site";
import { AfricaMap } from "./AfricaMap";

const quickLinks = [
  { key: "home", href: "/" },
  { key: "about", href: "/a-propos" },
  { key: "expertises", href: "/expertises" },
  { key: "projects", href: "/realisations" },
  { key: "equipment", href: "/equipements" },
  { key: "news", href: "/actualites" },
  { key: "contact", href: "/contact" },
] as const;

const expertiseLinks: { fr: string; en: string; slug: string }[] = [
  { fr: "Maritime", en: "Maritime", slug: "ingenierie-maritime-construction-navale" },
  { fr: "Dragage", en: "Dredging", slug: "dragage-maritime-fluvial" },
  { fr: "Sous-marins", en: "Underwater", slug: "travaux-sous-marins-plongee" },
  { fr: "Offshore", en: "Offshore", slug: "services-offshore" },
  { fr: "BTP & Génie civil", en: "Building & civil", slug: "batiment-travaux-publics" },
  { fr: "Énergie solaire", en: "Solar energy", slug: "energie-solaire" },
  { fr: "NTIC & Cybersécurité", en: "IT & cybersecurity", slug: "ntic-cybersecurite" },
  { fr: "Maintenance industrielle", en: "Industrial maintenance", slug: "maintenance-mecanique-industrielle" },
];

export async function Footer() {
  const locale = await getLocale();
  const isEn = locale === "en";
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");
  const { address, phones, email } = site.contact;

  return (
    <footer className="bg-navy-900 text-ink-300">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-12 lg:py-16">
        <div className="lg:col-span-3">
          <Logo tone="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            {isEn
              ? "Engineering at the service of your ambitions."
              : "L'expertise au service de vos ambitions."}
          </p>
        </div>

        <div className="lg:col-span-2">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            {t("quickLinks")}
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.key}>
                <Link href={l.href} className="hover:text-white">
                  {nav(l.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            {nav("expertises")}
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {expertiseLinks.map((l) => (
              <li key={l.slug}>
                <Link href={`/expertises/${l.slug}`} className="hover:text-white">
                  {isEn ? l.en : l.fr}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            {nav("contact")}
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2">
              <Icon name="MapPin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
              <span>
                {address.line1}, {address.line2}
                <br />
                {address.city}
              </span>
            </li>
            <li className="flex gap-2">
              <Icon name="Phone" className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
              <a href={`tel:${phones[0].replace(/\s/g, "")}`} className="hover:text-white">
                {phones[0]}
              </a>
            </li>
            <li className="flex gap-2">
              <Icon name="Mail" className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
              <a href={`mailto:${email}`} className="hover:text-white">
                {email}
              </a>
            </li>
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ink-300 hover:text-white">
              <Icon name="Linkedin" className="h-4 w-4" />
            </a>
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-ink-300 hover:text-white">
              <Icon name="Facebook" className="h-4 w-4" />
            </a>
            <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-ink-300 hover:text-white">
              <Icon name="Youtube" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <AfricaMap className="w-28 text-brand-300" />
          <p className="mt-3 font-display text-sm font-semibold text-white">
            {isEn ? "Our operating area" : "Notre zone d'intervention"}
          </p>
          <p className="text-sm">{site.foundedRegion}</p>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {t("rights")}
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1 text-ink-400">
            <Link href="/mentions-legales" className="hover:text-white">
              {t("legal")}
            </Link>
            <Link href="/confidentialite" className="hover:text-white">
              {t("privacy")}
            </Link>
            <Link href="/plan-du-site" className="hover:text-white">
              {t("sitemap")}
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  );
}
