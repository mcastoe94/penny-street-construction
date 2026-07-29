/** Penny Street Construction, LLC — shared business constants */
export const COMPANY = {
  legalName: "Penny Street Construction, LLC",
  brandName: "Penny Street Construction",
  owner: "Alex Licata",
  phoneDisplay: "(727) 871-6357",
  phoneTel: "+17278716357",
  email: "al@penny-street.com",
  license: "CGC1540787",
  licenseFull: "Licensed Certified General Contractor CGC1540787",
  serviceArea: "Naples & Tampa, Florida",
  serviceAreasShort: ["Naples, FL", "Tampa, FL"],
  hours: "Monday – Friday, 8:00 AM – 5:00 PM",
  facebook: "#",
  instagram: "#",
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services", children: true },
  { label: "Projects", href: "/projects" },
  { label: "VillageWalk", href: "/villagewalk" },
  { label: "Contact Us", href: "/contact" },
] as const;
