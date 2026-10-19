"use client";

import { useEffect, useState } from "react";
import OkxLogo from "./OkxLogo";

const NAV = [
  "Buy crypto",
  "Markets",
  "Trade",
  "Futures",
  "Earn",
  "Web3",
  "Learn",
  "Institutional",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-okx-black/95 backdrop-blur border-b border-okx-border">
      <div className="mx-auto max-w-[1440px] flex items-center justify-between h-14 px-4 md:px-6">
        <div className="flex items-center gap-8">
          <a href="#" aria-label="OKX home" className="flex items-center text-white">
            <OkxLogo className="h-5 w-auto text-white" />
          </a>
          <nav className="hidden lg:flex items-center gap-6 text-[14px] font-medium">
            {NAV.map((item) => (
              <a key={item} href="#" className="nav-link">
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#"
            className="hidden sm:inline-flex h-9 items-center px-3 text-[13px] text-white/80 hover:text-white"
          >
            Log in
          </a>
          <a
            href="#"
            className="okx-btn-primary hidden sm:inline-flex h-9 items-center rounded-md px-4 text-[13px] font-semibold"
          >
            Sign up
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex lg:hidden h-9 w-9 items-center justify-center rounded-md text-white/70 hover:text-white hover:bg-white/5"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
              {menuOpen ? (
                <path d="M6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12 19 6.4 17.6 5 12 10.6z" />
              ) : (
                <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-okx-border bg-okx-black"
        >
          <nav
            aria-label="Main"
            className="mx-auto max-w-[1440px] flex flex-col px-4 md:px-6 py-2 text-[15px] font-medium"
          >
            {NAV.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="flex h-12 items-center border-b border-okx-border text-white/80 hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="mx-auto max-w-[1440px] grid grid-cols-2 gap-3 px-4 md:px-6 py-4 sm:hidden">
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md border border-okx-border-strong text-[14px] font-semibold text-white hover:bg-white/5"
            >
              Log in
            </a>
            <a
              href="#"
              className="okx-btn-primary inline-flex h-11 items-center justify-center rounded-md text-[14px] font-semibold"
            >
              Sign up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
