import Image from "next/image";
import { COMPANY } from "@/lib/company";

type BrandLogoProps = {
  className?: string;
  size?: number;
  priority?: boolean;
};

export function BrandLogo({ className = "", size = 56, priority = false }: BrandLogoProps) {
  return (
    <Image
      src="/penny-street-logo.png"
      alt={`${COMPANY.legalName} logo`}
      width={size}
      height={size}
      className={`shrink-0 rounded-full object-contain ${className}`}
      priority={priority}
    />
  );
}
