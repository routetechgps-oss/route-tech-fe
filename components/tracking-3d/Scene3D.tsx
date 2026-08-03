"use client";

import { useEffect, useRef, useState } from "react";
import { Bus, Car, Navigation, Radio, Truck } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Load Leaflet from CDN once (no npm install, no WebGL)               */
/* ------------------------------------------------------------------ */

let leafletPromise: Promise<any> | null = null;

function loadLeaflet(): Promise<any> {
  if (typeof window === "undefined") return Promise.reject(new Error("no window"));
  const w = window as any;
  if (w.L) return Promise.resolve(w.L);
  if (leafletPromise) return leafletPromise;

  leafletPromise = new Promise((resolve, reject) => {
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css";
      document.head.appendChild(link);
    }
    const s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";
    s.async = true;
    s.onload = () => resolve((window as any).L);
    s.onerror = () => reject(new Error("Leaflet failed to load"));
    document.body.appendChild(s);
  });
  return leafletPromise;
}

/* ------------------------------------------------------------------ */
/* Fleet + cities across Bihar                                         */
/* ------------------------------------------------------------------ */

type VType = "car" | "bus" | "truck";

type VehicleCfg = {
  id: string;
  label: string;
  type: VType;
  color: string;
  from: string;
  to: string;
  oneWayMs: number;
  waypoints: [number, number][];
  events: string[];
};

const CITIES: { name: string; at: [number, number] }[] = [
  { name: "Patna", at: [25.5941, 85.1376] },
  { name: "Gaya", at: [24.7955, 84.9994] },
  { name: "Muzaffarpur", at: [26.1209, 85.3647] },
  { name: "Bhagalpur", at: [25.2445, 86.9718] },
];

const FLEET: VehicleCfg[] = [
  {
    id: "car",
    label: "Car · BR01",
    type: "car",
    color: "#1f8bff",
    from: "Patna",
    to: "Gaya",
    oneWayMs: 10500,
    waypoints: [
      [25.5941, 85.1376],
      [25.5, 85.11],
      [25.4, 85.08],
      [25.28, 85.07],
      [25.16, 85.05],
      [25.03, 85.02],
      [24.92, 84.995],
      [24.7955, 84.9994],
    ],
    events: ["On route · steady", "Overspeed · 68 km/h"],
  },
  {
    id: "bus",
    label: "Bus · BR06",
    type: "bus",
    color: "#16a34a",
    from: "Muzaffarpur",
    to: "Patna",
    oneWayMs: 12000,
    waypoints: [
      [26.1209, 85.3647],
      [26.0, 85.3],
      [25.9, 85.25],
      [25.8, 85.21],
      [25.7, 85.17],
      [25.5941, 85.1376],
    ],
    events: ["Geofence: School zone", "Halt · 2 min"],
  },
  {
    id: "truck",
    label: "Truck · BR11",
    type: "truck",
    color: "#f97316",
    from: "Patna",
    to: "Bhagalpur",
    oneWayMs: 14000,
    waypoints: [
      [25.5941, 85.1376],
      [25.5, 85.45],
      [25.45, 85.8],
      [25.4, 86.1],
      [25.34, 86.45],
      [25.29, 86.72],
      [25.2445, 86.9718],
    ],
    events: ["Load secured", "Fuel 74%"],
  },
];

/* top-down vehicle icons, pointing "up" (north) */
function iconSvg(type: VType, color: string) {
  if (type === "bus") {
    return `<svg width="24" height="28" viewBox="0 0 34 40"><rect x="8" y="3" width="18" height="34" rx="5" fill="${color}"/><rect x="8" y="3" width="18" height="34" rx="5" fill="none" stroke="rgba(255,255,255,.85)" stroke-width="1.6"/><rect x="11" y="6" width="12" height="6" rx="2" fill="#eafff2"/><rect x="11" y="15" width="5" height="6" rx="1.5" fill="#eafff2"/><rect x="18" y="15" width="5" height="6" rx="1.5" fill="#eafff2"/><rect x="11" y="24" width="5" height="6" rx="1.5" fill="#eafff2"/><rect x="18" y="24" width="5" height="6" rx="1.5" fill="#eafff2"/></svg>`;
  }
  if (type === "truck") {
    return `<svg width="24" height="30" viewBox="0 0 34 42"><rect x="9" y="16" width="16" height="24" rx="3" fill="#e2e8f0" stroke="rgba(255,255,255,.85)" stroke-width="1.4"/><rect x="9" y="3" width="16" height="13" rx="4" fill="${color}" stroke="rgba(255,255,255,.85)" stroke-width="1.4"/><rect x="12" y="5" width="10" height="5" rx="2" fill="#fff2e0"/><rect x="6" y="18" width="3" height="7" rx="1.5" fill="#0b1220"/><rect x="25" y="18" width="3" height="7" rx="1.5" fill="#0b1220"/><rect x="6" y="31" width="3" height="7" rx="1.5" fill="#0b1220"/><rect x="25" y="31" width="3" height="7" rx="1.5" fill="#0b1220"/></svg>`;
  }
  return `<svg width="24" height="24" viewBox="0 0 40 40"><rect x="11" y="6" width="18" height="30" rx="7" fill="${color}"/><rect x="11" y="6" width="18" height="30" rx="7" fill="none" stroke="rgba(255,255,255,.85)" stroke-width="1.8"/><rect x="14" y="9" width="12" height="7" rx="3" fill="#eaf6ff"/><rect x="14" y="25" width="12" height="6" rx="3" fill="rgba(255,255,255,.55)"/><rect x="8" y="11" width="3" height="7" rx="1.5" fill="#0b1220"/><rect x="29" y="11" width="3" height="7" rx="1.5" fill="#0b1220"/><rect x="8" y="24" width="3" height="7" rx="1.5" fill="#0b1220"/><rect x="29" y="24" width="3" height="7" rx="1.5" fill="#0b1220"/></svg>`;
}

function densify(L: any, pts: [number, number][], perSeg = 24) {
  const out: any[] = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const a = L.latLng(pts[i]);
    const b = L.latLng(pts[i + 1]);
    for (let j = 0; j < perSeg; j++) {
      const t = j / perSeg;
      out.push(L.latLng(a.lat + (b.lat - a.lat) * t, a.lng + (b.lng - a.lng) * t));
    }
  }
  out.push(L.latLng(pts[pts.length - 1]));
  return out;
}

function bearing(a: any, b: any) {
  const r = (d: number) => (d * Math.PI) / 180;
  const dLon = r(b.lng - a.lng);
  const y = Math.sin(dLon) * Math.cos(r(b.lat));
  const x = Math.cos(r(a.lat)) * Math.sin(r(b.lat)) - Math.sin(r(a.lat)) * Math.cos(r(b.lat)) * Math.cos(dLon);
  return (Math.atan2(y, x) * 180) / Math.PI;
}

const smooth = (p: number) => p * p * (3 - 2 * p); // ease in/out

type Hud = {
  label: string;
  from: string;
  to: string;
  dest: string;
  speed: number;
  status: string;
  color: string;
  type: VType | "fleet";
  progress: number;
  remainKm: number;
};

export default function MapTracking() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [focused, setFocused] = useState(-1);
  const [hud, setHud] = useState<Hud>({
    label: "Fleet overview",
    from: "Bihar",
    to: "38 districts",
    dest: "",
    speed: 0,
    status: "3 vehicles live",
    color: "#1f8bff",
    type: "fleet",
    progress: 0,
    remainKm: 0,
  });
  const lastHud = useRef(0);

  useEffect(() => {
    let map: any;
    let raf = 0;
    let cancelled = false;

    loadLeaflet()
      .then((L) => {
        if (cancelled || !containerRef.current) return;

        map = L.map(containerRef.current, {
          zoomControl: false,
          attributionControl: true,
          dragging: false,
          scrollWheelZoom: false,
          doubleClickZoom: false,
          boxZoom: false,
          keyboard: false,
          touchZoom: false,
          zoomSnap: 0.25,
        });

        // Voyager basemap — colored roads/labels, closer to Google Maps
        L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          maxZoom: 19,
          detectRetina: true,
        }).addTo(map);

        // build vehicles
        const allPts: any[] = [];
        const vehicles = FLEET.map((cfg) => {
          const path = densify(L, cfg.waypoints);
          allPts.push(...path);
          const dist = [0];
          for (let i = 1; i < path.length; i++) dist.push(dist[i - 1] + path[i].distanceTo(path[i - 1]));
          const total = dist[dist.length - 1];

          // flowing dotted "planned route"
          L.polyline(cfg.waypoints, {
            color: cfg.color,
            weight: 3.5,
            opacity: 0.4,
            dashArray: "1 11",
            lineCap: "round",
            className: "rt-flow",
          }).addTo(map);
          // glowing travelled trail
          const trailGlow = L.polyline([], { color: cfg.color, weight: 12, opacity: 0.16, lineCap: "round" }).addTo(map);
          const trail = L.polyline([], { color: cfg.color, weight: 5, opacity: 0.95, lineCap: "round", lineJoin: "round" }).addTo(map);

          const icon = L.divIcon({
            className: "",
            iconSize: [30, 30],
            iconAnchor: [15, 15],
            html: `<div class="rt-veh-wrap" style="color:${cfg.color};position:relative;width:30px;height:30px;">
              <span class="rt-ring"></span>
              <div class="rt-veh" style="position:absolute;inset:0;display:grid;place-items:center;transition:transform .14s linear;filter:drop-shadow(0 3px 4px rgba(0,0,0,.4));">${iconSvg(cfg.type, cfg.color)}</div>
            </div>`,
          });
          const marker = L.marker(path[0], { icon, zIndexOffset: 1000 }).addTo(map);
          marker.bindPopup("", { closeButton: false, autoPan: false, className: "rt-pop", offset: [0, -8] });

          return { cfg, path, dist, total, trail, trailGlow, marker, dir: 1 as 1 | -1, startT: performance.now(), lastFlip: -9999, speed: 46 };
        });

        // city labels
        CITIES.forEach((c) => {
          const ci = L.divIcon({
            className: "",
            iconSize: [10, 10],
            iconAnchor: [5, 5],
            html: `<div class="rt-city"><span class="rt-city-dot"></span><span class="rt-city-name">${c.name}</span></div>`,
          });
          L.marker(c.at, { icon: ci, interactive: false, zIndexOffset: 500 }).addTo(map);
        });

        const overviewBounds = L.latLngBounds(allPts);
        map.fitBounds(overviewBounds, { padding: [56, 56] });
        setReady(true);

        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        // returns current position + eased progress of the current trip
        const place = (v: (typeof vehicles)[number], now: number) => {
          let p = ((now - v.startT) / v.cfg.oneWayMs) % 1;
          if (p < 0) p = 0;
          const eased = smooth(p);
          const traveled = v.dir === 1 ? eased * v.total : (1 - eased) * v.total;
          let i = 1;
          while (i < v.dist.length && v.dist[i] < traveled) i++;
          i = Math.min(i, v.dist.length - 1);
          const segT = (traveled - v.dist[i - 1]) / Math.max(1, v.dist[i] - v.dist[i - 1]);
          const a = v.path[i - 1];
          const b = v.path[i];
          const cur = L.latLng(a.lat + (b.lat - a.lat) * segT, a.lng + (b.lng - a.lng) * segT);
          v.marker.setLatLng(cur);

          const el = v.marker.getElement()?.querySelector(".rt-veh") as HTMLElement | null;
          if (el) el.style.transform = `rotate(${v.dir === 1 ? bearing(a, b) : bearing(b, a)}deg)`;

          const seg = v.dir === 1 ? v.path.slice(0, i + 1).concat([cur]) : [cur].concat(v.path.slice(i));
          v.trail.setLatLngs(seg);
          v.trailGlow.setLatLngs(seg);

          if (now - v.startT >= v.cfg.oneWayMs) {
            v.startT = now;
            v.dir = v.dir === 1 ? -1 : 1;
            v.lastFlip = now;
          }
          v.speed = Math.round(16 + Math.sin(Math.PI * eased) * 48 + Math.random() * 3);
          return { cur, eased };
        };

        const setFocusClass = (idx: number) => {
          vehicles.forEach((v, i) => {
            const wrap = v.marker.getElement()?.querySelector(".rt-veh-wrap") as HTMLElement | null;
            if (wrap) wrap.classList.toggle("rt-focused", i === idx);
          });
        };

        if (reduce) {
          vehicles.forEach((v) => {
            v.startT = performance.now() - v.cfg.oneWayMs * 0.45;
            place(v, performance.now());
          });
          return;
        }

        /* ---- follow-cam scheduler ---- */
        const phases: Array<{ type: "overview" } | { type: "focus"; v: number }> = [
          { type: "overview" },
          { type: "focus", v: 0 },
          { type: "focus", v: 1 },
          { type: "focus", v: 2 },
        ];
        const OVERVIEW_MS = 6200;
        const FOCUS_MS = 8600;
        const FLY_MS = 2100; // fly-in settle time before following
        let phaseIdx = 0;
        let phaseStart = performance.now();
        let entered = false;
        let lastPan = 0;
        let evtStage = 0;

        const enterPhase = (ph: (typeof phases)[number], now: number) => {
          const states = vehicles.map((v) => place(v, now));
          if (ph.type === "overview") {
            vehicles.forEach((v) => v.marker.closePopup());
            setFocusClass(-1);
            setFocused(-1);
            setHud((h) => ({ ...h, label: "Fleet overview", from: "Bihar", to: "38 districts", dest: "", speed: 0, status: "3 vehicles live", color: "#1f8bff", type: "fleet", progress: 0 }));
            map.flyToBounds(overviewBounds, { duration: 2.0, padding: [56, 56] });
          } else {
            setFocusClass(ph.v);
            setFocused(ph.v);
            map.flyTo(states[ph.v].cur, 10, { duration: 2.0 });
            evtStage = 0;
            lastPan = now;
          }
        };

        const frame = (now: number) => {
          if (cancelled) return;
          const states = vehicles.map((v) => place(v, now));

          const ph = phases[phaseIdx];
          if (!entered) {
            enterPhase(ph, now);
            entered = true;
          }
          const elapsed = now - phaseStart;

          if (ph.type === "focus") {
            const v = vehicles[ph.v];
            const st = states[ph.v];
            // smooth continuous follow (overlapping eased pans)
            if (elapsed > FLY_MS && now - lastPan > 1500) {
              lastPan = now;
              map.panTo(v.marker.getLatLng(), { animate: true, duration: 1.7, easeLinearity: 0.2 });
            }
            if (elapsed > FLY_MS && evtStage === 0) {
              v.marker.setPopupContent(`<span class="rt-dot" style="background:${v.cfg.color}"></span>${v.cfg.events[0]}`);
              v.marker.openPopup();
              evtStage = 1;
            } else if (elapsed > FLY_MS + 3000 && evtStage === 1) {
              v.marker.setPopupContent(`<span class="rt-dot" style="background:${v.cfg.color}"></span>${v.cfg.events[1]}`);
              v.marker.openPopup();
              evtStage = 2;
            }
            if (now - lastHud.current > 150) {
              lastHud.current = now;
              const arrived = now - v.lastFlip < 1400;
              const dest = v.dir === 1 ? v.cfg.to : v.cfg.from;
              setHud({
                label: v.cfg.label,
                from: v.cfg.from,
                to: v.cfg.to,
                dest,
                speed: arrived ? 0 : v.speed,
                status: arrived ? "Arrived" : "Moving",
                color: v.cfg.color,
                type: v.cfg.type,
                progress: st.eased,
                remainKm: Math.max(0, +((v.total / 1000) * (1 - st.eased)).toFixed(1)),
              });
            }
          }

          const dur = ph.type === "overview" ? OVERVIEW_MS : FOCUS_MS;
          if (elapsed > dur) {
            phaseIdx = (phaseIdx + 1) % phases.length;
            phaseStart = now;
            entered = false;
          }
          raf = requestAnimationFrame(frame);
        };
        raf = requestAnimationFrame(frame);
      })
      .catch(() => setReady(false));

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      if (map) map.remove();
    };
  }, []);

  const HudIcon = hud.type === "bus" ? Bus : hud.type === "truck" ? Truck : hud.type === "fleet" ? Radio : Car;
  const isFleet = hud.type === "fleet";

  return (
    <section
      aria-label="Live GPS fleet tracking across Bihar"
      className="relative isolate mx-auto min-h-[24rem] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(2,16,38,0.28)] sm:min-h-[30rem]"
    >
      <style>{`
        .leaflet-container{background:#e8eef5;font-family:inherit;}
        .rt-pop .leaflet-popup-content-wrapper{background:#fff;border:1px solid #e2e8f0;border-radius:12px;box-shadow:0 12px 28px rgba(2,16,38,.2);}
        .rt-pop .leaflet-popup-content{margin:8px 12px;font-size:12px;font-weight:800;color:#0b2b57;display:flex;align-items:center;white-space:nowrap;}
        .rt-pop .leaflet-popup-tip{background:#fff;}
        .rt-dot{display:inline-block;width:8px;height:8px;border-radius:9999px;margin-right:7px;}
        .rt-city{display:flex;align-items:center;gap:5px;white-space:nowrap;transform:translateY(-1px);}
        .rt-city-dot{width:7px;height:7px;border-radius:9999px;background:#0b2b57;box-shadow:0 0 0 3px rgba(255,255,255,.95);flex:none;}
        .rt-city-name{font-size:10px;font-weight:800;color:#0b2b57;text-shadow:0 1px 3px rgba(255,255,255,.95),0 0 2px rgba(255,255,255,.95);}
        .rt-ring{position:absolute;left:50%;top:50%;width:16px;height:16px;border-radius:9999px;transform:translate(-50%,-50%);background:currentColor;opacity:0;pointer-events:none;}
        @media (prefers-reduced-motion: no-preference){
          .rt-focused .rt-ring{animation:rtpulse 1.7s ease-out infinite;}
          .rt-flow{animation:rtflow 2.6s linear infinite;}
        }
        @keyframes rtpulse{0%{opacity:.45;transform:translate(-50%,-50%) scale(1)}100%{opacity:0;transform:translate(-50%,-50%) scale(4.4)}}
        @keyframes rtflow{to{stroke-dashoffset:-180;}}
      `}</style>

      <div ref={containerRef} className="absolute inset-0 h-full w-full" />

      {!ready && (
        <div className="absolute inset-0 grid place-items-center bg-slate-100">
          <span className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Loading Bihar map
          </span>
        </div>
      )}

      {/* Live tracking HUD (follows focused vehicle) */}
      <div className="pointer-events-none absolute left-3 top-3 z-[500] w-[15rem] max-w-[calc(100%-1.5rem)] rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-[0_10px_30px_rgba(2,16,38,0.16)] backdrop-blur sm:left-4 sm:top-4">
        <div className="flex items-center gap-2.5">
          <span
            className="relative flex h-8 w-8 flex-none items-center justify-center rounded-xl"
            style={{ backgroundColor: `${hud.color}1f`, color: hud.color }}
          >
            <HudIcon aria-hidden="true" className="h-4 w-4" />
            <span className="absolute right-0 top-0 h-2.5 w-2.5 animate-pulse rounded-full border-2 border-white bg-emerald-500" />
          </span>
          <div className="min-w-0 leading-tight">
            <p className="truncate text-[13px] font-extrabold text-slate-800">{hud.label}</p>
            <p className="truncate text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
              {hud.from} <span className="text-slate-300">→</span> {hud.to}
            </p>
          </div>
          <div className="ml-auto text-right leading-tight">
            <p className="text-[13px] font-extrabold tabular-nums text-slate-800">
              {isFleet ? "LIVE" : `${hud.speed}`}
            </p>
            <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-slate-400">
              {isFleet ? "" : "km/h"}
            </p>
          </div>
        </div>

        {!isFleet && (
          <div className="mt-2.5">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full transition-[width] duration-200 ease-linear"
                style={{ width: `${Math.round(hud.progress * 100)}%`, backgroundColor: hud.color }}
              />
            </div>
            <div className="mt-1.5 flex items-center justify-between">
              <span
                className="text-[9px] font-bold uppercase tracking-[0.14em]"
                style={{ color: hud.status === "Arrived" ? "#f97316" : "#059669" }}
              >
                {hud.status}
              </span>
              <span className="text-[10px] font-bold tabular-nums text-slate-500">
                {hud.remainKm} km to {hud.dest}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Fleet legend (hidden on very small screens) */}
      <div className="pointer-events-none absolute bottom-3 left-3 z-[500] hidden flex-col gap-1 rounded-2xl border border-slate-200 bg-white/95 px-3 py-2.5 shadow-sm backdrop-blur sm:flex sm:left-4 sm:bottom-4">
        {FLEET.map((v, i) => {
          const Ic = v.type === "bus" ? Bus : v.type === "truck" ? Truck : Car;
          const active = focused === i;
          return (
            <div
              key={v.id}
              className={`flex items-center gap-2 rounded-lg px-1.5 py-0.5 text-[10px] font-bold transition ${active ? "bg-slate-100" : ""}`}
              style={{ color: active ? v.color : "#475569" }}
            >
              <Ic className="h-3.5 w-3.5" style={{ color: v.color }} />
              <span className="tabular-nums">
                {v.from} <span className="text-slate-300">→</span> {v.to}
              </span>
            </div>
          );
        })}
      </div>

      {/* Coverage tag */}
      <div className="pointer-events-none absolute right-3 top-3 z-[500] flex items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-600 shadow-sm backdrop-blur sm:right-4 sm:top-4">
        <Navigation aria-hidden="true" className="h-3.5 w-3.5 text-orange-500" />
        Bihar · Live fleet
      </div>
    </section>
  );
}
