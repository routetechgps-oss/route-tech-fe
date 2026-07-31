import type { Metadata } from "next";
import { HomeExperience } from "@/components/HomeExperience";

export const metadata: Metadata = {
  title: { absolute: "AIS-140 GPS Tracking in Bihar | Route Tech" },
  description: "Route Tech provides AIS-140 GPS tracking in Bihar for commercial vehicles and mining trucks, with installation support across all 38 districts.",
  keywords: ["AIS-140 GPS tracking in Bihar", "AIS 140 GPS Bihar", "commercial vehicle GPS Bihar", "mining truck GPS Bihar", "VLTD installation Bihar"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "AIS-140 GPS Tracking in Bihar | Route Tech",
    description: "Live commercial and mining fleet visibility with Bihar-focused installation and support.",
    url: "/",
    type: "website",
    images: [{ url: "/images/route-tech/home-social.jpg", width: 1731, height: 909, alt: "AIS-140 GPS tracking on a Bihar highway" }],
  },
  twitter: { card: "summary_large_image", title: "AIS-140 GPS Tracking in Bihar | Route Tech", description: "Bihar-focused AIS-140 and mining fleet GPS solutions." },
  other: { "geo.region": "IN-BR", "geo.placename": "Bihar" },
};

export default function Home() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AIS-140 GPS Tracking in Bihar",
    serviceType: "AIS-140 commercial vehicle and mining fleet GPS tracking",
    areaServed: { "@type": "State", name: "Bihar" },
    provider: { "@type": "LocalBusiness", name: "Route Tech", url: "https://routetech.in", telephone: ["+91-84095-39047", "+91-89359-89871"] },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "GPS tracking solutions",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AIS-140 GPS for commercial vehicles in Bihar" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mining GPS for trucks in Bihar" } },
      ],
    },
  };

  return <><HomeExperience /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} /></>;
}
