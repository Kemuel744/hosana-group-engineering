import type { ReactNode } from "react";

import { Icon } from "./Icon";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  link,
  onDark = false,
  align = "left",
  as: Tag = "h2",
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Lien optionnel aligné à droite (« Voir toutes nos expertises → »). */
  link?: { href: React.ComponentProps<typeof Link>["href"]; label: string };
  onDark?: boolean;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
        align === "center" && "sm:flex-col sm:items-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "text-center")}>
        {eyebrow ? (
          <p className={cn("eyebrow", onDark && "on-dark", align === "center" && "justify-center")}>
            {eyebrow}
          </p>
        ) : null}
        <Tag
          className={cn(
            "mt-3 text-2xl uppercase sm:text-3xl lg:text-[2.125rem]",
            onDark ? "text-white" : "text-navy-900",
          )}
        >
          {title}
        </Tag>
        {subtitle ? (
          <p
            className={cn(
              "mt-3 text-[0.95rem] leading-relaxed sm:text-base",
              onDark ? "text-ink-200" : "text-ink-500",
            )}
          >
            {subtitle}
          </p>
        ) : null}
      </div>

      {link ? (
        <Link
          href={link.href}
          className={cn(
            "group inline-flex shrink-0 items-center gap-1.5 font-display text-sm font-semibold",
            onDark ? "text-brand-200 hover:text-white" : "text-brand-600 hover:text-brand-700",
          )}
        >
          {link.label}
          <Icon
            name="ArrowRight"
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      ) : null}
    </div>
  );
}
