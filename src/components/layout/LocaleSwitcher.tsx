"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/cn";

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
        "flex items-center gap-2 text-[0.8125rem] font-semibold",
        isPending && "opacity-60",
      )}
      role="group"
      aria-label="Langue"
    >
      {routing.locales.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 ? <span className="text-white/25">·</span> : null}
          <button
            type="button"
            onClick={() => switchTo(l)}
            aria-current={l === locale ? "true" : undefined}
            className={cn(
              "uppercase transition-colors",
              l === locale
                ? tone === "dark"
                  ? "text-white"
                  : "text-navy-900"
                : tone === "dark"
                  ? "text-ink-300 hover:text-white"
                  : "text-ink-400 hover:text-navy-900",
            )}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );
}
