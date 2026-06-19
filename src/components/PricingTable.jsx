import { Check, ArrowDown } from "lucide-react";

const PACKAGES = [
  {
    tier: "Tier 1",
    name: "Growth Blueprint",
    price: "$490",
    tagline: "Ideal for beginners",
    highlight: false,
    features: [
      "Structural design & layout planning",
      "Basic climate system selection",
      "Crop-specific growing guides",
      "30-day email support",
      "Site assessment report",
    ],
    cta: "Book Call to Purchase",
    href: "#scheduler",
  },
  {
    tier: "Tier 2",
    name: "Commercial Scale-Up",
    price: "$1,490",
    tagline: "Ideal for working farms",
    highlight: true,
    features: [
      "Full automation system design",
      "Integrated pest management plan",
      "Custom nutrient & feed programs",
      "Sensor network specification",
      "90-day priority support",
    ],
    cta: "Book Call to Purchase",
    href: "#scheduler",
  },
  {
    tier: "Tier 3",
    name: "Enterprise & Custom Build",
    price: "Custom",
    tagline: "Complete turnkey consulting",
    highlight: false,
    features: [
      "End-to-end automation layouts",
      "Multi-zone sensor networks",
      "Custom crop rotation schedules",
      "Staff training & SOPs",
      "Ongoing retainer available",
    ],
    cta: "Inquire for Pricing",
    href: "#scheduler",
  },
];

export default function PricingTable() {
  return (
    <section id="packages" className="px-5 sm:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div
            className="font-mono text-xs uppercase tracking-wider mb-3"
            style={{ color: "var(--accent)" }}
          >
            Service packages
          </div>
          <h2
            className="font-display tracking-tight"
            style={{
              color: "var(--ink)",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 600,
            }}
          >
            Consulting built around your scale.
          </h2>
          <p
            className="mt-4 text-base sm:text-lg"
            style={{ color: "var(--ink-soft)" }}
          >
            Every package ends with a call — because the right advice depends on
            your specific soil, climate, and goals.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 items-start">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.tier}
              className="rounded-2xl border flex flex-col overflow-hidden"
              style={{
                borderColor: pkg.highlight ? "var(--accent)" : "var(--line)",
                background: pkg.highlight ? "var(--bg-raised)" : "var(--bg)",
                boxShadow: pkg.highlight
                  ? "0 0 0 1px var(--accent)"
                  : undefined,
              }}
            >
              {pkg.highlight && (
                <div
                  className="text-center py-2 text-xs font-mono uppercase tracking-wider"
                  style={{ background: "var(--accent)", color: "var(--bg)" }}
                >
                  Most popular
                </div>
              )}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div
                      className="font-mono text-[10px] uppercase tracking-wider mb-1"
                      style={{ color: "var(--ink-faint)" }}
                    >
                      {pkg.tier}
                    </div>
                    <h3
                      className="font-display text-xl sm:text-2xl"
                      style={{ color: "var(--ink)" }}
                    >
                      {pkg.name}
                    </h3>
                  </div>
                  <div
                    className="font-display text-2xl sm:text-3xl"
                    style={{
                      color: pkg.highlight ? "var(--accent)" : "var(--ink)",
                    }}
                  >
                    {pkg.price}
                  </div>
                </div>
                <p className="text-sm mb-5" style={{ color: "var(--sage)" }}>
                  {pkg.tagline}
                </p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm"
                      style={{ color: "var(--ink-soft)" }}
                    >
                      <Check
                        size={14}
                        className="mt-0.5 shrink-0"
                        style={{ color: "var(--accent)" }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={pkg.href}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium border transition-colors hover:opacity-90"
                  style={
                    pkg.highlight
                      ? {
                          background: "var(--accent)",
                          color: "var(--bg)",
                          borderColor: "var(--accent)",
                        }
                      : {
                          background: "transparent",
                          color: "var(--ink)",
                          borderColor: "var(--line-strong)",
                        }
                  }
                >
                  {pkg.cta} <ArrowDown size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
