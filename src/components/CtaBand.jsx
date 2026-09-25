import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Rise } from "./Reveal.jsx";

gsap.registerPlugin(ScrollTrigger);

// Giant CTA band with magnetic phone number
export default function CtaBand() {
  const phoneRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const phone = phoneRef.current;
    if (!wrap || !phone) return;
    const move = (e) => {
      const r = wrap.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      gsap.to(phone, { x: x * 0.18, y: y * 0.18, duration: 0.6, ease: "power3.out" });
    };
    const leave = () => gsap.to(phone, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.4)" });
    wrap.addEventListener("mousemove", move);
    wrap.addEventListener("mouseleave", leave);
    return () => {
      wrap.removeEventListener("mousemove", move);
      wrap.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <section className="relative overflow-hidden border-t hairline bg-[#070a0e] py-28 md:py-40">
      <div className="blueprint blueprint-fade absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5a1f]/[0.06] blur-[140px]" aria-hidden="true" />
      <div ref={wrapRef} className="relative mx-auto max-w-[1600px] px-6 text-center md:px-12">
        <p className="label-mono mb-8"><span className="tick">■</span>&nbsp;&nbsp;Keep uncertainty out of the process</p>
        <h2 className="mx-auto max-w-5xl font-display text-5xl font-bold leading-[1.0] tracking-[-0.02em] md:text-7xl">
          <Rise text="Let's put your next calibration on a clear path." />
        </h2>
        <div className="mt-12 flex flex-col items-center gap-6">
          <a ref={phoneRef} href="tel:+923332283557" data-hover className="inline-block">
            <span className="font-display text-4xl font-bold tracking-tight text-[#ff5a1f] md:text-6xl">
              +92 333 22 83557
            </span>
          </a>
          <a href="/enquiry/" className="btn-signal" data-hover>
            Start a service request
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
