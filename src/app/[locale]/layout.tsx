import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { Inter, Poppins } from "next/font/google";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { TopBar } from "@/components/layout/TopBar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { routing } from "@/i18n/routing";
import { site } from "@/lib/site";

import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "footer" });

  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${site.name} — ${site.taglines[locale as "fr" | "en"] ?? site.taglines.fr}`,
      template: `%s · ${site.name}`,
    },
    description:
      locale === "en"
        ? "HOSANA GROUP ENGINEERING — maritime, industrial and infrastructure engineering: dredging, underwater works, bathymetry, shipbuilding, port works, construction and industrial services in the Republic of Congo and Central Africa."
        : "HOSANA GROUP ENGINEERING — ingénierie maritime, industrielle et infrastructurelle : dragage, travaux sous-marins, bathymétrie, construction navale, travaux portuaires, BTP et services industriels en République du Congo et en Afrique centrale.",
    applicationName: site.name,
    alternates: {
      canonical: "/",
      languages: { fr: "/", en: "/en" },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: locale === "en" ? "en_US" : "fr_FR",
      title: site.name,
      description: t("tagline"),
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "common" });

  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable}`}>
      <body className="flex min-h-dvh flex-col bg-background text-foreground antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <a
            href="#contenu"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
          >
            {t("skipToContent")}
          </a>
          <TopBar />
          <Header />
          <main id="contenu" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppFloat />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
