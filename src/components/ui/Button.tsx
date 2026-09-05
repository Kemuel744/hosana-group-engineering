import type { ComponentProps, ReactNode } from "react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "onDark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm font-semibold uppercase tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-navy-950 hover:bg-gold-400 focus-visible:outline-gold-500",
  secondary:
    "bg-navy-800 text-white hover:bg-navy-700 focus-visible:outline-navy-800",
  ghost:
    "border border-navy-200 bg-transparent text-navy-800 hover:bg-navy-50 focus-visible:outline-navy-800",
  onDark:
    "border border-white/30 bg-white/5 text-white hover:bg-white/15 focus-visible:outline-white",
};

const sizes: Record<Size, string> = {
  sm: "px-3.5 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-sm sm:text-base",
};

export function buttonClasses(
  variant: Variant = "primary",
  size: Size = "md",
  className?: string,
) {
  return cn(base, variants[variant], sizes[size], className);
}

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

/** Lien interne conscient de la locale (next-intl). */
export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  ...rest
}: CommonProps & ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className={buttonClasses(variant, size, className)}
      {...rest}
    >
      {children}
    </Link>
  );
}

/** Lien externe (tel:, mailto:, https://). */
export function ButtonExternal({
  href,
  variant,
  size,
  className,
  children,
  ...rest
}: CommonProps & ComponentProps<"a">) {
  return (
    <a href={href} className={buttonClasses(variant, size, className)} {...rest}>
      {children}
    </a>
  );
}

export function Button({
  variant,
  size,
  className,
  children,
  ...rest
}: CommonProps & ComponentProps<"button">) {
  return (
    <button className={buttonClasses(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}
