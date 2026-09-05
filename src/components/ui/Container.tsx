import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

export function Container({
  as: Tag = "div",
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return <Tag className={cn("container-hge", className)}>{children}</Tag>;
}
