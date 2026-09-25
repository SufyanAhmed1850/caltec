import { useEffect, useState } from "react";

// Live-ticking calibration readout — reference vs device-under-test
const CHANNELS = [
  { id: "CH-01", name: "TEMP / RTD", unit: "°C", ref: 24.0, span: 0.012 },
  { id: "CH-02", name: "PRESSURE", unit: "bar", ref: 6.895, span: 0.004 },
  { id: "CH-03", name: "DC VOLTAGE", unit: "V", ref: 10.0, span: 0.0008 },
];

function jitter(ref, span) {
  return ref + (Math.random() - 0.5) * 2 * span;
}

export default function Readout() {
  const [vals, setVals] = useState(CHANNELS.map((c) => c.ref));
  const [pass, setPass] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVals(CHANNELS.map((c) => jitter(c.ref, c.span)));
      setPass(Math.random() > 0.06);
    }, 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border hairline bg-[#0b0e13]/80 backdrop-blur">
      <div className="flex items-center justify-between border-b hairline px-5 py-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#5b636d]">
          Live bench — DUT vs REF
        </span>
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em]">
          <span className={`h-1.5 w-1.5 rounded-full ${pass ? "bg-[#37e08b]" : "bg-[#ff5a1f]"} animate-pulse`} />
          <span className={pass ? "text-[#37e08b]" : "text-[#ff5a1f]"}>
            {pass ? "In tolerance" : "Reviewing"}
          </span>
        </span>
      </div>
      <div className="divide-y divide-white/[0.06]">
        {CHANNELS.map((c, i) => {
          const dut = vals[i];
          const delta = dut - c.ref;
          const ok = Math.abs(delta) <= c.span;
          const dec = c.unit === "V" ? 4 : c.unit === "bar" ? 3 : 3;
          return (
            <div key={c.id} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-3.5">
              <div>
                <p className="font-mono text-[10px] tracking-[0.18em] text-[#5b636d]">{c.id}</p>
                <p className="font-mono text-[11px] tracking-[0.12em] text-[#9aa3ad]">{c.name}</p>
              </div>
              <p className="text-right font-mono text-lg tnum text-[#ece9e2] md:text-xl">
                {dut.toFixed(dec)}
                <span className="ml-1 text-[11px] text-[#5b636d]">{c.unit}</span>
              </p>
              <p className={`font-mono text-[11px] tnum ${ok ? "text-[#37e08b]" : "text-[#ff5a1f]"}`}>
                Δ {delta >= 0 ? "+" : ""}{delta.toFixed(dec + 1)}
              </p>
            </div>
          );
        })}
      </div>
      <div className="border-t hairline px-5 py-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5b636d]">
          ISO 9001 · ISO 14001 · ISO 45001 certified management
        </p>
      </div>
    </div>
  );
}
