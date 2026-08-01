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
  title: "AIS-140 GPS in Bihar | Certified Device & Installation",
  description:
    "Install AIS-140 certified GPS in Bihar with Route Tech. Get NIC/Vahan integration, VLTD registration support, panic-button compatibility and 24x7 live vehicle tracking across all 38 districts.",
  keywords: [
    "AIS 140 GPS Bihar",
    "AIS-140 certified GPS device Bihar",
    "AIS 140 GPS installation Bihar",
    "VLTD registration Bihar",
    "NIC Vahan GPS integration",
    "commercial vehicle GPS Bihar",
    "school bus GPS Bihar",
    "AIS 140 GPS Patna",
  ],
  alternates: { canonical: "/services/ais-140-gps-solutions-in-bihar" },
  openGraph: {
    title: "AIS-140 GPS in Bihar | Route Tech",
    description:
      "Certified AIS-140 GPS installation, NIC/Vahan integration and live tracking support across all 38 districts of Bihar.",
    url: "/services/ais-140-gps-solutions-in-bihar",
    type: "website",
    images: [
      {
        url: "/images/route-tech/ais140-hero-bihar.jpg",
        width: 2200,
        height: 1238,
        alt: "AIS-140 GPS solution for trucks and school buses across Bihar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIS-140 GPS in Bihar | Route Tech",
    description: "Certified AIS-140 GPS installation and tracking support across Bihar.",
    images: ["/images/route-tech/ais140-hero-bihar.jpg"],
  },
  other: { "geo.region": "IN-BR", "geo.placename": "Bihar" },
};

const features: Array<{ icon: LucideIcon; title: string; text: string; tone: "blue" | "orange" }> = [
  {
    icon: ShieldCheck,
    title: "AIS-140 Certified",
    text: "All devices are AIS-140 certified and approved by the Government of India.",
    tone: "blue",
  },
  {
    icon: BellRing,
    title: "Panic Button",
    text: "Emergency SOS button for driver safety and instant alerts.",
    tone: "orange",
  },
  {
    icon: Fuel,
    title: "Fuel Monitoring",
    text: "Monitor fuel usage, theft alerts and refills in real time.",
    tone: "blue",
  },
  {
    icon: Satellite,
    title: "Real-Time Tracking",
    text: "Live tracking with 24x7 real-time updates on web and mobile.",
    tone: "orange",
  },
  {
    icon: MapPinned,
    title: "Geo Fence",
    text: "Set safe zones and get instant alerts on boundary breach.",
    tone: "blue",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    text: "Our support team is always ready to help you, 24x7.",
    tone: "orange",
  },
];

const reasons: Array<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: Wrench, title: "Fast Installation", text: "Quick and hassle-free installation across Bihar." },
  { icon: MapPin, title: "Bihar Wide Service", text: "Service network in all 38 districts of Bihar." },
  { icon: FileCheck2, title: "Government Compliance", text: "100% compliant with AIS-140 and VLTD regulations." },
  { icon: UsersRound, title: "Expert Team", text: "Trained professionals with deep industry experience." },
  { icon: BadgeCheck, title: "Device Warranty", text: "Reliable devices with up to 3 years warranty." },
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
    alt: "Yellow school bus using AIS-140 GPS tracking in Bihar",
    icon: GraduationCap,
    title: "School Bus",
    text: "Certified tracking for student transport",
  },
  {
    image: "/images/route-tech/ais140-industry-mining.jpg",
    alt: "Mining tipper vehicle operating with GPS tracking in Bihar",
    icon: Warehouse,
    title: "Mining",
    text: "GPS visibility for heavy equipment",
  },
  {
    image: "/images/route-tech/ais140-industry-commercial-truck.jpg",
    alt: "Commercial cargo truck using AIS-140 GPS in Bihar",
    icon: Truck,
    title: "Commercial Vehicles",
    text: "Live tracking for goods vehicles",
  },
  {
    image: "/images/route-tech/ais140-industry-ambulance.jpg",
    alt: "Ambulance using AIS-140 GPS tracking in Bihar",
    icon: Ambulance,
    title: "Ambulance",
    text: "Location visibility for emergency fleets",
  },
  {
    image: "/images/route-tech/ais140-industry-passenger-bus.jpg",
    alt: "Passenger coach bus using AIS-140 GPS in Bihar",
    icon: BusFront,
    title: "Passenger Transport",
    text: "Certified tracking for buses and cabs",
  },
];

const steps: Array<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: ClipboardCheck, title: "Order Placed", text: "Place your order with our team." },
  { icon: Wrench, title: "Device Installation", text: "Quick installation by our experts." },
  { icon: FileCheck2, title: "NIC Registration", text: "We handle NIC registration for you." },
  { icon: MonitorSmartphone, title: "Vehicle Live", text: "Your vehicle is now live and trackable 24x7." },
];

const dealerBenefits: Array<{ icon: LucideIcon; title: string }> = [
  { icon: IndianRupee, title: "Attractive Margins" },
  { icon: Megaphone, title: "Marketing Support" },
  { icon: UsersRound, title: "Training & Support" },
  { icon: Clock3, title: "Timely Payout" },
];

const testimonials = [
  {
    image: "/images/route-tech/testimonial-rakesh-kumar.jpg",
    quote: "Route Tech provided excellent AIS-140 devices and installation. Their team is very professional and supportive.",
    name: "Rakesh Kumar",
    role: "Transporter, Patna",
  },
  {
    image: "/images/route-tech/testimonial-sanjay-singh.jpg",
    quote: "Best service in Bihar! NIC registration and installation was done very smoothly.",
    name: "Sanjay Singh",
    role: "Bus Operator, Gaya",
  },
  {
    image: "/images/route-tech/testimonial-imran-khan.jpg",
    quote: "Reliable devices, perfect tracking and great after-sales support.",
    name: "Imran Khan",
    role: "Logistics Owner, Muzaffarpur",
  },
];

const faq = [
  {
    q: "What is AIS-140 and why is it required?",
    a: "AIS-140 is an Indian standard for Vehicle Location Tracking Devices used in eligible commercial and passenger vehicles. It supports continuous tracking and safety functions such as panic-button input.",
  },
  {
    q: "Are your devices AIS-140 certified?",
    a: "Route Tech supplies certified AIS-140 GPS devices selected for eligible commercial, school and passenger transport requirements.",
  },
  {
    q: "Do you provide NIC / Vahan integration?",
    a: "Yes. Route Tech helps with device mapping and the required NIC/Vahan registration process for supported vehicle categories.",
  },
  {
    q: "How long does installation take?",
    a: "Most standard installations are completed during one scheduled technician visit. Exact timing depends on the vehicle and fitment location.",
  },
  {
    q: "Which vehicles require AIS-140 GPS?",
    a: "Common use cases include commercial trucks, school buses, passenger buses, taxis, ambulances and other eligible transport vehicles.",
  },
  {
    q: "Do you provide support after installation?",
    a: "Yes. Route Tech provides responsive after-sales support for device access, live tracking, alerts and installation-related questions.",
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
          alt="AIS-140 GPS solution for a commercial truck and school bus across Bihar"
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
                <ShieldCheck size={16} /> Bihar&apos;s trusted AIS-140 partner
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/90 px-4 py-2 text-[11px] font-black uppercase tracking-[.1em] text-route-orange shadow-sm backdrop-blur">
                <MapPin size={16} /> All 38 districts
              </span>
            </div>

            <h1 className="mb-5 text-[43px] font-black leading-[.98] tracking-[-.055em] text-route-ink sm:text-[60px] lg:text-[74px]">
              AIS140 GPS
              <span className="block text-route-orange">Solutions</span>
            </h1>
            <p className="mb-3 text-[20px] font-black leading-7 text-route-navy sm:text-[24px]">
              for Government Compliance
            </p>
            <p className="mb-6 max-w-[590px] text-[15px] font-semibold leading-7 text-slate-600 sm:text-[17px]">
              Complete AIS140 compliant tracking solutions for commercial vehicles, school buses, mining equipment and transport businesses across Bihar.
            </p>

            <div className="mb-8 grid max-w-[610px] grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                ["Certified VLTD Devices", ShieldCheck],
                ["NIC Integration", FileCheck2],
                ["24x7 Tracking", Satellite],
                ["Expert Installation", Wrench],
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
                Request Demo <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[58px] items-center justify-center gap-3 rounded-xl border border-blue-200 bg-white/90 px-7 text-[16px] font-extrabold text-route-blue shadow-sm backdrop-blur transition hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-100"
              >
                Get Quote <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="AIS-140 service assurance" className="bg-route-navy text-white">
        <div className="mx-auto grid w-[calc(100%_-_24px)] max-w-[1180px] grid-cols-1 sm:w-[calc(100%_-_40px)] sm:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "AIS140", text: "Certified Devices" },
            { icon: FileCheck2, title: "NIC / Vahan", text: "Integrated" },
            { icon: FileCheck2, title: "100% Govt.", text: "Compliant" },
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
            eyebrow="Powerful features"
            title="Powerful Features. Complete Compliance."
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
            title="Why Choose Route Tech?"
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
            title="Industries We Serve"
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
            title="Our Simple Installation Process"
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
                Become Our Dealer Partner
              </h2>
              <p className="m-0 max-w-[500px] text-[13px] font-semibold leading-6 text-blue-200 sm:text-[14px]">
                Join Route Tech and grow your business with India&apos;s most trusted AIS140 GPS solutions.
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
            Partner With Us <ArrowRight size={19} />
          </Link>
        </div>
      </section>

      <section id="testimonials" className="bg-route-soft py-16 sm:py-20">
        <div className="mx-auto w-[calc(100%_-_32px)] max-w-[1180px]">
          <SectionHeading eyebrow="Customer stories" title="What Our Clients Say" />

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
            <span className="mb-2 block text-[11px] font-black uppercase tracking-[.15em] text-route-orange">Still have questions?</span>
            <h2 className="mb-3 text-[27px] font-black leading-tight text-route-ink">We&apos;re here to help!</h2>
            <p className="mb-6 text-[13px] font-semibold leading-6 text-slate-600">
              Call us now for device, installation and registration support.
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
