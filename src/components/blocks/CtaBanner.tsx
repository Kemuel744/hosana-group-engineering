import { getTranslations } from "next-intl/server";

import { buttonClasses } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Link } from "@/i18n/navigation";

export async function CtaBanner() {
  const t = await getTranslations("home");
  const nav = await getTranslations("nav");
  const common = await getTranslations("common");

  return (
    <section className="bg-maritime text-white">
      <Container className="flex flex-col items-start gap-6 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl text-white sm:text-4xl">{t("ctaTitle")}</h2>
          <p className="mt-3 text-steel-200">{t("ctaText")}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/devis" className={buttonClasses("primary", "lg")}>
            {nav("quote")}
            <Icon name="ArrowRight" className="h-4 w-4" />
          </Link>
          <Link href="/contact" className={buttonClasses("onDark", "lg")}>
            {common("contactCta")}
          </Link>
        </div>
      </Container>
    </section>
  );
}
