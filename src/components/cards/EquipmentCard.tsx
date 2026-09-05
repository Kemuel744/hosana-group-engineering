import { getLocale, getTranslations } from "next-intl/server";

import { Icon } from "@/components/ui/Icon";
import type { EquipmentItem } from "@/content/types";
import { t } from "@/content/types";

export async function EquipmentCard({ item }: { item: EquipmentItem }) {
  const locale = await getLocale();
  const common = await getTranslations("common");

  return (
    <article className="flex flex-col border border-border bg-background">
      {/* Emplacement photo réelle — cf. cahier des charges §5 (photo réelle par équipement) */}
      <div className="flex aspect-[4/3] items-center justify-center bg-maritime text-ocean-200">
        <Icon name="Ship" className="h-10 w-10" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-ocean-600">
          {t(item.category, locale)}
        </p>
        <h3 className="text-lg text-navy-900">{t(item.name, locale)}</h3>
        <p className="text-sm leading-relaxed text-steel-600">
          {t(item.description, locale)}
        </p>
        <dl className="mt-1 space-y-1.5 border-t border-border pt-3 text-sm">
          {item.specs.map((spec, i) => (
            <div key={i} className="flex justify-between gap-4">
              <dt className="text-steel-500">{t(spec.label, locale)}</dt>
              <dd className="text-right font-medium text-navy-800">
                {t(spec.value, locale)}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-auto pt-2 text-xs italic text-steel-400">
          {common("toBeValidated")}
        </p>
      </div>
    </article>
  );
}
