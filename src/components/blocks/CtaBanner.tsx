import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { buttonClasses } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

export async function CtaBanner() {
  const t = await getTranslations("home");
  const nav = await getTranslations("nav");
  const { phones, email } = site.contact;

  return (
    <section className="relative isolate overflow-hidden bg-brandwash text-white">
      <Container className="flex flex-col gap-8 py-14 lg:flex-row lg:items-center lg:justify-between lg:py-16">
        <div className="max-w-xl">
          <h2 className="text-2xl uppercase sm:text-3xl">{t("ctaTitle")}</h2>
          <p className="mt-3 text-ink-200">{t("ctaText")}</p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href={`tel:${phones[0].replace(/\s/g, "")}`}
              className="flex items-center gap-2 hover:text-white"
            >
              <Icon name="Phone" className="h-4 w-4 text-brand-300" />
              {phones[0]}
            </a>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 hover:text-white"
            >
              <Icon name="Mail" className="h-4 w-4 text-brand-300" />
              {email}
            </a>
          </div>
        </div>
        <Link
          href="/devis"
          className={cn(
            buttonClasses("primary", "lg"),
            "shrink-0 bg-white text-navy-900 hover:bg-ink-100",
          )}
        >
          {nav("quote")}
          <Icon name="ArrowRight" className="h-4 w-4" />
        </Link>
      </Container>
    </section>
  );
}
