# CALTEC — Calibration Technology Services

Awwwards-level rebuild of [caltec.com.pk](http://caltec.com.pk) from scratch.

**Stack:** Astro 7 · React 19 islands · Tailwind CSS 4 · Motion (Framer Motion) · GSAP + ScrollTrigger · Lenis smooth scroll

**Design:** "Precision instrument" aesthetic — deep-ink laboratory surfaces, calibrator-orange signal accents, JetBrains Mono bench readouts, live-ticking measurement panels, an animated calibration gauge, pinned horizontal process scroll, and a calibration-sequence preloader.

## Develop

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build        # outputs to dist/
npx wrangler pages deploy dist --project-name caltec
```

Live: https://caltec.pages.dev
