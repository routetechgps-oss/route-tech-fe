"use client";

import dynamic from "next/dynamic";

const MapTracking = dynamic(() => import("./Scene3D"), {
  ssr: false,
  loading: () => (
    <section
      aria-hidden="true"
      className="relative mx-auto min-h-[24rem] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(2,16,38,0.28)] sm:min-h-[30rem]"
    >
      <div className="absolute inset-0 grid place-items-center bg-slate-100">
        <span className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 shadow-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          Loading Bihar map
        </span>
      </div>
    </section>
  ),
});

export function TrackingScene() {
  return <MapTracking />;
}

export default TrackingScene;
