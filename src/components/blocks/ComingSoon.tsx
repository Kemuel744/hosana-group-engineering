import { getTranslations } from "next-intl/server";

import { Icon } from "@/components/ui/Icon";

export async function ComingSoon({ message }: { message: string }) {
  const common = await getTranslations("common");
  return (
    <div className="flex flex-col items-center gap-4 border border-dashed border-border bg-ink-50 px-6 py-16 text-center">
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-brand-300">
        <Icon name="Construction" className="h-6 w-6" />
      </span>
      <p className="max-w-md text-ink-600">{message}</p>
      <p className="text-xs uppercase tracking-widest text-ink-400">
        {common("toBeValidated")}
      </p>
    </div>
  );
}
