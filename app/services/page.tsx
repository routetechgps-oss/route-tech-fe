import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bus,
  Check,
  ChevronDown,
  Headphones,
  MapPin,
  Phone,
  ShieldCheck,
  Smartphone,
  Truck,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AIS-140 & Mining GPS Services in Bihar",
  description:
    "Explore Route Tech AIS-140 GPS for commercial vehicles and mining GPS for trucks in Bihar. Compare solutions, installation and support across all 38 districts.",
  keywords: [
    "AIS 140 GPS service Bihar",
    "mining GPS tracker Bihar",
    "truck GPS Bihar",
    "school bus GPS Bihar",
    "ambulance GPS Bihar",
    "commercial vehicle tracker Patna",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "AIS-140 & Mining GPS Services in Bihar | Route Tech",
    description: "Choose the right GPS solution for commercial, passenger and mining vehicles across Bihar.",
    url: "/services",
    type: "website",
    images: [
      {
        url: "/images/route-tech/site-social.jpg",
        width: 1731,
        height: 909,
        alt: "Route Tech GPS services for commercial vehicles across Bihar",
      },
    ],
  },
};

const solutions = [
  {
    href: "/services/ais-140-gps-solutions-in-bihar",
    number: "01",
    eyebrow: "For commercial vehicles",
    title: "AIS-140 GPS in Bihar",
    description:
      "Certified GPS for trucks, buses, school vehicles, ambulances, taxis and eligible passenger fleets.",
    image: "/images/route-tech/home-installation.webp",
    alt: "Technician installing an AIS-140 GPS device inside a commercial vehicle in Bihar",
    points: ["AIS-140 certified device", "NIC and Vahan integration", "Panic-button support", "Live mobile tracking"],
    cta: "View AIS-140 service",
    accent: "blue",
  },
  {
    href: "/services/mining-gps",
    number: "02",
    eyebrow: "For mining vehicles",
    title: "Mining GPS in Bihar",
    description:
      "Rugged tracking for tippers, dumpers, Hyvas and heavy vehicles working across mines and material routes.",
    image: "/images/route-tech/home-mining-story.webp",
    alt: "Heavy mining tipper operating with GPS tracking in a quarry",
    points: ["Rugged GPS hardware", "Operating-zone geofences", "Trip and route history", "Multi-vehicle tracking"],
    cta: "View mining GPS service",
    accent: "orange",
  },
];

const vehicleMatches = [
  {
    image: "/images/route-tech/service-vehicle-truck.jpg",
    alt: "Commercial truck or tempo for AIS-140 GPS tracking in Bihar",
    title: "Truck or tempo",
    answer: "AIS-140 GPS",
  },
  {
    image: "/images/route-tech/service-vehicle-passenger-bus.jpg",
    alt: "Passenger bus for AIS-140 GPS tracking in Bihar",
    title: "Passenger bus",
    answer: "AIS-140 GPS",
  },
  {
    image: "/images/route-tech/service-vehicle-school-bus.jpg",
    alt: "Yellow school bus for AIS-140 GPS tracking in Bihar",
    title: "School bus",
    answer: "AIS-140 GPS",
  },
  {
    image: "/images/route-tech/service-vehicle-ambulance.jpg",
    alt: "Ambulance for AIS-140 GPS tracking in Bihar",
    title: "Ambulance",
    answer: "AIS-140 GPS",
  },
  {
    image: "/images/route-tech/service-vehicle-mining-tipper.jpg",
    alt: "Mining tipper or dumper for GPS tracking in Bihar",
    title: "Tipper or dumper",
    answer: "Mining GPS",
  },
];

const faq = [
  {
    q: "What GPS solutions does Route Tech offer in Bihar?",
    a: "Route Tech provides AIS-140 certified GPS for commercial and passenger vehicles, plus mining GPS for tippers, dumpers and heavy fleets. Both include installation coordination and local support.",
  },
  {
    q: "Which GPS is right for my vehicle?",
    a: "Commercial trucks, buses, school vehicles, ambulances and eligible passenger fleets generally use AIS-140 GPS. Mining GPS is designed for tippers, dumpers and heavy vehicles working around mines, quarries and material routes.",
  },
  {
    q: "Can I track my vehicle on my phone?",
    a: "Yes. After installation and activation, you can view the vehicle's live location and supported tracking information through the mobile tracking experience.",
  },
  {
    q: "Do you provide installation across Bihar?",
    a: "Yes. Route Tech coordinates installation and support across all 38 districts of Bihar. Share your vehicle type and district to confirm availability.",
  },
];

export default function Services() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <section className="relative isolate min-h-[570px] overflow-hidden bg-route-navy text-white">
        <Image
          src="/images/route-tech/home-command-aerial.webp"
          alt="Commercial trucks travelling on a Bihar highway"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,32,73,.96)_0%,rgba(5,32,73,.86)_42%,rgba(5,32,73,.28)_78%,rgba(5,32,73,.18)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[570px] w-[calc(100%_-_40px)] max-w-[1180px] items-center py-16">
          <div className="max-w-[680px]">
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[12px] font-black uppercase tracking-[.13em] text-blue-100 backdrop-blur">
                <MapPin size={16} /> GPS services in Bihar
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-500/15 px-4 py-2 text-[12px] font-black uppercase tracking-[.1em] text-orange-300 backdrop-blur">
                <ShieldCheck size={16} /> All 38 districts
              </span>
            </div>

            <h1 className="mb-5 text-[42px] font-black leading-[1.03] tracking-[-.05em] text-white sm:text-[58px] lg:text-[72px]">
              Choose the right GPS
              <span className="block text-orange-400">for your vehicle</span>
            </h1>
            <p className="mb-8 max-w-[610px] text-[17px] font-semibold leading-7 text-blue-100 sm:text-[19px]">
              Specialized AIS-140 GPS for commercial vehicles and Mining GPS for tippers and heavy fleets across Bihar.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+918409539047"
                className="inline-flex min-h-[58px] items-center justify-center gap-3 rounded-xl bg-route-orange px-7 text-[17px] font-extrabold text-white shadow-[0_16px_34px_rgba(249,115,22,.28)] transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300/40"
              >
                <Phone size={22} fill="currentColor" /> Call for help
              </a>
              <a
                href="#gps-solutions"
                className="inline-flex min-h-[58px] items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/10 px-7 text-[16px] font-extrabold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/20"
              >
                Explore GPS services <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Route Tech service benefits" className="bg-route-navy text-white">
        <div className="mx-auto grid w-[calc(100%_-_32px)] max-w-[1180px] grid-cols-2 py-3 sm:grid-cols-4 lg:py-0">
          {[
            { icon: ShieldCheck, title: "Certified", label: "AIS-140 devices" },
            { icon: Wrench, title: "Installed", label: "Professional fitment" },
            { icon: Smartphone, title: "Track live", label: "See it on mobile" },
            { icon: Headphones, title: "Local help", label: "Bihar-based support" },
          ].map(({ icon: Icon, title, label }) => (
            <article
              key={title}
              className="flex min-h-[118px] items-center gap-3 border-white/10 px-3 py-5 max-sm:border-b sm:flex-col sm:justify-center sm:border-r sm:text-center"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-orange-400">
                <Icon size={23} />
              </span>
              <div>
                <h2 className="mb-1 text-[14px] font-black text-white">{title}</h2>
                <p className="m-0 text-[11px] font-semibold text-blue-200">{label}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="gps-solutions" className="scroll-mt-6 bg-white py-16 sm:py-20">
        <div className="mx-auto w-[calc(100%_-_32px)] max-w-[1180px]">
          <header className="mx-auto mb-10 max-w-[720px] text-center">
            <span className="mb-3 inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-[.16em] text-route-orange">
              <Truck size={18} /> Choose your GPS
            </span>
            <h2 className="mb-3 text-[34px] font-black leading-tight tracking-[-.04em] text-route-ink sm:text-[48px]">
              GPS solutions built for Bihar
            </h2>
            <p className="text-[16px] font-semibold leading-7 text-slate-600">
              Choose the service that matches your vehicle and the work it does.
            </p>
          </header>

          <div className="grid gap-6 lg:grid-cols-2">
            {solutions.map((solution) => (
              <article
                key={solution.href}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_48px_rgba(15,35,65,.1)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={solution.image}
                    alt={solution.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <span
                    className={`absolute left-5 top-5 rounded-full px-4 py-2 text-[12px] font-black uppercase tracking-[.12em] text-white shadow-lg ${
                      solution.accent === "blue" ? "bg-route-blue" : "bg-route-orange"
                    }`}
                  >
                    Service {solution.number}
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <span className="mb-2 block text-[12px] font-black uppercase tracking-[.14em] text-route-orange">
                    {solution.eyebrow}
                  </span>
                  <h3 className="mb-3 text-[28px] font-black tracking-[-.035em] text-route-ink sm:text-[34px]">
                    {solution.title}
                  </h3>
                  <p className="mb-6 text-[15px] font-semibold leading-7 text-slate-600">{solution.description}</p>

                  <ul className="mb-7 grid gap-3 sm:grid-cols-2">
                    {solution.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-[13px] font-bold text-slate-700">
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-orange-50 text-route-orange">
                          <Check size={15} strokeWidth={3} />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={solution.href}
                    className="inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-xl bg-route-blue px-6 text-[15px] font-extrabold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100 sm:w-auto"
                  >
                    {solution.cta} <ArrowRight size={19} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-route-soft py-16 sm:py-20">
        <div className="mx-auto w-[calc(100%_-_32px)] max-w-[1180px]">
          <header className="mx-auto mb-9 max-w-[700px] text-center">
            <span className="mb-3 inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-[.16em] text-route-blue">
              <Bus size={18} /> Find your vehicle
            </span>
            <h2 className="mb-3 text-[34px] font-black tracking-[-.04em] text-route-ink sm:text-[46px]">
              Which GPS should you choose?
            </h2>
            <p className="text-[15px] font-semibold text-slate-600">Find your vehicle below. We will confirm the final device before installation.</p>
          </header>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {vehicleMatches.map(({ image, alt, title, answer }) => (
              <article
                key={title}
                className="group overflow-hidden rounded-2xl border border-blue-100 bg-white text-center shadow-[0_10px_28px_rgba(15,35,65,.07)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-blue-50">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="mb-2 text-[15px] font-black text-route-ink sm:text-[16px]">{title}</h3>
                  <p className="m-0 text-[11px] font-extrabold text-route-orange sm:text-[12px]">{answer}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-8 flex max-w-[720px] flex-col items-center justify-between gap-4 rounded-2xl bg-route-navy p-6 text-center text-white sm:flex-row sm:text-left">
            <div>
              <h3 className="mb-1 text-[20px] font-black text-white">Still not sure?</h3>
              <p className="m-0 text-[13px] font-semibold text-blue-200">Tell us your vehicle. We will explain the right option.</p>
            </div>
            <a
              href="tel:+918409539047"
              className="inline-flex min-h-[50px] shrink-0 items-center justify-center gap-2 rounded-xl bg-route-orange px-5 text-[14px] font-extrabold text-white"
            >
              <Phone size={18} fill="currentColor" /> Call Route Tech
            </a>
          </div>
        </div>
      </section>

      <section id="process" className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-[calc(100%_-_32px)] max-w-[1050px]">
          <header className="mb-10 text-center">
            <span className="mb-3 inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-[.16em] text-route-orange">
              <Wrench size={18} /> Easy installation
            </span>
            <h2 className="text-[34px] font-black tracking-[-.04em] text-route-ink sm:text-[46px]">Start tracking in 3 steps</h2>
          </header>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: Phone, number: "1", title: "Call us", text: "Tell us your vehicle and district" },
              { icon: Wrench, number: "2", title: "Fit the GPS", text: "Our team installs the right device" },
              { icon: Smartphone, number: "3", title: "Track on mobile", text: "See your vehicle's live location" },
            ].map(({ icon: Icon, number, title, text }) => (
              <article
                key={number}
                className="relative flex items-center gap-5 rounded-2xl border border-slate-200 bg-route-soft p-6 md:flex-col md:p-8 md:text-center"
              >
                <span className="absolute right-4 top-3 text-[46px] font-black text-blue-100">{number}</span>
                <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-white text-route-blue shadow-sm">
                  <Icon size={36} />
                </span>
                <div>
                  <h3 className="mb-2 text-[21px] font-black text-route-ink">{title}</h3>
                  <p className="m-0 text-[13px] font-semibold leading-6 text-slate-500">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-6 bg-route-soft py-16 sm:py-20">
        <div className="mx-auto grid w-[calc(100%_-_32px)] max-w-[1100px] gap-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-14">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-[.16em] text-route-blue">
              <Headphones size={18} /> Simple answers
            </span>
            <h2 className="mb-4 text-[36px] font-black leading-[1.08] tracking-[-.04em] text-route-ink sm:text-[46px]">
              GPS service questions
            </h2>
            <p className="mb-6 text-[15px] font-semibold leading-7 text-slate-600">
              Quick answers for vehicle owners and fleet operators across Bihar.
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:+918409539047" className="inline-flex items-center gap-2 text-[15px] font-black text-route-orange">
                Call +91 84095 39047 <ArrowRight size={18} />
              </a>
              <a href="tel:+918935989871" className="inline-flex items-center gap-2 text-[15px] font-black text-route-orange">
                Call +91 89359 89871 <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            {faq.map(({ q, a }, index) => (
              <details
                key={q}
                open={index === 0}
                className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_8px_24px_rgba(15,35,65,.06)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-black leading-6 text-route-ink sm:text-[17px]">
                  {q}
                  <ChevronDown className="shrink-0 text-route-blue transition group-open:rotate-180" size={21} />
                </summary>
                <p className="mb-0 mt-4 border-t border-slate-100 pt-4 text-[14px] font-semibold leading-7 text-slate-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-route-navy py-14 text-white">
        <div className="mx-auto flex w-[calc(100%_-_32px)] max-w-[1000px] flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
          <div>
            <span className="mb-2 block text-[12px] font-black uppercase tracking-[.16em] text-orange-400">Ready to install?</span>
            <h2 className="mb-2 text-[31px] font-black tracking-[-.035em] text-white sm:text-[40px]">Tell us your vehicle and district</h2>
            <p className="m-0 text-[15px] font-semibold text-blue-200">Get a clear GPS recommendation from Route Tech.</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="tel:+918409539047"
              className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl bg-route-orange px-6 text-[16px] font-extrabold text-white"
            >
              <Phone size={21} fill="currentColor" /> Call now
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/10 px-6 text-[16px] font-extrabold text-white"
            >
              Contact us <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
