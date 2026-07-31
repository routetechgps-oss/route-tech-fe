"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Activity, BellRing, Check, Clock3, MapPin, Navigation2, Radio, Route, ShieldCheck, Truck } from "lucide-react";

const moments = [
  {
    time: "06:40",
    label: "Patna · connected",
    title: "The vehicle wakes up before the city does.",
    text: "An AIS-140 GPS connection turns the ignition into the first useful signal—vehicle identity, position and journey status in one live view.",
  },
  {
    time: "08:15",
    label: "NH 22 · moving",
    title: "A moving dot becomes a journey you understand.",
    text: "Route, speed and stoppage context travel with the vehicle, giving the fleet team a clearer picture without another call to the driver.",
  },
  {
    time: "10:32",
    label: "Gaya route · attention",
    title: "The moment something changes, the story changes too.",
    text: "A route exception becomes visible while it can still be acted on—not hours later when the trip is already over.",
  },
  {
    time: "12:10",
    label: "Gaya · arrived",
    title: "The vehicle arrives. The intelligence stays useful.",
    text: "Completed movement becomes route history: a dependable record for the next dispatch, the next decision and the next kilometre across Bihar.",
  },
];

export function ImmersiveJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const routeRef = useRef<SVGPathElement>(null);
  const vehicleRef = useRef<SVGGElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const progressMarkerRef = useRef<HTMLElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const route = routeRef.current;
    const vehicle = vehicleRef.current;
    const progressBar = progressRef.current;
    if (!section || !route || !vehicle || !progressBar) return;

    gsap.registerPlugin(ScrollTrigger);
    const routeLength = route.getTotalLength();
    const cards = Array.from(section.querySelectorAll<HTMLElement>(".story-moment"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const placeVehicle = (progress: number) => {
      const point = route.getPointAtLength(routeLength * progress);
      const next = route.getPointAtLength(Math.min(routeLength, routeLength * progress + 2));
      const angle = Math.atan2(next.y - point.y, next.x - point.x) * 180 / Math.PI;
      vehicle.setAttribute("transform", `translate(${point.x} ${point.y}) rotate(${angle})`);
    };

    const render = (progress: number) => {
      const index = Math.min(moments.length - 1, Math.floor(progress * moments.length));
      section.dataset.phase = String(index);
      cards.forEach((card, cardIndex) => card.classList.toggle("is-active", cardIndex === index));
      route.style.strokeDashoffset = String(routeLength * (1 - progress));
      progressBar.style.transform = `scaleY(${Math.max(.02, progress)})`;
      if (progressMarkerRef.current) progressMarkerRef.current.style.top = `${progress * 100}%`;
      placeVehicle(Math.max(.001, progress));
      if (timeRef.current) timeRef.current.textContent = moments[index].time;
    };

    route.style.strokeDasharray = String(routeLength);
    render(reducedMotion ? 1 : 0);
    if (reducedMotion) return;

    const context = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: .55,
        onUpdate: self => render(self.progress),
      });
      gsap.to(".journey-horizon", { opacity: .9, scale: 1.08, duration: 3.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".journey-signal-ring", { scale: 2.2, opacity: 0, duration: 1.8, stagger: .45, repeat: -1, ease: "power2.out" });
      gsap.to(".journey-data-card", { y: -8, duration: 2.6, stagger: .3, yoyo: true, repeat: -1, ease: "sine.inOut" });
    }, section);

    return () => context.revert();
  }, []);

  return <section className="immersive-story" id="journey" ref={sectionRef} data-phase="0">
    <div className="immersive-sticky">
      <div className="immersive-glow"/><div className="immersive-noise"/>
      <div className="shell immersive-layout">
        <div className="immersive-copy">
          <span className="premium-kicker"><i/> One vehicle · one Bihar journey</span>
          <div className="immersive-title-row"><h2>Watch the route<br/>{" "}<em>become intelligence.</em></h2><span className="immersive-time" ref={timeRef}>06:40</span></div>
          <div className="story-moments">
            {moments.map((moment, index) => <article className={`story-moment${index === 0 ? " is-active" : ""}`} key={moment.time}>
              <span className="moment-index">0{index + 1} / 04</span>
              <span className="moment-label"><i/>{moment.label}</span>
              <h3>{moment.title}</h3>
              <p>{moment.text}</p>
            </article>)}
          </div>
          <div className="immersive-progress"><span/><i ref={progressRef}/><strong ref={progressMarkerRef} aria-hidden="true"><Truck size={13}/></strong><small>Scroll to follow the vehicle</small></div>
        </div>

        <div className="journey-visual" aria-label="Scroll-controlled AIS-140 GPS journey from Patna to Gaya">
          <div className="journey-console">
            <div className="journey-console-head">
              <div><span><Navigation2 size={15}/> RT</span><p><small>Vehicle BR 01</small><b>Patna → Gaya</b></p></div>
              <span className="journey-network"><i/><Radio size={12}/> AIS-140 LIVE</span>
            </div>

            <svg className="journey-scene" viewBox="0 0 760 660" role="img" aria-labelledby="journey-scene-title journey-scene-desc">
              <title id="journey-scene-title">Live commercial vehicle journey across Bihar</title>
              <desc id="journey-scene-desc">A vehicle travels from Patna towards Gaya while Route Tech captures movement, route exceptions and arrival history.</desc>
              <defs>
                <linearGradient id="journeySky" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#0b396d"/><stop offset=".52" stopColor="#071d39"/><stop offset="1" stopColor="#03101f"/></linearGradient>
                <linearGradient id="journeyRoad" x1="0" y1="1" x2="1" y2="0"><stop stopColor="#ff8430"/><stop offset=".32" stopColor="#3499ff"/><stop offset="1" stopColor="#63c8ff"/></linearGradient>
                <radialGradient id="horizonLight"><stop stopColor="#358ff0" stopOpacity=".7"/><stop offset="1" stopColor="#0a315c" stopOpacity="0"/></radialGradient>
                <filter id="journeyGlow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="7" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                <pattern id="journeyGrid" width="42" height="42" patternUnits="userSpaceOnUse"><path d="M42 0H0V42" fill="none" stroke="#72b6ff" strokeOpacity=".08"/></pattern>
              </defs>
              <rect width="760" height="660" fill="url(#journeySky)"/>
              <ellipse className="journey-horizon" cx="515" cy="202" rx="260" ry="180" fill="url(#horizonLight)"/>
              <path className="journey-hills hill-back" d="M0 303 84 252 151 286 229 213 305 278 392 226 480 293 574 196 658 265 760 223V410H0Z"/>
              <path className="journey-hills hill-front" d="M0 348 102 294 198 330 278 273 378 343 464 284 565 338 665 276 760 321V450H0Z"/>
              <path className="journey-ground" d="M0 365 C144 327 284 350 395 327 C524 301 643 325 760 285 V660H0Z"/>
              <path className="journey-grid-plane" d="M0 365 C144 327 284 350 395 327 C524 301 643 325 760 285 V660H0Z" fill="url(#journeyGrid)"/>

              <g className="journey-city-lights">
                {[{x:86,y:334},{x:125,y:320},{x:174,y:329},{x:241,y:316},{x:303,y:331},{x:387,y:311},{x:455,y:308},{x:534,y:298},{x:617,y:292},{x:691,y:282}].map((light, index) => <circle key={index} cx={light.x} cy={light.y} r={index % 3 === 0 ? 2.5 : 1.4}/>) }
              </g>

              <path className="journey-route-shadow" d="M108 586 C190 548 172 478 252 441 S390 439 405 356 S505 278 642 218"/>
              <path ref={routeRef} className="journey-route-live" d="M108 586 C190 548 172 478 252 441 S390 439 405 356 S505 278 642 218"/>
              <path className="journey-road-mark" d="M108 586 C190 548 172 478 252 441 S390 439 405 356 S505 278 642 218"/>

              <g className="journey-pin" transform="translate(108 586)"><circle className="journey-signal-ring" r="18"/><circle r="7"/><text x="15" y="4">PATNA · 06:40</text></g>
              <g className="journey-pin journey-pin-end" transform="translate(642 218)"><circle className="journey-signal-ring" r="18"/><circle r="7"/><text x="-15" y="-16" textAnchor="end">GAYA · ARRIVAL</text></g>
              <g className="journey-alert-pin" transform="translate(405 356)"><circle r="23"/><BellRing x="-9" y="-9" width="18" height="18"/><text x="30" y="4">ROUTE EVENT</text></g>

              <g ref={vehicleRef} className="journey-vehicle">
                <circle className="journey-vehicle-aura" r="29"/>
                <circle className="journey-vehicle-core" r="18"/>
                <path d="M-9-6H3l7 6v8H7a4 4 0 0 0-8 0h-3a4 4 0 0 0-8 0h-3V-6h6ZM3-3v4h5L3-3Z"/>
              </g>
            </svg>

            <div className="journey-data-card journey-speed"><span><Truck size={17}/></span><p><small>Live movement</small><b>42 <em>km/h</em></b></p></div>
            <div className="journey-data-card journey-signal"><span><Activity size={17}/></span><p><small>GPS signal</small><b>Connected</b></p></div>
            <div className="journey-data-card journey-alert"><span><BellRing size={17}/></span><p><small>Route intelligence</small><b>Attention needed</b></p></div>
            <div className="journey-arrival"><Check size={18}/><span><small>Journey complete</small><b>Route history saved</b></span></div>

            <div className="journey-console-foot">
              <span><Clock3 size={13}/><small>Last update</small><b>Just now</b></span>
              <span><MapPin size={13}/><small>Service region</small><b>Bihar</b></span>
              <span><ShieldCheck size={13}/><small>Device status</small><b>Connected</b></span>
              <span><Route size={13}/><small>Trip distance</small><b>101 km</b></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
