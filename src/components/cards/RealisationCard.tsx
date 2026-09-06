import { getLocale } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { Icon } from "@/components/ui/Icon";
import { MediaSlot } from "@/components/ui/MediaSlot";
import type { Realisation } from "@/content/types";
import { t } from "@/content/types";
import { cn } from "@/lib/cn";

export async function RealisationCard({
  item,
  className,
}: {
  item: Realisation;
  className?: string;
}) {
  const locale = await getLocale();
  return (
    <Link
      href="/realisations"
      className={cn(
        "group flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-background shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-lg",
        className,
      )}
    >
      <MediaSlot
        bare
        icon={item.icon}
        src={item.image}
        alt={t(item.title, locale)}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="aspect-[16/10]"
      >
        {!item.image ? (
          <div className="absolute inset-0 flex items-center justify-center text-white/30">
            <Icon name={item.icon} className="h-9 w-9" />
          </div>
        ) : null}
      </MediaSlot>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-base font-semibold text-navy-900">
          {t(item.title, locale)}
        </h3>
        <p className="flex items-center gap-1.5 text-[0.8rem] font-medium text-brand-600">
          <Icon name="MapPin" className="h-3.5 w-3.5" />
          {t(item.location, locale)}
        </p>
        <p className="text-[0.875rem] leading-snug text-ink-500">
          {t(item.summary, locale)}
        </p>
      </div>
    </Link>
  );
}
