import Link from "next/link";
import { Icon } from "./Icon";
import { Brand } from "./Brand";
import { MobileMenu } from "./MobileMenu";

const links = [["Home", "/"], ["Services", "/services"], ["Dealer network", "/dealer-network"], ["About us", "/about-us"], ["Contact", "/contact"]];

export function Header() {
  return <>
    <div className="topbar"><div className="shell topbar-inner"><span><Icon name="shield" size={15}/> AIS-140 GPS Approved for All 38 Districts in Bihar</span><div><a href="mailto:support@routetech.in"><Icon name="mail" size={15}/> support@routetech.in</a><a href="tel:+918935989871"><Icon name="phone" size={15}/> +91 89359 89871</a></div></div></div>
    <header className="header"><div className="shell nav-wrap">
      <Brand/>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<a className="btn btn-sm" href="tel:+918935989871">Request installation</a></nav>
      <MobileMenu/>
    </div></header>
  </>;
}
