import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/cn";

const controlClass =
  "mt-1.5 w-full rounded-sm border border-steel-300 bg-white px-3.5 py-2.5 text-sm text-navy-900 outline-none transition-colors placeholder:text-steel-400 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/30";

export function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-medium text-navy-900"
    >
      {children}
      {required ? <span className="ml-0.5 text-gold-600">*</span> : null}
    </label>
  );
}

export function Input({ className, ...props }: ComponentProps<"input">) {
  return <input className={cn(controlClass, className)} {...props} />;
}

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea className={cn(controlClass, "min-h-32", className)} {...props} />
  );
}

export function FieldRow({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("grid gap-4 sm:grid-cols-2", className)}>{children}</div>;
}

export function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: ReactNode;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      {children}
    </div>
  );
}
