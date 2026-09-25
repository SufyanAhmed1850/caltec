import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DISCIPLINES } from "../data/disciplines.js";

const LINKS = [
  { label: "About", href: "/about/" },
  { label: "Certification", href: "/certification/" },
  { label: "Blog", href: "/blog/" },
  { label: "Enquiry", href: "/enquiry/" },
  { label: "Contact us", href: "/contact-us/" },
];

function Roll({ text, className = "" }) {
  return (
    <span className={`roll ${className}`}>
      <span className="roll-inner">
        <span>{text}</span>
        <span className="text-[#ff5a1f]">{text}</span>
      </span>
    </span>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          scrolled ? "bg-[#05070a]/80 backdrop-blur-xl border-b hairline" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-12">
          <a href="/" className="flex items-center gap-3" aria-label="CALTEC home">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#ff5a1f] font-display text-sm font-bold text-[#0a0500]">
              C
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              CAL<span className="text-[#ff5a1f]">TEC</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {LINKS.slice(0, 2).map((l) => (
              <a key={l.href} href={l.href}
                className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#9aa3ad] transition-colors hover:text-[#ece9e2]">
                <Roll text={l.label} />
              </a>
            ))}

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDrop(true)}
              onMouseLeave={() => setDrop(false)}
            >
              <a href="/#services"
                className="flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.18em] text-[#9aa3ad] transition-colors hover:text-[#ece9e2]">
                <Roll text="Testing Calibration" />
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform ${drop ? "rotate-180" : ""}`}>
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
              <AnimatePresence>
                {drop && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4"
                  >
                    <div className="overflow-hidden rounded-2xl border hairline bg-[#0b0e13]/95 p-2 backdrop-blur-xl">
                      {DISCIPLINES.map((d) => (
                        <a key={d.slug} href={`/${d.slug}/`}
                          className="group flex items-center justify-between rounded-xl px-4 py-3 transition-colors hover:bg-white/[0.05]">
                          <span>
                            <span className="block font-mono text-[10px] tracking-[0.2em] text-[#5b636d]">0{d.cap}</span>
                            <span className="block text-[15px] font-medium text-[#ece9e2]">{d.name}</span>
                          </span>
                          <span className="text-[#ff5a1f] opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">→</span>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {LINKS.slice(2).map((l) => (
              <a key={l.href} href={l.href}
                className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#9aa3ad] transition-colors hover:text-[#ece9e2]">
                <Roll text={l.label} />
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href="/enquiry/" className="btn-signal !py-3 !px-6">
              Start an enquiry
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </a>
          </div>

          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`h-px w-6 bg-[#ece9e2] transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-[#ece9e2] transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-6 bg-[#ece9e2] transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[99] flex flex-col justify-end overflow-y-auto bg-[#05070a]/97 px-6 pb-12 pt-28 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {[{ label: "Home", href: "/" }, ...LINKS].map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                  onClick={() => setOpen(false)}
                  className="border-b hairline py-3.5 font-display text-3xl font-bold tracking-tight text-[#ece9e2]"
                >
                  {l.label}
                </motion.a>
              ))}
              <p className="pt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#5b636d]">Calibration</p>
              <div className="grid grid-cols-2 gap-2 pb-4">
                {DISCIPLINES.map((d) => (
                  <a key={d.slug} href={`/${d.slug}/`} onClick={() => setOpen(false)}
                    className="rounded-xl border hairline px-4 py-3 text-[14px] text-[#9aa3ad]">
                    {d.name}
                  </a>
                ))}
              </div>
            </nav>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#5b636d]">
              +92 333 22 83557 — Karachi, PK
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
