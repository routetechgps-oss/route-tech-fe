"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [["Home", "/"], ["Services", "/services"], ["Dealer network", "/dealer-network"], ["About us", "/about-us"], ["Contact", "/contact"]];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close whenever the route changes (covers <Link> navigation).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // While open, close on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return <div className="mobile-menu" ref={ref}>
    <button
      type="button"
      className="mobile-toggle"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls="mobile-nav"
      onClick={() => setOpen((value) => !value)}
    >
      {open ? <X /> : <Menu />}
    </button>
    {open && <div className="mobile-panel" id="mobile-nav">
      {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      <a className="btn" href="tel:+918935989871" onClick={() => setOpen(false)}>Request installation</a>
      <p className="m-0 text-center text-[12px] font-bold text-slate-500">+91 84095 39047</p>
    </div>}
  </div>;
}
