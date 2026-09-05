import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";

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
    <section className="bg-maritime text-white">
      <Container className="py-14 sm:py-16 lg:py-20">
        {kicker ? (
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ocean-300">
            {kicker}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-4xl text-4xl sm:text-5xl">{title}</h1>
        {intro ? (
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-steel-200">
            {intro}
          </p>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
