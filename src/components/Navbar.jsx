import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DISCIPLINES, CONTACT } from "../data/disciplines.js";

const EASE = [0.76, 0, 0.24, 1];

const LINKS = [
  { n: "01", label: "Home", href: "/" },
  { n: "02", label: "About", href: "/about/" },
  { n: "03", label: "Certification", href: "/certification/" },
  { n: "04", label: "Blog", href: "/blog/" },
  { n: "05", label: "Enquiry", href: "/enquiry/" },
  { n: "06", label: "Contact us", href: "/contact-us/" },
];

function useKhiTime() {
  const [now, setNow] = useState("--:--:--");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Karachi",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    const tick = () => setNow(fmt.format(new Date()).toUpperCase());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function Burger({ open, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      data-hover
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className="grid h-14 w-14 place-items-center rounded-full bg-[#ece9e2] md:h-16 md:w-16"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <span className="relative block h-3 w-6" aria-hidden="true">
        <motion.span
          className="absolute left-0 top-0 h-[2px] w-full bg-[#05070a]"
          animate={open ? { y: 5, rotate: 45 } : { y: 0, rotate: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
        />
        <motion.span
          className="absolute bottom-0 left-0 h-[2px] w-full bg-[#05070a]"
          animate={open ? { y: -5, rotate: -45 } : { y: 0, rotate: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
        />
      </span>
    </motion.button>
  );
}

function MenuLink({ link, index, onNavigate }) {
  return (
    <div className="overflow-hidden">
      <motion.a
        href={link.href}
        data-hover
        onClick={onNavigate}
        className="group flex items-baseline gap-4"
        initial={{ x: 48, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 24, opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.25 + index * 0.06 }}
      >
        <span className="font-mono text-[10px] tracking-[0.2em] text-[#5b636d]">
          {link.n}
        </span>
        <span className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-[#ece9e2] transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#ff5a1f] md:text-[2.6rem]">
          {link.label}
        </span>
        <span className="ml-auto -translate-x-2 text-xl text-[#ff5a1f] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          ↗
        </span>
      </motion.a>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const time = useKhiTime();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      if (window.__lenis) window.__lenis.stop();
    } else {
      document.body.style.overflow = "";
      if (window.__lenis) window.__lenis.start();
    }
  }, [open ]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* ── fixed bar ─────────────────────────────── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-[300]"
      >
        <div className="flex items-center justify-between px-6 py-4 md:px-12 md:py-5">
          <a
            href="/"
            data-hover
            className="font-mono text-[13px] uppercase tracking-[0.18em] text-[#ece9e2]"
            aria-label="CALTEC home"
          >
            <span className="text-[#5b636d]">©2026</span>&nbsp;&nbsp;Caltec
          </a>
          <div className="flex items-center gap-5 md:gap-8">
            <p className="hidden font-mono text-[12px] uppercase tracking-[0.18em] text-[#9aa3ad] sm:block">
              Karachi, PK&nbsp;&nbsp;—&nbsp;&nbsp;
              <span className="tnum text-[#ece9e2]">{time}</span>
            </p>
            <Burger open={open} onClick={() => setOpen(!open)} />
          </div>
        </div>
      </motion.header>

      {/* ── right sidebar menu ────────────────────── */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-[240] bg-black/60 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.aside
              key="sidebar"
              className="fixed bottom-0 right-0 top-0 z-[250] flex w-[min(440px,88vw)] flex-col border-l hairline bg-[#0b0e13]"
              style={{ boxShadow: "-40px 0 80px rgba(0,0,0,0.45)" }}
              initial={{
                x: "102%",
                borderTopLeftRadius: "12% 50%",
                borderBottomLeftRadius: "12% 50%",
              }}
              animate={{
                x: "0%",
                borderTopLeftRadius: "0% 0%",
                borderBottomLeftRadius: "0% 0%",
              }}
              exit={{
                x: "102%",
                borderTopLeftRadius: "12% 50%",
                borderBottomLeftRadius: "12% 50%",
                transition: { duration: 0.55, ease: EASE },
              }}
              transition={{ duration: 0.75, ease: EASE }}
              aria-label="Site menu"
            >
              <div className="blueprint absolute inset-0 opacity-30" aria-hidden="true" />
              <div className="relative flex h-full flex-col overflow-y-auto px-8 pb-8 pt-28 md:pt-32">
                <p className="label-mono mb-6">
                  <span className="tick">■</span>&nbsp;&nbsp;Navigation
                </p>

                {/* links */}
                <nav className="flex flex-col gap-1" aria-label="Menu">
                  {LINKS.map((l, i) => (
                    <MenuLink key={l.href} link={l} index={i} onNavigate={() => setOpen(false)} />
                  ))}
                </nav>

                {/* disciplines */}
                <motion.div
                  className="mt-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.6 }}
                >
                  <p className="label-mono mb-4">
                    <span className="tick">■</span>&nbsp;&nbsp;Calibration
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {DISCIPLINES.map((d) => (
                      <a
                        key={d.slug}
                        href={`/${d.slug}/`}
                        data-hover
                        onClick={() => setOpen(false)}
                        className="rounded-full border hairline px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#9aa3ad] transition-all duration-300 hover:border-[#ff5a1f] hover:text-[#ff5a1f]"
                      >
                        {d.name}
                      </a>
                    ))}
                  </div>
                </motion.div>

                {/* contact */}
                <motion.div
                  className="mt-auto space-y-4 border-t hairline pt-6 font-mono text-[11px] uppercase tracking-[0.16em]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.7 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[#5b636d]">Email</span>
                    <a href={`mailto:${CONTACT.info}`} data-hover className="text-[#ece9e2] transition-colors hover:text-[#ff5a1f]">
                      {CONTACT.info}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#5b636d]">Phone</span>
                    <a href={CONTACT.mobileHref} data-hover className="text-[#ece9e2] transition-colors hover:text-[#ff5a1f]">
                      {CONTACT.mobile}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#5b636d]">Socials</span>
                    <a href={CONTACT.linkedin} target="_blank" rel="noopener" data-hover className="text-[#ece9e2] transition-colors hover:text-[#ff5a1f]">
                      LinkedIn ↗
                    </a>
                  </div>
                  <p className="pt-2 leading-relaxed text-[#5b636d]">
                    Korangi Industrial Area, Karachi
                  </p>
                </motion.div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
