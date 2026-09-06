import { getLocale } from "next-intl/server";
import type { ReactNode } from "react";

import { Link } from "@/i18n/navigation";
import { Icon } from "@/components/ui/Icon";
import { MediaSlot } from "@/components/ui/MediaSlot";
import type { EquipmentItem } from "@/content/types";
import { t } from "@/content/types";
import { cn } from "@/lib/cn";

export async function EquipmentCard({
  item,
  href,
  className,
}: {
  item: EquipmentItem;
  href?: string;
  className?: string;
}) {
  const locale = await getLocale();

  const inner = (
    <>
      <MediaSlot
        bare
        icon={item.icon}
        src={item.image}
        alt={t(item.name, locale)}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="aspect-[16/10]"
      >
        {!item.image ? (
          <div className="absolute inset-0 flex items-center justify-center text-white/30">
            <Icon name={item.icon} className="h-9 w-9" />
          </div>
        ) : null}
      </MediaSlot>
      <div className="flex flex-1 items-start justify-between gap-3 p-5">
        <div>
          <h3 className="font-display text-[0.95rem] font-semibold text-navy-900">
            {t(item.name, locale)}
          </h3>
          <p className="mt-1.5 text-[0.85rem] leading-snug text-ink-500">
            {t(item.tagline, locale)}
          </p>
        </div>
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white transition-colors group-hover:bg-navy-800">
          <Icon name="ArrowRight" className="h-4 w-4" />
        </span>
      </div>
    </>
  );

  const shell = (children: ReactNode, extra?: string) => (
    <div
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-background shadow-sm ring-1 ring-black/5",
        extra,
        className,
      )}
    >
      {children}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {shell(inner, "transition-shadow hover:shadow-lg")}
      </Link>
    );
  }
  return shell(inner);
}
