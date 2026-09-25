import { useEffect, useRef } from "react";
import gsap from "gsap";

// Precision gauge — animated needle sweeping a calibrated dial
export default function Gauge({ className = "" }) {
  const needleRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const needle = needleRef.current;
    if (!needle) return;
    gsap.set(needle, { transformOrigin: "100px 100px", rotation: -90 });
    const tl = gsap.timeline({ repeat: -1, yoyo: false });
    // sweep up like a real calibrator self-test, then settle with micro-oscillation
    tl.to(needle, { rotation: 62, duration: 2.2, ease: "power3.inOut" })
      .to(needle, { rotation: 38, duration: 0.7, ease: "power2.out" })
      .to(needle, { rotation: 52, duration: 3.5, ease: "sine.inOut" })
      .to(needle, { rotation: 44, duration: 2.8, ease: "sine.inOut" })
      .to(needle, { rotation: 58, duration: 3.2, ease: "sine.inOut" });
    const glow = glowRef.current;
    if (glow) {
      gsap.to(glow, { opacity: 0.5, duration: 1.6, yoyo: true, repeat: -1, ease: "sine.inOut" });
    }
    return () => tl.kill();
  }, []);

  const ticks = [];
  for (let i = 0; i <= 20; i++) {
    const angle = -90 + (i / 20) * 180;
    const rad = (angle * Math.PI) / 180;
    const major = i % 5 === 0;
    const r1 = major ? 74 : 82;
    const r2 = 90;
    ticks.push(
      <line
        key={i}
        x1={100 + r1 * Math.cos(rad)}
        y1={100 + r1 * Math.sin(rad)}
        x2={100 + r2 * Math.cos(rad)}
        y2={100 + r2 * Math.sin(rad)}
        stroke={major ? "#ff5a1f" : "rgba(236,233,226,0.28)"}
        strokeWidth={major ? 2 : 1}
      />
    );
  }

  return (
    <svg viewBox="0 0 200 120" className={className} role="img" aria-label="Calibration gauge">
      <defs>
        <radialGradient id="gaugeGlow" cx="50%" cy="85%" r="60%">
          <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse ref={glowRef} cx="100" cy="105" rx="95" ry="45" fill="url(#gaugeGlow)" opacity="0.8" />
      <path d="M 10 100 A 90 90 0 0 1 190 100" fill="none" stroke="rgba(236,233,226,0.14)" strokeWidth="1.5" />
      {ticks}
      <g ref={needleRef}>
        <line x1="100" y1="100" x2="100" y2="26" stroke="#ece9e2" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="100" y1="100" x2="100" y2="60" stroke="#ff5a1f" strokeWidth="5" strokeLinecap="round" />
      </g>
      <circle cx="100" cy="100" r="7" fill="#0b0e13" stroke="#ff5a1f" strokeWidth="2" />
      <circle cx="100" cy="100" r="2.5" fill="#ff5a1f" />
      <text x="100" y="116" textAnchor="middle" fill="#5b636d" fontSize="7" fontFamily="JetBrains Mono, monospace" letterSpacing="2">
        CALIBRATED
      </text>
    </svg>
  );
}
