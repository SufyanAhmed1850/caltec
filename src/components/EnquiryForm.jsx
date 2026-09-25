import { useState } from "react";
import { motion } from "motion/react";
import { FadeUp } from "./Reveal.jsx";

const FIELDS = [
  { name: "company", label: "Company Name", type: "text", required: true, span: true },
  { name: "address", label: "Address", type: "text", required: true, span: true },
  { name: "contact", label: "Contact Person", type: "text", required: true },
  { name: "designation", label: "Designation", type: "text" },
  { name: "phone", label: "Phone", type: "tel", required: true },
  { name: "fax", label: "Fax", type: "tel" },
  { name: "email", label: "Email Address", type: "email", required: true },
];

const PLACES = ["Site", "Laboratory", "Both"];

export default function EnquiryForm() {
  const [place, setPlace] = useState("Site");
  const [sent, setSent] = useState(false);

  return (
    <div>
      <FadeUp client:visible>
        <form
          className="rounded-2xl border hairline bg-[#0b0e13] p-8 md:p-12"
          onSubmit={(e) => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.currentTarget));
            const body = Object.entries(data).map(([k, v]) => `${k}: ${v}`).join("\n");
            window.location.href = `mailto:calibration@caltec.com.pk?subject=Calibration Enquiry — ${encodeURIComponent(data.company || "")}&body=${encodeURIComponent(body)}`;
            setSent(true);
          }}
        >
          <div className="grid gap-6 md:grid-cols-2">
            {FIELDS.map((f) => (
              <label key={f.name} className={`block ${f.span ? "md:col-span-2" : ""}`}>
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-[#5b636d]">
                  {f.label} {f.required && <span className="text-[#ff5a1f]">*</span>}
                </span>
                <input
                  name={f.name}
                  type={f.type}
                  required={f.required}
                  className="w-full rounded-xl border hairline bg-[#05070a] px-5 py-4 text-[15px] text-[#ece9e2] outline-none transition-colors placeholder:text-[#3f464e] focus:border-[#ff5a1f]/60"
                  placeholder={f.label}
                />
              </label>
            ))}
          </div>

          <div className="mt-6">
            <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.2em] text-[#5b636d]">
              Place of calibration <span className="text-[#ff5a1f]">*</span>
            </span>
            <div className="grid grid-cols-3 gap-3">
              {PLACES.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPlace(p)}
                  className={`rounded-xl border px-4 py-4 font-mono text-[12px] uppercase tracking-[0.16em] transition-all ${
                    place === p
                      ? "border-[#ff5a1f] bg-[#ff5a1f]/10 text-[#ff5a1f]"
                      : "hairline text-[#9aa3ad] hover:border-[#9aa3ad]"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
            <input type="hidden" name="place_of_calibration" value={place} />
          </div>

          <label className="mt-6 block">
            <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-[#5b636d]">
              List of instruments <span className="text-[#ff5a1f]">*</span>
            </span>
            <textarea
              name="instruments"
              required
              rows={5}
              className="w-full resize-y rounded-xl border hairline bg-[#05070a] px-5 py-4 text-[15px] text-[#ece9e2] outline-none transition-colors placeholder:text-[#3f464e] focus:border-[#ff5a1f]/60"
              placeholder="Instrument type, manufacturer, model, range — one per line"
            />
          </label>

          <label className="mt-6 block">
            <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-[#5b636d]">Comments</span>
            <textarea
              name="comments"
              rows={4}
              className="w-full resize-y rounded-xl border hairline bg-[#05070a] px-5 py-4 text-[15px] text-[#ece9e2] outline-none transition-colors placeholder:text-[#3f464e] focus:border-[#ff5a1f]/60"
              placeholder="Turnaround, criteria, audit dates — anything that helps us scope the work"
            />
          </label>

          <button type="submit" className="btn-signal mt-8 w-full justify-center !py-5">
            Send calibration enquiry
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>

          {sent && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 rounded-xl border border-[#37e08b]/30 bg-[#37e08b]/[0.06] px-5 py-4 text-center text-[15px] text-[#37e08b]"
            >
              Your email client should now be open — the enquiry will be sent to calibration@caltec.com.pk.
            </motion.p>
          )}
        </form>
      </FadeUp>
    </div>
  );
}
