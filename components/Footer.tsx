import Link from "next/link";
import { Icon } from "./Icon";
import { Brand } from "./Brand";

export function Footer() {
  return <footer className="footer"><div className="shell footer-grid">
    <div className="footer-brand"><Brand inverse/><p>Bihar’s authorized provider of ARAI-approved AIS-140 VLTD devices and Khanan Soft Mining GPS. Fast doorstep installation, Vahan 4.0 sync, panic buttons, and e-challan protection for trucks, tippers, dumpers, and school buses across all 38 districts.</p><span className="service-pill"><i/> Serving all 38 districts of Bihar</span></div>
    <div><h3>Explore</h3><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/dealer-network">Dealer network</Link><Link href="/about-us">About us</Link><Link href="/contact">Contact us</Link></div>
    <div><h3>Solutions</h3><Link href="/services/ais-140-gps-solutions-in-bihar">AIS-140 VLTD GPS Tracker Bihar</Link><Link href="/services/ais-140-gps-solutions-in-bihar">School Bus AIS-140 Compliance</Link><Link href="/services/mining-gps">Khanan Soft & Sand Ghat GPS</Link><Link href="/services/ais-140-gps-solutions-in-bihar">Tipper & Heavy Excavator GPS</Link><Link href="/services/ais-140-gps-solutions-in-bihar">Vahan 4.0 Portal Sync Guide</Link></div>
    <div><h3>Popular Locations</h3><Link href="/dealer-network/ais-140-gps-solution-in-patna">AIS-140 VLTD GPS Dealer Patna</Link><Link href="/dealer-network/ais-140-gps-solution-in-muzaffarpur">VLTD GPS Tracker Muzaffarpur</Link><Link href="/dealer-network/ais-140-gps-solution-in-gopalganj">RTO Approved GPS in Gopalganj</Link><Link href="/dealer-network/ais-140-gps-solution-in-siwan">RTO Approved GPS Siwan & Purnia</Link><Link href="/dealer-network/ais-140-gps-solution-in-purnia">RTO Approved GPS Purnia; Sasaram</Link></div>
    <div><h3>Contact</h3><a href="tel:+918935989871"><Icon name="phone" size={17}/> +91 89359 89871</a><span><Icon name="phone" size={17}/> +91 84095 39047</span><a href="mailto:routetechgps@gmail.com"><Icon name="mail" size={17}/> routetechgps@gmail.com</a><span><Icon name="pin" size={17}/> Patna Central School Road, Jaganpura, East Lakshmi Nagar, Ramkrishan Nagar, Patna, Bihar – 800027</span></div>
  </div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Route Tech. All rights reserved.</span><div><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms-and-conditions">Terms &amp; conditions</Link></div></div></footer>;
}
