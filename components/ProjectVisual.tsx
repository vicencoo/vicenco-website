// Stylised, image-free previews for the portfolio cards.
// Swap any of these for a real screenshot with next/image when you have one.

function Frame({ children, url, tone = "dark" }: { children: React.ReactNode; url: string; tone?: "dark" | "light" }) {
  return (
    <div
      className={`absolute inset-x-6 top-8 bottom-0 overflow-hidden rounded-t-xl border shadow-2xl shadow-black/60 transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-3 sm:inset-x-10 sm:top-10 ${
        tone === "light" ? "border-black/10 bg-[#f4efe6]" : "border-white/10 bg-[#0e0d0c]"
      }`}
    >
      <div className={`flex items-center gap-1.5 border-b px-3 py-2 ${tone === "light" ? "border-black/10" : "border-white/10"}`}>
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]/80" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]/80" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]/80" />
        <span className={`ml-3 truncate rounded px-2 py-0.5 text-[9px] ${tone === "light" ? "bg-black/5 text-black/50" : "bg-white/5 text-white/40"}`}>
          {url}
        </span>
      </div>
      {children}
    </div>
  );
}

export function ProjectVisual({ index }: { index: number }) {
  switch (index % 4) {
    case 0:
      return (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#4a3520,#1a120b_70%)]">
          <Frame url="maison-lumiere.com">
            <div className="relative h-full bg-[linear-gradient(160deg,#c8a27a,#6b4a2f_55%,#2a1c12)] p-5">
              <div className="flex justify-between text-[8px] uppercase tracking-[0.3em] text-white/70">
                <span>Lumière</span>
                <span>Rooms · Spa · Dine · Book</span>
              </div>
              <p className="mt-10 font-serif text-4xl leading-none text-white sm:text-5xl">
                Stay in <em className="text-[#f3dcb6]">light.</em>
              </p>
              <div className="mt-6 inline-block rounded-full border border-white/40 px-3 py-1 text-[8px] uppercase tracking-[0.25em] text-white/80">
                Reserve
              </div>
              <div className="absolute inset-x-5 bottom-5 grid grid-cols-3 gap-2">
                {["#e9cfa9", "#b58a5f", "#7d5a3c"].map((c) => (
                  <div key={c} className="h-16 rounded-md" style={{ background: c, opacity: 0.6 }} />
                ))}
              </div>
            </div>
          </Frame>
        </div>
      );
    case 1:
      return (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#2b2b2b,#0b0b0b_70%)]">
          <Frame url="ateliernoir.store" tone="light">
            <div className="p-5 text-black">
              <div className="flex justify-between text-[8px] uppercase tracking-[0.3em] text-black/60">
                <span className="font-semibold text-black">Atelier Noir</span>
                <span>Shop · Edit · Bag (2)</span>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[0, 1, 2].map((i) => (
                  <div key={i}>
                    <div
                      className="aspect-[3/4] rounded-sm"
                      style={{ background: ["#1a1a1a", "#c9c2b6", "#3d3a35"][i] }}
                    />
                    <div className="mt-2 h-1.5 w-3/4 rounded bg-black/70" />
                    <div className="mt-1 h-1.5 w-1/3 rounded bg-black/25" />
                  </div>
                ))}
              </div>
              <p className="mt-5 font-serif text-3xl italic">The Winter Edit</p>
            </div>
          </Frame>
        </div>
      );
    case 2:
      return (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1d2a2a,#0a0f0f_70%)]">
          <Frame url="app.nexa.io">
            <div className="flex h-full">
              <div className="w-12 border-r border-white/10 p-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className={`mb-2 h-6 rounded ${i === 1 ? "bg-[#c9a96e]/60" : "bg-white/5"}`} />
                ))}
              </div>
              <div className="flex-1 p-4">
                <div className="grid grid-cols-3 gap-2">
                  {["€48.2k", "2,940", "+18%"].map((v) => (
                    <div key={v} className="rounded-md border border-white/10 bg-white/[0.03] p-2">
                      <div className="h-1 w-8 rounded bg-white/20" />
                      <div className="mt-2 text-sm font-semibold text-white">{v}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 rounded-md border border-white/10 bg-white/[0.03] p-3">
                  <svg viewBox="0 0 200 70" className="h-24 w-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="ng" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" stopColor="#c9a96e" stopOpacity="0.5" />
                        <stop offset="1" stopColor="#c9a96e" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0 55 C20 50 30 30 50 35 S80 50 100 30 S140 10 160 20 S190 8 200 5 V70 H0Z" fill="url(#ng)" />
                    <path d="M0 55 C20 50 30 30 50 35 S80 50 100 30 S140 10 160 20 S190 8 200 5" fill="none" stroke="#ecd9ae" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="mt-3 flex h-14 items-end gap-1.5">
                  {[40, 65, 30, 80, 55, 90, 45, 70, 60, 85].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm bg-white/15" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </Frame>
        </div>
      );
    default:
      return (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#3a2e1c,#0a0908_70%)]">
          <Frame url="vicenco.com">
            <div className="relative h-full overflow-hidden p-5">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#c9a96e]/30 blur-3xl" />
              <div className="flex justify-between text-[8px] uppercase tracking-[0.3em] text-white/50">
                <span className="text-white">Vicenco</span>
                <span>EN · AL</span>
              </div>
              <p className="mt-8 font-serif text-3xl leading-[1.05] text-white sm:text-4xl">
                Crafted like
                <br />
                <em className="text-gold-gradient">fine objects.</em>
              </p>
              <div className="mt-6 flex gap-2">
                <div className="h-5 w-20 rounded-full bg-[#c9a96e]" />
                <div className="h-5 w-16 rounded-full border border-white/20" />
              </div>
            </div>
          </Frame>
        </div>
      );
  }
}
