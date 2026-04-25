import Link from "next/link";

const NAV = [
  { label: "Product", href: "#product" },
  { label: "Resources", href: "#resources" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
];

export default function HBHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/humanbehavior" className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-teal-500 to-sky-600 text-white text-[13px] font-bold">
            H
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-slate-900">
            Human Behavior
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-[14px] text-slate-600">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-slate-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#book"
            className="hidden sm:inline-flex h-9 items-center px-3 text-[13px] text-slate-700 hover:text-slate-900"
          >
            Book a Call
          </a>
          <a
            href="#get-started"
            className="inline-flex h-9 items-center rounded-md bg-slate-900 px-4 text-[13px] font-semibold text-white hover:bg-slate-800 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
