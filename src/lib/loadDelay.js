/* Delays tuned for the first-load greeting sequence (~2.5-3.6s).
   On Barba page transitions there is no loader, so compress them to
   land just as the wipe reveals the new page. */
export function loadDelay(d) {
  if (typeof window !== "undefined" && window.__barbaNav) {
    return Math.max(0.35, d - 2.0);
  }
  return d;
}
