import type { Metadata } from "next";
import "./globals.css";
import "./premium.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://routetech.in"),
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
  const schema = { "@context": "https://schema.org", "@type": "LocalBusiness", name: "Route Tech", url: "https://routetech.in", logo: "https://routetech.in/brand-final/route-tech-client-final.png", telephone: ["+91-84095-39047", "+91-89359-89871"], email: "support@routetech.in", address: { "@type": "PostalAddress", addressLocality: "Patna", addressRegion: "Bihar", postalCode: "800001", addressCountry: "IN" }, areaServed: { "@type": "State", name: "Bihar" }, description: "AIS-140 GPS and mining fleet tracking solutions in Bihar." };
  return <html lang="en" data-scroll-behavior="smooth"><body><Header /><main>{children}</main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>;
}
