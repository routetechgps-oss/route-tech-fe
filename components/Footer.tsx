import Link from "next/link";
import { Icon } from "./Icon";
import { Brand } from "./Brand";

export function Footer() {
  return <footer className="footer"><div className="shell footer-grid">
    <div className="footer-brand"><Brand inverse/><p>Authorized provider of AIS-140 VLTD GPS tracking devices, panic buttons and Vahan Portal Sync solutions for trucks, school buses, mining Hyvas and commercial fleets across Bihar.</p><span className="service-pill"><i/> Serving all 38 districts of Bihar</span></div>
    <div><h3>Explore</h3><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/dealer-network">Dealer network</Link><Link href="/about-us">About us</Link><Link href="/contact">Contact us</Link></div>
    <div><h3>Solutions</h3><Link href="/services/ais-140-gps-solutions-in-bihar">AIS-140 GPS in Bihar</Link><Link href="/services/ais-140-gps-solutions-in-bihar">School Bus GPS Tracker</Link><Link href="/services/mining-gps">Mining &amp; Heavy Vehicle GPS</Link><Link href="/services/ais-140-gps-solutions-in-bihar">Commercial Vehicle &amp; Taxi GPS</Link><Link href="/services/ais-140-gps-solutions-in-bihar">Vahan Portal Clearance Guide</Link></div>
    <div><h3>Popular Locations</h3><Link href="/dealer-network/ais-140-gps-solution-in-patna">AIS-140 GPS in Patna</Link><Link href="/dealer-network/ais-140-gps-solution-in-muzaffarpur">VLTD GPS Tracker in Muzaffarpur</Link><Link href="/dealer-network/ais-140-gps-solution-in-gopalganj">RTO Approved GPS in Gopalganj</Link><Link href="/dealer-network/ais-140-gps-solution-in-siwan">VLTD GPS Device Dealer in Siwan</Link><Link href="/dealer-network/ais-140-gps-solution-in-purnia">VLTD GPS Tracker in Purnia &amp; Sasaram</Link></div>
    <div><h3>Contact</h3><a href="tel:+918935989871"><Icon name="phone" size={17}/> +91 89359 89871</a><span><Icon name="phone" size={17}/> +91 84095 39047</span><a href="mailto:routetechgps@gmail.com"><Icon name="mail" size={17}/> routetechgps@gmail.com</a><span><Icon name="pin" size={17}/> Patna Central School Road, Jaganpura, East Lakshmi Nagar, Ramkrishan Nagar, Patna, Bihar – 800027</span></div>
  </div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Route Tech. All rights reserved.</span><div><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms-and-conditions">Terms &amp; conditions</Link></div></div></footer>;
}
