export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  image: string;
  heroImage: string;
  highlights: string[];
  process: { step: string; title: string; body: string }[];
  faqs: { q: string; a: string }[];
  seoTitle: string;
  seoDescription: string;
};

export const SERVICES: Service[] = [
  {
    slug: "general-contracting",
    title: "General Contracting",
    shortTitle: "General Contracting",
    description:
      "End-to-end project leadership for custom homes, renovations, and commercial builds—permits, scheduling, and quality control under one roof.",
    longDescription:
      "As your Certified General Contractor, Penny Street Construction manages every phase of the work. From pre-construction planning through final walkthrough, we coordinate trades, protect your schedule, and deliver craftsmanship that holds up in Florida’s coastal climate.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80",
    highlights: [
      "Full-service project management",
      "Residential & commercial scope",
      "Permitting & inspections",
      "Scheduling & trade coordination",
      "Subcontractor management",
      "On-site quality control",
    ],
    process: [
      {
        step: "01",
        title: "Consult & scope",
        body: "We walk the site, clarify goals, and define a clear scope with transparent budgeting.",
      },
      {
        step: "02",
        title: "Plan & permit",
        body: "Plans, selections, and permitting are handled so construction starts on solid ground.",
      },
      {
        step: "03",
        title: "Build & manage",
        body: "Daily oversight, documented progress, and coordinated trades keep the job moving.",
      },
      {
        step: "04",
        title: "Closeout",
        body: "Punch list, final inspections, and a polished handoff you can trust.",
      },
    ],
    faqs: [
      {
        q: "Do you handle permits?",
        a: "Yes. We manage permitting and inspections as part of our general contracting service for Naples and Tampa projects.",
      },
      {
        q: "Can you work with my architect or designer?",
        a: "Absolutely. We regularly partner with designers and architects while protecting schedule and budget.",
      },
      {
        q: "Are you licensed in Florida?",
        a: "Yes. Penny Street Construction, LLC is a Licensed Certified General Contractor — CGC1540787.",
      },
    ],
    seoTitle: "General Contractor Naples & Tampa FL | Penny Street Construction",
    seoDescription:
      "Licensed Certified General Contractor CGC1540787 serving Naples and Tampa. Custom homes, renovations, and commercial project management.",
  },
  {
    slug: "window-door-installation",
    title: "Window & Door Installation",
    shortTitle: "Windows & Doors",
    description:
      "Impact windows and premium door systems engineered for Florida storms, energy efficiency, and refined curb appeal.",
    longDescription:
      "Protect your home and elevate its look with professionally installed impact windows and doors. We specialize in coastal-ready systems that improve comfort, security, and appearance—installed cleanly with attention to flashing, seals, and finish details.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
    highlights: [
      "Impact-rated windows",
      "Storm protection",
      "Energy-efficient glazing",
      "Custom sizing & finishes",
      "Sliding & French doors",
      "Clean, professional installation",
    ],
    process: [
      {
        step: "01",
        title: "Measure & recommend",
        body: "We assess openings, exposure, and design goals to recommend the right systems.",
      },
      {
        step: "02",
        title: "Select products",
        body: "Choose finishes and performance ratings that match your architecture and HOA requirements.",
      },
      {
        step: "03",
        title: "Install & seal",
        body: "Precise installation with proper flashing, sealing, and finish work.",
      },
      {
        step: "04",
        title: "Final review",
        body: "Operation check, cleanup, and walkthrough so every opening performs as expected.",
      },
    ],
    faqs: [
      {
        q: "Do you install impact windows?",
        a: "Yes. Impact window and door installation is a core service for Naples and Tampa coastal homes.",
      },
      {
        q: "Will installation disrupt my home?",
        a: "We work room by room when possible, protect interiors, and leave each area clean at the end of the day.",
      },
      {
        q: "Can you match existing architecture?",
        a: "We help select profiles and finishes that complement luxury Florida residences and community guidelines.",
      },
    ],
    seoTitle: "Impact Window Installation Naples FL | Penny Street Construction",
    seoDescription:
      "Impact windows and premium door installation in Naples and Tampa. Storm protection, energy efficiency, and luxury finishes.",
  },
  {
    slug: "renovations-remodeling",
    title: "Renovations & Remodeling",
    shortTitle: "Renovations",
    description:
      "Whole-home renovations, kitchens, baths, and refined remodeling that respect structure, schedule, and design intent.",
    longDescription:
      "From kitchen and bath upgrades to full residential transformations, we remodel with the discipline of a GC and the eye of a craftsman—protected living spaces, coordinated selections, and finishes that feel intentional.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80",
    highlights: [
      "Kitchen remodeling",
      "Bathroom renovations",
      "Whole-home remodels",
      "Cabinetry & finishes",
      "Flooring & paint",
      "Design assistance",
    ],
    process: [
      {
        step: "01",
        title: "Vision & budget",
        body: "Define priorities, style direction, and a realistic investment range.",
      },
      {
        step: "02",
        title: "Design selections",
        body: "Cabinetry, surfaces, fixtures, and finishes selected with lead times in mind.",
      },
      {
        step: "03",
        title: "Remodel execution",
        body: "Phased construction with daily protection of living areas and clear updates.",
      },
      {
        step: "04",
        title: "Reveal & refine",
        body: "Detailing, punch list, and a finished space ready to enjoy.",
      },
    ],
    faqs: [
      {
        q: "Can I live in the home during remodeling?",
        a: "Often yes. We phase work and protect living spaces so many clients remain in place during renovations.",
      },
      {
        q: "Do you remodel kitchens and baths?",
        a: "Yes—kitchen remodeling and bathroom renovations are among our most requested residential services.",
      },
      {
        q: "Do you help with design?",
        a: "We provide design assistance and coordinate with designers when you prefer a full design team.",
      },
    ],
    seoTitle: "Kitchen & Whole Home Renovation Naples FL | Penny Street",
    seoDescription:
      "Luxury renovations and remodeling in Naples and Tampa—kitchens, baths, and whole-home transformations by CGC1540787.",
  },
  {
    slug: "commercial-construction",
    title: "Commercial Construction",
    shortTitle: "Commercial",
    description:
      "Tenant improvements, office renovations, and commercial remodeling delivered with clear schedules and professional site presence.",
    longDescription:
      "Businesses need predictable delivery. We provide commercial construction and tenant build-outs for offices, retail, restaurants, and medical spaces—coordinated trades, after-hours options when needed, and finishes that support your brand.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
    highlights: [
      "Tenant improvements",
      "Office renovations",
      "Retail & restaurant fit-outs",
      "Medical office build-outs",
      "Commercial remodeling",
      "Professional project management",
    ],
    process: [
      {
        step: "01",
        title: "Program & requirements",
        body: "Align on lease deadlines, occupancy goals, and operational constraints.",
      },
      {
        step: "02",
        title: "Preconstruction",
        body: "Budgets, schedules, and permitting planned around your opening date.",
      },
      {
        step: "03",
        title: "Build-out",
        body: "Disciplined execution with trade sequencing and site professionalism.",
      },
      {
        step: "04",
        title: "Turnover",
        body: "Inspections, punch, and a space ready for furniture, staff, and clients.",
      },
    ],
    faqs: [
      {
        q: "Do you handle tenant improvements?",
        a: "Yes. Tenant build-outs and commercial remodeling are a core part of our commercial practice.",
      },
      {
        q: "Can you work around business hours?",
        a: "When required, we plan noisy or disruptive work outside peak operating hours.",
      },
      {
        q: "Which commercial property types do you serve?",
        a: "Offices, retail, restaurants, medical suites, and related commercial renovations in Naples and Tampa.",
      },
    ],
    seoTitle: "Commercial Construction Naples FL | Tenant Build Outs",
    seoDescription:
      "Commercial construction and tenant improvements in Naples and Tampa—offices, retail, restaurants, and medical build-outs.",
  },
  {
    slug: "exterior-doors",
    title: "Exterior Doors",
    shortTitle: "Exterior Doors",
    description:
      "Statement entry doors, sliding systems, and impact-rated exterior doors that elevate curb appeal and performance.",
    longDescription:
      "Your front door sets the tone for the entire home. We install premium entry doors, French doors, sliding doors, and impact-rated exterior systems—selected for security, storm readiness, and architectural presence.",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80",
    highlights: [
      "Premium entry doors",
      "French & sliding doors",
      "Impact-rated exterior doors",
      "Custom materials & finishes",
      "Door replacement",
      "Hardware & detailing",
    ],
    process: [
      {
        step: "01",
        title: "Style & performance",
        body: "Match door style to architecture while meeting impact and security needs.",
      },
      {
        step: "02",
        title: "Material selection",
        body: "Wood, fiberglass, aluminum, and glass systems selected for Florida conditions.",
      },
      {
        step: "03",
        title: "Precision install",
        body: "Plumb, sealed, and finished openings with premium hardware.",
      },
      {
        step: "04",
        title: "Final adjust",
        body: "Swing, latch, weatherseal, and appearance reviewed together.",
      },
    ],
    faqs: [
      {
        q: "Do you install impact exterior doors?",
        a: "Yes. Impact-rated exterior doors are available for coastal Florida homes.",
      },
      {
        q: "Can you replace only the front door?",
        a: "Yes—single door replacements and full entry system upgrades are both common.",
      },
      {
        q: "What materials do you recommend?",
        a: "It depends on exposure and design. We advise on materials that perform in Naples and Tampa climates.",
      },
    ],
    seoTitle: "Exterior Door Installation Naples FL | Entry & Impact Doors",
    seoDescription:
      "Premium exterior door installation in Naples and Tampa—entry doors, sliding doors, French doors, and impact systems.",
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
