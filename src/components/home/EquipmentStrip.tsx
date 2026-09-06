import { getTranslations } from "next-intl/server";

import { EquipmentCard } from "@/components/cards/EquipmentCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeEquipment } from "@/content/equipements";

export async function EquipmentStrip() {
  const t = await getTranslations("home");

  return (
    <Section tone="brand">
      <SectionHeading
        onDark
        title={t("equipmentTitle2")}
        subtitle={t("equipmentText2")}
        link={{ href: "/equipements", label: t("equipmentLink") }}
      />
      <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {homeEquipment.map((item) => (
          <EquipmentCard
            key={item.slug}
            item={item}
            href={`/equipements#${item.slug}`}
          />
        ))}
      </div>
    </Section>
  );
}
