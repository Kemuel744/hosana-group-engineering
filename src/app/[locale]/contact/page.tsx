import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageHeader } from "@/components/blocks/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { site, whatsappLink } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("title"), description: t("intro") };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const common = await getTranslations("common");
  const { address, phones, email, whatsapp, geo } = site.contact;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${geo.lng - 0.05}%2C${geo.lat - 0.05}%2C${geo.lng + 0.05}%2C${geo.lat + 0.05}&layer=mapnik&marker=${geo.lat}%2C${geo.lng}`;

  return (
    <>
      <PageHeader kicker={t("kicker")} title={t("title")} intro={t("intro")} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-xl uppercase text-navy-900">
              {t("formTitle")}
            </h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <Icon name="MapPin" className="mt-0.5 h-5 w-5 shrink-0 text-ocean-600" />
                <span className="text-steel-700">
                  {address.line1}, {address.line2}
                  <br />
                  {address.city}, {address.country}
                </span>
              </li>
              {phones.map((p) => (
                <li key={p} className="flex gap-3">
                  <Icon name="Phone" className="mt-0.5 h-5 w-5 shrink-0 text-ocean-600" />
                  <a href={`tel:${p.replace(/\s/g, "")}`} className="text-steel-700 hover:text-navy-900">
                    {p}
                  </a>
                </li>
              ))}
              <li className="flex gap-3">
                <Icon name="MessageCircle" className="mt-0.5 h-5 w-5 shrink-0 text-ocean-600" />
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-steel-700 hover:text-navy-900"
                >
                  {common("whatsapp")} · {whatsapp}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="Mail" className="mt-0.5 h-5 w-5 shrink-0 text-ocean-600" />
                <a href={`mailto:${email}`} className="text-steel-700 hover:text-navy-900">
                  {email}
                </a>
              </li>
            </ul>

            <div>
              <h2 className="font-display text-xl uppercase text-navy-900">
                {t("mapTitle")}
              </h2>
              <iframe
                title={t("mapTitle")}
                src={mapSrc}
                loading="lazy"
                className="mt-4 aspect-[4/3] w-full border border-border"
              />
              <p className="mt-2 text-xs text-steel-400">{common("toBeValidated")}</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
