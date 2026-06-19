import { useEffect, useRef } from "react";

// 👇 SWAP THIS with your real Calendly URL
const CALENDLY_URL = "https://calendly.com/YOUR_USERNAME/YOUR_EVENT";

export default function Scheduler() {
  const containerRef = useRef(null);

  useEffect(() => {
    const existingScript = document.getElementById("calendly-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => initWidget();
      document.head.appendChild(script);
    } else {
      initWidget();
    }

    function initWidget() {
      if (
        window.Calendly &&
        containerRef.current &&
        !containerRef.current.querySelector("iframe")
      ) {
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: containerRef.current,
          prefill: {},
          utm: {},
        });
      }
    }
  }, []);

  return (
    <section
      id="scheduler"
      className="px-5 sm:px-8 py-20 sm:py-28"
      style={{ background: "var(--bg-raised)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div
            className="font-mono text-xs uppercase tracking-wider mb-3"
            style={{ color: "var(--accent)" }}
          >
            Book a call
          </div>
          <h2
            className="font-display tracking-tight"
            style={{
              color: "var(--ink)",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 600,
            }}
          >
            Pick a time that works for you.
          </h2>
          <p
            className="mt-4 text-base sm:text-lg"
            style={{ color: "var(--ink-soft)" }}
          >
            Your first strategy call is completely free. We'll assess your
            setup, goals, and the right package for your operation.
          </p>
        </div>
        <div
          className="rounded-2xl border overflow-hidden"
          style={{ borderColor: "var(--line)", background: "var(--bg)" }}
        >
          <div
            ref={containerRef}
            className="calendly-inline-widget"
            style={{ minWidth: "320px", height: "700px" }}
            data-auto-load="false"
          />
          <noscript>
            <div
              className="p-8 text-center"
              style={{ color: "var(--ink-soft)" }}
            >
              <p>
                Please enable JavaScript to view the booking calendar, or{" "}
                <a href="tel:+1234567890" style={{ color: "var(--accent)" }}>
                  call us directly
                </a>
                .
              </p>
            </div>
          </noscript>
        </div>
      </div>
    </section>
  );
}
