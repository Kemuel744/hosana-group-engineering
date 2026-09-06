import { getTranslations } from "next-intl/server";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Section vidéo de la page d'accueil (cahier des charges §15).
 * Lecture à la demande (pas d'autoplay) — contexte réseau contraint.
 * Ajouter d'autres extraits en étendant le tableau `clips`.
 */
const clips = [
  {
    src: "/media/video/navire-deplace-1.mp4",
    poster: "/media/equipements/drague-aspiratrice.jpg",
  },
];

export async function VideoShowcase() {
  const t = await getTranslations("home");
  const clip = clips[0];

  return (
    <Section>
      <SectionHeading
        eyebrow={t("videoEyebrow")}
        title={t("videoTitle")}
        subtitle={t("videoText")}
      />
      <div className="mt-9 overflow-hidden rounded-[var(--radius-card)] bg-navy-950 shadow-sm ring-1 ring-black/5">
        <video
          className="aspect-video w-full"
          controls
          preload="none"
          playsInline
          poster={clip.poster}
        >
          <source src={clip.src} type="video/mp4" />
          {t("videoUnsupported")}
        </video>
      </div>
    </Section>
  );
}
