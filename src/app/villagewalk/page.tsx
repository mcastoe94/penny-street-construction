import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/site/ButtonLink";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "VillageWalk Remodeling & Improvements",
  description:
    "VillageWalk remodeling specialists—impact windows, entry doors, kitchens, baths, and exterior improvements for Naples homeowners.",
};

const offerings = [
  "Kitchen renovations",
  "Bathroom remodels",
  "Impact window installation",
  "Premium entry doors",
  "Exterior improvements",
  "Whole-home remodeling",
];

export default function VillageWalkPage() {
  return (
    <>
      <PageHero
        eyebrow="VillageWalk"
        title="Built for VillageWalk homeowners"
        description="Remodeling, impact windows, entry doors, and exterior upgrades tailored to VillageWalk living—with neighborhood experience and premium craftsmanship."
        image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
        imageAlt="Luxury neighborhood home"
      />

      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bronze">
                Neighborhood Experience
              </p>
              <h2 className="mt-3 font-serif text-4xl text-white">
                Renovations that respect VillageWalk style
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/70">
                VillageWalk homes deserve careful upgrades—beautiful interiors, storm-ready
                openings, and exterior improvements that enhance curb appeal without fighting the
                community’s aesthetic. Penny Street Construction brings GC discipline and luxury
                detailing to every VillageWalk project.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {offerings.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-white/80">
                    <span className="text-bronze">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">Request a Free Estimate</ButtonLink>
                <ButtonLink href="/projects" variant="outline">
                  View Projects
                </ButtonLink>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
                "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
                "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
              ].map((src) => (
                <div key={src} className="relative aspect-square overflow-hidden border border-bronze/20">
                  <Image src={src} alt="" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Planning a VillageWalk upgrade?" />
    </>
  );
}
