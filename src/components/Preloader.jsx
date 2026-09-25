import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const PHASES = [
  "ZEROING REFERENCE",
  "APPLYING TEST POINTS",
  "VERIFYING TRACEABILITY",
  "RECORDING CERTIFICATE",
];

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const DURATION = 1900;
    let raf = 0;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / DURATION);
      // ease with a couple of "settling" pauses like a real calibrator
      const eased = t < 0.92 ? t * (1 + 0.06 * Math.sin(t * 28)) : 1;
      setProgress(Math.min(100, Math.round(eased * 100)));
      setPhase(Math.min(PHASES.length - 1, Math.floor(t * PHASES.length)));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(tick);
    // hard fallback: never trap the user
    const fail = setTimeout(() => setDone(true), 4500);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fail);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[150] flex flex-col justify-between bg-[#05070a] px-6 py-6 md:px-12 md:py-10"
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.22em] text-[#5b636d] uppercase">
            <span>Calibration Technology Services</span>
            <span className="hidden sm:block">EST. 2014 — KHI / PK</span>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-end justify-between">
              <AnimatePresence mode="wait">
                <motion.p
                  key={phase}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="font-mono text-[12px] tracking-[0.28em] text-[#ff5a1f] uppercase"
                >
                  ▸ {PHASES[phase]}
                </motion.p>
              </AnimatePresence>
              <span className="font-mono text-[12px] tracking-[0.2em] text-[#5b636d] tnum">
                {String(progress).padStart(3, "0")}%
              </span>
            </div>
            <div className="h-px w-full bg-white/10">
              <div
                className="h-full bg-[#ff5a1f] transition-[width] duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
            <h1 className="font-display text-[13vw] md:text-[9vw] leading-[0.9] font-bold tracking-tight text-[#ece9e2]">
              CAL<span className="text-[#ff5a1f]">TEC</span>
            </h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
