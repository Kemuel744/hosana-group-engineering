import { getTranslations } from "next-intl/server";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { authorizedPartners } from "@/content/partenaires";

export async function PartnersRow() {
  const t = await getTranslations("home");

  return (
    <section className="border-y border-border bg-background py-12">
      <Container>
        <div className="text-center">
          <h2 className="font-display text-lg font-bold uppercase text-navy-900">
            {t("partnersTitle")}
          </h2>
          <p className="mt-1.5 text-sm text-ink-500">{t("partnersText")}</p>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <Icon name="ChevronLeft" className="hidden h-5 w-5 shrink-0 text-ink-300 sm:block" />
          <ul className="flex flex-1 flex-wrap items-center justify-center gap-3">
            {authorizedPartners.map((p) => (
              <li
                key={p.name}
                className="flex h-14 items-center rounded-md border border-border bg-surface px-5 font-display text-sm font-semibold uppercase tracking-wide text-ink-500"
                title={p.name}
              >
                {p.name}
              </li>
            ))}
          </ul>
          <Icon name="ChevronRight" className="hidden h-5 w-5 shrink-0 text-ink-300 sm:block" />
        </div>
      </Container>
    </section>
  );
}
