import { site } from "@/lib/site";

/** Floating shortcut to WhatsApp, shown on every page. */
export function WhatsAppButton({ label }: { label: string }) {

  return (
    <a
      href={`https://wa.me/${site.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition-transform duration-300 hover:scale-110 sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 rounded-full bg-[#25d366] opacity-40 [animation:ping_2.6s_cubic-bezier(0,0,0.2,1)_infinite]" aria-hidden />
      <svg viewBox="0 0 24 24" className="relative h-7 w-7" aria-hidden>
        <path d="M12 2.2a9.8 9.8 0 0 0-8.4 14.8L2.3 21.7l4.8-1.3A9.8 9.8 0 1 0 12 2.2Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path
          fill="currentColor"
          d="M9 7.4c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.8 4.2 2.4.9 2.9.8 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.3-.1-.1-.2-.2-.5-.3l-1.8-.9c-.2-.1-.4-.1-.6.1l-.8 1c-.2.2-.3.2-.6.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.5-1.8-.2-.3 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5L9 7.4Z"
        />
      </svg>
    </a>
  );
}
