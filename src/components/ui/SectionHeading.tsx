import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export function SectionHeading({
  kicker,
  title,
  children,
  align = "left",
  invert = false,
  as: Tag = "h2",
  className,
}: {
  kicker?: ReactNode;
  title: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {kicker ? (
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-[0.18em]",
            invert ? "text-ocean-300" : "text-ocean-600",
          )}
        >
          {kicker}
        </p>
      ) : null}
      <Tag
        className={cn(
          "mt-3 text-3xl sm:text-4xl lg:text-[2.75rem]",
          invert ? "text-white" : "text-navy-900",
          align === "left" && "rule-gold",
          align === "center" &&
            "after:mx-auto after:content-[''] after:block after:mt-4 after:h-[3px] after:w-14 after:bg-gold-500",
        )}
      >
        {title}
      </Tag>
      {children ? (
        <div
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            invert ? "text-steel-200" : "text-steel-600",
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
