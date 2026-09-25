import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHead from "./SectionHead.jsx";
import { FadeUp } from "./Reveal.jsx";

gsap.registerPlugin(ScrollTrigger);

const POINTS = [
  { t: "Audit-aware documentation", d: "organised around your quality workflow." },
  { t: "One accountable team", d: "across laboratory and field support." },
  { t: "Scope before promises", d: "with requirements clarified up front." },
];

export default function LabStandard() {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    const tween = gsap.to(img, {
      yPercent: 12,
      ease: "none",
      scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: true },
    });
    return () => {
      tween.scrollTrigger && tween.scrollTrigger.kill();
      tween.kill();
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#070a0e] py-28 md:py-40">
      <div className="mx-auto grid max-w-[1600px] items-center gap-14 px-6 md:px-12 lg:grid-cols-2">
        <div className="relative">
          <FadeUp>
            <div className="relative overflow-hidden rounded-2xl border hairline">
              <img
                ref={imgRef}
                src="https://caltec.com.pk/wp-content/plugins/caltec-experience/assets/caltec-hero.jpg"
                alt="Industrial process facility supported by precise instrumentation"
                className="h-[420px] w-full scale-[1.18] object-cover md:h-[560px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070a]/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#ece9e2]">
                  Field ready — Karachi
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#37e08b]">
                  ● Nationwide support
                </span>
              </div>
            </div>
          </FadeUp>
          <div className="pointer-events-none absolute -left-8 -top-8 -z-10 h-40 w-40 rounded-full bg-[#ff5a1f]/10 blur-[70px]" aria-hidden="true" />
        </div>

        <div>
          <SectionHead
            kicker="Built for operating reality"
            title="The laboratory standard, brought to your process."
            copy="Our team supports installation, servicing and calibration in the laboratory and on site — so critical equipment can return to dependable operation with a clear record behind it."
          />
          <ul className="mt-10 space-y-0 border-t hairline">
            {POINTS.map((p, i) => (
              <FadeUp key={p.t} delay={i * 0.1}>
                <li className="group flex items-start gap-5 border-b hairline py-6">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#37e08b]/40 text-[#37e08b] transition-all duration-300 group-hover:bg-[#37e08b] group-hover:text-[#05070a]">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7.5L5.8 10.8L11.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="pt-1 text-lg leading-relaxed">
                    <strong className="font-semibold text-[#ece9e2]">{p.t}</strong>{" "}
                    <span className="text-[#9aa3ad]">{p.d}</span>
                  </p>
                </li>
              </FadeUp>
            ))}
          </ul>
          <FadeUp delay={0.3}>
            <a href="/about/" className="btn-outline mt-10" data-hover>
              How CALTEC works
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
