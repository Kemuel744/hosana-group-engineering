import Image from "next/image";
import type { ReactNode } from "react";

import { Icon } from "./Icon";
import { cn } from "@/lib/cn";

/**
 * Emplacement image.
 *
 * Tant qu'aucune photo réelle n'est fournie, affiche un aplat dégradé bleu
 * + trame + icône (aux dimensions exactes du template). Dès qu'une image est
 * disponible : passer `src` (fichier dans /public/media/…) — le rendu bascule
 * automatiquement sur <Image> optimisé.
 */
export function MediaSlot({
  icon = "Ship",
  label,
  src,
  alt,
  fill = true,
  bare = false,
  className,
  overlay,
  children,
}: {
  icon?: string;
  label?: string;
  src?: string;
  alt?: string;
  fill?: boolean;
  /** Masque l'icône/le libellé intégrés (le parent fournit son propre contenu). */
  bare?: boolean;
  className?: string;
  /** Voile sombre au-dessus de l'image (cartes à texte superposé). */
  overlay?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className={cn("media-slot", className)} data-media-slot>
      {src ? (
        <Image
          src={src}
          alt={alt ?? label ?? ""}
          fill={fill}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      ) : bare ? null : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/40">
          <Icon name={icon} className="h-8 w-8" />
          {label ? (
            <span className="px-3 text-center text-[0.7rem] font-medium uppercase tracking-wider">
              {label}
            </span>
          ) : null}
        </div>
      )}
      {overlay ? (
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/25 to-transparent" />
      ) : null}
      {children}
    </div>
  );
}
