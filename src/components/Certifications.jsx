import { motion } from "motion/react";
import SectionHead from "./SectionHead.jsx";
import { FadeUp } from "./Reveal.jsx";

const CERTS = [
  { code: "ISO 9001", name: "Quality", desc: "Management system", detail: "Consistent, controlled service delivery — from intake to certificate." },
  { code: "ISO 14001", name: "Environment", desc: "Management system", detail: "Responsible operations with environmental impact kept in check." },
  { code: "ISO 45001", name: "Health & safety", desc: "Management system", detail: "Safe working practice in the laboratory and on your site." },
];

export default function Certifications() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <SectionHead
          kicker="Assurance, made visible"
          title="Certified systems behind every service."
          copy="CALTEC's integrated management certifications support consistent quality, environmental responsibility, and occupational health and safety."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {CERTS.map((c, i) => (
            <FadeUp key={c.code} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative overflow-hidden rounded-2xl border hairline bg-[#0b0e13] p-8 md:p-10"
                data-hover
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#ff5a1f]/[0.08] blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#5b636d]">{c.name}</p>
                <p className="mt-3 font-display text-5xl font-bold tracking-tight md:text-6xl">
                  {c.code.split(" ")[0]}<span className="text-[#ff5a1f]"> {c.code.split(" ")[1]}</span>
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#9aa3ad]">{c.desc}</p>
                <p className="mt-6 leading-relaxed text-[#9aa3ad]">{c.detail}</p>
                <div className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#37e08b]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M5 8.2L7.2 10.4L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Certified
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2}>
          <div className="mt-10 flex justify-center">
            <a href="/certificates" className="btn-outline" data-hover>
              View current certificates
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
