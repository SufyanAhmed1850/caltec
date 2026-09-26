import { motion } from "motion/react";
import Gauge from "./Gauge.jsx";
import Readout from "./Readout.jsx";
import { Rise, FadeUp, Counter } from "./Reveal.jsx";
import { loadDelay } from "../lib/loadDelay.js";

const STATS = [
  { value: 2014, label: "Established", plain: true },
  { value: 3, label: "ISO systems", plain: true },
  { value: 7, label: "Calibration disciplines", plain: true },
  { value: 100, suffix: "+", label: "Customer logos displayed" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden pt-28 md:pt-32">
      {/* blueprint backdrop */}
      <div className="blueprint blueprint-fade absolute inset-0" aria-hidden="true" />
      {/* scanning line */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff5a1f]/70 to-transparent"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-[#ff5a1f]/[0.07] blur-[140px]" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-[1600px] flex-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <FadeUp delay={loadDelay(2.5)}>
            <p className="label-mono mb-6">
              <span className="tick">■</span>&nbsp;&nbsp;Calibration Technology Services — Est. 2014
            </p>
          </FadeUp>

          <h1 className="font-display text-[13.5vw] font-bold leading-[0.92] tracking-[-0.02em] sm:text-[11vw] lg:text-[6.2vw]">
            <Rise text="Precision that" delay={loadDelay(2.6)} /><br />
            <Rise text="keeps industry" delay={loadDelay(2.75)} /><br />
            <span className="text-[#ff5a1f]">
              <Rise text="moving." delay={loadDelay(2.9)} />
            </span>
          </h1>

          <FadeUp delay={loadDelay(3.2)}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#9aa3ad]">
              Traceable calibration, instrumentation support and validation for
              organisations where accuracy, uptime and audit readiness matter.
            </p>
          </FadeUp>

          <FadeUp delay={loadDelay(3.35)}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="/enquiry/" className="btn-signal" data-hover>
                Request a calibration quote
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </a>
              <a href="#services" className="btn-outline" data-hover>
                Explore calibration services
              </a>
            </div>
          </FadeUp>
        </div>

        <div className="lg:col-span-5">
          <FadeUp delay={loadDelay(3.0)} className="flex flex-col gap-6">
            <div className="rounded-2xl border hairline bg-[#0b0e13]/60 p-6 backdrop-blur">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#5b636d]">
                  Reference standard
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#37e08b]">
                  ● Stable
                </span>
              </div>
              <Gauge className="mx-auto w-full max-w-[380px]" />
            </div>
            <Readout />
          </FadeUp>
        </div>
      </div>

      {/* stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: loadDelay(3.6), duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative border-t hairline bg-[#05070a]/70 backdrop-blur"
      >
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 divide-x divide-white/[0.07] px-0 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="px-6 py-5 md:px-12">
              <p className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                {s.plain ? (
                  <span className="tnum">{s.value}</span>
                ) : (
                  <Counter to={s.value} suffix={s.suffix || ""} />
                )}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-[#5b636d]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
