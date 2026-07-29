import Image from "next/image";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  image: string;
  imageAlt?: string;
  compact?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  compact,
}: Props) {
  return (
    <section className={`relative overflow-hidden ${compact ? "min-h-[48vh]" : "min-h-[62vh]"}`}>
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      <div
        className={`relative mx-auto flex max-w-6xl flex-col justify-end px-4 sm:px-6 lg:px-8 ${
          compact ? "pb-16 pt-28" : "pb-20 pt-36"
        }`}
      >
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bronze">{eyebrow}</p>
        ) : null}
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-medium leading-[1.1] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
