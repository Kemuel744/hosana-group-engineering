import { getLocale } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { Icon } from "@/components/ui/Icon";
import type { Expertise } from "@/content/types";
import { t } from "@/content/types";
import { cn } from "@/lib/cn";

export async function ExpertiseCard({
  expertise,
  className,
}: {
  expertise: Expertise;
  className?: string;
}) {
  const locale = await getLocale();
  return (
    <Link
      href={`/expertises/${expertise.slug}`}
      className={cn(
        "group flex flex-col gap-4 border border-border bg-background p-6 transition-colors hover:border-ocean-400 hover:bg-steel-50",
        className,
      )}
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-navy-900 text-ocean-300">
        <Icon name={expertise.icon} className="h-6 w-6" />
      </span>
      <h3 className="text-lg text-navy-900">{t(expertise.title, locale)}</h3>
      <p className="text-sm leading-relaxed text-steel-600">
        {t(expertise.summary, locale)}
      </p>
      <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-ocean-600">
        {locale === "en" ? "Learn more" : "En savoir plus"}
        <Icon
          name="ArrowRight"
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
