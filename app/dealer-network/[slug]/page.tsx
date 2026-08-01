import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  BusFront,
  CalendarDays,
  Check,
  ClipboardCheck,
  FileCheck2,
  Headphones,
  MapPin,
  MonitorSmartphone,
  Phone,
  Route,
  Satellite,
  ShieldCheck,
  Truck,
  UsersRound,
  Wrench,
} from "lucide-react";
import {
  biharDistricts,
  districtCoveragePath,
  districtCoverageSlug,
  getDistrictFromCoverageSlug,
} from "@/data/bihar-districts";

type DistrictPageProps = {
  params: Promise<{ slug: string }>;
};

const serviceItems = [
  "AIS140 GPS installation for commercial vehicles",
  "NIC / Vahan integration and registration",
  "VLTD registration and compliance support",
  "Mining GPS installation and management",
  "School bus GPS tracking solution",
  "Commercial fleet tracking for trucks, tempos, cabs and buses",
];

const reasonItems = [
  "AIS140 certified devices",
  "NIC and Vahan portal integration",
  "Expert installation across the district",
  "Fast service and local support",
  "24x7 tracking and technical support",
  "Warranty and after-sales service",
];

const installationSteps: Array<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: CalendarDays, title: "Book Service", text: "Schedule your installation online or call us." },
  { icon: UsersRound, title: "Engineer Visit", text: "Our expert visits your location at the scheduled time." },
  { icon: Wrench, title: "Device Installation", text: "The AIS140 device is installed securely in your vehicle." },
  { icon: FileCheck2, title: "NIC Registration", text: "We register the device on the NIC / Vahan portal." },
  { icon: MonitorSmartphone, title: "Live Tracking", text: "Your vehicle is live and ready for 24x7 tracking." },
];

const stats: Array<{ icon: LucideIcon; value: string; label: string }> = [
  { icon: Building2, value: "38+", label: "Districts covered" },
  { icon: UsersRound, value: "5000+", label: "Happy customers" },
  { icon: ClipboardCheck, value: "10000+", label: "Devices installed" },
  { icon: Headphones, value: "24x7", label: "Support" },
  { icon: BadgeCheck, value: "100%", label: "Compliance focus" },
];

export const dynamicParams = false;

export function generateStaticParams() {
  return biharDistricts.map((district) => ({ slug: districtCoverageSlug(district) }));
}

export async function generateMetadata({ params }: DistrictPageProps): Promise<Metadata> {
  const { slug } = await params;
  const district = getDistrictFromCoverageSlug(slug);

  if (!district) {
    return { title: "District GPS Coverage Not Found", robots: { index: false, follow: false } };
  }

  const title = `AIS-140 GPS Solution in ${district} | Installation & Tracking`;
  const description = `Get AIS-140 certified GPS installation in ${district}, Bihar with NIC/Vahan integration, VLTD registration support, 24x7 live tracking and local Route Tech assistance.`;
  const canonical = districtCoveragePath(district);

  return {
    title,
    description,
    keywords: [
      `AIS 140 GPS solution in ${district}`,
      `AIS 140 GPS installation ${district}`,
      `commercial vehicle GPS ${district}`,
      `VLTD registration ${district}`,
      `NIC Vahan GPS ${district}`,
      `GPS tracker dealer ${district}`,
    ],
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      images: [
        {
          url: "/images/route-tech/ais140-hero-bihar.jpg",
          width: 2200,
          height: 1238,
          alt: `AIS-140 GPS installation and tracking service in ${district}, Bihar`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/route-tech/ais140-hero-bihar.jpg"],
    },
    other: { "geo.region": "IN-BR", "geo.placename": `${district}, Bihar` },
  };
}

export default async function DistrictCoveragePage({ params }: DistrictPageProps) {
  const { slug } = await params;
  const district = getDistrictFromCoverageSlug(slug);

  if (!district) notFound();

  const canonicalPath = districtCoveragePath(district);
  const keyAreas = [
    `${district} District`,
    "District HQ",
    "All Blocks",
    "Major Towns",
    "Commercial Routes",
    "Bus Routes",
    "National Highways",
    "State Highways",
    "Rural Routes",
    "...and more",
  ];
  const atAGlance = [
    { icon: Building2, text: `District-wide service in ${district}` },
    { icon: Truck, text: "Commercial and mining vehicle support" },
    { icon: Route, text: "Major road and transport-route coverage" },
    { icon: Headphones, text: "Local installation coordination" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `AIS-140 GPS Solution in ${district}`,
        serviceType: "AIS-140 certified GPS device installation and vehicle tracking",
        description: `AIS-140 GPS installation, NIC/Vahan integration and live tracking support in ${district}, Bihar.`,
        areaServed: { "@type": "AdministrativeArea", name: `${district}, Bihar` },
        provider: {
          "@type": "LocalBusiness",
          name: "Route Tech",
          url: "https://www.routetechgps.com",
          telephone: ["+91-84095-39047", "+91-89359-89871"],
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.routetechgps.com" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Dealer Network",
            item: "https://www.routetechgps.com/dealer-network",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `AIS-140 GPS Solution in ${district}`,
            item: `https://www.routetechgps.com${canonicalPath}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-[#f2f7fd] text-route-ink">
      <section className="relative isolate min-h-[640px] overflow-hidden bg-white">
        <Image
          src="/images/route-tech/ais140-hero-bihar.jpg"
          alt={`AIS-140 GPS tracking for commercial vehicles in ${district}, Bihar`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] max-lg:object-[58%_center]"
        />
        <div className="absolute inset-0 bg-white/15" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex min-h-[640px] w-[calc(100%_-_32px)] max-w-[1180px] items-center py-12 sm:w-[calc(100%_-_40px)]">
          <div className="max-w-[650px] rounded-[28px] border border-white/80 bg-white/90 p-6 shadow-[0_24px_70px_rgba(7,47,103,.14)] backdrop-blur-sm sm:p-9">
            <span className="mb-5 inline-flex items-center rounded-lg bg-route-orange px-3 py-2 text-[11px] font-black uppercase tracking-[.13em] text-white">
              {district} district coverage
            </span>

            <h1 className="mb-4 text-[42px] font-black leading-[.98] tracking-[-.055em] text-route-ink sm:text-[58px] lg:text-[68px]">
              AIS140 GPS
              <span className="block">
                Solutions in <em className="not-italic text-route-orange">{district}</em>
              </span>
            </h1>
            <p className="mb-4 text-[19px] font-black text-route-navy sm:text-[22px]">
              Reliable Tracking. Compliance Guaranteed.
            </p>
            <p className="mb-6 max-w-[610px] text-[14px] font-semibold leading-7 text-slate-600 sm:text-[16px]">
              Route Tech provides AIS140 certified GPS solutions and installation services across {district}, ensuring vehicle safety and government compliance with real-time monitoring.
            </p>

            <div className="mb-7 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                { icon: ShieldCheck, title: "AIS140", text: "Certified" },
                { icon: FileCheck2, title: "NIC / Vahan", text: "Ready" },
                { icon: Satellite, title: "24x7", text: "Tracking" },
                { icon: Headphones, title: "Local", text: "Support" },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex min-h-[58px] items-center gap-2 rounded-xl border border-blue-100 bg-white px-3">
                  <Icon className="shrink-0 text-route-blue" size={20} />
                  <span className="text-[11px] font-black leading-4 text-route-ink">
                    {title}<small className="block text-[10px] font-bold text-slate-500">{text}</small>
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl bg-route-orange px-7 text-[15px] font-extrabold text-white shadow-[0_15px_34px_rgba(249,115,22,.25)]"
              >
                Get a Free Quote <ArrowRight size={19} />
              </Link>
              <a
                href="tel:+918409539047"
                className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl border-2 border-route-blue bg-white px-7 text-[15px] font-extrabold text-route-blue"
              >
                Call Now <Phone size={19} fill="currentColor" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Route Tech service facts" className="relative z-20 -mt-8 px-4">
        <div className="mx-auto grid max-w-[1120px] grid-cols-2 overflow-hidden rounded-2xl border border-white bg-white shadow-[0_16px_45px_rgba(7,47,103,.12)] sm:grid-cols-3 lg:grid-cols-5">
          {stats.map(({ icon: Icon, value, label }) => (
            <article key={label} className="flex min-h-[104px] items-center gap-3 border-b border-r border-slate-100 p-4 sm:p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange-50 text-route-orange">
                <Icon size={23} />
              </span>
              <div>
                <strong className="block text-[21px] font-black text-route-blue">{value}</strong>
                <span className="text-[10px] font-bold uppercase tracking-[.04em] text-slate-500">{label}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-14 sm:py-16">
        <div className="mx-auto grid max-w-[1120px] gap-5 lg:grid-cols-[1fr_1fr_.82fr]">
          <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-[0_10px_30px_rgba(7,47,103,.07)]">
            <h2 className="mb-5 text-[22px] font-black text-route-navy">Our Services in {district}</h2>
            <ul className="space-y-3">
              {serviceItems.map((item) => (
                <li key={item} className="flex gap-3 text-[13px] font-semibold leading-5 text-slate-600">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-route-blue text-white">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-[0_10px_30px_rgba(7,47,103,.07)]">
            <h2 className="mb-5 text-[22px] font-black text-route-navy">Why {district} Chooses Route Tech</h2>
            <ul className="space-y-3">
              {reasonItems.map((item) => (
                <li key={item} className="flex gap-3 text-[13px] font-semibold leading-5 text-slate-600">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-route-orange text-white">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h2 className="mb-5 text-[22px] font-black text-route-navy">{district} at a Glance</h2>
            <ul className="space-y-4">
              {atAGlance.map(({ icon: Icon, text }) => (
                <li key={text} className="flex gap-3 text-[13px] font-semibold leading-5 text-slate-600">
                  <Icon className="mt-0.5 shrink-0 text-route-blue" size={19} />
                  {text}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-end justify-center gap-2 text-route-blue/20" aria-hidden="true">
              <Building2 size={52} />
              <Building2 size={72} />
              <Building2 size={48} />
            </div>
          </article>
        </div>
      </section>

      <section className="px-4 pb-14 sm:pb-16">
        <div className="mx-auto grid max-w-[1120px] overflow-hidden rounded-3xl bg-route-navy text-white shadow-[0_18px_44px_rgba(7,47,103,.16)] lg:grid-cols-[.78fr_1.2fr_.85fr]">
          <div className="p-7 sm:p-9">
            <span className="mb-3 block text-[11px] font-black uppercase tracking-[.14em] text-orange-400">District-wide coverage</span>
            <h2 className="mb-3 text-[27px] font-black leading-tight text-white">Full Coverage in {district} District</h2>
            <p className="mb-7 text-[13px] font-semibold leading-6 text-blue-200">
              We provide GPS installation and tracking services across all blocks and key routes of {district}.
            </p>
            <div className="mb-7 grid grid-cols-3 gap-3">
              {[
                ["1", "District"],
                ["All", "Blocks"],
                ["100+", "Key routes"],
              ].map(([value, label]) => (
                <div key={label}>
                  <strong className="block text-[24px] font-black text-orange-400">{value}</strong>
                  <span className="text-[10px] font-bold uppercase tracking-[.08em] text-blue-200">{label}</span>
                </div>
              ))}
            </div>
            <Link href="/dealer-network" className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-route-orange px-5 text-[13px] font-extrabold text-white">
              View All Districts <ArrowRight size={17} />
            </Link>
          </div>

          <div className="relative min-h-[280px] overflow-hidden border-y border-white/10 lg:border-x lg:border-y-0">
            <Image
              src="/images/route-tech/dealer-network-bihar-map.webp"
              alt={`Route Tech GPS coverage map for ${district} and all Bihar districts`}
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover object-center"
            />
            <span className="absolute inset-x-4 top-1/2 -translate-y-1/2 text-center text-[26px] font-black uppercase tracking-[.08em] text-white drop-shadow-lg">
              {district}
            </span>
          </div>

          <div className="p-7 sm:p-9">
            <h2 className="mb-5 text-[22px] font-black text-white">Key Areas Covered</h2>
            <div className="flex flex-wrap gap-2">
              {keyAreas.map((area) => (
                <span key={area} className="rounded-lg border border-blue-400/30 bg-blue-500/15 px-3 py-2 text-[11px] font-bold text-blue-100">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-[1120px]">
          <header className="mb-9 text-center">
            <span className="mb-3 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[.14em] text-route-orange">
              <Wrench size={16} /> Easy installation
            </span>
            <h2 className="text-[32px] font-black tracking-[-.04em] text-route-navy sm:text-[44px]">Our Installation Process</h2>
          </header>

          <div className="grid gap-4 md:grid-cols-5">
            {installationSteps.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="relative rounded-2xl border border-blue-100 bg-[#f8fbff] p-5 text-center">
                <span className="absolute left-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-route-orange text-[12px] font-black text-white">
                  {index + 1}
                </span>
                <span className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-route-blue text-white">
                  <Icon size={25} />
                </span>
                <h3 className="mb-2 text-[15px] font-black text-route-ink">{title}</h3>
                <p className="m-0 text-[11px] font-semibold leading-5 text-slate-500">{text}</p>
                {index < installationSteps.length - 1 ? (
                  <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-blue-300 md:block" size={19} aria-hidden="true" />
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-16">
        <div className="mx-auto grid max-w-[1120px] gap-6 rounded-3xl bg-route-navy p-7 text-white shadow-[0_18px_44px_rgba(7,47,103,.16)] sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex items-start gap-4">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/10 text-orange-400">
              <BusFront size={27} />
            </span>
            <div>
              <h2 className="mb-2 text-[26px] font-black text-white sm:text-[32px]">Secure Your Fleet. Stay Compliant. Stay Ahead.</h2>
              <p className="m-0 max-w-[680px] text-[13px] font-semibold leading-6 text-blue-200">
                Get AIS140 GPS installation in {district} and ensure government compliance with real-time tracking and complete peace of mind.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-xl bg-route-orange px-7 text-[15px] font-extrabold text-white">
              Get a Quote <ArrowRight size={18} />
            </Link>
            <a href="tel:+918409539047" className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-xl border border-white/35 px-7 text-[15px] font-extrabold text-white">
              Call Now <Phone size={18} fill="currentColor" />
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
