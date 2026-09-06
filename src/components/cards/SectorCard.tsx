import { getLocale } from "next-intl/server";

import { Icon } from "@/components/ui/Icon";
import type { Sector } from "@/content/types";
import { t } from "@/content/types";

export async function SectorCard({ sector }: { sector: Sector }) {
  const locale = await getLocale();
  return (
    <div className="flex gap-4 border border-border bg-background p-6">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-brand-50 text-brand-600">
        <Icon name={sector.icon} className="h-5 w-5" />
      </span>
      <div>
        <h3 className="text-base text-navy-900">{t(sector.name, locale)}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
          {t(sector.description, locale)}
        </p>
      </div>
    </div>
  );
}
