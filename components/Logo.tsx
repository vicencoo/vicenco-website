import Image from "next/image";
import { site } from "@/lib/site";

// Full VinsalTech logo (mark + wordmark), white version for the dark background.
export function Wordmark({ className = "h-8 w-auto" }: { className?: string }) {
  return <Image src="/vinsaltech-logo-white.svg" alt={site.name} width={406} height={71} priority className={className} />;
}

// The VinsalTech mark on its own (from vinsaltech-icon.svg), with the dark half drawn white.
export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="12.48 16.64 79.04 70.72" className={className} aria-hidden>
      <polygon points="12.48,16.64 33.28,16.64 62.4,87.36 41.6,87.36" fill="#fff" />
      <polygon points="70.72,16.64 91.52,16.64 62.4,87.36 41.6,87.36" fill="#2F6BFF" />
    </svg>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-1 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M3 13 L13 3 M5 3 H13 V11" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
