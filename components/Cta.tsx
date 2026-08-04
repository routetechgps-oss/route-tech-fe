import Link from "next/link";
import { Icon } from "./Icon";

export function Cta() {
  return <section className="cta-strip"><div className="shell cta-inner"><div><span className="eyebrow light">Get your fleet connected</span><h2>Ready for dependable GPS installation in Bihar?</h2><p>Speak with Route Tech for device selection, installation support and a clear quote.</p></div><div className="cta-actions"><a href="tel:+918935989871" className="btn btn-white"><Icon name="phone" size={18}/> Call +91 89359 89871</a><Link href="/contact" className="text-link light-link">Send an enquiry <Icon name="arrow" size={18}/></Link></div></div></section>;
}
