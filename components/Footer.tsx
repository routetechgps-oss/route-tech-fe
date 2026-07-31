import Link from "next/link";
import { Icon } from "./Icon";
import { Brand } from "./Brand";

export function Footer() {
  return <footer className="footer"><div className="shell footer-grid">
    <div className="footer-brand"><Brand inverse/><p>AIS-140 and mining GPS solutions for safer, visible and better-managed commercial fleets across Bihar.</p><span className="service-pill"><i/> Serving all 38 districts of Bihar</span></div>
    <div><h3>Explore</h3><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/dealer-network">Dealer network</Link><Link href="/about-us">About us</Link><Link href="/contact">Contact us</Link></div>
    <div><h3>Solutions</h3><Link href="/services/ais-140-gps-solutions-in-bihar">AIS-140 GPS in Bihar</Link><Link href="/services/mining-gps">Mining GPS in Bihar</Link><Link href="/services">All GPS services</Link><Link href="/services#faq">FAQs</Link></div>
    <div><h3>Contact</h3><a href="tel:+918409539047"><Icon name="phone" size={17}/> +91 84095 39047</a><a href="tel:+918935989871"><Icon name="phone" size={17}/> +91 89359 89871</a><a href="mailto:support@routetech.in"><Icon name="mail" size={17}/> support@routetech.in</a><span><Icon name="pin" size={17}/> Patna, Bihar – 800001</span></div>
  </div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Route Tech. All rights reserved.</span><div><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms-and-conditions">Terms &amp; conditions</Link></div></div></footer>;
}
