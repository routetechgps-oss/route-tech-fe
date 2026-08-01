import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  CircleGauge,
  ClipboardList,
  Headphones,
  MapPin,
  MapPinned,
  MonitorSmartphone,
  Navigation,
  PackageCheck,
  Phone,
  Radio,
  Route,
  Satellite,
  ShieldCheck,
  Truck,
  Warehouse,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mining GPS in Bihar | Tipper & Heavy Fleet Tracking",
  description:
    "Install mining GPS in Bihar for tippers, dumpers, excavators and contractor fleets. Get live location, geofence alerts, route history and local support across all 38 districts.",
  keywords: [
    "mining GPS Bihar",
    "tipper GPS Bihar",
    "dumper GPS tracking Bihar",
    "heavy fleet GPS Bihar",
    "quarry vehicle tracking",
    "mining truck geofence Bihar",
    "excavator GPS tracking Bihar",
    "mining GPS Patna",
  ],
  alternates: { canonical: "/services/mining-gps" },
  openGraph: {
    title: "Mining GPS in Bihar | Route Tech",
    description:
      "Live location, geofence alerts and route history for mining and heavy fleets across all 38 districts of Bihar.",
    url: "/services/mining-gps",
    type: "website",
    images: [
      {
        url: "/images/route-tech/mining-gps-hero-bihar.jpg",
        width: 2200,
        height: 1238,
        alt: "Mining tipper, excavator and GPS tracking device in Bihar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mining GPS in Bihar | Route Tech",
    description: "Rugged GPS tracking for tippers, dumpers and heavy fleets across Bihar.",
    images: ["/images/route-tech/mining-gps-hero-bihar.jpg"],
  },
  other: { "geo.region": "IN-BR", "geo.placename": "Bihar" },
};

const features: Array<{ icon: LucideIcon; title: string; text: string; tone: "blue" | "orange" }> = [
  {
    icon: MapPin,
    title: "Live fleet location",
    text: "See every tipper, dumper and machine on one clear live map.",
    tone: "blue",
  },
  {
    icon: MapPinned,
    title: "Zone geofence alerts",
    text: "Know when a vehicle enters or leaves your mine, quarry or work zone.",
    tone: "orange",
  },
  {
    icon: Route,
    title: "Trip and route history",
    text: "Review completed routes and material runs for every vehicle.",
    tone: "blue",
  },
  {
    icon: Activity,
    title: "Movement and idle alerts",
    text: "Spot long stops, unexpected movement and idle vehicles quickly.",
    tone: "orange",
  },
  {
    icon: CircleGauge,
    title: "Speed monitoring",
    text: "See overspeed events and encourage safer driving on difficult roads.",
    tone: "blue",
  },
  {
    icon: MonitorSmartphone,
    title: "One fleet dashboard",
    text: "Track your complete operation from mobile or computer, day and night.",
    tone: "orange",
  },
];

const reasons: Array<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: ShieldCheck, title: "Rugged hardware", text: "GPS devices selected for dust, vibration and heavy daily use." },
  { icon: Wrench, title: "Fast installation", text: "Professional fitment planned around your vehicle schedule." },
  { icon: MapPin, title: "Bihar-wide service", text: "Installation support coordinated across all 38 districts." },
  { icon: Headphones, title: "Local support", text: "A Bihar-based team for tracking and fitment questions." },
  { icon: BadgeCheck, title: "After-sales help", text: "Clear onboarding and dependable support after installation." },
];

const fleetTypes: Array<{
  image: string;
  alt: string;
  icon: LucideIcon;
  title: string;
  text: string;
}> = [
  {
    image: "/images/route-tech/mining-gps-fleet-tipper.jpg",
    alt: "Orange mining tipper using GPS tracking in a Bihar quarry",
    icon: Truck,
    title: "Tippers",
    text: "Track material trips and routes",
  },
  {
    image: "/images/route-tech/mining-gps-fleet-dumper.jpg",
    alt: "Articulated dumper using mining GPS at a work site",
    icon: PackageCheck,
    title: "Heavy dumpers",
    text: "Monitor movement inside work zones",
  },
  {
    image: "/images/route-tech/mining-gps-fleet-excavator.jpg",
    alt: "Excavator fitted with GPS monitoring at a mining site",
    icon: Radio,
    title: "Excavators",
    text: "See machine location and activity",
  },
  {
    image: "/images/route-tech/mining-gps-fleet-loader.jpg",
    alt: "Wheel loader using GPS monitoring in a stone quarry",
    icon: Warehouse,
    title: "Wheel loaders",
    text: "Keep site machines visible",
  },
  {
    image: "/images/route-tech/mining-gps-fleet-contractor-truck.jpg",
    alt: "Contractor material truck using GPS tracking in Bihar",
    icon: Navigation,
    title: "Contractor trucks",
    text: "Manage hired vehicles and deliveries",
  },
];

const steps: Array<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: ClipboardList, title: "Share fleet details", text: "Tell us your vehicle types, sites and district." },
  { icon: Wrench, title: "Install the GPS", text: "Our technician fits rugged devices in your vehicles." },
  { icon: MapPinned, title: "Set zones and alerts", text: "We configure work areas and important notifications." },
  { icon: MonitorSmartphone, title: "Track the fleet", text: "Your vehicles become visible on mobile and computer." },
];

const faq = [
  {
    q: "What is mining GPS tracking?",
    a: "Mining GPS tracking shows the live location, movement and route history of tippers, dumpers and other heavy vehicles used at mines, quarries and material-transport sites.",
  },
  {
    q: "Can I track all vehicles from one phone?",
    a: "Yes. Your authorised team can view multiple vehicles together from a mobile or computer dashboard.",
  },
  {
    q: "Can I create a geofence around my mine or quarry?",
    a: "Yes. Route Tech can configure work-zone geofences and alerts when a tracked vehicle enters or leaves the selected area.",
  },
  {
    q: "Is the GPS device suitable for mining conditions?",
    a: "We select rugged GPS hardware for the dust, vibration and heavy use common in mining and material-transport operations.",
  },
  {
    q: "Which mining vehicles can use this GPS?",
    a: "Common vehicles include tippers, dumpers, excavators, wheel loaders, contractor trucks and other heavy fleet vehicles.",
  },
  {
    q: "Do you install mining GPS across Bihar?",
    a: "Yes. Route Tech coordinates mining GPS installation and support across all 38 districts of Bihar.",
  },
];

function IconBadge({
  icon: Icon,
  tone = "blue",
  size = "md",
}: {
  icon: LucideIcon;
  tone?: "blue" | "orange";
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "h-11 w-11 [&_svg]:h-5 [&_svg]:w-5",
    md: "h-14 w-14 [&_svg]:h-7 [&_svg]:w-7",
    lg: "h-[72px] w-[72px] [&_svg]:h-9 [&_svg]:w-9",
  };

  return (
    <span
      className={`relative grid shrink-0 place-items-center rounded-2xl border ${
        tone === "orange"
          ? "border-orange-200 bg-orange-50 text-route-orange"
          : "border-blue-200 bg-blue-50 text-route-blue"
      } ${sizes[size]}`}
    >
      <span
        aria-hidden="true"
        className={`absolute right-2 top-2 h-2 w-2 rounded-full ${
          tone === "orange" ? "bg-route-blue" : "bg-route-orange"
        }`}
      />
      <Icon strokeWidth={2} />
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <header className="mx-auto mb-9 max-w-[780px] text-center sm:mb-11">
      <span className="mb-3 inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-[.16em] text-route-orange">
        <span className="h-2 w-2 rounded-full bg-route-blue" />
        {eyebrow}
      </span>
      <h2 className="mb-3 text-[32px] font-black leading-[1.08] tracking-[-.04em] text-route-ink sm:text-[46px]">
        {title}
      </h2>
      {text ? <p className="m-0 text-[15px] font-semibold leading-7 text-slate-600 sm:text-[16px]">{text}</p> : null}
    </header>
  );
}

export default function MiningGpsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Mining GPS in Bihar",
        serviceType: "Mining and heavy-fleet GPS tracking and installation",
        description: metadata.description,
        areaServed: { "@type": "State", name: "Bihar" },
        provider: {
          "@type": "LocalBusiness",
          name: "Route Tech",
          url: "https://www.routetechgps.com",
          telephone: ["+91-84095-39047", "+91-89359-89871"],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.routetechgps.com" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.routetechgps.com/services" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Mining GPS in Bihar",
            item: "https://www.routetechgps.com/services/mining-gps",
          },
        ],
      },
    ],
  };

  const heroBenefits: Array<{ label: string; icon: LucideIcon }> = [
    { label: "Rugged devices", icon: ShieldCheck },
    { label: "Zone alerts", icon: MapPinned },
    { label: "Route history", icon: Route },
    { label: "24x7 dashboard", icon: MonitorSmartphone },
  ];

  return (
    <>
      <section className="relative isolate min-h-[660px] overflow-hidden bg-white">
        <Image
          src="/images/route-tech/mining-gps-hero-bihar.jpg"
          alt="Mining GPS tracking for a tipper, excavator and heavy fleet in Bihar"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.98)_0%,rgba(255,255,255,.95)_37%,rgba(255,255,255,.38)_59%,rgba(255,255,255,0)_82%)] max-lg:bg-[linear-gradient(90deg,rgba(255,255,255,.97)_0%,rgba(255,255,255,.92)_56%,rgba(255,255,255,.48)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[660px] w-[calc(100%_-_32px)] max-w-[1180px] items-center py-14 sm:w-[calc(100%_-_40px)]">
          <div className="max-w-[650px]">
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-[11px] font-black uppercase tracking-[.12em] text-route-blue shadow-sm backdrop-blur">
                <Truck size={16} /> Mining fleet GPS partner
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/90 px-4 py-2 text-[11px] font-black uppercase tracking-[.1em] text-route-orange shadow-sm backdrop-blur">
                <MapPin size={16} /> All 38 districts
              </span>
            </div>

            <h1 className="mb-5 text-[43px] font-black leading-[.98] tracking-[-.055em] text-route-ink sm:text-[60px] lg:text-[74px]">
              Mining GPS
              <span className="block text-route-orange">in Bihar</span>
            </h1>
            <p className="mb-3 text-[20px] font-black leading-7 text-route-navy sm:text-[24px]">
              See every vehicle. Control every route.
            </p>
            <p className="mb-6 max-w-[590px] text-[15px] font-semibold leading-7 text-slate-600 sm:text-[17px]">
              Track tippers, dumpers, excavators and contractor trucks with live location, work-zone alerts and route history.
            </p>

            <div className="mb-8 grid max-w-[610px] grid-cols-2 gap-2 sm:grid-cols-4">
              {heroBenefits.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="flex min-h-[48px] items-center gap-2 rounded-xl border border-white/80 bg-white/85 px-3 text-[11px] font-extrabold text-route-ink shadow-sm backdrop-blur"
                >
                  <Icon className="shrink-0 text-route-blue" size={17} />
                  {label}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+918409539047"
                className="inline-flex min-h-[58px] items-center justify-center gap-3 rounded-xl bg-route-orange px-7 text-[16px] font-extrabold text-white shadow-[0_15px_34px_rgba(249,115,22,.28)] transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-200"
              >
                <Phone size={21} fill="currentColor" /> Call for installation
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-[58px] items-center justify-center gap-3 rounded-xl border border-blue-200 bg-white/90 px-7 text-[16px] font-extrabold text-route-blue shadow-sm backdrop-blur transition hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-100"
              >
                Get a quote <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Mining GPS service assurance" className="bg-route-navy text-white">
        <div className="mx-auto grid w-[calc(100%_-_24px)] max-w-[1180px] grid-cols-2 sm:w-[calc(100%_-_40px)] lg:grid-cols-4">
          {[
            { icon: MapPin, title: "38 districts", text: "Bihar-wide service" },
            { icon: Satellite, title: "Live fleet", text: "Location on mobile" },
            { icon: MapPinned, title: "Zone alerts", text: "Mine and quarry areas" },
            { icon: Headphones, title: "Local help", text: "Installation support" },
          ].map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="flex min-h-[116px] items-center gap-3 border-white/10 px-3 py-5 max-lg:border-b lg:border-r lg:px-6"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-orange-400">
                <Icon size={22} />
              </span>
              <div>
                <h2 className="mb-1 text-[15px] font-black tracking-[-.02em] text-white">{title}</h2>
                <p className="m-0 text-[11px] font-semibold text-blue-200">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="features" className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-[calc(100%_-_32px)] max-w-[1180px]">
          <SectionHeading
            eyebrow="Mining GPS features"
            title="Know where your fleet is and what it is doing"
            text="Simple controls for mines, quarries, contractors and material-transport fleets."
          />

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-5">
            {features.map(({ icon, title, text, tone }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_12px_34px_rgba(7,47,103,.07)] sm:p-6"
              >
                <IconBadge icon={icon} tone={tone} size="md" />
                <h3 className="mb-2 mt-5 text-[16px] font-black leading-5 text-route-ink sm:text-[19px]">{title}</h3>
                <p className="m-0 text-[12px] font-semibold leading-5 text-slate-500 sm:text-[14px] sm:leading-6">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-route-soft py-16 sm:py-20">
        <div className="mx-auto w-[calc(100%_-_32px)] max-w-[1180px]">
          <SectionHeading
            eyebrow="Why Route Tech"
            title="Mining GPS support that fits your operation"
            text="Rugged hardware, clear onboarding and local help across Bihar."
          />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {reasons.map(({ icon, title, text }, index) => (
              <article
                key={title}
                className="rounded-2xl border border-blue-100 bg-white p-4 text-center shadow-[0_10px_28px_rgba(7,47,103,.07)] sm:p-5"
              >
                <span className="mx-auto">
                  <IconBadge icon={icon} tone={index % 2 ? "orange" : "blue"} size="md" />
                </span>
                <h3 className="mb-2 mt-4 text-[15px] font-black leading-5 text-route-ink">{title}</h3>
                <p className="m-0 text-[11px] font-semibold leading-5 text-slate-500 sm:text-[12px]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-[calc(100%_-_32px)] max-w-[1180px]">
          <SectionHeading
            eyebrow="Fleets we track"
            title="Choose the vehicle used at your site"
            text="Look at the pictures. Route Tech will confirm the right GPS setup for your operation."
          />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {fleetTypes.map(({ image, alt, icon: Icon, title, text }) => (
              <article
                key={title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_34px_rgba(7,47,103,.09)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-blue-50">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 left-3 grid h-10 w-10 place-items-center rounded-xl bg-route-blue text-white shadow-lg">
                    <Icon size={21} />
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="mb-1 text-[15px] font-black text-route-ink">{title}</h3>
                  <p className="m-0 text-[11px] font-semibold leading-5 text-slate-500">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-route-soft py-16 sm:py-20">
        <div className="mx-auto w-[calc(100%_-_32px)] max-w-[1100px]">
          <SectionHeading
            eyebrow="Simple installation"
            title="Your mining fleet goes live in 4 steps"
            text="One clear process from fleet details to live tracking."
          />

          <div className="grid gap-4 md:grid-cols-4">
            {steps.map(({ icon, title, text }, index) => (
              <article
                key={title}
                className="relative flex items-center gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_10px_28px_rgba(7,47,103,.07)] md:flex-col md:p-6 md:text-center"
              >
                <span className="absolute right-4 top-4 grid h-7 w-7 place-items-center rounded-full bg-route-orange text-[12px] font-black text-white">
                  {index + 1}
                </span>
                <IconBadge icon={icon} tone={index % 2 ? "orange" : "blue"} size="lg" />
                <div>
                  <h3 className="mb-2 text-[17px] font-black text-route-ink">{title}</h3>
                  <p className="m-0 text-[12px] font-semibold leading-5 text-slate-500">{text}</p>
                </div>
                {index < steps.length - 1 ? (
                  <ArrowRight
                    aria-hidden="true"
                    className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 text-blue-200 md:block"
                    size={22}
                  />
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid w-[calc(100%_-_32px)] max-w-[1100px] gap-6 overflow-hidden rounded-3xl bg-route-navy p-6 text-white shadow-route sm:p-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:p-12">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[.15em] text-orange-400">
              <MapPin size={17} /> Service across Bihar
            </span>
            <h2 className="mb-3 text-[32px] font-black leading-[1.06] tracking-[-.04em] text-white sm:text-[44px]">
              Mining GPS support in all 38 districts
            </h2>
            <p className="m-0 max-w-[640px] text-[14px] font-semibold leading-7 text-blue-200 sm:text-[16px]">
              Wherever your vehicles, mines and material routes run in Bihar, Route Tech keeps installation and tracking support close.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="tel:+918409539047"
              className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl bg-route-orange px-6 text-[16px] font-extrabold text-white"
            >
              <Phone size={21} fill="currentColor" /> Call +91 84095 39047
            </a>
            <a
              href="tel:+918935989871"
              className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl bg-route-orange px-6 text-[16px] font-extrabold text-white"
            >
              <Phone size={21} fill="currentColor" /> Call +91 89359 89871
            </a>
            <Link
              href="/dealer-network"
              className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/10 px-6 text-[15px] font-extrabold text-white"
            >
              See dealer network <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-6 bg-route-soft py-16 sm:py-20">
        <div className="mx-auto grid w-[calc(100%_-_32px)] max-w-[1100px] gap-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-10">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-[.16em] text-route-blue">
              <CircleGauge size={18} /> Common questions
            </span>
            <h2 className="mb-4 text-[34px] font-black leading-[1.08] tracking-[-.04em] text-route-ink sm:text-[46px]">
              Mining GPS questions
            </h2>
            <div className="space-y-3">
              {faq.map(({ q, a }, index) => (
                <details
                  key={q}
                  open={index === 0}
                  className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_8px_24px_rgba(7,47,103,.06)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[14px] font-black leading-6 text-route-ink sm:text-[16px]">
                    {q}
                    <ChevronDown className="shrink-0 text-route-blue transition group-open:rotate-180" size={21} />
                  </summary>
                  <p className="mb-0 mt-4 border-t border-slate-100 pt-4 text-[13px] font-semibold leading-6 text-slate-600">{a}</p>
                </details>
              ))}
            </div>
          </div>

          <aside className="self-start rounded-3xl border border-orange-200 bg-orange-50 p-6 text-center sm:p-8 lg:sticky lg:top-6">
            <span className="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-full bg-white text-route-orange shadow-sm">
              <Headphones size={38} />
            </span>
            <span className="mb-2 block text-[11px] font-black uppercase tracking-[.15em] text-route-orange">Need help?</span>
            <h2 className="mb-3 text-[27px] font-black leading-tight text-route-ink">Talk to the mining GPS team</h2>
            <p className="mb-6 text-[13px] font-semibold leading-6 text-slate-600">
              Tell us your vehicles, work site and district. We will explain the device, installation and tracking setup.
            </p>
            <a
              href="tel:+918409539047"
              className="inline-flex min-h-[56px] w-full items-center justify-center gap-3 rounded-xl bg-route-orange px-5 text-[16px] font-extrabold text-white shadow-[0_14px_30px_rgba(249,115,22,.24)]"
            >
              <Phone size={21} fill="currentColor" /> Call now
            </a>
            <p className="mb-0 mt-4 text-[18px] font-black text-route-blue">+91 84095 39047</p>
            <p className="mb-0 mt-1 text-[18px] font-black text-route-blue">+91 89359 89871</p>
          </aside>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
