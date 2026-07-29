import { COMPANY } from "@/lib/company";
import { ButtonLink } from "@/components/site/ButtonLink";

type Props = {
  title?: string;
  description?: string;
};

export function CtaBand({
  title = "Let's Build Something Great Together",
  description = "Request a free estimate or call us today. We proudly serve Naples and Tampa, Florida.",
}: Props) {
  return (
    <section className="border-y border-bronze/25 bg-charcoal">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl font-medium text-white sm:text-4xl">{title}</h2>
          <p className="mt-3 text-white/70">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={`tel:${COMPANY.phoneTel}`}>{COMPANY.phoneDisplay}</ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Request a Free Estimate
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
