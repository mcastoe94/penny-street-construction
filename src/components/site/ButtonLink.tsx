import Link from "next/link";

type ButtonVariant = "solid" | "outline" | "ghost";

const variants: Record<ButtonVariant, string> = {
  solid:
    "border border-bronze bg-bronze text-white hover:border-bronze-dark hover:bg-bronze-dark",
  outline:
    "border border-bronze bg-transparent text-white hover:bg-bronze hover:text-white",
  ghost:
    "border border-white/20 bg-white/5 text-white hover:border-bronze hover:bg-bronze/10",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "solid",
  className = "",
  external,
}: Props) {
  const classes = `inline-flex min-h-12 items-center justify-center rounded-md px-6 text-center text-xs font-semibold uppercase tracking-[0.16em] transition duration-300 ${variants[variant]} ${className}`;

  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
