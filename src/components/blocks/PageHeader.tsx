import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export function PageHeader({
  kicker,
  title,
  intro,
  children,
}: {
  kicker?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brandwash text-white">
      <Container className="py-14 sm:py-16 lg:py-20">
        {kicker ? <p className="eyebrow on-dark">{kicker}</p> : null}
        <h1
          className={cn(
            "max-w-4xl text-3xl uppercase sm:text-4xl lg:text-[2.75rem]",
            kicker && "mt-4",
          )}
        >
          {title}
        </h1>
        {intro ? (
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink-200 sm:text-lg">
            {intro}
          </p>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
