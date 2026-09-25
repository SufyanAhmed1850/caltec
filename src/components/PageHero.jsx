import { Rise, FadeUp } from "./Reveal.jsx";

// Inner-page hero: mono breadcrumb, giant title, lede
export default function PageHero({ eyebrow, title, lede }) {
  return (
    <section className="relative overflow-hidden pt-40 pb-16 md:pt-52 md:pb-24">
      <div className="blueprint blueprint-fade absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-32 left-1/3 h-[380px] w-[520px] rounded-full bg-[#ff5a1f]/[0.06] blur-[130px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12">
        <FadeUp>
          <p className="label-mono mb-8">
            <span className="tick">■</span>&nbsp;&nbsp;{eyebrow}
          </p>
        </FadeUp>
        <h1 className="max-w-5xl font-display text-[12vw] font-bold leading-[0.95] tracking-[-0.02em] sm:text-6xl md:text-8xl">
          <Rise text={title} />
        </h1>
        {lede && (
          <FadeUp delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#9aa3ad]">{lede}</p>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
