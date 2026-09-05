"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import { buttonClasses } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { mainNav } from "./nav";

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors",
        scrolled
          ? "border-white/10 bg-navy-950/95 backdrop-blur"
          : "border-transparent bg-navy-950",
      )}
    >
      <div className="container-hge flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link href="/" aria-label="HOSANA GROUP ENGINEERING — accueil">
          <Logo tone="light" />
        </Link>

        <nav
          className="hidden items-center gap-1 xl:flex"
          aria-label="Navigation principale"
        >
          {mainNav.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={cn(
                "rounded-sm px-3 py-2 text-sm font-medium text-steel-200 transition-colors hover:text-white",
                isActive(item.href) && "text-white",
              )}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LocaleSwitcher tone="dark" />
          </div>
          <Link
            href="/devis"
            className={cn(buttonClasses("primary", "sm"), "hidden sm:inline-flex")}
          >
            {t("quote")}
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-sm p-2 text-white xl:hidden"
            aria-expanded={open}
            aria-label={open ? t("close") : t("openMenu")}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "X" : "Menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-navy-950 xl:hidden">
          <nav className="container-hge flex flex-col py-4" aria-label="Navigation mobile">
            {mainNav.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={closeMenu}
                className={cn(
                  "border-b border-white/10 py-4 text-lg font-medium text-steel-100",
                  isActive(item.href) && "text-white",
                )}
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              href="/devis"
              onClick={closeMenu}
              className={cn(buttonClasses("primary", "lg"), "mt-6")}
            >
              {t("quote")}
            </Link>
            <div className="mt-6">
              <LocaleSwitcher tone="dark" />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
