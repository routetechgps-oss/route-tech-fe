import type { MetadataRoute } from "next";
import { biharDistricts, districtCoveragePath } from "@/data/bihar-districts";

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/ais-140-gps-solutions-in-bihar", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/mining-gps", priority: 0.9, changeFrequency: "monthly" },
  { path: "/dealer-network", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about-us", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const districtRoutes = biharDistricts.map((district) => ({
    path: districtCoveragePath(district),
    priority: 0.75,
    changeFrequency: "monthly" as const,
  }));

  return [...routes, ...districtRoutes].map(({ path, priority, changeFrequency }) => ({
    url: `https://routetech.in${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
