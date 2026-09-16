import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Ambulance,
  ArrowRight,
  BadgeCheck,
  BellRing,
  BusFront,
  ChevronDown,
  CircleGauge,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  Fuel,
  GraduationCap,
  Handshake,
  Headphones,
  IndianRupee,
  MapPin,
  MapPinned,
  Megaphone,
  MonitorSmartphone,
  Phone,
  Quote,
  Satellite,
  ShieldCheck,
  Star,
  Truck,
  UsersRound,
  Warehouse,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AIS140 VLTD GPS in Bihar | Certified Device & Installation",
  description:
    "Install AIS-140 certified GPS in Bihar with Route Tech. Get NIC/Vahan integration, VLTD registration support, panic-button compatibility and 24x7 live vehicle tracking across all 38 districts.",
  keywords: [
    "AIS140 VLTD GPS Bihar",
    "AIS140 certified VLTD GPS device Bihar",
    "AIS140 VLTD GPS installation Bihar",
    "Vahan registration Bihar",
    "NIC Vahan GPS integration",
    "commercial vehicle GPS Bihar",
    "school bus GPS Bihar",
    "AIS140 VLTD GPS Patna",
  ],
  alternates: { canonical: "/services/ais-140-gps-solutions-in-bihar" },
  openGraph: {
    title: "AIS140 VLTD GPS in Bihar | Route Tech",
    description:
      "Certified AIS140 VLTD GPS installation, NIC/Vahan Sync and live tracking support across all 38 districts of Bihar.",
    url: "/services/ais-140-gps-solutions-in-bihar",
    type: "website",
    images: [
      {
        url: "/images/route-tech/ais140-hero-bihar.jpg",
        width: 2200,
        height: 1238,
        alt: "AIS140 VLTD GPS solution for trucks and school buses across Bihar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIS140 VLTD GPS in Bihar | Route Tech",
    description: "Certified AIS140 VLTD GPS installation and tracking support across Bihar.",
    images: ["/images/route-tech/ais140-hero-bihar.jpg"],
  },
  other: { "geo.region": "IN-BR", "geo.placename": "Bihar" },
};

const features: Array<{ icon: LucideIcon; title: string; text: string; tone: "blue" | "orange" }> = [
  {
    icon: ShieldCheck,
    title: "MoRTH & AIS140 VLTD Certified.",
    text: "Govt - Certified VLTD Devices With RTO Clearance And Instant Vahan Portal Sync Accross Bihar.",
    tone: "blue",
  },
  {
    icon: BellRing,
    title: "Emergency SOS Panic Button",
    text: "Govt - Mandated SOS Emergency Button For Passenger Safety & Instant RTO Compliance.",
    tone: "orange",
  },
  {
    icon: Fuel,
    title: "Fuel & Mining Royalty Tracking",
    text: "Real - Time Fuel Theft Alerts, Mileage Reports, Route Monitoring",
    tone: "blue",
  },
  {
    icon: Satellite,
    title: "24*7 Live GPS Mobile App",
    text: "Live Fleet Tracking With Instant Ignition Alerts, Route History, and Speed Monitoring On Android & iOS",
    tone: "orange",
  },
  {
    icon: MapPinned,
    title: "GeoFencing",
    text: "Set Custom Boundary Zone City Entry Limits, and Get Instant Entry Exit Alerts.",
    tone: "blue",
  },
  {
    icon: Headphones,
    title: "Local Patna & Bihar Support",
    text: "Dedicated Local Technical Support And Doorstep GPS Fitting Assistance Accross All 38 Districts Of Bihar",
    tone: "orange",
  },
];

const reasons: Array<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: Wrench, title: "Same-Day Doorstep Fitting", text: "Fast And Hassle - Free GPS Installation At Your Site In Patna & All Bihar Districts." },
  { icon: MapPin, title: "38 Districts VLTD GPS Service Network", text: "One - Site Support & Fitting Network Operating Across All 38 Districts Of Bihar." },
  { icon: FileCheck2, title: "100% RTO & Vahan Approved", text: "Fully Compliant With AIS140 VLTD Norms & Instant Vahan Portal Sync." },
  { icon: UsersRound, title: "Certified RTO GPS Technicians", text: "Expert Local Technicians For Commercial Trucks, Taxis & Mining Fleets." },
  { icon: BadgeCheck, title: "Up To 8 Years Warranty", text: "Heavy - Duty IP68 Waterproof Hardware Backed By Hassle - Free Warranty Support." },
];

const industries: Array<{
  image: string;
  alt: string;
  icon: LucideIcon;
  title: string;
  text: string;
}> = [
  {
    image: "/images/route-tech/ais140-industry-school-bus.jpg",
    alt: "AIS140 VLTD GPS tracking for school buses in Patna",
    icon: GraduationCap,
    title: "School Bus VLTD GPS Tracking",
    text: "Mandatory AIS140 safety VLTD tracking with emergency panic buttons for school buses across Patna and Bihar.",
  },
  {
    image: "/images/route-tech/ais140-industry-mining.jpg",
    alt: "Mining tipper Khanan GPS compliance for Bihar sand transport",
    icon: Warehouse,
    title: "Mining (Khanan) Tippers & Hyvas GPS",
    text: "Specialized GPS tracking for sand ghat tippers, dumpers, and heavy machinery with e-challan integration.",
  },
  {
    image: "/images/route-tech/ais140-industry-commercial-truck.jpg",
    alt: "Commercial cargo truck using AIS140 VLTD GPS in Bihar",
    icon: Truck,
    title: "Commercial Trucks & Fleets",
    text: "MoRTH-approved VLTD tracking and fast RTO fitness clearance for goods transport carriers.",
  },
  {
    image: "/images/route-tech/ais140-industry-ambulance.jpg",
    alt: "Ambulance using AIS140 VLTD GPS tracking in Bihar",
    icon: Ambulance,
    title: "Emergency Ambulances",
    text: "Real-time tracking and emergency dispatch support for medical transport and hospital fleets.",
  },
  {
    image: "/images/route-tech/ais140-industry-passenger-bus.jpg",
    alt: "Passenger coach bus using AIS140 VLTD GPS in Bihar",
    icon: BusFront,
    title: "Taxis, Cabs & Passenger Buses",
    text: "Vahan portal-synced tracking devices for commercial passenger buses, tourist cabs, and rental fleets.",
  },
];

const steps: Array<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: ClipboardCheck, title: "Book AIS-140 Order", text: "Share vehicle details & location with our Patna team." },
  { icon: Wrench, title: "Doorstep VLTD Fitting", text: "Expert on-site installation across all 38 districts of Bihar." },
  { icon: FileCheck2, title: "Vahan Portal & NIC Sync", text: "Instant RTO registration and official portal certificate upload." },
  { icon: MonitorSmartphone, title: "Instant Live Tracking", text: "Start 24/7 mobile app tracking & secure RTO fitness clearance." },
];

const dealerBenefits: Array<{ icon: LucideIcon; title: string }> = [
  { icon: IndianRupee, title: "High Profit Margins" },
  { icon: Megaphone, title: "Local Lead & Marketing Support" },
  { icon: UsersRound, title: "Technical Training & Vahan Setup" },
  { icon: Clock3, title: "Fast & Secure Payouts" },
];

const testimonials = [
  {
    image: "/images/route-tech/testimonial-rakesh-kumar.jpg",
    quote: "Got fast AIS-140 VLTD fitness clearance in Patna. Professional doorstep installation team and smooth Vahan sync.",
    name: "Rakesh Kumar",
    role: "Transporter, Patna",
  },
  {
    image: "/images/route-tech/testimonial-sanjay-singh.jpg",
    quote: "Best AIS-140 service provider in Bihar! Quick NIC registration and smooth bus VLTD GPS installation.",
    name: "Sanjay Singh",
    role: "Bus Operator, Gaya",
  },
  {
    image: "/images/route-tech/testimonial-imran-khan.jpg",
    quote: "Reliable AIS-140 tracking devices, excellent mobile app, and great local support across Bihar.",
    name: "Imran Khan",
    role: "Logistics Owner, Muzaffarpur",
  },
];

const faq = [
  {
    q: "What is AIS-140 VLTD and why is it mandatory for commercial vehicles in Bihar?",
    a: "AIS-140 is a government-mandated standard for Vehicle Location Tracking Devices with emergency panic buttons, required for RTO fitness and permits.",
  },
  {
    q: "Are your GPS devices RTO approved and AIS-140 certified in Patna?",
    a: "Yes, Route Tech provides 100% MoRTH-approved and certified AIS-140 VLTD hardware for all commercial fleets.",
  },
  {
    q: "Do you provide Vahan portal sync and NIC registration support?",
    a: "Yes, we handle complete device mapping, NIC registration, and official Vahan portal certificate uploads for instant clearance.",
  },
  {
    q: "How long does doorstep VLTD GPS installation take in Patna and Bihar?",
    a: "Our expert technicians provide fast, same-day doorstep installation and fitting across all 38 districts of Bihar.",
  },
  {
    q: "Which vehicles require AIS-140 VLTD tracking for RTO fitness in Bihar?",
    a: "It is compulsory for commercial trucks, passenger buses, school buses, taxis, rental cabs, and ambulances.",
  },
  {
    q: "Do you provide local technical support and mobile app training after fitting?",
    a: "Yes, we offer 24/7 dedicated customer support, mobile tracking app access, and local assistance across Bihar.",
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

export default function Ais140GpsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "AIS-140 GPS in Bihar",
        serviceType: "AIS-140 certified GPS device and installation",
        description: metadata.description,
        areaServed: { "@type": "State", name: "Bihar" },
        provider: {
          "@type": "LocalBusiness",
          name: "Route Tech",
          url: "https://www.routetechgps.com",
          telephone: "+91-89359-89871",
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
            name: "AIS-140 GPS in Bihar",
            item: "https://www.routetechgps.com/services/ais-140-gps-solutions-in-bihar",
          },
        ],
      },
    ],
  };

  return (
    <>
      <section className="relative isolate min-h-[660px] overflow-hidden bg-white">
        <Image
          src="/images/route-tech/ais140-hero-bihar.jpg"
          alt="AIS140 VLTD GPS solution for a commercial truck and school bus across Bihar"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[64%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.98)_0%,rgba(255,255,255,.94)_36%,rgba(255,255,255,.38)_58%,rgba(255,255,255,0)_82%)] max-lg:bg-[linear-gradient(90deg,rgba(255,255,255,.96)_0%,rgba(255,255,255,.9)_54%,rgba(255,255,255,.5)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[660px] w-[calc(100%_-_32px)] max-w-[1180px] items-center py-14 sm:w-[calc(100%_-_40px)]">
          <div className="max-w-[650px]">
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-[11px] font-black uppercase tracking-[.12em] text-route-blue shadow-sm backdrop-blur">
                <ShieldCheck size={20} /> Govt & RTO Approved VLTD GPS In Bihar.
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/90 px-4 py-2 text-[11px] font-black uppercase tracking-[.1em] text-route-orange shadow-sm backdrop-blur">
                <MapPin size={20} /> Pantna & All 38 Districts Coverage
              </span>
            </div>

            <h1 className="mb-5 text-[43px] font-black leading-[.98] tracking-[-.055em] text-route-ink sm:text-[60px] lg:text-[74px]">
              RTO Approved AIS140 VLTD GPS
              <span className="block text-route-orange">Solutions In Bihar</span>
            </h1>
            <p className="mb-3 text-[20px] font-black leading-7 text-route-navy sm:text-[24px]">
              for Government Compliance
            </p>
            <p className="mb-6 max-w-[590px] text-[15px] font-semibold leading-7 text-slate-600 sm:text-[17px]">
              RTO & Vahan Portal Approved AIS140 VLTD Gps Devices With Emergancy Panic Button. Fast Doorstep Installation For Commercial Trucks, Taxis, School Buses, Tippers & Mining Hyvas Across Patna And All 38 Districts Of Bihar.
            </p>

            <div className="mb-8 grid max-w-[610px] grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                ["MoRTH Approved VLTD", ShieldCheck],
                ["Vahan & NIC Sync", FileCheck2],
                ["24x7 Live Mobile App", Satellite],
                ["Same-Day Doorstep Fitting", Wrench],
              ].map(([label, Icon]) => (
                <span
                  key={label as string}
                  className="flex min-h-[48px] items-center gap-2 rounded-xl border border-white/80 bg-white/85 px-3 text-[11px] font-extrabold text-route-ink shadow-sm backdrop-blur"
                >
                  <Icon className="shrink-0 text-route-blue" size={17} />
                  {label as string}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-[58px] items-center justify-center gap-3 rounded-xl bg-route-blue px-7 text-[16px] font-extrabold text-white shadow-[0_15px_34px_rgba(20,105,211,.26)] transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                Get Quote <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[58px] items-center justify-center gap-3 rounded-xl border border-blue-200 bg-white/90 px-7 text-[16px] font-extrabold text-route-blue shadow-sm backdrop-blur transition hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-100"
              >
                Call VLTD Helpline <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="AIS-140 service assurance" className="bg-route-navy text-white">
        <div className="mx-auto grid w-[calc(100%_-_24px)] max-w-[1180px] grid-cols-1 sm:w-[calc(100%_-_40px)] sm:grid-cols-4">
          {[
            { icon: ShieldCheck, title: "AIS140 VLTD", text: "MoRTH & RTO Approved" },
            { icon: FileCheck2, title: "NIC & Vahan", text: "Instant Portal Sync" },
            { icon: FileCheck2, title: "RTO Fitness Ready.", text: "100% Govt Compliant" },
            { icon: FileCheck2, title: "Doorstep Fitting.", text: "Patna & Bihar Cover" },
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
            eyebrow="AIS140 VLTD Features"
            title="Advanced Features With 100% RTO & Vahan Compliance."
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
            eyebrow="Bihar No 1 GPS Provider"
            title="Why Choose Route Tech For AIS140 VLTD GPS?"
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
            eyebrow="Industries"
            title="AIS-140 VLTD Solutions for Every Commercial Sector in Bihar"
          />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {industries.map(({ image, alt, icon: Icon, title, text }) => (
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
            title="AIS-140 VLTD Installation & Vahan Sync Process in Bihar"
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

      <section id="dealer-partner" className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid w-[calc(100%_-_32px)] max-w-[1180px] gap-7 overflow-hidden rounded-3xl bg-route-navy p-6 text-white shadow-route sm:p-10 lg:grid-cols-[1.1fr_1.2fr_auto] lg:items-center lg:p-12">
          <div className="flex items-start gap-4">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white text-route-orange">
              <Handshake size={32} />
            </span>
            <div>
              <h2 className="mb-2 text-[27px] font-black leading-tight text-white sm:text-[34px]">
                AIS 140 VLTD GPS Dealership & Distributorship in Bihar
              </h2>
              <p className="m-0 max-w-[500px] text-[13px] font-semibold leading-6 text-blue-200 sm:text-[14px]">
                Partner with Route Tech to expand your business. Become an authorized AIS-140 VLTD GPS dealer across Patna & all 38 districts.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {dealerBenefits.map(({ icon: Icon, title }) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-white/[.07] p-3 text-center">
                <span className="mx-auto mb-3 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-orange-400">
                  <Icon size={22} />
                </span>
                <h3 className="m-0 text-[11px] font-extrabold leading-4 text-white">{title}</h3>
              </article>
            ))}
          </div>

          <Link
            href="/dealer-network"
            className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl bg-route-orange px-6 text-[15px] font-extrabold text-white shadow-[0_14px_30px_rgba(249,115,22,.22)]"
          >
            Join As VLTD Dealer <ArrowRight size={19} />
          </Link>
        </div>
      </section>

      <section id="testimonials" className="bg-route-soft py-16 sm:py-20">
        <div className="mx-auto w-[calc(100%_-_32px)] max-w-[1180px]">
          <SectionHeading eyebrow="Customer stories" title="Trusted by Fleet Owners & Transporters Across Bihar" />

          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map(({ image, quote, name, role }) => (
              <article
                key={name}
                className="relative flex min-h-[300px] flex-col rounded-2xl border border-blue-100 bg-white p-6 shadow-[0_12px_34px_rgba(7,47,103,.08)]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex gap-1 text-route-orange" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={17} fill="currentColor" />
                    ))}
                  </div>
                  <Quote className="text-blue-100" size={36} fill="currentColor" />
                </div>
                <blockquote className="m-0 flex-1 text-[14px] font-semibold leading-7 text-slate-600">
                  “{quote}”
                </blockquote>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <Image
                    src={image}
                    alt={`${name}, ${role}`}
                    width={52}
                    height={52}
                    className="h-[52px] w-[52px] rounded-full object-cover"
                  />
                  <div>
                    <h3 className="mb-1 text-[15px] font-black text-route-ink">{name}</h3>
                    <p className="m-0 text-[11px] font-bold text-slate-500">{role}</p>
                  </div>
                </div>
              </article>
            ))}
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
              Frequently Asked Questions
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
            <span className="mb-2 block text-[11px] font-black uppercase tracking-[.15em] text-route-orange">NEED INSTANT RTO GUIDANCE?</span>
            <h2 className="mb-3 text-[27px] font-black leading-tight text-route-ink">Talk to Our Patna GPS Experts!</h2>
            <p className="mb-6 text-[13px] font-semibold leading-6 text-slate-600">
              Call now for AIS-140 VLTD compliance, Vahan portal sync, and doorstep fitting across Bihar.
            </p>
            <a
              href="tel:+918935989871"
              className="inline-flex min-h-[56px] w-full items-center justify-center gap-3 rounded-xl bg-route-orange px-5 text-[16px] font-extrabold text-white shadow-[0_14px_30px_rgba(249,115,22,.24)]"
            >
              <Phone size={21} fill="currentColor" /> Call Patna & Bihar GPS Helpline
            </a>
            <p className="mb-0 mt-4 text-[18px] font-black text-route-blue">+91 89359 89871</p>
          </aside>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
