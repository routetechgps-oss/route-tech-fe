"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Activity, MapPin, Navigation2, Radio, Route, Satellite, Truck } from "lucide-react";

export function HeroTracker() {
  const scopeRef = useRef<HTMLDivElement>(null);
  const routeRef = useRef<SVGPathElement>(null);
  const vehicleRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const scope = scopeRef.current;
    const route = routeRef.current;
    const vehicle = vehicleRef.current;
    if (!scope || !route || !vehicle) return;

    const length = route.getTotalLength();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    route.style.strokeDasharray = `${length}`;

    const placeVehicle = (progress: number) => {
      const point = route.getPointAtLength(length * progress);
      const next = route.getPointAtLength(Math.min(length, length * progress + 2));
      const angle = Math.atan2(next.y - point.y, next.x - point.x) * 180 / Math.PI;
      vehicle.setAttribute("transform", `translate(${point.x} ${point.y}) rotate(${angle})`);
    };

    if (reducedMotion) {
      route.style.strokeDashoffset = "0";
      placeVehicle(.72);
      return;
    }

    const playhead = { progress: 0 };
    const context = gsap.context(() => {
      const timeline = gsap.timeline({ repeat: -1, repeatDelay: .65 });
      timeline
        .set(route, { strokeDashoffset: length })
        .set(playhead, { progress: 0, onComplete: () => placeVehicle(0) })
        .to(route, { strokeDashoffset: 0, duration: 7.2, ease: "power1.inOut" }, 0)
        .to(playhead, {
          progress: 1,
          duration: 7.2,
          ease: "power1.inOut",
          onUpdate: () => placeVehicle(playhead.progress),
        }, 0);

      gsap.to(".tracker-pulse", {
        scale: 1.9,
        opacity: 0,
        transformOrigin: "center",
        duration: 1.8,
        stagger: .45,
        repeat: -1,
        ease: "power2.out",
      });
      gsap.to(".tracker-satellite", { y: -8, x: 5, duration: 3.4, yoyo: true, repeat: -1, ease: "sine.inOut" });
      gsap.to(".tracker-card", { y: -7, duration: 2.8, stagger: .35, yoyo: true, repeat: -1, ease: "sine.inOut" });
      gsap.to(".map-scan", { yPercent: 790, duration: 4.2, repeat: -1, ease: "none" });
    }, scope);

    return () => context.revert();
  }, []);

  return <div className="hero-tracking-world" ref={scopeRef} aria-label="Animated AIS-140 GPS route tracking across Bihar">
    <div className="tracker-scene">
      <div className="tracker-shell">
        <div className="tracker-topline">
          <div><span className="tracker-logo"><Navigation2 size={16} /> RT</span><span><small>Bihar fleet network</small><b>Live route intelligence</b></span></div>
          <span className="tracker-live"><i /> LIVE</span>
        </div>

        <div className="tracker-map-wrap">
          <svg className="tracker-map" viewBox="0 0 680 560" role="img" aria-labelledby="tracker-title tracker-desc">
            <title id="tracker-title">Route Tech live GPS tracking in Bihar</title>
            <desc id="tracker-desc">An animated commercial vehicle route connects Patna, Muzaffarpur, Bhagalpur and Gaya.</desc>
            <defs>
              <linearGradient id="biharSurface" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#123f73"/><stop offset="1" stopColor="#061d3a"/></linearGradient>
              <linearGradient id="routeLight" x1="120" y1="100" x2="560" y2="480" gradientUnits="userSpaceOnUse"><stop stopColor="#46b8ff"/><stop offset=".55" stopColor="#2a7ef0"/><stop offset="1" stopColor="#ff8a30"/></linearGradient>
              <filter id="routeGlow" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="6" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              <filter id="softShadow" x="-40%" y="-40%" width="180%" height="180%"><feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#000b18" floodOpacity=".48"/></filter>
              <pattern id="mapGrid" width="34" height="34" patternUnits="userSpaceOnUse"><path d="M34 0H0V34" fill="none" stroke="#8fc4ff" strokeOpacity=".08"/></pattern>
              <clipPath id="biharClip"><path d="M124 128 L182 102 244 110 288 82 358 100 401 88 455 123 523 126 548 164 584 194 562 230 590 270 552 307 567 354 524 377 490 424 436 414 388 455 333 438 281 472 242 435 189 443 166 397 121 382 132 331 96 294 121 250 94 207 132 176Z"/></clipPath>
            </defs>

            <g filter="url(#softShadow)">
              <path className="tracker-bihar-shadow" d="M124 128 L182 102 244 110 288 82 358 100 401 88 455 123 523 126 548 164 584 194 562 230 590 270 552 307 567 354 524 377 490 424 436 414 388 455 333 438 281 472 242 435 189 443 166 397 121 382 132 331 96 294 121 250 94 207 132 176Z"/>
              <path className="tracker-bihar" d="M124 128 L182 102 244 110 288 82 358 100 401 88 455 123 523 126 548 164 584 194 562 230 590 270 552 307 567 354 524 377 490 424 436 414 388 455 333 438 281 472 242 435 189 443 166 397 121 382 132 331 96 294 121 250 94 207 132 176Z" fill="url(#biharSurface)"/>
              <rect x="78" y="70" width="530" height="420" fill="url(#mapGrid)" clipPath="url(#biharClip)"/>
              <path className="map-contour" d="M130 193 C221 154 286 205 371 157 S517 166 557 221 M112 283 C190 243 257 294 337 248 S492 240 570 294 M133 370 C223 332 290 384 373 342 S497 346 548 375" clipPath="url(#biharClip)"/>
            </g>

            <g className="network-routes" clipPath="url(#biharClip)">
              <path d="M177 342 C231 310 249 231 324 209 S431 161 498 188"/>
              <path d="M177 342 C260 380 350 399 463 368"/>
              <path d="M244 145 C286 176 293 186 324 209"/>
              <path d="M324 209 C387 256 442 286 520 283"/>
            </g>

            <path ref={routeRef} className="active-tracker-route" d="M172 344 C206 327 232 309 250 282 C269 253 282 224 324 210 C374 192 411 154 464 169 C514 184 540 225 519 282 C493 339 450 359 402 371 C350 384 310 407 278 430"/>

            {[[172,344,"Gaya"],[324,210,"Patna"],[464,169,"Muzaffarpur"],[519,282,"Bhagalpur"]].map(([x,y,label]) => <g className="tracker-place" transform={`translate(${x} ${y})`} key={label}><circle className="tracker-pulse" r="13"/><circle r="5"/><text x="12" y="4">{label}</text></g>)}

            <g ref={vehicleRef} className="route-vehicle">
              <circle className="vehicle-aura" r="24"/>
              <circle className="vehicle-core" r="15"/>
              <path d="M-7-5H5L9 0V7H7a4 4 0 0 0-8 0h-3a4 4 0 0 0-8 0h-2V-5h7Zm9 3v3h5L4-2Z" transform="scale(.72)"/>
            </g>

            <g className="tracker-satellite" transform="translate(526 94)"><circle r="28"/><path d="m-14-4 8-8 8 8-8 8Zm20 0 8-8 8 8-8 8ZM-5 10l9-9m-3 15 4 4m-7-7 7 7"/><circle cx="-1" cy="9" r="4"/></g>
            <rect className="map-scan" x="106" y="102" width="465" height="1" rx="1"/>
          </svg>

          <div className="tracker-coordinate"><MapPin size={13}/><span>25.5941° N · 85.1376° E</span></div>
          <div className="tracker-scale"><span/><span/><span/><small>120 km</small></div>
        </div>

        <div className="tracker-statusbar">
          <span><Radio size={14}/><small>Network</small><b>Connected</b></span>
          <span><Route size={14}/><small>Journey</small><b>Patna → Gaya</b></span>
          <span><Activity size={14}/><small>Signal</small><b>Strong</b></span>
        </div>
      </div>

      <div className="tracker-card tracker-card-speed"><span><Truck size={18}/></span><div><small>BR 01 · moving</small><b>42 <em>km/h</em></b></div></div>
      <div className="tracker-card tracker-card-district"><span><MapPin size={18}/></span><div><small>Service reach</small><b>38 districts</b></div></div>
      <div className="tracker-orbit tracker-orbit-one"/><div className="tracker-orbit tracker-orbit-two"/>
    </div>
  </div>;
}
