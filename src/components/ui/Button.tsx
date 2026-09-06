import type { ComponentProps, ReactNode } from "react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

type Variant = "primary" | "accent" | "outline" | "onDark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-btn)] font-display font-semibold leading-none transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  // Bouton principal du template : bleu marine plein
  primary:
    "bg-navy-800 text-white hover:bg-navy-700 focus-visible:outline-navy-800",
  // Accent bleu vif (« Découvrir nos expertises »)
  accent:
    "bg-brand-600 text-white hover:bg-brand-700 focus-visible:outline-brand-600",
  // Contour sur fond clair
  outline:
    "border border-navy-200 bg-transparent text-navy-800 hover:bg-navy-50 focus-visible:outline-navy-800",
  // Contour sur fond sombre / photo
  onDark:
    "border border-white/60 bg-transparent text-white hover:bg-white/15 focus-visible:outline-white",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[0.8125rem]",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-sm sm:text-[0.95rem]",
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

export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  ...rest
}: CommonProps & ComponentProps<typeof Link>) {
  return (
    <Link href={href} className={buttonClasses(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}

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
