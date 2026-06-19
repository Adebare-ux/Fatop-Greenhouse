import { Phone, Sun, Moon } from "lucide-react";
import { LeafBadge } from "./BotanicalMarks";

export default function Navbar({ theme, toggleTheme }) {
  return (
    <header
      className="fixed top-0 inset-x-0 z-50 border-b backdrop-blur-md"
      style={{
        borderColor: "var(--line)",
        background: "color-mix(in srgb, var(--bg) 86%, transparent)",
      }}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <LeafBadge
            className="w-7 h-7 shrink-0"
            style={{ color: "var(--accent)" }}
          />
          <span
            className="font-display text-lg sm:text-xl tracking-tight"
            style={{ color: "var(--ink)" }}
          >
            Fatop <span style={{ color: "var(--accent)" }}>Greenhouse</span>
          </span>
        </a>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className="w-9 h-9 rounded-full grid place-items-center border transition-colors hover:border-(--accent)"
            style={{ borderColor: "var(--line)", color: "var(--ink-soft)" }}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="tel:+1234567890"
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border transition-colors hover:bg-(--bg-card)"
            style={{ borderColor: "var(--line-strong)", color: "var(--ink)" }}
          >
            <Phone size={14} />
            (123) 456-7890
          </a>
          <a
            href="tel:+1234567890"
            aria-label="Call Fatop Greenhouse"
            className="sm:hidden w-9 h-9 rounded-full grid place-items-center border"
            style={{ borderColor: "var(--line-strong)", color: "var(--ink)" }}
          >
            <Phone size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
