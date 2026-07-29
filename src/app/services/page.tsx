import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "General contracting, impact windows and doors, renovations, commercial construction, and exterior doors in Naples and Tampa, FL.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Comprehensive construction solutions"
        description="Five core capabilities—delivered with luxury craftsmanship and Certified General Contractor oversight."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80"
        imageAlt="Architectural blueprints and planning"
      />

      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-6 lg:grid-cols-2">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid overflow-hidden border border-bronze/25 bg-black transition hover:border-bronze sm:grid-cols-2"
                >
                  <div className="relative min-h-[220px]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 40vw"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6">
                    <h2 className="font-serif text-2xl text-bronze">{service.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">{service.description}</p>
                    <span className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-white group-hover:text-bronze">
                      Learn More →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
