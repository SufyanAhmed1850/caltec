import { CLIENTS } from "../data/clients.js";

export default function LogoMarquee() {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <div className="relative overflow-hidden border-y hairline bg-[#070a0e]/60 py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#05070a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#05070a] to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-16 pr-16">
        {row.map((c, i) => (
          <img
            key={`${c.name}-${i}`}
            src={c.logo}
            alt={c.name}
            loading="lazy"
            className="h-10 w-auto max-w-[140px] object-contain opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
          />
        ))}
      </div>
    </div>
  );
}
