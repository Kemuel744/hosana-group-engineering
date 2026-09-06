import { getTranslations } from "next-intl/server";

import { ExpertiseCard } from "@/components/cards/ExpertiseCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredExpertises } from "@/content/expertises";

export async function ExpertiseGrid() {
  const t = await getTranslations("home");
  const common = await getTranslations("common");

  return (
    <Section>
      <SectionHeading
        title={t("expertisesTitle2")}
        subtitle={t("expertisesText2")}
        link={{ href: "/expertises", label: common("allExpertises") }}
      />
      <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {featuredExpertises.map((e) => (
          <ExpertiseCard key={e.slug} expertise={e} />
        ))}
      </div>
    </Section>
  );
}
