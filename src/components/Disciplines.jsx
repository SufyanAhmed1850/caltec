import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionHead from "./SectionHead.jsx";
import { FadeUp } from "./Reveal.jsx";

export default function Disciplines({ items }) {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHead
                kicker="One technical partner"
                title="Every critical measurement, connected."
                copy="Seven focused disciplines bring laboratory capability, field expertise and clear documentation into one dependable service relationship."
              />
              <FadeUp delay={0.2}>
                <a href="/services" className="btn-outline mt-10" data-hover>
                  View all services
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </a>
              </FadeUp>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t hairline">
              {items.map((d, i) => {
                const open = active === i;
                return (
                  <div key={d.slug} className="border-b hairline">
                    <button
                      onClick={() => setActive(open ? -1 : i)}
                      data-hover
                      className="group flex w-full items-center gap-6 py-6 text-left md:py-7"
                    >
                      <span className={`font-mono text-[12px] tnum transition-colors ${open ? "text-[#ff5a1f]" : "text-[#5b636d]"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`flex-1 font-display text-2xl font-bold tracking-tight transition-all duration-300 md:text-4xl ${open ? "translate-x-2 text-[#ece9e2]" : "text-[#9aa3ad] group-hover:text-[#ece9e2]"}`}>
                        {d.name}
                      </span>
                      <motion.span
                        animate={{ rotate: open ? 45 : 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-colors ${open ? "border-[#ff5a1f] text-[#ff5a1f]" : "hairline text-[#9aa3ad]"}`}
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-6 pb-8 pl-0 md:grid-cols-2 md:pl-12">
                            <p className="leading-relaxed text-[#9aa3ad]">{d.description}</p>
                            <ul className="space-y-2">
                              {d.points.map((p) => (
                                <li key={p} className="flex items-start gap-3 font-mono text-[12px] uppercase tracking-[0.12em] text-[#9aa3ad]">
                                  <span className="mt-1 text-[#ff5a1f]">▸</span> {p}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
