import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Tone = "default" | "surface" | "waves" | "maritime";

const toneClass: Record<Tone, string> = {
  default: "bg-background text-foreground",
  surface: "bg-steel-50 text-foreground",
  waves: "bg-waves text-foreground",
  maritime: "bg-maritime text-white",
};

export function Section({
  id,
  tone = "default",
  className,
  containerClassName,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 border-b border-border/60 py-16 sm:py-20 lg:py-24",
        toneClass[tone],
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
