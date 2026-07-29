import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/site/ButtonLink";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { getProject, PROJECTS } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} · ${project.location}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <PageHero
        eyebrow={project.location}
        title={project.title}
        description={project.description}
        image={project.image}
        imageAlt={project.title}
      />

      <section className="bg-charcoal py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl text-white">Project overview</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/70">{project.description}</p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {project.gallery.map((src) => (
                  <div key={src} className="relative aspect-[4/3] overflow-hidden border border-white/10">
                    <Image src={src} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
                  </div>
                ))}
              </div>
            </div>
            <aside className="border border-bronze/25 bg-black p-6 h-fit">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-bronze">Details</p>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-white/45">Location</dt>
                  <dd className="mt-1 text-white">{project.location}</dd>
                </div>
                <div>
                  <dt className="text-white/45">Category</dt>
                  <dd className="mt-1 text-white">{project.category}</dd>
                </div>
                <div>
                  <dt className="text-white/45">Services</dt>
                  <dd className="mt-1 text-white">{project.services.join(", ")}</dd>
                </div>
              </dl>
              <div className="mt-8">
                <ButtonLink href="/contact" className="w-full">
                  Start a Similar Project
                </ButtonLink>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
