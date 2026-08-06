import type { Metadata } from "next";
import { ContactExperience } from "@/components/ContactExperience";

export const metadata: Metadata = {
  title: "Contact Route Tech | AIS-140 GPS Support in Bihar",
  description:
    "Contact Route Tech for AIS-140 GPS installation, NIC/Vahan integration, mining GPS and commercial fleet tracking support across Bihar. Call +91 89359 89871.",
  keywords: [
    "contact Route Tech",
    "AIS-140 GPS support Bihar",
    "GPS installation Patna",
    "commercial vehicle GPS Bihar",
    "mining GPS support Bihar",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Route Tech for AIS-140 GPS Solutions in Bihar",
    description:
      "Speak with Route Tech for certified GPS devices, professional installation and vehicle tracking support across Bihar.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/images/route-tech/contact-hero-certified-device.png",
        width: 2048,
        height: 800,
        alt: "Route Tech AIS-140 certified GPS device with commercial truck and school bus in Bihar",
      },
    ],
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Route Tech",
  url: "https://www.routetechgps.com/contact",
  description:
    "Contact Route Tech for AIS-140 GPS and mining fleet tracking solutions across Bihar.",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Route Tech",
    telephone: "+91-89359-89871",
    email: "routetechgps@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "East Lakshmi Nagar, Ramkrishan Nagar",
      addressLocality: "Patna",
      addressRegion: "Bihar",
      postalCode: "800027",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "State",
      name: "Bihar",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactExperience />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
    </>
  );
}
