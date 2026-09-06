import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";
import { LocaleSwitcher } from "./LocaleSwitcher";

/** Barre utilitaire : coordonnées à gauche, langue + réseaux à droite. */
export function TopBar() {
  const { address, phones, email } = site.contact;
  return (
    <div className="hidden bg-navy-900 text-ink-200 lg:block">
      <div className="container-hge flex h-10 items-center justify-between text-[0.8125rem]">
        <ul className="flex items-center gap-6">
          <li className="flex items-center gap-1.5">
            <Icon name="MapPin" className="h-3.5 w-3.5 text-brand-300" />
            {address.country}, {address.city}
          </li>
          <li className="flex items-center gap-1.5">
            <Icon name="Phone" className="h-3.5 w-3.5 text-brand-300" />
            <a href={`tel:${phones[0].replace(/\s/g, "")}`} className="hover:text-white">
              {phones[0]}
            </a>
          </li>
          <li className="flex items-center gap-1.5">
            <Icon name="Mail" className="h-3.5 w-3.5 text-brand-300" />
            <a href={`mailto:${email}`} className="hover:text-white">
              {email}
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-5">
          <LocaleSwitcher />
          <span className="h-4 w-px bg-white/15" />
          <div className="flex items-center gap-3">
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white"
            >
              <Icon name="Linkedin" className="h-4 w-4" />
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white"
            >
              <Icon name="Facebook" className="h-4 w-4" />
            </a>
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-white"
            >
              <Icon name="Youtube" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
