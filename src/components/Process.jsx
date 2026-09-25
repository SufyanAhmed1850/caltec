import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Process({ steps }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const getScroll = () => track.scrollWidth - window.innerWidth;
    const tween = gsap.to(track, {
      x: () => -getScroll(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${getScroll()}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (barRef.current) barRef.current.style.transform = `scaleX(${self.progress})`;
        },
      },
    });
    return () => {
      tween.scrollTrigger && tween.scrollTrigger.kill();
      tween.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#070a0e]">
      <div className="flex h-svh flex-col justify-center">
        <div className="mx-auto w-full max-w-[1600px] px-6 md:px-12">
          <p className="label-mono mb-4">
            <span className="tick">■</span>&nbsp;&nbsp;How CALTEC works — clarity at every handoff
          </p>
          <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.015em] md:text-6xl">
            From requirement to <span className="text-[#ff5a1f]">usable record.</span>
          </h2>
          <p className="mt-4 max-w-xl text-[#9aa3ad]">
            A visible, four-stage workflow keeps scope, timing and documentation easy to follow.
            <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#5b636d]">— scroll →</span>
          </p>
        </div>

        <div ref={trackRef} className="mt-12 flex w-max gap-6 px-6 md:px-12">
          {steps.map((s, i) => (
            <article
              key={s.n}
              className="group relative flex h-[46vh] w-[82vw] shrink-0 flex-col justify-between overflow-hidden rounded-2xl border hairline bg-[#0b0e13] p-8 md:w-[44vw] md:p-10"
            >
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#ff5a1f]/[0.06] blur-[80px] transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="flex items-start justify-between">
                <span className="font-display text-7xl font-bold tracking-tighter text-white/[0.07] transition-colors duration-500 group-hover:text-[#ff5a1f]/25 md:text-8xl">
                  {s.n}
                </span>
                <span className="rounded-full border hairline px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[#5b636d]">
                  Stage {s.n} / 04
                </span>
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{s.title}</h3>
                <p className="mt-4 max-w-md leading-relaxed text-[#9aa3ad]">{s.description}</p>
                {i === 0 && (
                  <a href="/enquiry/" className="btn-signal mt-6 !py-3 !px-6" data-hover>
                    Start a service request
                  </a>
                )}
              </div>
              {i < steps.length - 1 && (
                <div className="absolute right-[-3.2rem] top-1/2 hidden -translate-y-1/2 text-[#ff5a1f] md:block" aria-hidden="true">
                  <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
                    <path d="M0 8H38M38 8L31 1M38 8L31 15" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
              )}
            </article>
          ))}
          <div className="w-[8vw] shrink-0" aria-hidden="true" />
        </div>

        <div className="mx-auto mt-10 w-full max-w-[1600px] px-6 md:px-12">
          <div className="h-px w-full bg-white/10">
            <div ref={barRef} className="h-full origin-left bg-[#ff5a1f]" style={{ transform: "scaleX(0)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
