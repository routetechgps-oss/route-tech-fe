"use client";

import { useRef } from "react";
import type { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Car, Gauge, MapPin, Navigation, Radio } from "lucide-react";

gsap.registerPlugin(MotionPathPlugin, useGSAP);

type ElementRef<T extends HTMLElement | SVGElement> = RefObject<T | null>;

const ROUTE_PATH =
  "M 74 438 C 190 430 245 350 350 354 C 470 359 506 283 615 277 C 742 270 750 151 918 86";

function MapBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-[inherit]">
      <div
        className="absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47,143,255,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(47,143,255,.14) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "linear-gradient(to bottom, black, transparent 92%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 92%)",
        }}
      />
      <div className="absolute -left-24 bottom-[-12rem] h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(29,111,255,0.09),transparent_43%)]" />
    </div>
  );
}

function AnimatedRoute({ routeRef }: { routeRef: ElementRef<SVGPathElement> }) {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full overflow-visible"
      preserveAspectRatio="none"
      viewBox="0 0 1000 520"
    >
      <defs>
        <linearGradient id="routeTechPathGradient" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0%" stopColor="#1685ff" />
          <stop offset="58%" stopColor="#35a7ff" />
          <stop offset="100%" stopColor="#ff7617" />
        </linearGradient>
        <filter id="routeTechPathGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur result="blur" stdDeviation="8" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d={ROUTE_PATH}
        fill="none"
        filter="url(#routeTechPathGlow)"
        opacity="0.28"
        stroke="url(#routeTechPathGradient)"
        strokeLinecap="round"
        strokeWidth="18"
      />
      <path
        ref={routeRef}
        d={ROUTE_PATH}
        fill="none"
        filter="url(#routeTechPathGlow)"
        stroke="url(#routeTechPathGradient)"
        strokeLinecap="round"
        strokeWidth="7"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d={ROUTE_PATH}
        fill="none"
        opacity="0.7"
        stroke="white"
        strokeDasharray="3 17"
        strokeLinecap="round"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx="74" cy="438" fill="#1685ff" r="8" />
      <circle cx="74" cy="438" fill="none" opacity="0.5" r="18" stroke="#56b7ff" strokeWidth="3" />
    </svg>
  );
}

function MovingVehicle({
  vehicleRef,
  pulseRef,
}: {
  vehicleRef: ElementRef<HTMLDivElement>;
  pulseRef: ElementRef<HTMLDivElement>;
}) {
  return (
    <div
      ref={vehicleRef}
      aria-label="Vehicle moving along the GPS route"
      className="pointer-events-none absolute left-0 top-0 z-20 flex h-12 w-12 items-center justify-center will-change-transform sm:h-14 sm:w-14"
    >
      <span
        ref={pulseRef}
        aria-hidden="true"
        className="absolute inset-0 rounded-full border-2 border-blue-300 bg-blue-400/20 shadow-[0_0_28px_rgba(22,133,255,0.9)]"
      />
      <span className="relative grid h-10 w-10 place-items-center rounded-full border-2 border-blue-300 bg-white text-[#0b3b76] shadow-[0_0_24px_rgba(22,133,255,0.85)] sm:h-12 sm:w-12">
        <Car aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} />
      </span>
    </div>
  );
}

function DestinationPin({ pinRef }: { pinRef: ElementRef<HTMLDivElement> }) {
  return (
    <div
      ref={pinRef}
      aria-label="GPS route destination"
      className="pointer-events-none absolute right-[5.2%] top-[9%] z-10 flex flex-col items-center will-change-transform"
    >
      <span className="grid h-12 w-12 place-items-center rounded-full border border-orange-300/60 bg-orange-500/15 shadow-[0_0_34px_rgba(255,118,23,0.45)] backdrop-blur-sm sm:h-14 sm:w-14">
        <MapPin aria-hidden="true" className="h-7 w-7 fill-orange-500 text-orange-500 sm:h-8 sm:w-8" />
      </span>
      <span className="mt-2 rounded-full border border-orange-300/20 bg-[#071d3d]/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-orange-200 shadow-lg backdrop-blur sm:text-xs">
        Destination
      </span>
    </div>
  );
}

function TrackingStatusCard({
  statusRef,
  speedRef,
}: {
  statusRef: ElementRef<HTMLDivElement>;
  speedRef: ElementRef<HTMLSpanElement>;
}) {
  return (
    <div
      ref={statusRef}
      className="absolute left-4 top-4 z-30 w-[calc(100%-2rem)] max-w-[16.5rem] rounded-2xl border border-blue-300/20 bg-[#071a36]/90 p-4 text-white shadow-[0_18px_50px_rgba(0,0,0,0.32)] backdrop-blur-md sm:left-6 sm:top-6 sm:p-5"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
            <Radio aria-hidden="true" className="h-5 w-5" />
            <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-[#071a36] bg-emerald-400" />
          </span>
          <div>
            <p className="text-sm font-extrabold tracking-wide">Live Tracking</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/65">
              GPS connected
            </p>
          </div>
        </div>
        <Navigation aria-hidden="true" className="h-5 w-5 text-orange-400" />
      </div>

      <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-3">
        <div>
          <div className="mb-1 flex items-center gap-1 text-blue-200/65">
            <Gauge aria-hidden="true" className="h-3.5 w-3.5" />
            <span className="text-[9px] uppercase tracking-wider">Speed</span>
          </div>
          <p className="text-sm font-bold"><span ref={speedRef}>42</span> km/h</p>
        </div>
        <div>
          <p className="mb-1 text-[9px] uppercase tracking-wider text-blue-200/65">Status</p>
          <p className="text-sm font-bold text-emerald-400">Moving</p>
        </div>
        <div>
          <p className="mb-1 text-[9px] uppercase tracking-wider text-blue-200/65">Distance</p>
          <p className="text-sm font-bold">8.4 km</p>
        </div>
      </div>
    </div>
  );
}

export function BasicGpsTrackingAnimation() {
  const scopeRef = useRef<HTMLDivElement>(null);
  const routeRef = useRef<SVGPathElement>(null);
  const vehicleRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const speedRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const route = routeRef.current;
      const vehicle = vehicleRef.current;
      const pulse = pulseRef.current;
      const pin = pinRef.current;
      const status = statusRef.current;
      const speed = speedRef.current;
      const scope = scopeRef.current;

      if (!route || !vehicle || !pulse || !pin || !status || !speed || !scope) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const routeLength = route.getTotalLength();
      const speedValue = { value: 42 };

      gsap.set(route, {
        strokeDasharray: routeLength,
        strokeDashoffset: reduceMotion ? 0 : routeLength,
      });

      if (reduceMotion) {
        gsap.set(scope, { autoAlpha: 1 });
        gsap.set([status, vehicle, pin], { autoAlpha: 1 });
        gsap.set(vehicle, {
          motionPath: {
            align: route,
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
            end: 0.58,
            path: route,
          },
        });
        speed.textContent = "42";
        return;
      }

      const pulseTween = gsap.fromTo(
        pulse,
        { opacity: 0.8, scale: 0.75 },
        {
          duration: 0.95,
          ease: "power1.out",
          opacity: 0,
          paused: true,
          repeat: -1,
          scale: 1.75,
        },
      );

      const speedTween = gsap.to(speedValue, {
        duration: 0.75,
        ease: "sine.inOut",
        paused: true,
        repeat: -1,
        value: 50,
        yoyo: true,
        onRepeat: () => {
          speedValue.value = gsap.utils.random(35, 43);
        },
        onUpdate: () => {
          speed.textContent = String(Math.round(speedValue.value));
        },
      });

      gsap.fromTo(
        scope,
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, duration: 0.7, ease: "power2.out", y: 0 },
      );

      const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.15 });

      timeline
        .set(route, { strokeDashoffset: routeLength })
        .set(vehicle, { autoAlpha: 0, clearProps: "transform" })
        .set(status, { autoAlpha: 0, y: -10 })
        .set(pin, { autoAlpha: 0, scale: 0.8, y: 0 })
        .to(route, { duration: 1.35, ease: "power2.inOut", strokeDashoffset: 0 })
        .to(pin, { autoAlpha: 1, duration: 0.35, ease: "back.out(1.8)", scale: 1 }, "-=0.35")
        .set(vehicle, { autoAlpha: 1 })
        .to(status, { autoAlpha: 1, duration: 0.4, ease: "power2.out", y: 0 })
        .call(() => {
          speedValue.value = 42;
          pulseTween.restart();
          speedTween.restart();
        })
        .to(
          vehicle,
          {
            duration: 5.6,
            ease: "power1.inOut",
            motionPath: {
              align: route,
              alignOrigin: [0.5, 0.5],
              autoRotate: true,
              path: route,
            },
          },
          "<",
        )
        .call(() => {
          pulseTween.pause();
          speedTween.pause();
          speed.textContent = "0";
        })
        .to(pin, { duration: 0.28, ease: "power2.out", repeat: 3, y: -11, yoyo: true })
        .to({}, { duration: 2 })
        .to([vehicle, status], { autoAlpha: 0, duration: 0.35, ease: "power1.in" })
        .to(route, { duration: 0.35, ease: "power1.in", strokeDashoffset: routeLength }, "<");
    },
    { scope: scopeRef },
  );

  return (
    <section
      ref={scopeRef}
      aria-label="Live GPS vehicle tracking animation"
      className="relative isolate mx-auto min-h-[31rem] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-blue-300/15 bg-[#061a36] shadow-[0_30px_90px_rgba(2,16,38,0.35)] sm:min-h-[34rem]"
    >
      <MapBackground />
      <AnimatedRoute routeRef={routeRef} />
      <MovingVehicle pulseRef={pulseRef} vehicleRef={vehicleRef} />
      <DestinationPin pinRef={pinRef} />
      <TrackingStatusCard speedRef={speedRef} statusRef={statusRef} />

      <div className="pointer-events-none absolute bottom-4 left-4 z-10 flex items-center gap-2 rounded-full border border-blue-300/15 bg-[#071a36]/75 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200/80 backdrop-blur sm:bottom-6 sm:left-6 sm:text-xs">
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)] motion-reduce:animate-none" />
        RouteTech live journey
      </div>
    </section>
  );
}

export default BasicGpsTrackingAnimation;
