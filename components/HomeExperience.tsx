import Image from "next/image";
import Link from "next/link";
import { TrackingScene } from "./tracking-3d/TrackingScene";
import { districtCoveragePath } from "@/data/bihar-districts";
import {
  ArrowRight,
  Bus,
  Car,
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
  { icon: ShieldCheck, title: "Govt Approved AIS 140 GPS", label: "Certified VLTD Device for RTO" },
  { icon: Truck, title: "Same Day VLTD Installation", label: "Free Doorstep Service in Patna & Bihar" },
  { icon: RadioTower, title: "Vahan & NIC Portal Sync", label: "Instant RTO Certificate Upload" },
  { icon: MapPin, title: "Live GPS Vehicle Tracking", label: "24/7 App & Panic Button Alert" },
  { icon: Headphones, title: "24/7 Technical Support", label: "Free Lifetime App & Service Support" },
  { icon: CheckCircle2, title: "100% RTO Pass Guarantee", label: "Complies with Bihar Transport Norms" },
];

const vehicleChoices = [
  {
    image: "/images/route-tech/home-simple-device.webp",
    alt: "AIS-140 VLTD GPS Device with Panic Button for Commercial Vehicles",
    icon: CircleGauge,
    title: "AIS-140 VLTD GPS Tracker",
    label: "Mandatory RTO Approved Device with Panic Button",
    cta: "Explore AIS-140 Devices",
    href: "/services/ais-140-gps-solutions-in-bihar",
  },
  {
    image: "/images/route-tech/home-simple-bus.webp",
    alt: "GPS Tracking System for School Buses in Patna Bihar",
    icon: School,
    title: "School Bus GPS Tracker",
    label: "Live Tracking, RFID Attendance & Parent Mobile App",
    cta: "Get School Bus GPS Quote",
    href: "/services/ais-140-gps-solutions-in-bihar",
  },
  {
    image: "/images/route-tech/home-simple-mining.webp",
    alt: "Heavy Machinery Mining Tipper Hyva GPS Tracker Device",
    icon: Truck,
    title: "Mining & Heavy Vehicle GPS",
    label: "For Tippers, Hyva, Excavators & Dumper Trucks",
    cta: "View Mining GPS Solutions",
    href: "/services/mining-gps",
  },
  {
    image: "/images/route-tech/home-simple-truck.webp",
    alt: "Commercial Truck Logistics Fleet GPS Tracking System",
    icon: Bus,
    title: "Truck & Fleet GPS Solutions",
    label: "For Trucks, Trailers, Pickups, Tempos & Logistics",
    cta: "Explore Truck & Fleet GPS",
    href: "/services/ais-140-gps-solutions-in-bihar",
  },
  {
    image: "/images/route-tech/home-simple-taxi-gps.png",
    alt: "RTO approved GPS tracking system for taxis and commercial cabs in Bihar",
    icon: Car,
    title: "Taxis/Cabs GPS",
    label: "Mandatory RTO Approved GPS for Taxis/Cabs",
    cta: "Explore Commercial Solutions",
    href: "/services/ais-140-gps-solutions-in-bihar",
  },
];

const simpleSteps = [
  {
    icon: Phone,
    iconLabel: "Call for GPS Installation in Patna",
    number: "1",
    title: "Contact Us & Get Quote",
    label: "Share your vehicle details & location.",
  },
  {
    icon: Wrench,
    iconLabel: "AIS 140 VLTD Device Installation Service",
    number: "2",
    title: "Doorstep VLTD Installation",
    label: "Our expert technician installs the AIS-140 device at your location.",
  },
  {
    icon: Smartphone,
    iconLabel: "Vahan Portal Sync and Live Mobile Tracking App",
    number: "3",
    title: "Instant RTO Certificate & Live Tracking",
    label: "Get Vahan portal sync certificate & start live mobile tracking.",
  },
];

export function HomeExperience() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-white">
        <div className="relative min-h-[620px] w-full sm:min-h-[640px] lg:min-h-[700px]">
          <div className="absolute inset-0 overflow-hidden bg-white">
            <Image
              src="/images/route-tech/home-simple-hero.webp"
              alt="AIS-140 GPS Tracker Device for Commercial Vehicles in Bihar Vahan Approved"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 1px"
              className="object-cover object-center lg:hidden"
            />
            <Image
              src="/images/route-tech/vltd-gps-tracker-bihar.webp"
              alt="AIS-140 GPS Tracker Device for Commercial Vehicles in Bihar Vahan Approved"
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
                  <MapPinned size={15} /> VLTD GPS Solutions
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50/95 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.08em] text-orange-700 shadow-sm backdrop-blur sm:gap-2 sm:px-4 sm:py-2 sm:text-[12px] sm:tracking-[.1em]">
                  <MapPin size={15} fill="currentColor" /> All 38 districts covered
                </span>
              </div>
              <h1 className="mb-3 text-[34px] font-black leading-[1.02] tracking-[-.045em] text-route-ink sm:mb-4 sm:text-[46px] lg:text-[64px]">
                Best AIS 140 GPS Tracker{" "}
                <span className="block text-route-blue">In Bihar</span>
              </h1>
              <p className="mb-4 max-w-[530px] text-[14px] font-semibold leading-6 text-slate-600 sm:mb-6 sm:text-[17px] sm:leading-7 lg:mb-7 lg:text-[19px]">
                Government Approved. Complete Compliance. Complete Safety.
              </p>

              <div className="grid grid-cols-[1.18fr_.82fr] gap-2 sm:flex sm:gap-3">
                <a
                  href="tel:+918935989871"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-route-orange px-3 text-[12px] font-extrabold text-white shadow-[0_12px_26px_rgba(249,115,22,.28)] transition hover:-translate-y-0.5 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-200 sm:min-h-[54px] sm:gap-3 sm:px-6 sm:text-[15px] lg:min-h-[58px] lg:px-7 lg:text-[17px]"
                >
                  <Phone size={18} fill="currentColor" />
                  <span className="flex flex-col items-start leading-tight">
                    <span>Get Best Price Quote</span>
                    <span className="text-[10px] font-bold opacity-90 sm:text-[11px]">Request installation</span>
                  </span>
                </a>
                <Link
                  href="/services"
                  className="inline-flex min-h-[48px] items-center justify-center gap-1.5 rounded-xl border-2 border-route-blue bg-white/95 px-2 text-[12px] font-extrabold text-route-blue transition hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-100 sm:min-h-[54px] sm:gap-3 sm:px-6 sm:text-[15px] lg:min-h-[58px] lg:px-7 lg:text-[16px]"
                >
                  <span className="flex flex-col items-start leading-tight">
                    <span>Instant RTO Approval</span>
                    <span className="text-[10px] font-bold opacity-75 sm:text-[11px]">Our solutions</span>
                  </span>
                  <ArrowRight size={17} />
                </Link>
              </div>

              <div className="mt-3 grid max-w-[570px] grid-cols-2 gap-1.5 text-[10px] font-extrabold leading-4 text-route-ink sm:mt-5 sm:gap-2 sm:text-[12px] lg:mt-6 lg:text-[13px]">
                <span className="flex items-center gap-1.5 rounded-full border border-white bg-white/95 px-2 py-1.5 shadow-[0_6px_18px_rgba(15,35,65,.12)] backdrop-blur sm:gap-2 sm:px-3.5 sm:py-2">
                  <CheckCircle2 className="shrink-0 text-route-orange" size={15} /> Vahan Portal Approved Device
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-white bg-white/95 px-2 py-1.5 shadow-[0_6px_18px_rgba(15,35,65,.12)] backdrop-blur sm:gap-2 sm:px-3.5 sm:py-2">
                  <CheckCircle2 className="shrink-0 text-route-orange" size={15} /> RTO Clearance Guaranteed
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-white bg-white/95 px-2 py-1.5 shadow-[0_6px_18px_rgba(15,35,65,.12)] backdrop-blur sm:gap-2 sm:px-3.5 sm:py-2">
                  <CheckCircle2 className="shrink-0 text-route-orange" size={15} /> NIC / Vahan Integrated
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-white bg-white/95 px-2 py-1.5 shadow-[0_6px_18px_rgba(15,35,65,.12)] backdrop-blur sm:gap-2 sm:px-3.5 sm:py-2">
                  <CheckCircle2 className="shrink-0 text-route-orange" size={15} /> Emergency Panic Button Included
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Route Tech GPS benefits" className="bg-route-navy py-3 text-white sm:py-6">
        <div className="mx-auto grid w-[calc(100%_-_24px)] max-w-[1580px] grid-cols-2 gap-2 sm:w-[calc(100%_-_32px)] sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
          {trustPoints.map(({ icon: Icon, title, label }, index) => (
            <article
              key={title}
              className={`flex min-h-[116px] min-w-0 flex-col items-center justify-center rounded-xl border border-white/10 border-t-2 bg-white/[.06] px-2 py-3 text-center shadow-[0_12px_30px_rgba(0,0,0,.08)] transition hover:bg-white/[.1] sm:min-h-[148px] sm:rounded-2xl sm:px-3 sm:py-5 ${
                index % 2 ? "border-t-blue-400" : "border-t-orange-400"
              }`}
            >
              <span className="mb-2 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/10 text-orange-400 shadow-[0_8px_20px_rgba(0,0,0,.1)] sm:mb-4 sm:h-[52px] sm:w-[52px] sm:rounded-2xl">
                <Icon className="h-5 w-5 sm:h-[26px] sm:w-[26px]" strokeWidth={1.8} />
              </span>
              <div className="min-w-0">
                <h2 className="mb-1 text-[11px] font-black leading-[1.15] tracking-[-.02em] text-white sm:mb-1.5 sm:text-[14px] sm:leading-[1.2]">{title}</h2>
                <p className="m-0 text-[9px] font-semibold leading-3 text-blue-100 sm:text-[11px] sm:leading-4">{label}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="vehicle-services" className="scroll-mt-6 bg-white py-16 sm:py-20">
        <div className="mx-auto w-[calc(100%_-_32px)] max-w-[1380px]">
          <header className="mb-9 text-center">
            <span className="mb-3 inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-[.16em] text-route-orange">
              <Truck size={19} /> Choose your vehicle
            </span>
            <h2 className="mb-3 text-[31px] font-black leading-tight tracking-[-.04em] text-route-ink sm:text-[44px]">
              Which vehicle needs GPS?
            </h2>
            <p className="mx-auto mb-1 max-w-[760px] text-[14px] font-extrabold leading-5 text-route-ink sm:text-[17px] sm:leading-6">
              Select Your Vehicle Category for AIS-140 &amp; VLTD GPS Tracking
            </p>
            <p className="mx-auto max-w-[760px] text-[13px] font-semibold leading-5 text-slate-600 sm:text-[15px] sm:leading-6">
              Government Approved GPS Solutions for Commercial &amp; Mining Fleet in Bihar.
            </p>
          </header>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {vehicleChoices.map(({ image, alt, icon: Icon, title, label, cta, href }) => (
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
                  <h3
                    className={`mb-1.5 text-[19px] font-black tracking-[-.02em] text-route-ink ${
                      title === "AIS-140 VLTD GPS Tracker"
                        ? "lg:whitespace-nowrap lg:text-[16px] xl:text-[15px] min-[1400px]:text-[16px]"
                        : ""
                    }`}
                  >
                    {title}
                  </h3>
                  <p className="mb-4 text-[13px] font-semibold text-slate-500">{label}</p>
                  <span className="inline-flex items-center gap-2 text-[13px] font-extrabold text-route-orange">
                    {cta} <ArrowRight size={17} />
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
              Get AIS-140 VLTD GPS Installed in 3 Easy Steps
            </h2>
            <div className="mt-3 flex items-center justify-center">
              <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.08em] text-orange-700 sm:text-[11px]">
                Quick RTO Clearance Process
              </span>
            </div>
          </header>

          <div className="grid gap-4 md:grid-cols-3">
            {simpleSteps.map(({ icon: Icon, iconLabel, number, title, label }) => (
              <article key={number} className="relative flex items-center gap-5 rounded-2xl border border-blue-100 bg-white p-6 shadow-[0_10px_30px_rgba(15,35,65,.07)] md:flex-col md:p-8 md:text-center">
                <span className="absolute right-4 top-3 text-[46px] font-black text-blue-50">{number}</span>
                <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-blue-50 text-route-blue">
                  <Icon aria-label={iconLabel} role="img" size={38} strokeWidth={1.8} />
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
            <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-[.16em] text-orange-400">
                <Smartphone size={19} /> Real-Time GPS Tracking App for Bihar Fleet
              </span>
            </div>
            <h2 className="mb-4 text-[38px] font-black leading-[1.08] tracking-[-.045em] text-white sm:text-[50px]">
              Live GPS Vehicle Tracking App
              <span className="block text-orange-400">for Mobile &amp; Fleet Management</span>
            </h2>
            <p className="mb-8 max-w-[520px] text-[16px] font-semibold leading-7 text-blue-100">
              Monitor your commercial vehicles live with our AIS-140 VLTD GPS Tracking App. Get real-time location, route playback, trip history, and instant SOS/Panic alerts across Patna, Gaya, Muzaffarpur, and all Bihar districts.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: MapPin, title: "Live GPS Location", label: "Real-time vehicle tracking on your phone screen" },
                { icon: Navigation, title: "90-Day Route History", label: "Playback past trips, mileage & stoppage reports" },
                { icon: RadioTower, title: "Instant Movement Alerts", label: "Ignition ON/OFF, overspeeding & geo-fence alerts" },
                { icon: ShieldCheck, title: "SOS Panic Button Alerts", label: "Instant AIS-140 emergency signals & Vahan sync status" },
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
              href="tel:+918935989871"
              className="mt-7 inline-flex min-h-[54px] items-center justify-center gap-3 rounded-xl bg-route-orange px-6 text-[15px] font-extrabold text-white shadow-[0_14px_32px_rgba(249,115,22,.25)] transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300/40"
            >
              <Phone size={20} fill="currentColor" /> Download Free Tracking App Demo
            </a>
          </div>
        </div>
      </section>

      <section id="bihar-coverage" className="scroll-mt-6 overflow-hidden bg-route-soft py-16 sm:py-20">
        <div className="mx-auto grid w-[calc(100%_-_32px)] max-w-[1180px] items-center gap-8 lg:grid-cols-[.82fr_1.08fr_1fr] lg:gap-8">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-[.16em] text-route-orange">
              <MapPinned size={19} /> Authorized AIS-140 &amp; VLTD GPS dealer in Bihar
            </span>
            <h2 className="mb-6 text-[34px] font-black leading-[1.06] tracking-[-.045em] text-route-ink sm:text-[42px]">
              On-Site VLTD GPS Installation
              <span className="block text-route-blue">Across All 38 Districts of Bihar</span>
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
                <Link
                  key={district}
                  href={district === "All 38 districts" ? "/dealer-network" : districtCoveragePath(district)}
                  className="group flex items-center gap-2 rounded-md outline-none transition hover:text-route-blue focus-visible:ring-2 focus-visible:ring-route-blue focus-visible:ring-offset-2"
                >
                  <CheckCircle2 className="shrink-0 text-route-blue" size={16} fill="currentColor" />
                  <span className="border-b border-transparent transition group-hover:border-route-blue">{district}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/route-tech/home-simple-bihar-map.webp"
                alt="AIS-140 VLTD GPS Tracking Device Installation Service Network Map of Bihar 38 Districts"
                fill
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 overflow-hidden rounded-3xl border border-blue-400/30 bg-route-navy p-3 text-white shadow-[0_24px_60px_rgba(7,47,103,.22)] sm:p-4">
            {[
              { icon: UsersRound, value: "5000+", label: "Verified Vehicle Owners" },
              { icon: PackageCheck, value: "25000+", label: "RTO Approved VLTD Devices Installed" },
              { icon: MapPin, value: "38", label: "Districts On-Site Installation" },
              { icon: Clock3, value: "24/7", label: "Vahan & Technical Support" },
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
              <p className="mb-1 text-[12px] font-bold text-blue-200">Need Urgent RTO GPS Fitting?</p>
              <p className="mb-1 text-[13px] font-extrabold text-white">Call Our Bihar Helpline:</p>
              <div className="flex flex-col leading-tight">
                <a href="tel:+918935989871" className="text-[18px] font-black text-white">+91 89359 89871</a>
              </div>
            </div>
          </article>
          <Link href="/dealer-network" className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white text-route-blue"><Store size={30} /></span>
            <div>
              <p className="mb-1 text-[12px] font-bold text-blue-200">AIS-140 GPS Distributorship</p>
              <span className="inline-flex items-center gap-2 text-[20px] font-black text-white">Become a VLTD Dealer in Bihar <ArrowRight className="transition group-hover:translate-x-1" size={20} /></span>
            </div>
          </Link>
          <Link href="/contact" className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white text-route-blue"><Headphones size={30} /></span>
            <div>
              <p className="mb-1 text-[12px] font-bold text-blue-200">Existing Customer Support?</p>
              <span className="inline-flex items-center gap-2 text-[20px] font-black text-white">Get Instant Vahan Sync Help <ArrowRight className="transition group-hover:translate-x-1" size={20} /></span>
            </div>
          </Link>
        </div>
      </section>

    </>
  );
}
