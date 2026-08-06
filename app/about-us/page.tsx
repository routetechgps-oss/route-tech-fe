import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Clock3,
  FileCheck2,
  Handshake,
  Headphones,
  MapPin,
  Navigation2,
  Phone,
  Quote,
  Route,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Route Tech | Bihar's AIS-140 GPS Partner",
  description:
    "Route Tech is a Bihar-focused GPS company providing AIS-140 and mining vehicle tracking with certified devices, professional installation and local support across all 38 districts.",
  keywords: [
    "about Route Tech",
    "GPS company Bihar",
    "AIS 140 GPS provider Bihar",
    "vehicle tracking company Patna",
    "mining GPS Bihar",
    "commercial vehicle GPS Bihar",
  ],
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About Route Tech | Bihar's AIS-140 GPS Partner",
    description:
      "A Bihar-first GPS company built around certified AIS-140 and mining tracking, professional installation and dependable local support.",
    url: "/about-us",
    type: "website",
    images: [{ url: "/images/route-tech/about-local-team.webp", width: 1600, height: 1000, alt: "The Route Tech team supporting fleet owners across Bihar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Route Tech | Bihar's GPS Partner",
    description: "Certified AIS-140 and mining GPS, professional installation and local support across Bihar.",
    images: ["/images/route-tech/about-local-team.webp"],
  },
  other: { "geo.region": "IN-BR", "geo.placename": "Bihar" },
};

const stats: Array<{ icon: LucideIcon; value: string; label: string }> = [
  { icon: MapPin, value: "38", label: "Districts served across Bihar" },
  { icon: Navigation2, value: "2", label: "Focused GPS solutions" },
  { icon: Clock3, value: "24x7", label: "Tracking & support" },
  { icon: BadgeCheck, value: "AIS-140", label: "Certified & compliant" },
];

const values: Array<{ icon: LucideIcon; title: string; text: string; tone: "blue" | "orange" }> = [
  { icon: Handshake, title: "Trust before transaction", text: "We explain the solution in straightforward language so every customer can make an informed decision.", tone: "blue" },
  { icon: FileCheck2, title: "Compliance made simple", text: "AIS-140, VLTD and NIC/Vahan requirements handled clearly, so your vehicles stay road- and rule-ready.", tone: "orange" },
  { icon: MapPin, title: "Bihar-first service", text: "Local context, district-level reach and accessible support are central to how we work.", tone: "blue" },
  { icon: Route, title: "Useful over complicated", text: "We focus on the tracking capabilities that genuinely help people operate vehicles day to day.", tone: "orange" },
  { icon: Headphones, title: "Support that continues", text: "Our relationship does not end at installation—practical guidance stays available afterwards.", tone: "blue" },
  { icon: BadgeCheck, title: "Certified & reliable", text: "Approved devices and professional fitment chosen to keep reporting in real conditions.", tone: "orange" },
];

const testimonials: Array<{ image: string; quote: string; name: string; role: string }> = [
  {
    image: "/images/route-tech/testimonial-rakesh-kumar.jpg",
    quote: "Route Tech explained everything clearly and installed our AIS-140 devices without any hassle. The tracking has made managing our trucks far easier.",
    name: "Rakesh Kumar",
    role: "Fleet owner, Patna",
  },
  {
    image: "/images/route-tech/testimonial-sanjay-singh.jpg",
    quote: "Their team understood our routes and helped with the compliance side end to end. Support has been quick every time we called.",
    name: "Sanjay Singh",
    role: "Transport operator, Gaya",
  },
  {
    image: "/images/route-tech/testimonial-imran-khan.jpg",
    quote: "We wanted reliable tracking for our school buses. Route Tech delivered a certified solution and stayed available after installation.",
    name: "Imran Khan",
    role: "School bus operator, Muzaffarpur",
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
        tone === "orange" ? "border-orange-200 bg-orange-50 text-route-orange" : "border-blue-200 bg-blue-50 text-route-blue"
      } ${sizes[size]}`}
    >
      <span
        aria-hidden="true"
        className={`absolute right-2 top-2 h-2 w-2 rounded-full ${tone === "orange" ? "bg-route-blue" : "bg-route-orange"}`}
      />
      <Icon strokeWidth={2} />
    </span>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <header className="mx-auto mb-9 max-w-[780px] text-center sm:mb-11">
      <span className="mb-3 inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-[.16em] text-route-orange">
        <span className="h-2 w-2 rounded-full bg-route-blue" />
        {eyebrow}
      </span>
      <h2 className="mb-3 text-[32px] font-black leading-[1.08] tracking-[-.04em] text-route-ink sm:text-[46px]">{title}</h2>
      {text ? <p className="m-0 text-[15px] font-semibold leading-7 text-slate-600 sm:text-[16px]">{text}</p> : null}
    </header>
  );
}

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        name: "About Route Tech",
        url: "https://www.routetechgps.com/about-us",
        description: metadata.description,
        about: {
          "@type": "LocalBusiness",
          name: "Route Tech",
          url: "https://www.routetechgps.com",
          telephone: "+91-89359-89871",
          email: "routetechgps@gmail.com",
          areaServed: { "@type": "State", name: "Bihar" },
          address: { "@type": "PostalAddress", streetAddress: "East Lakshmi Nagar, Ramkrishan Nagar", addressLocality: "Patna", addressRegion: "Bihar", postalCode: "800027", addressCountry: "IN" },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.routetechgps.com" },
          { "@type": "ListItem", position: 2, name: "About", item: "https://www.routetechgps.com/about-us" },
        ],
      },
    ],
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-blue-50/70 blur-2xl" aria-hidden="true" />
        <div className="relative mx-auto grid w-[calc(100%_-_32px)] max-w-[1180px] items-center gap-10 py-14 sm:w-[calc(100%_-_40px)] sm:py-20 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-[11px] font-black uppercase tracking-[.12em] text-route-blue shadow-sm">
                <Building2 size={16} /> About Route Tech
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/90 px-4 py-2 text-[11px] font-black uppercase tracking-[.1em] text-route-orange shadow-sm">
                <MapPin size={16} /> All 38 districts
              </span>
            </div>

            <h1 className="mb-5 text-[40px] font-black leading-[1] tracking-[-.05em] text-route-ink sm:text-[54px] lg:text-[64px]">
              Bihar&apos;s trusted
              <span className="block text-route-orange">AIS-140 GPS partner</span>
            </h1>
            <p className="mb-6 max-w-[560px] text-[15px] font-semibold leading-7 text-slate-600 sm:text-[17px]">
              Route Tech helps commercial vehicle owners and fleet teams across Bihar adopt GPS tracking with more confidence and less complexity—from a single owner-driver in Patna to fleets working across districts.
            </p>

            <div className="mb-8 grid max-w-[560px] grid-cols-2 gap-2">
              {[
                ["AIS-140 certified", ShieldCheck],
                ["Professional installation", FileCheck2],
                ["Bihar-wide coverage", MapPin],
                ["Local support team", Headphones],
              ].map(([label, Ic]) => (
                <span
                  key={label as string}
                  className="flex min-h-[46px] items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-[12px] font-extrabold text-route-ink shadow-sm"
                >
                  {(() => {
                    const I = Ic as LucideIcon;
                    return <I className="shrink-0 text-route-blue" size={17} />;
                  })()}
                  {label as string}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl bg-route-blue px-7 text-[16px] font-extrabold text-white shadow-[0_15px_34px_rgba(20,105,211,.26)] transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                Explore our services <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl border border-blue-200 bg-white px-7 text-[16px] font-extrabold text-route-blue shadow-sm transition hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-100"
              >
                Talk to us <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 shadow-[0_30px_70px_rgba(7,47,103,.18)]">
              <Image
                src="/images/route-tech/about-local-team.webp"
                alt="Route Tech team supporting a commercial fleet owner in Bihar"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-blue-100 bg-white px-5 py-4 shadow-[0_18px_44px_rgba(7,47,103,.16)]">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-route-orange text-white">
                <MapPin size={22} />
              </span>
              <div>
                <p className="m-0 text-[22px] font-black leading-none text-route-ink">38</p>
                <p className="m-0 text-[11px] font-bold text-slate-500">districts covered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section aria-label="Route Tech at a glance" className="bg-route-navy text-white">
        <div className="mx-auto grid w-[calc(100%_-_24px)] max-w-[1180px] grid-cols-2 sm:w-[calc(100%_-_40px)] lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <article
              key={label}
              className="flex min-h-[120px] items-center gap-3 border-b border-white/10 px-3 py-6 last:border-b-0 lg:border-b-0 lg:border-r lg:px-6 lg:last:border-r-0"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-orange-400">
                <Icon size={22} />
              </span>
              <div>
                <p className="m-0 text-[24px] font-black leading-none tracking-[-.02em] text-white">{value}</p>
                <p className="m-0 mt-1 text-[11px] font-semibold leading-4 text-blue-200">{label}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Story & mission */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid w-[calc(100%_-_32px)] max-w-[1180px] gap-10 sm:w-[calc(100%_-_40px)] lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-14">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-[.16em] text-route-orange">
              <span className="h-2 w-2 rounded-full bg-route-blue" /> Who we are
            </span>
            <h2 className="mb-5 text-[30px] font-black leading-[1.1] tracking-[-.04em] text-route-ink sm:text-[42px]">
              Built around the realities of vehicles on Bihar&apos;s roads.
            </h2>
            <p className="mb-4 text-[17px] font-bold leading-7 text-route-navy sm:text-[19px]">
              Route Tech is a GPS solutions company focused on commercial transport and mining operations across Bihar.
            </p>
            <p className="mb-4 text-[14px] font-semibold leading-7 text-slate-600 sm:text-[15px]">
              Our work goes beyond supplying a tracking device. We help customers understand what suits their vehicle, coordinate professional fitment and get comfortable with the tracking experience.
            </p>
            <p className="m-0 text-[14px] font-semibold leading-7 text-slate-600 sm:text-[15px]">
              That practical, local approach shapes every conversation—from a single owner-driver in Patna to a growing fleet working across districts. We keep compliance clear, installation dependable and support close.
            </p>
          </div>

          <aside className="relative overflow-hidden rounded-3xl bg-route-navy p-8 text-white shadow-route sm:p-10">
            <span className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-orange-400">
              <Navigation2 size={28} />
            </span>
            <span className="mb-3 block text-[11px] font-black uppercase tracking-[.16em] text-orange-300">Our mission</span>
            <blockquote className="m-0 text-[20px] font-black leading-8 tracking-[-.01em] text-white sm:text-[24px]">
              “Make dependable vehicle visibility accessible to every commercial fleet in Bihar.”
            </blockquote>
            <p className="mb-0 mt-5 text-[13px] font-semibold leading-6 text-blue-200">
              We are building Route Tech one clear installation, one supported customer and one safer, better-informed fleet at a time.
            </p>
          </aside>
        </div>
      </section>

      {/* Values */}
      <section className="bg-route-soft py-16 sm:py-20">
        <div className="mx-auto w-[calc(100%_-_32px)] max-w-[1180px] sm:w-[calc(100%_-_40px)]">
          <SectionHeading eyebrow="What guides us" title="Tracking technology should feel clear and useful." />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon, title, text, tone }) => (
              <article
                key={title}
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-[0_12px_34px_rgba(7,47,103,.07)]"
              >
                <IconBadge icon={icon} tone={tone} size="md" />
                <h3 className="mb-2 mt-5 text-[17px] font-black leading-6 text-route-ink sm:text-[19px]">{title}</h3>
                <p className="m-0 text-[13px] font-semibold leading-6 text-slate-500 sm:text-[14px]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-[calc(100%_-_32px)] max-w-[1180px] sm:w-[calc(100%_-_40px)]">
          <SectionHeading eyebrow="Customer stories" title="Trusted by fleets across Bihar." />
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
                <blockquote className="m-0 flex-1 text-[14px] font-semibold leading-7 text-slate-600">“{quote}”</blockquote>
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

      {/* Closing CTA */}
      <section className="bg-route-soft py-16 sm:py-20">
        <div className="mx-auto grid w-[calc(100%_-_32px)] max-w-[1180px] gap-7 overflow-hidden rounded-3xl bg-route-navy p-8 text-white shadow-route sm:w-[calc(100%_-_40px)] sm:p-10 lg:grid-cols-[1.3fr_auto] lg:items-center lg:p-12">
          <div className="flex items-start gap-4">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white text-route-orange">
              <Truck size={32} />
            </span>
            <div>
              <h2 className="mb-2 text-[27px] font-black leading-tight text-white sm:text-[34px]">Ready to put your fleet on the map?</h2>
              <p className="m-0 max-w-[540px] text-[13px] font-semibold leading-6 text-blue-200 sm:text-[14px]">
                Talk to Route Tech about AIS-140 or mining GPS—device selection, installation and a clear quote for your vehicles in Bihar.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a
              href="tel:+918935989871"
              className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl bg-route-orange px-6 text-[15px] font-extrabold text-white shadow-[0_14px_30px_rgba(249,115,22,.24)]"
            >
              <Phone size={19} fill="currentColor" /> +91 89359 89871
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/[.06] px-6 text-[15px] font-extrabold text-white transition hover:bg-white/[.12]"
            >
              Send an enquiry <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
