import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./premium.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.routetechgps.com"),
  title: { default: "AIS-140 GPS Solutions in Bihar | Route Tech", template: "%s | Route Tech" },
  description: "Route Tech provides AIS-140 GPS and mining vehicle tracking solutions across Bihar, with professional installation and responsive support.",
  keywords: ["AIS 140 GPS Bihar", "GPS tracker Bihar", "commercial vehicle GPS Bihar", "mining GPS Bihar", "VLTD Bihar", "Route Tech"],
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: { type: "website", locale: "en_IN", siteName: "Route Tech", images: [{ url: "/images/route-tech/site-social.jpg", width: 1731, height: 909, alt: "Route Tech commercial GPS intelligence across Bihar" }] },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context": "https://schema.org", "@type": "LocalBusiness", name: "Route Tech", url: "https://www.routetechgps.com", logo: "https://www.routetechgps.com/brand-final/route-tech-client-final.png", telephone: "+91-89359-89871", email: "routetechgps@gmail.com", address: { "@type": "PostalAddress", streetAddress: "East Lakshmi Nagar, Ramkrishan Nagar", addressLocality: "Patna", addressRegion: "Bihar", postalCode: "800027", addressCountry: "IN" }, areaServed: { "@type": "State", name: "Bihar" }, description: "AIS-140 GPS and mining fleet tracking solutions in Bihar." };
  return <html lang="en" data-scroll-behavior="smooth"><body><Header /><main>{children}</main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><Script id="microsoft-clarity" strategy="afterInteractive">{`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);
        t.async=1;
        t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xwnft7p7tb");
  `}</Script></body></html>;
}
