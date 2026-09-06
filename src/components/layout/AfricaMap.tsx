/**
 * Carte stylisée de l'Afrique avec le Congo mis en évidence.
 * Tracé simplifié (non géographiquement exact) — reprend l'esprit du template.
 * Remplaçable par un SVG cartographique précis si besoin.
 */
export function AfricaMap({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 220"
      className={className}
      role="img"
      aria-label="Zone d'intervention : Congo et Afrique centrale"
    >
      <path
        d="M44 20 L90 13 L128 20 L139 40 L171 86 L150 97 L141 121 L151 160 L138 187
           L120 201 L96 181 L88 151 L70 129 L60 121 L44 121 L24 104 L34 72 L40 44 Z"
        fill="var(--color-brand-200)"
        stroke="var(--color-brand-300)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Congo (approx. bassin central) */}
      <path
        d="M78 118 L100 114 L108 128 L100 146 L84 148 L76 134 Z"
        fill="var(--color-brand-600)"
      />
      <circle cx="92" cy="131" r="3.5" fill="#fff" />
      <circle cx="92" cy="131" r="7" fill="none" stroke="#fff" strokeOpacity="0.5" strokeWidth="1.5" />
    </svg>
  );
}
