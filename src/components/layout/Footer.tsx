import { getLocale, getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { featuredExpertises } from "@/content/expertises";
import { t as tr } from "@/content/types";
import { site, whatsappLink } from "@/lib/site";
import { mainNav } from "./nav";

export async function Footer() {
  const locale = await getLocale();
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");
  const common = await getTranslations("common");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-steel-300">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">{t("tagline")}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-white">
              {t("nav")}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {mainNav.map((item) => (
                <li key={item.key}>
                  <Link href={item.href} className="hover:text-white">
                    {nav(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-white">
              {t("expertises")}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {featuredExpertises.map((e) => (
                <li key={e.slug}>
                  <Link href={`/expertises/${e.slug}`} className="hover:text-white">
                    {tr(e.title, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-white">
              {t("contact")}
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-2">
                <Icon name="MapPin" className="mt-0.5 h-4 w-4 shrink-0 text-ocean-400" />
                <span>
                  {site.contact.address.line1}, {site.contact.address.line2}
                  <br />
                  {site.contact.address.city}, {site.contact.address.country}
                </span>
              </li>
              {site.contact.phones.map((p) => (
                <li key={p} className="flex gap-2">
                  <Icon name="Phone" className="mt-0.5 h-4 w-4 shrink-0 text-ocean-400" />
                  <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-white">
                    {p}
                  </a>
                </li>
              ))}
              <li className="flex gap-2">
                <Icon name="MessageCircle" className="mt-0.5 h-4 w-4 shrink-0 text-ocean-400" />
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {common("whatsapp")} · {site.contact.whatsapp}
                </a>
              </li>
              <li className="flex gap-2">
                <Icon name="Mail" className="mt-0.5 h-4 w-4 shrink-0 text-ocean-400" />
                <a href={`mailto:${site.contact.email}`} className="hover:text-white">
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 rounded-sm border border-gold-700/40 bg-gold-500/5 px-4 py-3 text-xs text-gold-200">
          {t("disclaimer")}
        </p>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. {t("rights")}
          </p>
          <p className="text-steel-500">NIU {site.legalId}</p>
        </div>
      </Container>
    </footer>
  );
}
