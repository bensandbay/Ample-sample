import LpxLogo from "./LpxLogo";

const NAV = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Investments", href: "#investments" },
  { label: "Consulting", href: "#consulting" },
  { label: "Team", href: "#team" },
  { label: "Locations", href: "#locations" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-lpx-border">
      <div className="mx-auto max-w-[1280px] flex items-center justify-between h-16 px-4 md:px-8">
        <a href="#" aria-label="LPX Partners home" className="flex items-center">
          <LpxLogo className="h-6 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-lpx-ink">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} className="lpx-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="lpx-btn-primary inline-flex h-10 items-center rounded-md px-4 text-[13px] font-semibold"
          >
            Contact
          </a>
          <button
            aria-label="Open menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-lpx-ink hover:bg-lpx-bg-alt"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
              <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
