import { cn } from "@/lib/cn";

/**
 * Marque HOSANA GROUP ENGINEERING : emblème maritime + logotype.
 * L'emblème est un SVG autonome (dégradé bleu, vague, bulles) qui reprend
 * l'univers du logo fourni sans en copier le tracé exact.
 * Le logo original reste disponible dans /public/brand/ pour l'impression et l'OG.
 */
export function Logo({
  tone = "dark",
  className,
  showWordmark = true,
}: {
  tone?: "dark" | "light";
  className?: string;
  showWordmark?: boolean;
}) {
  const onLight = tone === "dark";
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 48 48"
        className="h-9 w-9 shrink-0"
        role="img"
        aria-label="HOSANA GROUP ENGINEERING"
      >
        <defs>
          <linearGradient id="hge-emblem" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#33a0de" />
            <stop offset="1" stopColor="#0a1c37" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="22" fill="url(#hge-emblem)" />
        <path
          d="M6 30c4 0 4-3 8-3s4 3 8 3 4-3 8-3 4 3 8 3 4-3 6-3"
          fill="none"
          stroke="#fff"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M9 37c4 0 5-2 9-2s5 2 9 2 5-2 9-2 4 1 6 1"
          fill="none"
          stroke="#fff"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="17" cy="15" r="2" fill="#fff" />
        <circle cx="22" cy="11" r="1.4" fill="#fff" fillOpacity="0.8" />
        <circle cx="26" cy="8.5" r="1" fill="#fff" fillOpacity="0.6" />
      </svg>
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-lg font-extrabold tracking-wide",
              onLight ? "text-navy-900" : "text-white",
            )}
          >
            HOSANA
          </span>
          <span
            className={cn(
              "text-[0.62rem] font-semibold uppercase tracking-[0.22em]",
              onLight ? "text-brand-600" : "text-brand-300",
            )}
          >
            Group Engineering
          </span>
        </span>
      ) : null}
    </span>
  );
}
