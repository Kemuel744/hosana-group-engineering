import { getLocale } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { Icon } from "@/components/ui/Icon";
import { MediaSlot } from "@/components/ui/MediaSlot";
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
        "group relative block overflow-hidden rounded-[var(--radius-card)]",
        className,
      )}
    >
      <MediaSlot
        bare
        overlay
        src={expertise.image}
        alt={t(expertise.title, locale)}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        className="aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <span className="absolute left-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/15 text-white backdrop-blur-sm">
        <Icon name={expertise.icon} className="h-[1.15rem] w-[1.15rem]" />
      </span>
      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
        <h3 className="font-display text-[0.95rem] font-semibold leading-tight text-white">
          {t(expertise.title, locale)}
        </h3>
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white transition-colors group-hover:bg-white group-hover:text-brand-700">
          <Icon name="ArrowRight" className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
