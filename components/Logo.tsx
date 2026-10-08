export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <defs>
        <linearGradient id="vg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ecd9ae" />
          <stop offset="0.5" stopColor="#c9a96e" />
          <stop offset="1" stopColor="#8a6d3b" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="10" fill="none" stroke="url(#vg)" strokeOpacity="0.6" />
      <path d="M11 12 L20 29 L29 12" fill="none" stroke="url(#vg)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="12" r="1.6" fill="#c9a96e" />
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
