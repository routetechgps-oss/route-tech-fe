import type { Metadata } from "next";
import { DealerNetworkExperience } from "@/components/DealerNetworkExperience";
import { biharDistricts, districtCoveragePath } from "@/data/bihar-districts";
import "./dealer-network.css";

export const metadata: Metadata = {
  title: "AIS-140 & Mining GPS Dealership in Bihar | All 38 Districts",
  description: "Become an authorized AIS-140 & Mining GPS dealer in Bihar. Partner with Route Tech for high margins, Khanan Soft & Vahan portal sync, and local lead support.",
  keywords: ["AIS 140 GPS dealership Bihar", "Bihar Khanan GPS distributor", "Mining GPS dealer Patna", "VLTD dealer registration Bihar", "Commercial vehicle GPS distributor Bihar", "Sand ghat GPS dealer Bihar", "Route Tech GPS franchise", "Vahan sync GPS supplier Bihar"],
  alternates: { canonical: "/dealer-network" },
  openGraph: {
    title: "AIS-140 & Mining GPS Dealer Network in Bihar | Route Tech",
    description: "Join Bihar's leading AIS-140 & Mining GPS dealer network. High profit margins, Khanan Soft & Vahan portal sync support across all 38 districts.",
    url: "/dealer-network",
    type: "website",
    images: [{ url: "/images/route-tech/dealer-network-social.jpg", width: 1731, height: 909, alt: "Authorized AIS-140 and Mining GPS Dealer Network Across Bihar" }],
  },
  twitter: { card: "summary_large_image", title: "AIS-140 & Mining GPS Dealership in Bihar | Route Tech", description: "Become an authorized GPS dealer in Bihar. Complete Vahan 4.0 & Khanan Soft technical support in Patna and all 38 districts.", images: ["/images/route-tech/dealer-network-social.jpg"] },
};

export default function DealerNetworkPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", name: "Route Tech Dealer Network in Bihar", url: "https://www.routetechgps.com/dealer-network", description: metadata.description, about: { "@type": "Service", name: "GPS dealer and installation network in Bihar", areaServed: { "@type": "State", name: "Bihar" } } },
      {
        "@type": "ItemList",
        name: "Bihar districts served by the Route Tech dealer network",
        numberOfItems: 38,
        itemListElement: biharDistricts.map((name, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name,
          url: `https://www.routetechgps.com${districtCoveragePath(name)}`,
        })),
      },
    ],
  };

  return <>
    <DealerNetworkExperience />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
