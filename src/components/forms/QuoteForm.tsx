"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import { buttonClasses } from "@/components/ui/Button";
import { Field, FieldRow, Input, Textarea } from "./Field";

export function QuoteForm() {
  const t = useTranslations("quote");
  const common = useTranslations("common");
  const [sent, setSent] = useState(false);

  return (
    <form
      className="space-y-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <fieldset className="space-y-4">
        <legend className="font-display text-lg uppercase text-navy-900">
          {t("sectionCompany")}
        </legend>
        <FieldRow>
          <Field id="q-company" label={t("company")} required>
            <Input id="q-company" name="company" autoComplete="organization" required />
          </Field>
          <Field id="q-manager" label={t("manager")} required>
            <Input id="q-manager" name="manager" autoComplete="name" required />
          </Field>
        </FieldRow>
        <FieldRow>
          <Field id="q-role" label={t("role")}>
            <Input id="q-role" name="role" autoComplete="organization-title" />
          </Field>
          <Field id="q-email" label={t("email")} required>
            <Input id="q-email" type="email" name="email" autoComplete="email" required />
          </Field>
        </FieldRow>
        <FieldRow>
          <Field id="q-phone" label={t("phone")} required>
            <Input id="q-phone" type="tel" name="phone" autoComplete="tel" required />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field id="q-country" label={t("country")}>
              <Input id="q-country" name="country" autoComplete="country-name" />
            </Field>
            <Field id="q-city" label={t("city")}>
              <Input id="q-city" name="city" autoComplete="address-level2" />
            </Field>
          </div>
        </FieldRow>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-display text-lg uppercase text-navy-900">
          {t("sectionProject")}
        </legend>
        <Field id="q-type" label={t("projectType")} required>
          <Input
            id="q-type"
            name="projectType"
            placeholder={t("projectTypePlaceholder")}
            required
          />
        </Field>
        <Field id="q-description" label={t("description")} required>
          <Textarea id="q-description" name="description" required />
        </Field>
        <FieldRow>
          <Field id="q-volume" label={t("volume")}>
            <Input id="q-volume" name="volume" placeholder="m³" />
          </Field>
          <Field id="q-depth" label={t("depth")}>
            <Input id="q-depth" name="depth" placeholder="m" />
          </Field>
        </FieldRow>
        <Field id="q-start" label={t("startDate")}>
          <Input id="q-start" type="date" name="startDate" />
        </Field>
        <Field id="q-files" label={t("attachments")}>
          <Input
            id="q-files"
            type="file"
            name="attachments"
            multiple
            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx,.dwg"
            className="file:mr-3 file:rounded-sm file:border-0 file:bg-navy-800 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:uppercase file:text-white"
          />
        </Field>
      </fieldset>

      {/* Anti-spam : honeypot */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <label className="flex items-start gap-2.5 text-sm text-steel-600">
        <input type="checkbox" name="consent" required className="mt-1" />
        {t("consent")}
      </label>

      <button type="submit" className={buttonClasses("primary", "lg")}>
        {t("submit")}
      </button>

      <p className="text-xs text-steel-400">{t("backendNote")}</p>

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
