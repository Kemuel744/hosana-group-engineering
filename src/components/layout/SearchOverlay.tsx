"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";

import { Link } from "@/i18n/navigation";
import { Icon } from "@/components/ui/Icon";
import { equipements } from "@/content/equipements";
import { allExpertises } from "@/content/expertises";
import { realisations } from "@/content/realisations";
import { t as tr } from "@/content/types";

type Entry = { href: string; title: string; kind: string; text: string };

export function SearchOverlay({ onClose }: { onClose: () => void }) {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const index = useMemo<Entry[]>(() => {
    const exp = allExpertises.map((e) => ({
      href: `/expertises/${e.slug}`,
      title: tr(e.title, locale),
      kind: t("expertises"),
      text: `${tr(e.title, locale)} ${tr(e.summary, locale)}`.toLowerCase(),
    }));
    const eq = equipements.map((e) => ({
      href: `/equipements#${e.slug}`,
      title: tr(e.name, locale),
      kind: t("equipment"),
      text: `${tr(e.name, locale)} ${tr(e.tagline, locale)}`.toLowerCase(),
    }));
    const rea = realisations.map((r) => ({
      href: "/realisations",
      title: tr(r.title, locale),
      kind: t("projects"),
      text: `${tr(r.title, locale)} ${tr(r.summary, locale)} ${tr(r.location, locale)}`.toLowerCase(),
    }));
    return [...exp, ...eq, ...rea];
  }, [locale, t]);

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (s.length < 2) return [];
    return index.filter((e) => e.text.includes(s)).slice(0, 8);
  }, [q, index]);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center bg-navy-950/70 px-4 pt-24 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={t("search")}
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-[var(--radius-card)] bg-background p-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-border pb-3">
          <Icon name="Search" className="h-5 w-5 text-ink-400" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="w-full bg-transparent text-base text-navy-900 outline-none placeholder:text-ink-400"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label={t("close")}
            className="text-ink-400 hover:text-navy-900"
          >
            <Icon name="X" className="h-5 w-5" />
          </button>
        </div>

        {q.trim().length >= 2 ? (
          results.length ? (
            <ul className="mt-2">
              {results.map((r) => (
                <li key={r.href + r.title}>
                  <Link
                    href={r.href}
                    onClick={onClose}
                    className="flex items-center justify-between gap-3 rounded-md px-3 py-2.5 text-sm hover:bg-surface"
                  >
                    <span className="text-navy-900">{r.title}</span>
                    <span className="shrink-0 text-xs uppercase tracking-wide text-ink-400">
                      {r.kind}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-3 py-6 text-center text-sm text-ink-500">
              {t("searchEmpty")}
            </p>
          )
        ) : (
          <p className="px-3 py-6 text-center text-sm text-ink-400">
            {t("searchHint")}
          </p>
        )}
      </div>
    </div>
  );
}
