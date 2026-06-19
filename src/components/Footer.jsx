import { Phone, Mail } from "lucide-react";
import { SproutMark } from "./BotanicalMarks";

export default function Footer() {
  return (
    <footer
      className="px-5 sm:px-8 py-12 sm:py-16 border-t"
      style={{ borderColor: "var(--line)", background: "var(--bg-raised)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-3 gap-10 sm:gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <SproutMark
                className="w-6 h-6"
                style={{ color: "var(--accent)" }}
              />
              <span
                className="font-display text-lg"
                style={{ color: "var(--ink)" }}
              >
                Fatop <span style={{ color: "var(--accent)" }}>Greenhouse</span>
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--ink-faint)" }}
            >
              Expert consulting, greenhouse fabrication, and construction
              support for growers at every scale — from a single polytunnel to a
              commercial multi-zone operation.
            </p>
          </div>
          <div>
            <p
              className="font-mono text-[11px] uppercase tracking-wider mb-4"
              style={{ color: "var(--ink-faint)" }}
            >
              Quick links
            </p>
            <ul className="space-y-2">
              {[
                { label: "Book a call", href: "#scheduler" },
                { label: "Packages", href: "#packages" },
                { label: "Free checklist", href: "#lead" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors hover:opacity-70"
                    style={{ color: "var(--ink-soft)" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p
              className="font-mono text-[11px] uppercase tracking-wider mb-4"
              style={{ color: "var(--ink-faint)" }}
            >
              Contact
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 text-sm transition-colors hover:opacity-70"
                  style={{ color: "var(--ink-soft)" }}
                >
                  <Phone size={13} style={{ color: "var(--accent)" }} />
                  (123) 456-7890
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@fatopgreenhouse.com"
                  className="flex items-center gap-2 text-sm transition-colors hover:opacity-70"
                  style={{ color: "var(--ink-soft)" }}
                >
                  <Mail size={13} style={{ color: "var(--accent)" }} />
                  hello@fatopgreenhouse.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "var(--line)" }}
        >
          <p
            className="font-mono text-[11px]"
            style={{ color: "var(--ink-faint)" }}
          >
            © {new Date().getFullYear()} Fatop Greenhouse Consulting. All rights
            reserved.
          </p>
          <p
            className="font-mono text-[11px]"
            style={{ color: "var(--ink-faint)" }}
          >
            Built for growers.
          </p>
        </div>
      </div>
    </footer>
  );
}
