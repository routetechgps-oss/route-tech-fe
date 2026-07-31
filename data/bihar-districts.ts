export const biharDistricts = [
  "Araria",
  "Arwal",
  "Aurangabad",
  "Banka",
  "Begusarai",
  "Bhagalpur",
  "Bhojpur",
  "Buxar",
  "Darbhanga",
  "East Champaran",
  "Gaya",
  "Gopalganj",
  "Jamui",
  "Jehanabad",
  "Kaimur",
  "Katihar",
  "Khagaria",
  "Kishanganj",
  "Lakhisarai",
  "Madhepura",
  "Madhubani",
  "Munger",
  "Muzaffarpur",
  "Nalanda",
  "Nawada",
  "Patna",
  "Purnia",
  "Rohtas",
  "Saharsa",
  "Samastipur",
  "Saran",
  "Sheikhpura",
  "Sheohar",
  "Sitamarhi",
  "Siwan",
  "Supaul",
  "Vaishali",
  "West Champaran",
] as const;

export type BiharDistrict = (typeof biharDistricts)[number];

export function districtSlug(district: string) {
  return district.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function districtCoverageSlug(district: string) {
  return `ais-140-gps-solution-in-${districtSlug(district)}`;
}

export function districtCoveragePath(district: string) {
  return `/dealer-network/${districtCoverageSlug(district)}`;
}

export function getDistrictFromCoverageSlug(slug: string): BiharDistrict | undefined {
  return biharDistricts.find((district) => districtCoverageSlug(district) === slug);
}
