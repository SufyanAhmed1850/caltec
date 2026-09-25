import { Rise, FadeUp } from "./Reveal.jsx";

// Shared section heading: mono kicker + big display title + optional copy
export default function SectionHead({ kicker, title, copy, align = "left", className = "" }) {
  const alignCls = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  return (
    <div className={`flex max-w-4xl flex-col ${alignCls} ${className}`}>
      <FadeUp>
        <p className="label-mono mb-6">
          <span className="tick">■</span>&nbsp;&nbsp;{kicker}
        </p>
      </FadeUp>
      <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.015em] md:text-6xl">
        <Rise text={title} />
      </h2>
      {copy && (
        <FadeUp delay={0.15}>
          <p className={`mt-6 max-w-2xl text-lg leading-relaxed text-[#9aa3ad] ${align === "center" ? "mx-auto" : ""}`}>
            {copy}
          </p>
        </FadeUp>
      )}
    </div>
  );
}
