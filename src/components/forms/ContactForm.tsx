"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import { buttonClasses } from "@/components/ui/Button";
import { Field, FieldRow, Input, Textarea } from "./Field";

export function ContactForm() {
  const t = useTranslations("contact");
  const common = useTranslations("common");
  const [sent, setSent] = useState(false);

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <FieldRow>
        <Field id="c-name" label={t("name")} required>
          <Input id="c-name" name="name" autoComplete="organization" required />
        </Field>
        <Field id="c-manager" label={t("manager")}>
          <Input id="c-manager" name="manager" autoComplete="name" />
        </Field>
      </FieldRow>
      <FieldRow>
        <Field id="c-email" label={t("email")} required>
          <Input id="c-email" type="email" name="email" autoComplete="email" required />
        </Field>
        <Field id="c-phone" label={t("phone")}>
          <Input id="c-phone" type="tel" name="phone" autoComplete="tel" />
        </Field>
      </FieldRow>
      <Field id="c-location" label={t("location")}>
        <Input id="c-location" name="location" />
      </Field>
      <Field id="c-message" label={t("message")} required>
        <Textarea id="c-message" name="message" required />
      </Field>

      {/* Anti-spam : honeypot (à compléter par un captcha type Turnstile côté serveur) */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <button type="submit" className={buttonClasses("secondary", "lg")}>
        {t("send")}
      </button>

      <p className="text-xs text-steel-400">{common("demoNote")}</p>

      {sent ? (
        <p
          role="status"
          className="rounded-sm border border-ocean-200 bg-ocean-50 px-4 py-3 text-sm text-ocean-800"
        >
          {common("formReceived")}
        </p>
      ) : null}
    </form>
  );
}
