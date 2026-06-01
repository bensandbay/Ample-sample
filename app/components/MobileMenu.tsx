"use client";

import { useEffect, useRef } from "react";
import { NAV } from "./nav";

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        // simple focus trap within panel
        const panel = panelRef.current;
        if (!panel) return;
        const focusables = panel.querySelectorAll<HTMLElement>(
          'a[href], button, textarea, input[type="text"], input[type="email"], input[type="search"], [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;
        if (e.shiftKey) {
          if (active === first || !panel.contains(active)) {
            e.preventDefault();
            (last as HTMLElement).focus();
          }
        } else {
          if (active === last) {
            e.preventDefault();
            (first as HTMLElement).focus();
          }
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Focus first link when opened
  useEffect(() => {
    if (open) {
      firstLinkRef.current?.focus();
    }
  }, [open]);

  return (
    <div aria-hidden={!open} style={{ pointerEvents: open ? "auto" : "none" }}>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      {/* Panel */}
      <div
        ref={panelRef}
        id="mobile-menu-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-y-0 right-0 w-80 max-w-[85vw] bg-okx-surface-2 border-l border-okx-border shadow-xl transform transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between h-14 px-4 border-b border-okx-border">
          <span className="text-white text-[14px] font-semibold">Menu</span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-white/80 hover:text-white hover:bg-white/5"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
              <path d="M18.3 5.71L12 12.01l-6.3-6.3-1.4 1.41 6.3 6.29-6.3 6.29 1.4 1.41 6.3-6.3 6.29 6.3 1.41-1.41-6.3-6.29 6.3-6.29z" />
            </svg>
          </button>
        </div>
        <nav className="p-2">
          {NAV.map((item, idx) => (
            <a
              key={item}
              ref={idx === 0 ? firstLinkRef : undefined}
              href="#"
              className="block rounded-md px-3 py-2 text-[14px] text-white/90 hover:text-white hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-okx-accent"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
