export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  services: string[];
  description: string;
  image: string;
  gallery: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "custom-home-renovation-naples",
    title: "Custom Home Renovation",
    location: "Naples, FL",
    category: "Renovation",
    services: ["General Contracting", "Renovations & Remodeling"],
    description:
      "A refined whole-home renovation balancing coastal luxury with durable Florida construction details.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
  },
  {
    slug: "kitchen-remodel-tampa",
    title: "Kitchen Remodel",
    location: "Tampa, FL",
    category: "Kitchen",
    services: ["Renovations & Remodeling"],
    description:
      "A bright, high-end kitchen remodel with custom cabinetry, refined surfaces, and improved flow.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
      "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=1200&q=80",
    ],
  },
  {
    slug: "impact-window-installation-naples",
    title: "Impact Window Installation",
    location: "Naples, FL",
    category: "Windows",
    services: ["Window & Door Installation"],
    description:
      "Full-home impact window upgrade for storm protection, quieter interiors, and cleaner elevations.",
    image: "/projects/impact-window-naples.jpg",
    gallery: [
      "/projects/impact-window-naples.jpg",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
    ],
  },
  {
    slug: "whole-home-renovation-tampa",
    title: "Whole Home Renovation",
    location: "Tampa, FL",
    category: "Renovation",
    services: ["General Contracting", "Renovations & Remodeling"],
    description:
      "Comprehensive renovation delivering updated interiors, stronger systems, and elevated finishes.",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80",
    ],
  },
  {
    slug: "front-door-installation-naples",
    title: "Front Door Installation",
    location: "Naples, FL",
    category: "Doors",
    services: ["Exterior Doors"],
    description:
      "A statement entry door installation that upgraded curb appeal, security, and first impressions.",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80",
    ],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
