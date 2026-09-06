import { getTranslations } from "next-intl/server";

import { RealisationCard } from "@/components/cards/RealisationCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { realisations } from "@/content/realisations";

export async function RealisationsPreview() {
  const t = await getTranslations("home");
  const common = await getTranslations("common");

  return (
    <Section tone="muted">
      <SectionHeading
        title={t("projectsTitle")}
        subtitle={t("projectsText")}
        link={{ href: "/realisations", label: common("allProjects") }}
      />
      <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {realisations.map((item) => (
          <RealisationCard key={item.slug} item={item} />
        ))}
      </div>
    </Section>
  );
}
