import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/site/ButtonLink";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { getService, SERVICES } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.longDescription}
        image={service.heroImage}
        imageAlt={service.title}
      />

      <section className="bg-charcoal py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bronze">
                What’s included
              </p>
              <h2 className="mt-3 font-serif text-3xl text-white">Capabilities & focus</h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {service.highlights.map((item) => (
                  <li key={item} className="flex gap-2 border border-bronze/20 bg-black/40 px-4 py-3 text-sm text-white/80">
                    <span className="text-bronze">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bronze">Process</p>
              <h2 className="mt-3 font-serif text-3xl text-white">How we deliver</h2>
              <ol className="mt-8 space-y-5">
                {service.process.map((step) => (
                  <li key={step.step} className="border-l border-bronze/40 pl-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-bronze">
                      Step {step.step}
                    </p>
                    <h3 className="mt-1 font-serif text-xl text-white">{step.title}</h3>
                    <p className="mt-2 text-sm text-white/65">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bronze">FAQ</p>
          <h2 className="mt-3 font-serif text-3xl text-white">Common questions</h2>
          <ul className="mt-10 space-y-4">
            {service.faqs.map((faq) => (
              <li key={faq.q} className="border border-bronze/25 bg-charcoal p-6">
                <h3 className="font-serif text-xl text-bronze">{faq.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{faq.a}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Request a Free Estimate</ButtonLink>
            <ButtonLink href="/projects" variant="outline">
              View Projects
            </ButtonLink>
          </div>
        </div>
      </section>

      <CtaBand title={`Ready to discuss ${service.shortTitle.toLowerCase()}?`} />
    </>
  );
}
