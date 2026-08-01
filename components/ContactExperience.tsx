"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  BadgeCheck,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  Globe2,
  Headphones,
  LockKeyhole,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const phone1Display = "+91 84095 39047";
const phone1Href = "tel:+918409539047";
const phone2Display = "+91 89359 89871";
const phone2Href = "tel:+918935989871";
const whatsappHref =
  "https://wa.me/918409539047?text=Hello%20Route%20Tech%2C%20I%20need%20help%20with%20a%20GPS%20solution.";

const heroPromises = [
  { label: "AIS140 Certified", icon: ShieldCheck },
  { label: "24x7 Support", icon: Headphones },
  { label: "Expert Installation", icon: BadgeCheck },
  { label: "Quick Response", icon: Clock3 },
];

const branches = [
  { district: "Patna (Head Office)", address: "Patna, Bihar – 800001", slug: "patna" },
  { district: "Gaya", address: "Gaya, Bihar – 823001", slug: "gaya" },
  { district: "Muzaffarpur", address: "Muzaffarpur, Bihar – 842001", slug: "muzaffarpur" },
  { district: "Bhagalpur", address: "Bhagalpur, Bihar – 812001", slug: "bhagalpur" },
  { district: "Jehanabad", address: "Jehanabad, Bihar – 804408", slug: "jehanabad" },
];

export function ContactExperience() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <div className="bg-[#f4f8fd] text-route-ink">
      <section className="relative isolate min-h-[640px] overflow-hidden bg-white sm:min-h-[600px] lg:min-h-[560px]">
        <Image
          src="/images/route-tech/contact-hero-certified-device.png"
          alt="Route Tech AIS-140 certified GPS device with a commercial truck and school bus in Bihar"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[91%_center] sm:object-[72%_center] lg:object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.99)_0%,rgba(255,255,255,.94)_31%,rgba(255,255,255,.2)_52%,rgba(255,255,255,0)_72%)] max-lg:bg-[linear-gradient(180deg,rgba(255,255,255,.98)_0%,rgba(255,255,255,.91)_43%,rgba(255,255,255,.18)_70%,rgba(255,255,255,0)_100%)]" />

        <div className="relative mx-auto flex min-h-[640px] w-[calc(100%_-_28px)] max-w-[1180px] items-start pt-10 sm:min-h-[600px] sm:pt-14 lg:min-h-[560px] lg:items-center lg:pt-0">
          <div className="max-w-[510px]">
            <span className="mb-4 block text-[12px] font-black uppercase tracking-[.16em] text-route-orange">
              Contact us
            </span>
            <h1 className="mb-5 text-[42px] font-black leading-[.98] tracking-[-.055em] text-route-navy sm:text-[56px] lg:text-[62px]">
              We&apos;re Here to Help You <span className="block text-route-orange">24x7</span>
            </h1>
            <p className="mb-7 max-w-[430px] text-[16px] font-medium leading-7 text-slate-600 sm:text-[17px]">
              Have questions or need assistance? Our team is ready to help you with the
              best GPS tracking solutions for your vehicles and business.
            </p>
            <div className="mb-7 h-[3px] w-16 rounded-full bg-route-orange" />

            <div className="grid max-w-[520px] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {heroPromises.map(({ label, icon: Glyph }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-xl bg-white/85 p-2.5 shadow-sm ring-1 ring-slate-200/80 backdrop-blur-sm sm:bg-transparent sm:p-0 sm:shadow-none sm:ring-0"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-50 text-route-blue">
                    <Glyph size={22} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="text-[11px] font-extrabold leading-4 text-route-ink">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-7 px-4 pb-8 sm:-mt-10">
        <div className="mx-auto grid max-w-[1180px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_70px_rgba(7,47,103,.14)] lg:grid-cols-[.88fr_1.18fr_.92fr]">
          <div className="p-6 sm:p-8 lg:p-9">
            <SectionTitle>Get in Touch</SectionTitle>
            <div className="divide-y divide-slate-200">
              <ContactRow icon={Phone} title="Call Us">
                <a className="block font-black text-route-ink hover:text-route-blue" href={phone1Href}>
                  {phone1Display}
                </a>
                <a className="block font-black text-route-ink hover:text-route-blue" href={phone2Href}>
                  {phone2Display}
                </a>
                <span className="text-[12px] text-slate-500">(10:00 AM - 7:00 PM)</span>
              </ContactRow>
              <ContactRow icon={Mail} title="Email Us">
                <a
                  className="block font-bold text-route-ink hover:text-route-blue"
                  href="mailto:support@routetech.in"
                >
                  support@routetech.in
                </a>
                <a
                  className="block font-bold text-route-ink hover:text-route-blue"
                  href="mailto:info@routetech.in"
                >
                  info@routetech.in
                </a>
              </ContactRow>
              <ContactRow icon={MapPin} title="Head Office">
                <address className="not-italic font-medium leading-6 text-route-ink">
                  Route Tech Private Limited
                  <br />
                  Patna, Bihar – 800001
                  <br />
                  India
                </address>
              </ContactRow>
              <ContactRow icon={Globe2} title="Website">
                <a className="font-black text-route-ink hover:text-route-blue" href="https://www.routetechgps.com">
                  www.routetechgps.com
                </a>
              </ContactRow>
            </div>
          </div>

          <div className="border-y border-slate-200 p-6 sm:p-8 lg:border-x lg:border-y-0 lg:p-9">
            <SectionTitle>Send Us a Message</SectionTitle>
            <form onSubmit={handleSubmit} className="space-y-3" id="contact-form">
              <label className="sr-only" htmlFor="contact-name">
                Your name
              </label>
              <input
                id="contact-name"
                name="name"
                required
                autoComplete="name"
                placeholder="Your Name *"
                className="min-h-[50px] w-full rounded-xl border border-slate-200 bg-white px-4 text-[14px] outline-none transition placeholder:text-slate-500 focus:border-route-blue focus:ring-4 focus:ring-blue-100"
              />
              <label className="sr-only" htmlFor="contact-email">
                Your email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Your Email *"
                className="min-h-[50px] w-full rounded-xl border border-slate-200 bg-white px-4 text-[14px] outline-none transition placeholder:text-slate-500 focus:border-route-blue focus:ring-4 focus:ring-blue-100"
              />
              <label className="sr-only" htmlFor="contact-phone">
                Your mobile number
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
                placeholder="Your Mobile Number *"
                className="min-h-[50px] w-full rounded-xl border border-slate-200 bg-white px-4 text-[14px] outline-none transition placeholder:text-slate-500 focus:border-route-blue focus:ring-4 focus:ring-blue-100"
              />
              <label className="sr-only" htmlFor="contact-service">
                Select service
              </label>
              <select
                id="contact-service"
                name="service"
                required
                defaultValue=""
                className="min-h-[50px] w-full rounded-xl border border-slate-200 bg-white px-4 text-[14px] text-slate-600 outline-none transition focus:border-route-blue focus:ring-4 focus:ring-blue-100"
              >
                <option value="" disabled>
                  Select Service *
                </option>
                <option>AIS-140 GPS Installation</option>
                <option>Mining GPS Solution</option>
                <option>School Bus GPS</option>
                <option>Commercial Fleet GPS</option>
                <option>NIC / Vahan Integration</option>
              </select>
              <label className="sr-only" htmlFor="contact-message">
                Your message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Your Message *"
                className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-4 text-[14px] outline-none transition placeholder:text-slate-500 focus:border-route-blue focus:ring-4 focus:ring-blue-100"
              />
              <button
                type="submit"
                className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-route-orange px-6 text-[15px] font-black text-white shadow-[0_14px_30px_rgba(249,115,22,.24)] transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-200"
              >
                <Send size={18} aria-hidden="true" /> Send Message
              </button>
              {submitted && (
                <p
                  role="status"
                  className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-[13px] font-bold text-green-700"
                >
                  <CheckCircle2 size={18} aria-hidden="true" />
                  Thank you. Our team will contact you shortly.
                </p>
              )}
              <p className="flex items-center justify-center gap-2 text-center text-[11px] font-medium text-slate-500">
                <LockKeyhole size={13} aria-hidden="true" />
                We respect your privacy. Your information is safe with us.
              </p>
            </form>
          </div>

          <div className="p-6 sm:p-8 lg:p-9">
            <SectionTitle>We Are Just a Call Away!</SectionTitle>
            <p className="mb-6 text-[14px] font-medium leading-6 text-slate-600">
              For immediate support or installation-related queries, feel free to call us.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_28px_rgba(7,47,103,.08)]">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-route-blue text-white">
                  <Phone size={25} aria-hidden="true" />
                </span>
                <span>
                  <small className="block text-[12px] font-black text-route-navy">Call Now</small>
                  <a href={phone1Href} className="block whitespace-nowrap text-[18px] font-black text-route-orange hover:underline">
                    {phone1Display}
                  </a>
                  <a href={phone2Href} className="block whitespace-nowrap text-[18px] font-black text-route-orange hover:underline">
                    {phone2Display}
                  </a>
                  <em className="mt-1 inline-flex rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-black not-italic text-route-blue">
                    24x7 Support Available
                  </em>
                </span>
              </div>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_28px_rgba(7,47,103,.08)] transition hover:-translate-y-0.5 hover:border-green-200"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#18a84b] text-white">
                  <MessageCircle size={27} aria-hidden="true" />
                </span>
                <span>
                  <small className="block text-[12px] font-black text-green-700">Chat On WhatsApp</small>
                  <strong className="block whitespace-nowrap text-[18px] font-black text-route-ink">
                    {phone1Display}
                  </strong>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-5 px-4 pb-8" id="location">
        <div className="mx-auto grid max-w-[1180px] gap-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(7,47,103,.09)] sm:p-8 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <SectionTitle>Our Location</SectionTitle>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              <iframe
                title="Route Tech office location in Patna, Bihar"
                src="https://www.google.com/maps?q=Patna%2C%20Bihar%20800001&z=12&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full border-0 sm:h-[360px]"
              />
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Patna%2C+Bihar+800001"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-route-blue px-5 text-[13px] font-black text-white transition hover:bg-blue-700"
            >
              <Navigation size={17} aria-hidden="true" />
              Get Directions
            </a>
          </div>

          <div>
            <SectionTitle>Our Branches</SectionTitle>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              {branches.map((branch, index) => (
                <Link
                  key={branch.slug}
                  href={`/dealer-network/ais-140-gps-solution-in-${branch.slug}`}
                  className={`group flex min-h-[68px] items-center gap-3 bg-white px-4 py-3 transition hover:bg-blue-50 ${
                    index !== branches.length - 1 ? "border-b border-slate-200" : ""
                  }`}
                >
                  <MapPin className="shrink-0 text-route-blue" size={19} aria-hidden="true" />
                  <span className="min-w-0 flex-1">
                    <strong className="block text-[13px] font-black text-route-navy">
                      {branch.district}
                    </strong>
                    <small className="block text-[12px] font-medium text-slate-500">
                      {branch.address}
                    </small>
                  </span>
                  <ChevronRight
                    className="shrink-0 text-route-blue transition group-hover:translate-x-1"
                    size={20}
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-5 px-4 pb-10" id="fleet-quote">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-6 rounded-3xl bg-route-navy p-6 text-center text-white shadow-[0_20px_50px_rgba(7,47,103,.2)] sm:p-8 lg:flex-row lg:text-left">
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white text-route-blue">
            <ClipboardCheck size={31} aria-hidden="true" />
          </span>
          <div className="flex-1">
            <h2 className="mb-1 text-[23px] font-black tracking-[-.03em] sm:text-[28px]">
              Looking for AIS140 GPS Solutions for Your Fleet?
            </h2>
            <p className="m-0 text-[14px] font-medium leading-6 text-blue-100">
              Get a free quote today and experience the best GPS tracking solution in Bihar.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#contact-form"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-route-orange px-6 text-[14px] font-black text-white transition hover:bg-orange-600"
            >
              Request a Quote <ChevronRight size={18} aria-hidden="true" />
            </a>
            <a
              href={phone1Href}
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-white/70 px-6 text-[14px] font-black text-white transition hover:bg-white hover:text-route-navy"
            >
              Call Now <Phone size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h2 className="mb-2 text-[22px] font-black tracking-[-.035em] text-route-navy sm:text-[24px]">
        {children}
      </h2>
      <span className="block h-[3px] w-10 rounded-full bg-route-orange" />
    </div>
  );
}

function ContactRow({
  icon: Glyph,
  title,
  children,
}: {
  icon: typeof Wrench;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 py-5 first:pt-0 last:pb-0">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-route-blue text-white">
        <Glyph size={22} strokeWidth={1.8} aria-hidden="true" />
      </span>
      <div className="min-w-0 text-[13px] leading-5">
        <strong className="mb-1 block text-[12px] font-black text-route-navy">{title}</strong>
        {children}
      </div>
    </div>
  );
}
