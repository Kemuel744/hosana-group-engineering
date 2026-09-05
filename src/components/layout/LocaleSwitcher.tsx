"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/cn";

const labels: Record<string, string> = { fr: "FR", en: "EN" };

export function LocaleSwitcher({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: string) {
    if (next === locale) return;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- `params` transmet les segments dynamiques éventuels
        { pathname, params },
        { locale: next },
      );
    });
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-sm border text-xs font-semibold",
        tone === "dark" ? "border-white/25 text-white" : "border-navy-200 text-navy-800",
        isPending && "opacity-60",
      )}
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((l, i) => (
        <button
          key={l}
          type="button"
          onClick={() => switchTo(l)}
          aria-current={l === locale ? "true" : undefined}
          className={cn(
            "px-2.5 py-1.5 transition-colors",
            i > 0 && (tone === "dark" ? "border-l border-white/25" : "border-l border-navy-200"),
            l === locale
              ? tone === "dark"
                ? "bg-white/15"
                : "bg-navy-50"
              : "hover:opacity-80",
          )}
        >
          {labels[l] ?? l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
