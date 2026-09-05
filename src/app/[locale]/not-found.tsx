import { getTranslations } from "next-intl/server";

import { buttonClasses } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const nav = await getTranslations("nav");

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-6xl text-navy-900">404</p>
      <p className="mt-4 max-w-md text-steel-600">
        Cette page est introuvable. / This page could not be found.
      </p>
      <Link href="/" className={buttonClasses("secondary", "md") + " mt-8"}>
        {nav("home")}
      </Link>
    </Container>
  );
}
