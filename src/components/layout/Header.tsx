"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { Link, usePathname } from "@/i18n/navigation";
import { buttonClasses } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { t as tr } from "@/content/types";
import { cn } from "@/lib/cn";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { SearchOverlay } from "./SearchOverlay";
import { type NavChild, mainNav } from "./nav";

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open || search ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, search]);

  const closeMenu = () => {
    setOpen(false);
    setExpanded(null);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);

  const childLabel = (c: NavChild) =>
    c.i18n ? tr(c.i18n, locale) : t(c.key ?? "");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background shadow-[0_1px_0_rgba(15,26,51,0.04)]">
      <div className="container-hge flex h-[4.5rem] items-center justify-between gap-4 lg:h-20">
        <Link href="/" aria-label="HOSANA GROUP ENGINEERING — accueil" onClick={closeMenu}>
          <Logo />
        </Link>

        {/* Navigation bureau */}
        <nav className="hidden items-center xl:flex" aria-label="Navigation principale">
          {mainNav.map((item) => {
            const active = isActive(String(item.href));
            if (!item.children) {
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-2 font-display text-[0.9rem] font-medium text-ink-700 transition-colors hover:text-brand-600",
                    active && "text-brand-600",
                  )}
                >
                  {t(item.key)}
                  {active ? (
                    <span className="absolute inset-x-3.5 -bottom-[1.6rem] hidden h-0.5 bg-brand-600 lg:block" />
                  ) : null}
                </Link>
              );
            }
            return (
              <div key={item.key} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-3.5 py-2 font-display text-[0.9rem] font-medium text-ink-700 transition-colors hover:text-brand-600 group-hover:text-brand-600",
                    active && "text-brand-600",
                  )}
                >
                  {t(item.key)}
                  <Icon name="ChevronDown" className="h-3.5 w-3.5" />
                </Link>
                <div className="invisible absolute left-0 top-full z-10 min-w-56 translate-y-1 border border-border bg-background p-1.5 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block px-3 py-2 text-sm text-ink-600 transition-colors hover:bg-surface hover:text-brand-600"
                    >
                      {childLabel(c)}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setSearch(true)}
            aria-label={t("search")}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-ink-600 transition-colors hover:bg-surface hover:text-brand-600"
          >
            <Icon name="Search" className="h-[1.15rem] w-[1.15rem]" />
          </button>
          <Link
            href="/devis"
            className={cn(buttonClasses("primary", "sm"), "hidden sm:inline-flex")}
          >
            {t("quote")}
          </Link>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-navy-900 xl:hidden"
            aria-expanded={open}
            aria-label={open ? t("close") : t("openMenu")}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "X" : "Menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Panneau mobile */}
      {open ? (
        <div className="fixed inset-x-0 top-[4.5rem] bottom-0 z-40 overflow-y-auto bg-background xl:hidden">
          <nav className="container-hge flex flex-col py-3" aria-label="Navigation mobile">
            {mainNav.map((item) => {
              if (!item.children) {
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={closeMenu}
                    className={cn(
                      "border-b border-border py-4 font-display text-[1.05rem] font-medium text-ink-800",
                      isActive(String(item.href)) && "text-brand-600",
                    )}
                  >
                    {t(item.key)}
                  </Link>
                );
              }
              const isOpen = expanded === item.key;
              return (
                <div key={item.key} className="border-b border-border">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="py-4 font-display text-[1.05rem] font-medium text-ink-800"
                    >
                      {t(item.key)}
                    </Link>
                    <button
                      type="button"
                      aria-label={isOpen ? t("close") : t("openMenu")}
                      aria-expanded={isOpen}
                      onClick={() => setExpanded(isOpen ? null : item.key)}
                      className="p-3 text-ink-500"
                    >
                      <Icon
                        name="ChevronDown"
                        className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")}
                      />
                    </button>
                  </div>
                  {isOpen ? (
                    <div className="pb-3 pl-3">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          onClick={closeMenu}
                          className="block py-2.5 text-[0.95rem] text-ink-600"
                        >
                          {childLabel(c)}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}

            <Link
              href="/devis"
              onClick={closeMenu}
              className={cn(buttonClasses("primary", "lg"), "mt-6")}
            >
              {t("quote")}
            </Link>
            <div className="mt-6 flex items-center gap-4 text-navy-900">
              <LocaleSwitcher tone="light" />
            </div>
          </nav>
        </div>
      ) : null}

      {search ? <SearchOverlay onClose={() => setSearch(false)} /> : null}
    </header>
  );
}
