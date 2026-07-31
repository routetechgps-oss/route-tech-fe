import { ArrowRight, BarChart3, Check, Clock3, Headphones, Mail, MapPin, Menu, Navigation2, Phone, Radio, Route, ShieldCheck, Truck } from "lucide-react";

type IconName = "shield" | "signal" | "pin" | "clock" | "truck" | "check" | "phone" | "mail" | "arrow" | "route" | "headset" | "chart" | "menu";

export function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const icons = { shield: ShieldCheck, signal: Radio, pin: MapPin, clock: Clock3, truck: Truck, check: Check, phone: Phone, mail: Mail, arrow: ArrowRight, route: Route, headset: Headphones, chart: BarChart3, menu: Menu };
  const Glyph = icons[name] ?? Navigation2;
  return <Glyph size={size} strokeWidth={1.8} aria-hidden="true"/>;
}
