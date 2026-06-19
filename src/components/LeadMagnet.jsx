import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { VineDivider } from "./BotanicalMarks";

const CHECKLIST_IMAGE =
  "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=1200&q=80";

function validate({ name, email }) {
  const errs = {};
  if (!name.trim()) errs.name = "Name is required";
  if (!email.trim()) errs.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errs.email = "Enter a valid email address";
  return errs;
}

export default function LeadMagnet() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    // 👇 REPLACE with your email marketing API call (Mailchimp, ConvertKit, etc.)
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section className="px-5 sm:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <VineDivider
          className="w-full max-w-2xl mx-auto mb-14 opacity-30"
          style={{ color: "var(--sage)" }}
        />
        <div
          className="rounded-2xl border p-8 sm:p-12 md:p-16 text-center relative overflow-hidden"
          style={{ borderColor: "var(--line)", background: "var(--bg-raised)" }}
        >
          <div className="pointer-events-none absolute bottom-6 right-6 hidden sm:block w-40 h-40 overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <img
              src={CHECKLIST_IMAGE}
              alt="Ripe tomatoes growing in a greenhouse"
              className="w-full h-full object-cover"
            />
          </div>
          <svg
            viewBox="0 0 60 60"
            className="absolute top-0 right-0 w-20 h-20 opacity-10 pointer-events-none"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            style={{ color: "var(--sage)" }}
          >
            <path d="M60 0 C40 10 30 28 34 44 C38 56 50 56 58 48" />
            <path d="M46 12 c5 2 6 8 3 11" />
          </svg>
          {submitted ? (
            <div className="flex flex-col items-center gap-5 max-w-md mx-auto">
              <CheckCircle2 size={44} style={{ color: "var(--accent)" }} />
              <h3
                className="font-display text-2xl sm:text-3xl"
                style={{ color: "var(--ink)" }}
              >
                You're on the list.
              </h3>
              <p className="text-base" style={{ color: "var(--ink-soft)" }}>
                Your first weekly greenhouse climate checklist is on its way to{" "}
                <strong>{form.email}</strong>. Watch your inbox.
              </p>
            </div>
          ) : (
            <>
              <div
                className="font-mono text-xs uppercase tracking-wider mb-4"
                style={{ color: "var(--accent)" }}
              >
                Free resource
              </div>
              <h2
                className="font-display tracking-tight mb-4"
                style={{
                  color: "var(--ink)",
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  fontWeight: 600,
                }}
              >
                Get our weekly greenhouse
                <br />
                climate checklist.
              </h2>
              <p
                className="text-base sm:text-lg max-w-xl mx-auto mb-10"
                style={{ color: "var(--ink-soft)" }}
              >
                Every week: optimal temperature ranges, humidity targets, and
                light schedules for your crops — straight to your inbox.
              </p>
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              >
                <div className="flex-1 flex flex-col gap-1">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    aria-label="Your name"
                    aria-invalid={!!errors.name}
                    className="w-full rounded-full px-5 py-3.5 text-sm border outline-none"
                    style={{
                      background: "var(--bg)",
                      borderColor: errors.name
                        ? "var(--accent)"
                        : "var(--line-strong)",
                      color: "var(--ink)",
                    }}
                  />
                  {errors.name && (
                    <p
                      className="text-xs text-left pl-4"
                      style={{ color: "var(--accent)" }}
                    >
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    aria-label="Email address"
                    aria-invalid={!!errors.email}
                    className="w-full rounded-full px-5 py-3.5 text-sm border outline-none"
                    style={{
                      background: "var(--bg)",
                      borderColor: errors.email
                        ? "var(--accent)"
                        : "var(--line-strong)",
                      color: "var(--ink)",
                    }}
                  />
                  {errors.email && (
                    <p
                      className="text-xs text-left pl-4"
                      style={{ color: "var(--accent)" }}
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-opacity disabled:opacity-60"
                  style={{ background: "var(--ink)", color: "var(--bg)" }}
                >
                  {loading ? "Joining…" : "Join"}
                  {!loading && <ArrowRight size={14} />}
                </button>
              </form>
              <p className="text-xs mt-5" style={{ color: "var(--ink-faint)" }}>
                No spam. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
