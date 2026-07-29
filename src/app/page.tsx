import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/site/ButtonLink";
import { CtaBand } from "@/components/site/CtaBand";
import { COMPANY } from "@/lib/company";
import { PROJECTS } from "@/lib/projects";
import { SERVICES } from "@/lib/services";

const whyPoints = [
  "Licensed & Insured",
  "Certified General Contractor",
  "Quality Craftsmanship",
  "On-Time, On-Budget",
  "Impact Window & Door Experts",
  "Residential & Commercial",
  "Transparent Communication",
  "Customer Satisfaction Guaranteed",
];

const testimonials = [
  {
    quote:
      "Penny Street managed our renovation with professionalism from the first walkthrough to the final details. The craftsmanship is outstanding.",
    name: "Homeowner",
    place: "Naples, FL",
  },
  {
    quote:
      "Clear communication, clean jobsite, and impact windows installed exactly as promised. We would hire them again without hesitation.",
    name: "Homeowner",
    place: "Tampa, FL",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[88vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1800&q=80"
          alt="Luxury Florida home at dusk"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-20 pt-36 sm:px-6 lg:px-8">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-bronze">
            Naples & Tampa · CGC1540787
          </p>
          <h1 className="animate-fade-up delay-100 mt-5 max-w-3xl font-serif text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Building Quality.
            <br />
            Delivering <span className="text-bronze">Trust.</span>
          </h1>
          <p className="animate-fade-up delay-200 mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Penny Street Construction, LLC is a Licensed Certified General Contractor
            delivering luxury renovations, impact windows and doors, and premium
            residential and commercial craftsmanship across Southwest and Central Florida.
          </p>
          <div className="animate-fade-up delay-300 mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={`tel:${COMPANY.phoneTel}`}>{COMPANY.phoneDisplay}</ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Request a Free Estimate
            </ButtonLink>
          </div>
          <ul className="mt-10 flex flex-col gap-3 text-sm text-white/70 sm:flex-row sm:flex-wrap sm:gap-x-8">
            <li className="flex items-center gap-2">
              <span className="text-bronze">✓</span> Licensed Certified General Contractor
            </li>
            <li className="flex items-center gap-2">
              <span className="text-bronze">✓</span> Serving Naples & Tampa
            </li>
            <li className="flex items-center gap-2">
              <span className="text-bronze">✓</span> Licensed & Insured
            </li>
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bronze">Our Services</p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl font-medium text-white sm:text-5xl">
            Comprehensive Construction Solutions
          </h2>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {SERVICES.map((service) => (
              <li
                key={service.slug}
                className="group flex flex-col overflow-hidden border border-bronze/30 bg-black/40 transition duration-500 hover:border-bronze"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                </div>
                <div className="flex flex-1 flex-col border-t border-bronze/25 p-5">
                  <h3 className="font-serif text-lg text-bronze">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:text-bronze"
                  >
                    Learn More →
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div className="relative min-h-[420px] overflow-hidden border border-bronze/20">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=80"
              alt="Luxury living space overlooking a pool"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bronze">Why Choose Us</p>
            <h2 className="mt-3 font-serif text-4xl font-medium text-white sm:text-5xl">
              Why Choose Penny Street Construction
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {whyPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-white/80">
                  <span className="mt-0.5 text-bronze">✓</span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-10 grid gap-4 border border-bronze/25 bg-charcoal-soft p-5 sm:grid-cols-2">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-bronze">License</p>
                <p className="mt-2 text-sm text-white/80">{COMPANY.licenseFull}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-bronze">Service Area</p>
                <p className="mt-2 text-sm text-white/80">Naples, FL · Tampa, FL</p>
              </div>
            </div>
            <div className="mt-8">
              <ButtonLink href="/about" variant="outline">
                Learn More About Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bronze">Featured Projects</p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl font-medium text-white sm:text-5xl">
            Quality Work That Speaks For Itself
          </h2>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PROJECTS.map((project) => (
              <li key={project.slug}>
                <Link href={`/projects/${project.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute bottom-0 p-4">
                      <p className="text-sm font-medium text-white">{project.title}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.14em] text-bronze">
                        {project.location}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <ButtonLink href="/projects" variant="outline">
              View All Projects
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bronze">Testimonials</p>
          <h2 className="mt-3 font-serif text-4xl font-medium text-white sm:text-5xl">
            Trusted by Homeowners & Businesses
          </h2>
          <ul className="mt-12 grid gap-6 lg:grid-cols-2">
            {testimonials.map((t) => (
              <li key={t.place + t.name} className="border border-bronze/25 bg-charcoal p-8">
                <p className="font-serif text-2xl leading-relaxed text-white/90">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-bronze">
                  {t.name} · {t.place}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Service area */}
      <section className="border-y border-white/10 bg-charcoal-soft py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bronze">Service Area</p>
          <h2 className="mt-3 font-serif text-4xl font-medium text-white">Serving Naples & Tampa, Florida</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            From VillageWalk and coastal Naples neighborhoods to Tampa homes and commercial
            spaces—local expertise with luxury-level execution.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
