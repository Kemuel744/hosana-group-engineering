import { getLocale } from "next-intl/server";

import { Icon } from "@/components/ui/Icon";
import { operationalStaff as staff } from "@/content/personnel";
import { t as tr } from "@/content/types";

/**
 * Bloc « Personnel d'exploitation » — affiché dans la section « Notre équipe »
 * de la page À propos (src/app/[locale]/a-propos/page.tsx).
 */
export async function OperationalStaff() {
  const locale = await getLocale();

  return (
    <div className="mt-14 border-t border-border pt-12">
      <h3 className="font-display text-xl uppercase text-navy-900">
        {tr(staff.heading, locale)}
      </h3>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-500">
        {tr(staff.intro, locale)}
      </p>

      {/* Effectifs par poste + total */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {staff.roles.map((role) => (
          <div
            key={role.label.fr}
            className="flex items-center gap-4 rounded-[var(--radius-card)] border border-border bg-surface p-5"
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy-800 text-brand-300">
              <Icon name={role.icon} className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-2xl font-bold leading-none text-navy-900">
                {role.count}
              </p>
              <p className="mt-1 text-[0.85rem] leading-snug text-ink-500">
                {tr(role.label, locale)}
              </p>
            </div>
          </div>
        ))}
        <div className="flex items-center gap-4 rounded-[var(--radius-card)] bg-brand-700 p-5 text-white">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white/10 text-brand-100">
            <Icon name="Users" className="h-5 w-5" />
          </span>
          <div>
            <p className="font-display text-2xl font-bold leading-none">
              {staff.total.count}
            </p>
            <p className="mt-1 text-[0.85rem] leading-snug text-brand-100">
              {tr(staff.total.label, locale)}
            </p>
          </div>
        </div>
      </div>

      {/* Organisation & méthodologie */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[var(--radius-card)] border border-border bg-surface p-6">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-navy-800 text-brand-300">
            <Icon name="Users" className="h-5 w-5" />
          </span>
          <h4 className="mt-4 text-base uppercase text-navy-900">
            {tr(staff.organisation.title, locale)}
          </h4>
          <p className="mt-2 leading-relaxed text-ink-500">
            {tr(staff.organisation.text, locale)}
          </p>
        </div>
        <div className="rounded-[var(--radius-card)] border border-border bg-surface p-6">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-navy-800 text-brand-300">
            <Icon name="Clock" className="h-5 w-5" />
          </span>
          <h4 className="mt-4 text-base uppercase text-navy-900">
            {tr(staff.method.title, locale)}
          </h4>
          <p className="mt-2 leading-relaxed text-ink-500">
            {tr(staff.method.text, locale)}
          </p>
        </div>
      </div>
    </div>
  );
}
