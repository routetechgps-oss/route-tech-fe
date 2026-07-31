"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  CircleDollarSign,
  GraduationCap,
  Headphones,
  MapPin,
  Megaphone,
  PackageCheck,
  Search,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
  Waypoints,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { districtCoveragePath } from "@/data/bihar-districts";

const districtGroups = {
  North: ["Muzaffarpur", "Vaishali", "Sitamarhi", "Sheohar", "East Champaran", "West Champaran", "Gopalganj", "Siwan", "Saran", "Darbhanga", "Madhubani", "Samastipur", "Saharsa", "Supaul", "Madhepura"],
  Central: ["Patna", "Nalanda", "Bhojpur", "Buxar", "Rohtas", "Kaimur"],
  South: ["Gaya", "Nawada", "Aurangabad", "Jehanabad", "Arwal", "Sheikhpura", "Jamui"],
  East: ["Bhagalpur", "Banka", "Munger", "Lakhisarai", "Begusarai", "Khagaria", "Purnia", "Katihar", "Araria", "Kishanganj"],
};

const allDistricts = Object.values(districtGroups).flat();
type Region = "All" | keyof typeof districtGroups;
const regions: Region[] = ["All", "North", "Central", "South", "East"];

const heroPins = [
  { name: "Patna", x: "45%", y: "57%", primary: true },
  { name: "Muzaffarpur", x: "39%", y: "39%" },
  { name: "Gaya", x: "44%", y: "75%" },
  { name: "Purnia", x: "72%", y: "38%" },
  { name: "Bhagalpur", x: "66%", y: "61%" },
  { name: "Darbhanga", x: "54%", y: "34%" },
];

const benefits = [
  { icon: CircleDollarSign, title: "A clearer growth path", text: "Build recurring local demand with a focused commercial GPS portfolio and transparent coordination." },
  { icon: PackageCheck, title: "Purpose-fit solutions", text: "Offer AIS-140 and mining GPS options shaped around real vehicle categories and operating needs." },
  { icon: GraduationCap, title: "Practical enablement", text: "Get product guidance, onboarding material and installation coordination your team can use from day one." },
  { icon: Megaphone, title: "Local-market support", text: "Work with campaign guidance and sales material designed for fleet owners in Bihar." },
  { icon: Headphones, title: "Responsive assistance", text: "Reach a Bihar-focused team for everyday product, fitment and customer-support questions." },
  { icon: BadgeCheck, title: "A trusted proposition", text: "Represent a premium GPS intelligence brand built around clarity, dependable service and long-term value." },
];

export function DealerNetworkExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [region, setRegion] = useState<Region>("All");
  const [query, setQuery] = useState("");
  const selectedDistrict = "Patna";

  const filteredDistricts = (region === "All" ? allDistricts : districtGroups[region])
    .filter((district) => district.toLowerCase().includes(query.trim().toLowerCase()));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".dealer-hero-copy > *", { y: 32, opacity: 0, duration: .8, stagger: .09, ease: "power3.out" });
      gsap.from(".dealer-hero-bg", { scale: 1.12, opacity: 0, duration: 1.4, ease: "power3.out" });
      gsap.utils.toArray<HTMLElement>("[data-dealer-reveal]").forEach((element) => {
        gsap.from(element, { y: 42, opacity: 0, duration: .8, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 86%", once: true } });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return <div className="dealer-page" ref={rootRef}>
    <section className="dealer-hero">
      <div className="dealer-hero-bg">
        <Image src="/images/route-tech/dealer-network-bihar-map.webp" alt="3D visualization of Route Tech dealer coverage across all 38 districts of Bihar" fill priority sizes="100vw" />
        <div className="dealer-hero-scrim" aria-hidden="true" />
        <div className="dealer-hero-pins" aria-hidden="true">
          {heroPins.map((pin) => <span key={pin.name} className={`hero-pin${pin.primary ? " is-primary" : ""}`} style={{ left: pin.x, top: pin.y }}>
            <span className="hero-pin-marker"><MapPin size={pin.primary ? 20 : 15} /></span>
            <b>{pin.name}</b>
          </span>)}
        </div>
      </div>
      <div className="dealer-hero-grid" aria-hidden="true" />
      <div className="shell dealer-hero-layout">
        <div className="dealer-hero-copy">
          <span className="dealer-kicker"><i /> Bihar-wide dealer intelligence</span>
          <h1>Dealer network across <em>all 38 districts of Bihar.</em></h1>
          <p>Route Tech connects commercial vehicle owners with local GPS expertise, coordinated installation and dependable support—wherever business moves across Bihar.</p>
          <div className="dealer-actions">
            <Link href="#join-network" className="btn dealer-primary">Become a Route Tech dealer <ArrowRight size={18} /></Link>
            <Link href="#district-network" className="dealer-link">Explore district coverage <Waypoints size={18} /></Link>
          </div>
          <div className="dealer-assurances">
            <span><ShieldCheck size={17} /> AIS-140 focused</span>
            <span><Building2 size={17} /> Bihar-first network</span>
            <span><Headphones size={17} /> Partner support</span>
          </div>
        </div>
      </div>
      <a href="#district-network" className="dealer-scroll"><span>See the network</span><span className="dealer-scroll-line" /></a>
    </section>

    <section className="dealer-metric-rail" aria-label="Dealer network facts">
      <div className="shell">
        <article><strong>38</strong><span>districts in the network</span></article>
        <article><strong>2</strong><span>specialised GPS solutions</span></article>
        <article><strong>Local</strong><span>installation coordination</span></article>
        <article><strong>Ongoing</strong><span>dealer enablement</span></article>
      </div>
    </section>

    <section className="dealer-explorer" id="district-network">
      <div className="shell">
        <div className="dealer-section-heading" data-dealer-reveal>
          <div><span className="dealer-kicker dark"><i /> Explore the network</span><h2>Every district is part of the route.</h2></div>
          <p>Choose a region or search for your district. Route Tech’s network is designed to keep product guidance, fitment coordination and support closer to commercial fleets.</p>
        </div>

        <div className="district-explorer">
          <div className="district-toolbar">
            <div className="district-tabs" role="tablist" aria-label="Filter districts by Bihar region">
              {regions.map((item) => <button key={item} className={region === item ? "active" : ""} onClick={() => setRegion(item)} role="tab" aria-selected={region === item}>{item}</button>)}
            </div>
            <label className="district-search"><Search size={17} /><span className="sr-only">Search Bihar districts</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a district" /></label>
          </div>

          <div className="district-content">
            <aside className="district-status">
              <span className="district-status-icon"><Store size={25} /></span>
              <small>Selected district</small>
              <h3>{selectedDistrict}</h3>
              <p>Connected to Route Tech’s Bihar dealer and installation support network.</p>
              <a href="tel:+918409539047">Check local availability <ArrowRight size={17} /></a>
              <div><i /> Coverage active</div>
            </aside>
            <div className="district-list" aria-live="polite">
              {filteredDistricts.length ? filteredDistricts.map((district) => (
                <Link
                  key={district}
                  href={districtCoveragePath(district)}
                  className={selectedDistrict === district ? "selected" : ""}
                  aria-label={`View AIS-140 GPS solutions in ${district}`}
                >
                  <span><Check size={14} /></span>{district}
                </Link>
              )) : <p className="district-empty">No district matches “{query}”. Try another spelling.</p>}
            </div>
          </div>
          <div className="district-result"><span><strong>{filteredDistricts.length}</strong> districts shown</span><span><i /> All 38 districts are within the Route Tech network</span></div>
        </div>
      </div>
    </section>

    <section className="dealer-partnership">
      <div className="shell">
        <div className="dealer-section-heading light" data-dealer-reveal>
          <div><span className="dealer-kicker"><i /> Partnership, engineered better</span><h2>More than a dealership. A local operating advantage.</h2></div>
          <p>Route Tech combines product focus, commercial clarity and accessible support so partners can build trust with vehicle owners in their own district.</p>
        </div>
        <div className="dealer-benefit-grid">
          {benefits.map(({ icon: BenefitIcon, title, text }, index) => <article key={title} data-dealer-reveal><span className="benefit-number">0{index + 1}</span><div className="benefit-icon"><BenefitIcon size={24} /></div><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>

    <section className="dealer-process">
      <div className="shell dealer-process-layout">
        <div data-dealer-reveal><span className="dealer-kicker dark"><i /> A clear route to partnership</span><h2>Start local. Grow with a connected team.</h2><p>We keep the first conversation practical: your district, local market, operating experience and the customers you want to serve.</p></div>
        <div className="dealer-process-steps">
          {[
            ["01", "Share your district", "Tell us where you operate and the vehicle segments you understand."],
            ["02", "Align the opportunity", "We discuss product fit, expectations and the support available to you."],
            ["03", "Get network-ready", "Complete onboarding and receive the practical material needed to begin."],
            ["04", "Build your local route", "Serve nearby fleets with Route Tech support behind every conversation."],
          ].map(([number, title, text]) => <article key={number} data-dealer-reveal><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </div>
    </section>

    <section className="dealer-join" id="join-network">
      <div className="shell dealer-join-card" data-dealer-reveal>
        <div><span className="dealer-kicker"><i /> Your district. Our platform. One route forward.</span><h2>Build the next trusted GPS destination in your district.</h2><p>Speak with Route Tech about joining Bihar’s growing AIS-140 and commercial GPS dealer network.</p></div>
        <div className="dealer-join-actions"><Link href="/contact" className="btn dealer-primary">Apply for dealership <ArrowRight size={18} /></Link><a href="tel:+918409539047">Call +91 84095 39047</a><a href="tel:+918935989871">Call +91 89359 89871</a></div>
        <Sparkles className="dealer-join-spark" size={92} aria-hidden="true" />
      </div>
    </section>
  </div>;
}
