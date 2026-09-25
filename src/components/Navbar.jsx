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

function MenuLink({ link, index }) {
  return (
    <div className="overflow-hidden">
      <motion.a
        href={link.href}
        data-hover
        className="group flex items-baseline gap-4 md:gap-6"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        exit={{ y: "20%", opacity: 0, transition: { duration: 0.25, ease: "easeIn" } }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.35 + index * 0.06 }}
      >
        <span className="font-mono text-[11px] tracking-[0.2em] text-[#5b636d] md:text-xs">
          {link.n}
        </span>
        <span className="font-display text-[12.5vw] font-bold leading-[1.04] tracking-tight text-[#ece9e2] transition-all duration-300 group-hover:translate-x-3 group-hover:text-[#ff5a1f] sm:text-[10vw] md:text-[5.2vw]">
          {link.label}
        </span>
        <span className="ml-auto hidden -translate-x-3 text-3xl text-[#ff5a1f] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
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

      {/* ── full-screen menu ──────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            className="fixed inset-0 z-[250] flex flex-col bg-[#0b0e13]"
            initial={{
              y: "-100%",
              borderBottomLeftRadius: "50% 10%",
              borderBottomRightRadius: "50% 10%",
            }}
            animate={{
              y: "0%",
              borderBottomLeftRadius: "0% 0%",
              borderBottomRightRadius: "0% 0%",
            }}
            exit={{
              y: "-100%",
              borderBottomLeftRadius: "50% 10%",
              borderBottomRightRadius: "50% 10%",
              transition: { duration: 0.7, ease: EASE },
            }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <div className="blueprint absolute inset-0 opacity-40" aria-hidden="true" />
            <div className="relative flex h-full flex-col overflow-y-auto px-6 pb-8 pt-28 md:px-12 md:pt-32">
              {/* links */}
              <nav className="flex flex-col" aria-label="Menu">
                {LINKS.map((l, i) => (
                  <MenuLink key={l.href} link={l} index={i} />
                ))}
              </nav>

              {/* disciplines */}
              <motion.div
                className="mt-10 md:mt-14"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.75 }}
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
                      className="rounded-full border hairline px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#9aa3ad] transition-all duration-300 hover:border-[#ff5a1f] hover:text-[#ff5a1f]"
                    >
                      {d.name}
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* contact strip */}
              <motion.div
                className="mt-auto grid grid-cols-2 gap-6 border-t hairline pt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-[#9aa3ad] md:grid-cols-4 md:pt-8"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.85 }}
              >
                <div>
                  <p className="mb-2 text-[#5b636d]">Email</p>
                  <a href={`mailto:${CONTACT.info}`} data-hover className="text-[#ece9e2] transition-colors hover:text-[#ff5a1f]">
                    {CONTACT.info}
                  </a>
                </div>
                <div>
                  <p className="mb-2 text-[#5b636d]">Phone</p>
                  <a href={CONTACT.mobileHref} data-hover className="text-[#ece9e2] transition-colors hover:text-[#ff5a1f]">
                    {CONTACT.mobile}
                  </a>
                </div>
                <div>
                  <p className="mb-2 text-[#5b636d]">Socials</p>
                  <a href={CONTACT.linkedin} target="_blank" rel="noopener" data-hover className="text-[#ece9e2] transition-colors hover:text-[#ff5a1f]">
                    LinkedIn ↗
                  </a>
                </div>
                <div>
                  <p className="mb-2 text-[#5b636d]">Office</p>
                  <p className="leading-relaxed">Korangi Industrial Area, Karachi</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
