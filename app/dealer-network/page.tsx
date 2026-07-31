import type { Metadata } from "next";
import { DealerNetworkExperience } from "@/components/DealerNetworkExperience";
import { biharDistricts, districtCoveragePath } from "@/data/bihar-districts";
import "./dealer-network.css";

export const metadata: Metadata = {
  title: "GPS Dealer Network in Bihar – All 38 Districts",
  description: "Explore Route Tech’s GPS dealer network across all 38 districts of Bihar. Join our AIS-140 and commercial vehicle GPS partnership network with local support.",
  keywords: ["GPS dealer network Bihar", "AIS 140 dealership Bihar", "GPS dealership in Bihar", "Route Tech dealer", "commercial vehicle GPS dealer Bihar", "GPS distributor Bihar"],
  alternates: { canonical: "/dealer-network" },
  openGraph: {
    title: "Route Tech GPS Dealer Network Across Bihar",
    description: "Dealer and installation support across all 38 districts of Bihar.",
    url: "/dealer-network",
    type: "website",
    images: [{ url: "/images/route-tech/dealer-network-social.jpg", width: 1731, height: 909, alt: "Connected Route Tech GPS dealer network across Bihar" }],
  },
  twitter: { card: "summary_large_image", title: "GPS Dealer Network Across Bihar | Route Tech", description: "Explore Route Tech’s dealer coverage across all 38 districts of Bihar.", images: ["/images/route-tech/dealer-network-social.jpg"] },
};

export default function DealerNetworkPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", name: "Route Tech Dealer Network in Bihar", url: "https://routetech.in/dealer-network", description: metadata.description, about: { "@type": "Service", name: "GPS dealer and installation network in Bihar", areaServed: { "@type": "State", name: "Bihar" } } },
      {
        "@type": "ItemList",
        name: "Bihar districts served by the Route Tech dealer network",
        numberOfItems: 38,
        itemListElement: biharDistricts.map((name, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name,
          url: `https://routetech.in${districtCoveragePath(name)}`,
        })),
      },
    ],
  };

  return <>
    <DealerNetworkExperience />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
