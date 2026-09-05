import {
  Anchor,
  ArrowRight,
  Award,
  Building2,
  Check,
  ChevronRight,
  Construction,
  Flame,
  Globe,
  Handshake,
  LifeBuoy,
  Lightbulb,
  Landmark,
  type LucideIcon,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  Radar,
  Sailboat,
  ShieldCheck,
  Ship,
  Star,
  SunMedium,
  Truck,
  Users,
  Waves,
  Wrench,
  X,
} from "lucide-react";

/** Icônes référencées par clé depuis la couche de contenu et l'UI. */
const icons = {
  Anchor,
  ArrowRight,
  Award,
  Building2,
  Check,
  ChevronRight,
  Construction,
  Flame,
  Globe,
  Handshake,
  Landmark,
  LifeBuoy,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  Radar,
  Sailboat,
  ShieldCheck,
  Ship,
  Star,
  SunMedium,
  Truck,
  Users,
  Waves,
  Wrench,
  X,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = icons[name as IconName] ?? Ship;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden />;
}
