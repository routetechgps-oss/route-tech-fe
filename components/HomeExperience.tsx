import Image from "next/image";
import Link from "next/link";
import { TrackingScene } from "./tracking-3d/TrackingScene";
import {
  ArrowRight,
  Bus,
  CheckCircle2,
  CircleGauge,
  Clock3,
  Headphones,
  MapPin,
  MapPinned,
  Navigation,
  PackageCheck,
  Phone,
  RadioTower,
  School,
  ShieldCheck,
  Smartphone,
  Store,
  Truck,
  UsersRound,
  Wrench,
} from "lucide-react";

const trustPoints = [
  { icon: ShieldCheck, title: "AIS-140 Certified", label: "Government-approved devices" },
  { icon: Truck, title: "VLTD Installation", label: "Fast fitment across Bihar" },
  { icon: RadioTower, title: "NIC / Vahan", label: "Integration support" },
  { icon: MapPin, title: "Real-time Tracking", label: "Track vehicles live 24x7" },
  { icon: Headphones, title: "Expert Support", label: "Installation and after-sales" },
  { icon: CheckCircle2, title: "100% Compliant", label: "Meets transport norms" },
];

const vehicleChoices = [
  {
    image: "/images/route-tech/home-simple-device.webp",
    alt: "AIS-140 GPS tracking device with wiring and panic button",
    icon: CircleGauge,
    title: "AIS-140 GPS Device",
    label: "For commercial vehicles",
    href: "/services/ais-140-gps-solutions-in-bihar",
  },
  {
    image: "/images/route-tech/home-simple-bus.webp",
    alt: "School bus with GPS route tracking",
    icon: School,
    title: "School Bus GPS",
    label: "Live school bus location",
    href: "/services/ais-140-gps-solutions-in-bihar",
  },
  {
    image: "/images/route-tech/home-simple-mining.webp",
    alt: "Mining tipper and excavator with GPS tracking",
    icon: Truck,
    title: "Mining GPS",
    label: "Tippers, Hyvas and machinery",
    href: "/services/mining-gps",
  },
  {
    image: "/images/route-tech/home-simple-truck.webp",
    alt: "Commercial delivery truck with live GPS tracking",
    icon: Bus,
    title: "Commercial Vehicles",
    label: "Trucks, trailers, tempos and delivery",
    href: "/services/ais-140-gps-solutions-in-bihar",
  },
];

const simpleSteps = [
  { icon: Phone, number: "1", title: "Call us", label: "Tell us your vehicle and district" },
  { icon: Wrench, number: "2", title: "Install GPS", label: "Our team fits the device" },
  { icon: Smartphone, number: "3", title: "Track on mobile", label: "Your live location starts" },
];

export function HomeExperience() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-white">
        <div className="relative min-h-[620px] w-full sm:min-h-[640px] lg:min-h-[700px]">
          <div className="absolute inset-0 overflow-hidden bg-white">
            <Image
              src="/images/route-tech/home-simple-hero.webp"
              alt="AIS-140 GPS tracking for a commercial truck across Bihar"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 1px"
              className="object-cover object-center lg:hidden"
            />
            <Image
              src="/images/route-tech/home-simple-hero-wide.png"
              alt="AIS-140 GPS tracking truck, Bihar service map and GPS device on a highway"
              fill
              priority
              sizes="(min-width: 1024px) 100vw, 1px"
              className="hidden object-cover object-center lg:block"
            />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.97)_0%,rgba(255,255,255,.9)_60%,rgba(255,255,255,.08)_100%)] sm:bg-[linear-gradient(90deg,rgba(255,255,255,.98)_0%,rgba(255,255,255,.92)_62%,rgba(255,255,255,.18)_100%)] lg:hidden" />

          <div className="relative z-10 mx-auto flex min-h-[620px] w-[calc(100%_-_24px)] max-w-[1180px] items-start py-3 sm:min-h-[640px] sm:w-[calc(100%_-_32px)] sm:py-6 lg:min-h-[700px] lg:w-[calc(100%_-_40px)] lg:items-center lg:py-0">
            <div className="max-w-[590px] rounded-2xl bg-white/74 p-3 shadow-[0_14px_36px_rgba(7,47,103,.1)] backdrop-blur-[2px] sm:rounded-3xl sm:bg-white/68 sm:p-5 lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none">
              <div className="mb-3 flex flex-wrap gap-1.5 sm:mb-4 sm:gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.1em] text-route-blue shadow-sm backdrop-blur sm:gap-2 sm:px-4 sm:py-2 sm:text-[12px] sm:tracking-[.12em]">
                  <MapPinned size={15} /> AIS-140 GPS Solutions
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50/95 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.08em] text-orange-700 shadow-sm backdrop-blur sm:gap-2 sm:px-4 sm:py-2 sm:text-[12px] sm:tracking-[.1em]">
                  <MapPin size={15} fill="currentColor" /> All 38 districts covered
                </span>
              </div>
              <h1 className="mb-3 text-[34px] font-black leading-[1.02] tracking-[-.045em] text-route-ink sm:mb-4 sm:text-[46px] lg:text-[64px]">
                <span className="mb-1.5 block text-[14px] font-black uppercase leading-none tracking-[.07em] text-route-orange sm:mb-2 sm:text-[20px] lg:text-[26px]">
                  Bihar&apos;s Most Trusted
                </span>
                AIS-140 GPS
                <span className="block text-route-blue">Solutions</span>
              </h1>
              <p className="mb-4 max-w-[530px] text-[14px] font-semibold leading-6 text-slate-600 sm:mb-6 sm:text-[17px] sm:leading-7 lg:mb-7 lg:text-[19px]">
                Complete Compliance. Complete Safety.
              </p>

              <div className="grid grid-cols-[1.18fr_.82fr] gap-2 sm:flex sm:gap-3">
                <a
                  href="tel:+918409539047"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-route-orange px-3 text-[12px] font-extrabold text-white shadow-[0_12px_26px_rgba(249,115,22,.28)] transition hover:-translate-y-0.5 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-200 sm:min-h-[54px] sm:gap-3 sm:px-6 sm:text-[15px] lg:min-h-[58px] lg:px-7 lg:text-[17px]"
                >
                  <Phone size={18} fill="currentColor" /> Request installation
                </a>
                <Link
                  href="/services"
                  className="inline-flex min-h-[48px] items-center justify-center gap-1.5 rounded-xl border-2 border-route-blue bg-white/95 px-2 text-[12px] font-extrabold text-route-blue transition hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-100 sm:min-h-[54px] sm:gap-3 sm:px-6 sm:text-[15px] lg:min-h-[58px] lg:px-7 lg:text-[16px]"
                >
                  Our solutions <ArrowRight size={17} />
                </Link>
              </div>

              <div className="mt-3 grid max-w-[570px] grid-cols-2 gap-1.5 text-[10px] font-extrabold leading-4 text-route-ink sm:mt-5 sm:gap-2 sm:text-[12px] lg:mt-6 lg:text-[13px]">
                <span className="flex items-center gap-1.5 rounded-full border border-white bg-white/95 px-2 py-1.5 shadow-[0_6px_18px_rgba(15,35,65,.12)] backdrop-blur sm:gap-2 sm:px-3.5 sm:py-2">
                  <CheckCircle2 className="shrink-0 text-route-orange" size={15} /> AIS-140 Certified Devices
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-white bg-white/95 px-2 py-1.5 shadow-[0_6px_18px_rgba(15,35,65,.12)] backdrop-blur sm:gap-2 sm:px-3.5 sm:py-2">
                  <CheckCircle2 className="shrink-0 text-route-orange" size={15} /> Government Compliant
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-white bg-white/95 px-2 py-1.5 shadow-[0_6px_18px_rgba(15,35,65,.12)] backdrop-blur sm:gap-2 sm:px-3.5 sm:py-2">
                  <CheckCircle2 className="shrink-0 text-route-orange" size={15} /> NIC / Vahan Integrated
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-white bg-white/95 px-2 py-1.5 shadow-[0_6px_18px_rgba(15,35,65,.12)] backdrop-blur sm:gap-2 sm:px-3.5 sm:py-2">
                  <CheckCircle2 className="shrink-0 text-route-orange" size={15} /> Real-time Tracking
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Route Tech GPS benefits" className="bg-route-navy py-5 text-white sm:py-6">
        <div className="mx-auto grid w-[calc(100%_-_32px)] max-w-[1180px] grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {trustPoints.map(({ icon: Icon, title, label }, index) => (
            <article
              key={title}
              className={`flex min-h-[148px] min-w-0 flex-col items-center justify-center rounded-2xl border border-white/10 border-t-2 bg-white/[.06] px-3 py-5 text-center shadow-[0_12px_30px_rgba(0,0,0,.08)] transition hover:bg-white/[.1] ${
                index % 2 ? "border-t-blue-400" : "border-t-orange-400"
              }`}
            >
              <span className="mb-4 grid h-[52px] w-[52px] shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/10 text-orange-400 shadow-[0_8px_20px_rgba(0,0,0,.1)]">
                <Icon size={26} strokeWidth={1.8} />
              </span>
              <div className="min-w-0">
                <h2 className="mb-1.5 text-[14px] font-black leading-[1.2] tracking-[-.02em] text-white">{title}</h2>
                <p className="m-0 text-[11px] font-semibold leading-4 text-blue-100">{label}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="vehicle-services" className="scroll-mt-6 bg-white py-16 sm:py-20">
        <div className="mx-auto w-[calc(100%_-_32px)] max-w-[1180px]">
          <header className="mb-9 text-center">
            <span className="mb-3 inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-[.16em] text-route-orange">
              <Truck size={19} /> Choose your vehicle
            </span>
            <h2 className="mb-3 text-[31px] font-black leading-tight tracking-[-.04em] text-route-ink sm:text-[44px]">
              Which vehicle needs GPS?
            </h2>
            <p className="mx-auto max-w-[620px] text-[16px] font-medium text-slate-600">
              Choose a photo to find the right GPS solution.
            </p>
          </header>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {vehicleChoices.map(({ image, alt, icon: Icon, title, label, href }) => (
              <Link
                href={href}
                key={title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,35,65,.08)] transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-route focus:outline-none focus:ring-4 focus:ring-blue-100"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
                  <Image src={image} alt={alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-300 group-hover:scale-[1.03]" />
                  <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-route-blue shadow-lg">
                    <Icon size={23} />
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="mb-1.5 text-[19px] font-black tracking-[-.02em] text-route-ink">{title}</h3>
                  <p className="mb-4 text-[13px] font-semibold text-slate-500">{label}</p>
                  <span className="inline-flex items-center gap-2 text-[13px] font-extrabold text-route-orange">
                    View service <ArrowRight size={17} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-6 bg-route-soft py-16 sm:py-20">
        <div className="mx-auto w-[calc(100%_-_32px)] max-w-[1050px]">
          <header className="mb-10 text-center">
            <span className="mb-3 inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-[.16em] text-route-blue">
              <Navigation size={18} /> Very easy
            </span>
            <h2 className="mb-2 text-[34px] font-black tracking-[-.04em] text-route-ink sm:text-[44px]">
              Only 3 easy steps
            </h2>
          </header>

          <div className="grid gap-4 md:grid-cols-3">
            {simpleSteps.map(({ icon: Icon, number, title, label }) => (
              <article key={number} className="relative flex items-center gap-5 rounded-2xl border border-blue-100 bg-white p-6 shadow-[0_10px_30px_rgba(15,35,65,.07)] md:flex-col md:p-8 md:text-center">
                <span className="absolute right-4 top-3 text-[46px] font-black text-blue-50">{number}</span>
                <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-blue-50 text-route-blue">
                  <Icon size={38} strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="mb-2 text-[22px] font-black text-route-ink">{title}</h3>
                  <p className="m-0 text-[14px] font-semibold leading-6 text-slate-500">{label}</p>
                </div>
                {number !== "3" && <ArrowRight className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 text-route-orange md:block" size={36} />}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="mobile-tracking" className="scroll-mt-6 overflow-hidden bg-route-navy py-16 text-white sm:py-20">
        <div className="mx-auto grid w-[calc(100%_-_32px)] max-w-[1180px] items-center gap-9 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <TrackingScene />

          <div>
            <span className="mb-3 inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-[.16em] text-orange-400">
              <Smartphone size={19} /> Your vehicle in your hand
            </span>
            <h2 className="mb-4 text-[38px] font-black leading-[1.08] tracking-[-.045em] text-white sm:text-[50px]">
              See every trip
              <span className="block text-orange-400">on your phone</span>
            </h2>
            <p className="mb-8 max-w-[520px] text-[16px] font-semibold leading-7 text-blue-100">
              Route Tech AIS-140 GPS shows your vehicle&apos;s live location, route and important alerts in one simple mobile view.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: MapPin, title: "Live location", label: "Know where it is" },
                { icon: Navigation, title: "Route history", label: "See where it went" },
                { icon: RadioTower, title: "Movement alerts", label: "Get useful updates" },
                { icon: ShieldCheck, title: "Emergency status", label: "See safety signals" },
              ].map(({ icon: Icon, title, label }) => (
                <article key={title} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm sm:p-5">
                  <span className="mb-3 grid h-11 w-11 place-items-center rounded-full bg-white text-route-blue">
                    <Icon size={22} strokeWidth={2} />
                  </span>
                  <h3 className="mb-1 text-[15px] font-black text-white sm:text-[17px]">{title}</h3>
                  <p className="m-0 text-[12px] font-semibold leading-5 text-blue-200">{label}</p>
                </article>
              ))}
            </div>

            <a
              href="tel:+918409539047"
              className="mt-7 inline-flex min-h-[54px] items-center justify-center gap-3 rounded-xl bg-route-orange px-6 text-[15px] font-extrabold text-white shadow-[0_14px_32px_rgba(249,115,22,.25)] transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300/40"
            >
              <Phone size={20} fill="currentColor" /> Ask about mobile tracking
            </a>
          </div>
        </div>
      </section>

      <section id="bihar-coverage" className="scroll-mt-6 overflow-hidden bg-route-soft py-16 sm:py-20">
        <div className="mx-auto grid w-[calc(100%_-_32px)] max-w-[1180px] items-center gap-8 lg:grid-cols-[.82fr_1.08fr_1fr] lg:gap-8">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-[.16em] text-route-orange">
              <MapPinned size={19} /> Service across Bihar
            </span>
            <h2 className="mb-6 text-[36px] font-black leading-[1.05] tracking-[-.045em] text-route-ink sm:text-[44px]">
              We serve all
              <span className="block text-route-blue">38 districts of Bihar</span>
            </h2>

            <div className="grid grid-cols-2 gap-x-5 gap-y-3 text-[13px] font-extrabold text-route-ink">
              {[
                "Patna",
                "Purnia",
                "Gaya",
                "Begusarai",
                "Muzaffarpur",
                "Jehanabad",
                "Bhagalpur",
                "Nalanda",
                "Darbhanga",
                "All 38 districts",
              ].map((district) => (
                <span key={district} className="flex items-center gap-2">
                  <CheckCircle2 className="shrink-0 text-route-blue" size={16} fill="currentColor" />
                  {district}
                </span>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/route-tech/home-simple-bihar-map.webp"
              alt="Route Tech GPS service network covering all 38 districts of Bihar"
              fill
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-contain"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 overflow-hidden rounded-3xl border border-blue-400/30 bg-route-navy p-3 text-white shadow-[0_24px_60px_rgba(7,47,103,.22)] sm:p-4">
            {[
              { icon: UsersRound, value: "5000+", label: "Happy customers" },
              { icon: PackageCheck, value: "25000+", label: "Devices installed" },
              { icon: MapPin, value: "38", label: "Districts covered" },
              { icon: Clock3, value: "24x7", label: "Support available" },
            ].map(({ icon: Icon, value, label }) => (
              <article
                key={label}
                className="flex min-h-[142px] min-w-0 flex-col items-center justify-center rounded-2xl border border-white/10 border-t-2 border-t-orange-400/70 bg-white/[.06] p-3 text-center sm:p-4"
              >
                <span className="mb-3 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/10 text-orange-400">
                  <Icon size={23} strokeWidth={1.8} />
                </span>
                <strong className="block max-w-full text-[26px] font-black leading-none tracking-[-.035em] text-orange-400 sm:text-[30px] lg:text-[27px] xl:text-[30px]">
                  {value}
                </strong>
                <span className="mt-2 block text-[11px] font-bold leading-4 text-blue-100 sm:text-[12px]">{label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-route-navy py-12 text-white">
        <div className="mx-auto grid w-[calc(100%_-_32px)] max-w-[1180px] gap-4 lg:grid-cols-3">
          <article className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-orange-500 text-white"><Phone size={30} fill="currentColor" /></span>
            <div>
              <p className="mb-1 text-[12px] font-bold text-blue-200">Need GPS?</p>
              <div className="flex flex-col leading-tight">
                <a href="tel:+918409539047" className="text-[18px] font-black text-white">+91 84095 39047</a>
                <a href="tel:+918935989871" className="text-[18px] font-black text-white">+91 89359 89871</a>
              </div>
            </div>
          </article>
          <Link href="/dealer-network" className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white text-route-blue"><Store size={30} /></span>
            <div>
              <p className="mb-1 text-[12px] font-bold text-blue-200">Want to start a business?</p>
              <span className="inline-flex items-center gap-2 text-[20px] font-black text-white">Become a dealer <ArrowRight className="transition group-hover:translate-x-1" size={20} /></span>
            </div>
          </Link>
          <Link href="/contact" className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white text-route-blue"><Headphones size={30} /></span>
            <div>
              <p className="mb-1 text-[12px] font-bold text-blue-200">Need help?</p>
              <span className="inline-flex items-center gap-2 text-[20px] font-black text-white">Get support <ArrowRight className="transition group-hover:translate-x-1" size={20} /></span>
            </div>
          </Link>
        </div>
      </section>

    </>
  );
}
