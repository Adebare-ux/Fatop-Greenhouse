import { LeafBadge } from "./BotanicalMarks";

const EXPERTISE_IMAGE =
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80";

const ZONES = [
  {
    zone: "Zone A",
    title: "Food crops",
    desc: "Tomatoes, cucumbers, bell peppers, and leafy greens — tuned for continuous commercial harvest.",
    spec: "18–26°C · 65–75% RH",
  },
  {
    zone: "Zone B",
    title: "Berries & fruit",
    desc: "Strawberries, bush berries, and dwarf fruit trees, with pollination and nutrient programs built in.",
    spec: "15–22°C · 60–70% RH",
  },
  {
    zone: "Zone C",
    title: "Floriculture & specialty",
    desc: "Cut flowers, nursery stock, and medicinal plants — precision light cycles for bloom timing.",
    spec: "20–28°C · 50–65% RH",
  },
];

export default function CropExpertise() {
  return (
    <section
      className="px-5 sm:px-8 py-20 sm:py-28"
      style={{ background: "var(--bg-raised)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 xl:grid-cols-[1.3fr_0.9fr] items-center mb-12 sm:mb-16">
          <div>
            <div
              className="font-mono text-xs uppercase tracking-wider mb-3"
              style={{ color: "var(--accent)" }}
            >
              What we grow
            </div>
            <h2
              className="font-display tracking-tight"
              style={{
                color: "var(--ink)",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                fontWeight: 600,
              }}
            >
              One discipline, every crop.
            </h2>
            <p
              className="mt-4 text-base sm:text-lg"
              style={{ color: "var(--ink-soft)" }}
            >
              We don't specialize in a single plant — we specialize in the
              environment. Three zones, each engineered differently.
            </p>
          </div>
          <div className="rounded-4xl overflow-hidden shadow-2xl ring-1 ring-black/10">
            <img
              src={EXPERTISE_IMAGE}
              alt="Bell peppers growing in a greenhouse"
              className="w-full h-full object-cover min-h-80"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
          {ZONES.map((z) => (
            <div
              key={z.zone}
              className="rounded-2xl border p-6 sm:p-7 flex flex-col"
              style={{ borderColor: "var(--line)", background: "var(--bg)" }}
            >
              <div className="flex items-center justify-between mb-5">
                <span
                  className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full border"
                  style={{
                    borderColor: "var(--line-strong)",
                    color: "var(--ink-faint)",
                  }}
                >
                  {z.zone}
                </span>
                <LeafBadge
                  className="w-6 h-6"
                  style={{ color: "var(--sage)" }}
                />
              </div>
              <h3
                className="font-display text-xl sm:text-2xl mb-2.5"
                style={{ color: "var(--ink)" }}
              >
                {z.title}
              </h3>
              <p
                className="text-sm sm:text-base leading-relaxed flex-1"
                style={{ color: "var(--ink-soft)" }}
              >
                {z.desc}
              </p>
              <div
                className="mt-6 pt-4 border-t font-mono text-xs"
                style={{
                  borderColor: "var(--line)",
                  color: "var(--ink-faint)",
                }}
              >
                {z.spec}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
