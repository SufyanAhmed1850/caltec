import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionHead from "./SectionHead.jsx";
import { FadeUp } from "./Reveal.jsx";

export default function Directory({ instruments }) {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return instruments;
    return instruments.filter((i) => i.toLowerCase().includes(needle));
  }, [q, instruments]);

  return (
    <section id="directory" className="relative scroll-mt-28 py-28 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <SectionHead
          kicker="Capability directory"
          title="Find your instrument."
          copy="Search CALTEC's supplied service scope. Final method, range and uncertainty are confirmed for each request."
        />

        <FadeUp delay={0.1}>
          <div className="relative mt-10 max-w-2xl">
            <svg className="absolute left-5 top-1/2 -translate-y-1/2 text-[#5b636d]" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.6" />
              <path d="M13 13L16.5 16.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search this capability — e.g. transmitter, gauge, oven…"
              className="w-full rounded-full border hairline bg-[#0b0e13] py-4 pl-13 pr-6 text-[15px] text-[#ece9e2] placeholder:text-[#3d454f] outline-none transition-colors focus:border-[#ff5a1f]/60"
              style={{ paddingLeft: "3.25rem" }}
              aria-label="Search instruments"
            />
            {q && (
              <button
                onClick={() => setQ("")}
                className="absolute right-5 top-1/2 -translate-y-1/2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#5b636d] hover:text-[#ff5a1f]"
              >
                Clear
              </button>
            )}
          </div>
        </FadeUp>

        <div className="mt-6 flex items-center justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#5b636d]">
            {results.length} instrument{results.length === 1 ? "" : "s"} listed
          </p>
        </div>

        {results.length > 0 ? (
          <motion.ul layout className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {results.map((name) => (
                <motion.li
                  layout
                  key={name}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  className="group flex items-center gap-3 rounded-xl border hairline bg-[#0b0e13]/70 px-5 py-4 transition-colors hover:border-[#ff5a1f]/40"
                >
                  <span className="text-[#ff5a1f] transition-transform duration-300 group-hover:translate-x-1">▸</span>
                  <span className="text-[14.5px] text-[#c9cdd3]">{name}</span>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed hairline p-12 text-center">
            <p className="font-display text-2xl font-bold">No matching item is listed.</p>
            <p className="mt-3 text-[#9aa3ad]">Send the requirement and CALTEC will confirm the right capability.</p>
            <a href="/enquiry/" className="btn-signal mt-6" data-hover>Send your requirement</a>
          </div>
        )}
      </div>
    </section>
  );
}
