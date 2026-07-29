import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/site/ButtonLink";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Penny Street Construction, LLC — Licensed Certified General Contractor CGC1540787 serving Naples and Tampa with craftsmanship and integrity.",
};

const values = [
  {
    title: "Experience",
    body: "Field-tested leadership that anticipates issues before they become delays.",
  },
  {
    title: "Craftsmanship",
    body: "Details matter—from flashing and finishes to the way a door closes.",
  },
  {
    title: "Communication",
    body: "Clear updates, honest timelines, and a single point of accountability.",
  },
  {
    title: "Integrity",
    body: "We do what we say—and we stand behind the work when the job is complete.",
  },
  {
    title: "Quality",
    body: "Premium materials and disciplined quality control on every phase.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A contractor built on trust and craftsmanship"
        description={`${COMPANY.legalName} is led by ${COMPANY.owner} and licensed as a Certified General Contractor (${COMPANY.license}), serving Naples and Tampa homeowners and businesses.`}
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
        imageAlt="Construction professionals on site"
      />

      <section className="bg-charcoal py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bronze">Our Story</p>
            <h2 className="mt-3 font-serif text-4xl text-white">Company story & mission</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Penny Street Construction exists to deliver luxury-level construction with the
              reliability of a true general contractor. We bring together renovations, impact
              windows and doors, and commercial build-outs under one disciplined process—so
              clients get clarity, craftsmanship, and confidence from start to finish.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Our mission is simple: build quality, communicate clearly, and leave every project
              better than we found it.
            </p>
          </div>
          <div className="relative min-h-[360px] overflow-hidden border border-bronze/25">
            <Image
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80"
              alt="Luxury home exterior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bronze">Values</p>
          <h2 className="mt-3 font-serif text-4xl text-white">Why choose Penny Street</h2>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <li key={v.title} className="border border-bronze/25 bg-charcoal p-6">
                <h3 className="font-serif text-2xl text-bronze">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{v.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <ButtonLink href="/contact">Request a Free Estimate</ButtonLink>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
