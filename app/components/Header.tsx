import Link from "next/link";
import OkxLogo from "./OkxLogo";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "Buy crypto", href: "#" },
  { label: "Markets", href: "#" },
  { label: "Trade", href: "#" },
  { label: "Futures", href: "#" },
  { label: "Earn", href: "#" },
  { label: "Web3", href: "#" },
  { label: "Learn", href: "#" },
  { label: "Institutional", href: "#" },
  { label: "humanbehavior", href: "/humanbehavior" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-okx-black/95 backdrop-blur border-b border-okx-border">
      <div className="mx-auto max-w-[1440px] flex items-center justify-between h-14 px-4 md:px-6">
        <div className="flex items-center gap-8">
          <a href="#" aria-label="OKX home" className="flex items-center text-white">
            <OkxLogo className="h-5 w-auto text-white" />
          </a>
          <nav className="hidden lg:flex items-center gap-6 text-[14px] font-medium">
            {NAV.map((item) =>
              item.href.startsWith("/") ? (
                <Link key={item.label} href={item.href} className="nav-link">
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href} className="nav-link">
                  {item.label}
                </a>
              )
            )}
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
            aria-label="More"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-white/70 hover:text-white hover:bg-white/5"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
              <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
