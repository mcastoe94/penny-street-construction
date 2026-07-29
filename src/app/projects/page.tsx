import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/site/ButtonLink";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Featured luxury renovations, impact window installations, and construction projects by Penny Street Construction in Naples and Tampa.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Quality work that speaks for itself"
        description="A selection of residential and specialty projects showcasing craftsmanship across Naples and Tampa."
        image="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600&q=80"
        imageAlt="Luxury renovated home"
      />

      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block overflow-hidden border border-bronze/25 bg-black transition hover:border-bronze"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="border-t border-bronze/20 p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-bronze">
                      {project.category} · {project.location}
                    </p>
                    <h2 className="mt-2 font-serif text-2xl text-white">{project.title}</h2>
                    <p className="mt-2 text-sm text-white/65">{project.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <ButtonLink href="/contact">Request a Free Estimate</ButtonLink>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
