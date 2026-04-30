import LpxLogo from "./LpxLogo";

const COL_NAV = [
  {
    title: "Firm",
    links: ["About", "Team", "Locations", "Careers"],
  },
  {
    title: "Practices",
    links: ["Investments", "Advisory", "Consulting", "Research"],
  },
  {
    title: "Resources",
    links: ["Insights", "Press", "Events", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-lpx-border">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 py-14 md:py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <LpxLogo className="h-6 w-auto" />
            <p className="mt-5 text-[14px] text-lpx-ink-muted leading-relaxed max-w-md">
              An investment and advisory firm dedicated to logistics and
              supply-chain innovation. Backing the people building what comes
              next.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-lpx-border text-lpx-ink hover:bg-lpx-bg-alt"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5a2.5 2.5 0 11-.01 5.01A2.5 2.5 0 014.98 3.5zM3 9.75h4v11H3v-11zM10 9.75h3.84v1.5h.05c.54-.96 1.86-1.97 3.83-1.97 4.1 0 4.86 2.6 4.86 5.97v5.5h-4v-4.88c0-1.16-.02-2.66-1.66-2.66-1.67 0-1.92 1.27-1.92 2.58v4.96h-4v-11z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="X"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-lpx-border text-lpx-ink hover:bg-lpx-bg-alt"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.244 2H21.5l-7.41 8.47L23 22h-6.84l-5.36-6.97L4.62 22H1.36l7.93-9.06L1 2h6.99l4.84 6.39L18.244 2zm-1.2 18h1.83L7.05 4H5.1l11.95 16z"/>
                </svg>
              </a>
            </div>
          </div>

          {COL_NAV.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <p className="lpx-eyebrow text-lpx-ink-dim">{col.title}</p>
              <ul className="mt-4 space-y-3 text-[14px]">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="lpx-link">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1 hidden md:block" />
        </div>

        <div className="lpx-divider mt-12" />
        <div className="mt-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-[12px] text-lpx-ink-dim">
          <p>&copy; {new Date().getFullYear()} LPX Partners. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-lpx-ink">Privacy</a>
            <a href="#" className="hover:text-lpx-ink">Terms</a>
            <a href="#" className="hover:text-lpx-ink">Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
