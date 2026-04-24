import Link from "next/link";
import OkxLogo from "./OkxLogo";

type FooterItem = { label: string; href?: string };

const COLUMNS: { heading: string; items: FooterItem[] }[] = [
  {
    heading: "About us",
    items: [
      { label: "About OKX" },
      { label: "Careers" },
      { label: "Announcements" },
      { label: "Press" },
      { label: "Proof of Reserves" },
      { label: "Legal" },
      { label: "Privacy" },
    ],
  },
  {
    heading: "Products",
    items: [
      { label: "Buy crypto" },
      { label: "Markets" },
      { label: "Spot trading" },
      { label: "Margin trading" },
      { label: "Futures" },
      { label: "Earn" },
      { label: "Web3 Wallet" },
      { label: "NFT Marketplace" },
    ],
  },
  {
    heading: "Services",
    items: [
      { label: "Fees" },
      { label: "VIP program" },
      { label: "Referral program" },
      { label: "API" },
      { label: "OKX Ventures" },
      { label: "Listing application" },
      { label: "P2P merchant" },
    ],
  },
  {
    heading: "Learn",
    items: [
      { label: "Learn crypto" },
      { label: "Trading bots", href: "/trading-bots" },
      { label: "Market insights" },
      { label: "Glossary" },
      { label: "Help center" },
      { label: "Submit request" },
      { label: "Compliance" },
    ],
  },
  {
    heading: "Community",
    items: [
      { label: "Twitter" },
      { label: "Discord" },
      { label: "Telegram" },
      { label: "YouTube" },
      { label: "Instagram" },
      { label: "LinkedIn" },
      { label: "Reddit" },
    ],
  },
];

const SOCIALS = ["X", "TG", "DC", "IG", "YT", "RD"];

export default function Footer() {
  return (
    <footer className="bg-okx-black border-t border-okx-border">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="text-white text-[13px] font-semibold">{col.heading}</p>
              <ul className="mt-4 space-y-3">
                {col.items.map((i) => (
                  <li key={i.label}>
                    {i.href ? (
                      <Link
                        href={i.href}
                        className="text-okx-text-muted text-[13px] hover:text-white transition-colors"
                      >
                        {i.label}
                      </Link>
                    ) : (
                      <a
                        href="#"
                        className="text-okx-text-muted text-[13px] hover:text-white transition-colors"
                      >
                        {i.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-okx-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <OkxLogo className="h-5 w-auto text-white" />
            <div className="flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-okx-border-strong text-okx-text-muted hover:text-white hover:border-white/30 text-[11px]"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[12px]">
            <button className="okx-btn-ghost h-9 px-3 rounded-md inline-flex items-center gap-2">
              🌐 English
            </button>
            <button className="okx-btn-ghost h-9 px-3 rounded-md inline-flex items-center gap-2">
              $ USD
            </button>
            <button className="okx-btn-ghost h-9 px-3 rounded-md inline-flex items-center gap-2">
              ◐ Dark
            </button>
          </div>
        </div>

        <p className="mt-8 text-okx-text-dim text-[11px] leading-relaxed max-w-4xl">
          This is an educational replica of the OKX homepage for personal,
          non-commercial use. OKX, the OKX logo, and product names are trademarks of
          their respective owners. Cryptocurrency trading involves significant risk
          and may result in the loss of your invested capital. Please ensure you
          fully understand the risks involved.
        </p>
        <p className="mt-4 text-okx-text-dim text-[11px]">© 2026 OKX replica</p>
      </div>
    </footer>
  );
}
