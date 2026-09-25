import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact", href: "/contact" },
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

          <nav className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#9aa3ad] transition-colors hover:text-[#ece9e2]"
              >
                <Roll text={l.label} />
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href="/contact" className="btn-signal !py-3 !px-6">
              Start a request
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
            className="fixed inset-0 z-[99] flex flex-col justify-end bg-[#05070a]/97 px-6 pb-12 pt-28 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {[{ label: "Home", href: "/" }, ...LINKS].map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                  onClick={() => setOpen(false)}
                  className="border-b hairline py-4 font-display text-4xl font-bold tracking-tight text-[#ece9e2]"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-[#5b636d]">
              +92 333 22 83557 — Karachi, PK
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
