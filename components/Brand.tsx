import Image from "next/image";
import Link from "next/link";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return <Link href="/" className={`brand-lockup${inverse ? " brand-lockup-inverse" : ""}`} aria-label="Route Tech home">
    <Image
      className="brand-logo-image"
      src="/brand-final/route-tech-client-final.png"
      alt="Route Tech GPS - Govt Approved AIS 140 VLTD GPS Tracker Dealer Bihar"
      width={1254}
      height={1254}
      priority
    />
  </Link>;
}
