import { ArrowDown } from "lucide-react";
import { SproutMark, TendrilCorner } from "./BotanicalMarks";

const READOUTS = [
  { label: "TEMP", value: "24.2", unit: "°C", note: "optimal range" },
  { label: "HUMIDITY", value: "68", unit: "%", note: "leaf zone" },
  { label: "PAR LIGHT", value: "420", unit: "μmol", note: "mid-canopy" },
  { label: "CO₂", value: "880", unit: "ppm", note: "daytime target" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-20 pb-16 sm:pb-20 px-5 sm:px-8 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/60" />

      <TendrilCorner
        className="absolute -top-2 -left-2 w-24 h-24 sm:w-32 sm:h-32 opacity-[0.25] pointer-events-none"
        style={{ color: "var(--accent)" }}
      />
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-mono uppercase tracking-wider mb-6 backdrop-blur-md bg-white/10"
            style={{
              borderColor: "rgba(255,255,255,0.3)",
              color: "#e6fcf1",
            }}
          >
            <SproutMark className="w-3.5 h-3.5" style={{ color: "#86efac" }} />
            Greenhouse consulting · fabrication & construction
          </div>
          <h1
            className="font-display leading-[0.98] tracking-tight"
            style={{
              color: "#ffffff",
              fontSize: "clamp(2.5rem, 6.5vw, 4.5rem)",
              fontWeight: 600,
              textShadow: "0 4px 12px rgba(0,0,0,0.4)",
            }}
          >
            Master greenhouse farming
            <br />
            for <span style={{ color: "#86efac" }}>any crop.</span>
          </h1>
          <p
            className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed"
            style={{
              color: "#e6fcf1",
              textShadow: "0 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            Expert consulting to help you design, automate, fabricate, build,
            and grow healthy crops year-round. From leafy greens to exotic
            flowers, we engineer the conditions for your success.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#scheduler"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm sm:text-base font-medium transition-transform hover:-translate-y-0.5"
              style={{ background: "#22c55e", color: "#051f17" }}
            >
              Book Free Strategy Call <ArrowDown size={16} />
            </a>
            <a
              href="#packages"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm sm:text-base font-medium border backdrop-blur-sm transition-colors hover:bg-white/20"
              style={{ borderColor: "rgba(255,255,255,0.3)", color: "#ffffff" }}
            >
              Explore Packages
            </a>
          </div>
        </div>
        <div
          className="mt-20 sm:mt-24 rounded-2xl border overflow-hidden shadow-2xl backdrop-blur-sm"
          style={{
            borderColor: "rgba(255,255,255,0.2)",
            background: "rgba(15,61,46,0.85)",
          }}
        >
          <div
            className="flex items-center justify-between px-5 sm:px-6 py-3 border-b font-mono text-[11px] uppercase tracking-wider"
            style={{ borderColor: "rgba(255,255,255,0.15)", color: "#d1fae5" }}
          >
            <span>Zone 04 — Active Climate Log</span>
            <span className="hidden sm:inline">Updated continuously</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {READOUTS.map((r) => (
              <div
                key={r.label}
                className="px-5 sm:px-6 py-5 sm:py-6 border-b sm:border-b-0 sm:border-r last:border-r-0"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              >
                <div
                  className="font-mono text-[10px] tracking-wider mb-1.5"
                  style={{ color: "#86efac" }}
                >
                  {r.label}
                </div>
                <div className="flex items-baseline gap-1">
                  <span
                    className="font-display text-2xl sm:text-3xl"
                    style={{ color: "#f0fdf4" }}
                  >
                    {r.value}
                  </span>
                  <span
                    className="font-mono text-xs"
                    style={{ color: "#d1fae5" }}
                  >
                    {r.unit}
                  </span>
                </div>
                <div className="text-xs mt-1" style={{ color: "#86efac" }}>
                  {r.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
