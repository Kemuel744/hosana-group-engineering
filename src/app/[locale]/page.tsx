import { setRequestLocale } from "next-intl/server";

import { CtaBanner } from "@/components/blocks/CtaBanner";
import { AboutPreview } from "@/components/home/AboutPreview";
import { EquipmentStrip } from "@/components/home/EquipmentStrip";
import { ExpertiseGrid } from "@/components/home/ExpertiseGrid";
import { Hero } from "@/components/home/Hero";
import { PartnersRow } from "@/components/home/PartnersRow";
import { RealisationsPreview } from "@/components/home/RealisationsPreview";
import { VideoShowcase } from "@/components/home/VideoShowcase";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <AboutPreview />
      <ExpertiseGrid />
      <EquipmentStrip />
      <VideoShowcase />
      <RealisationsPreview />
      <PartnersRow />
      <CtaBanner />
    </>
  );
}
