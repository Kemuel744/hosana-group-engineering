import { getTranslations } from "next-intl/server";

import { Icon } from "@/components/ui/Icon";
import { whatsappLink } from "@/lib/site";

/** Bouton WhatsApp flottant, visible sur toutes les pages (cahier des charges §12). */
export async function WhatsAppFloat() {
  const t = await getTranslations("common");
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsapp")}
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-navy-950/25 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <Icon name="MessageCircle" className="h-7 w-7" strokeWidth={2} />
    </a>
  );
}
