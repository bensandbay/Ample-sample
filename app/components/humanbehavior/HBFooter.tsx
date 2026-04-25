import Link from "next/link";

export default function HBFooter() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          <div>
            <Link href="/humanbehavior" className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-teal-500 to-sky-600 text-white text-[13px] font-bold">
                H
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-slate-900">
                Human Behavior
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-[13px] text-slate-600 leading-relaxed">
              Automated product analytics. Agents watch your replays, find what
              breaks, and ship the fix.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:justify-self-end">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-wider text-slate-900">
                Product
              </p>
              <ul className="mt-3 space-y-2 text-[13px]">
                <li>
                  <a href="#product" className="text-slate-600 hover:text-slate-900">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-slate-600 hover:text-slate-900">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#docs" className="text-slate-600 hover:text-slate-900">
                    Docs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-wider text-slate-900">
                Company
              </p>
              <ul className="mt-3 space-y-2 text-[13px]">
                <li>
                  <Link href="/humanbehavior" className="text-slate-600 hover:text-slate-900">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="#press" className="text-slate-600 hover:text-slate-900">
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:team@humanbehavior.example"
                    className="text-slate-600 hover:text-slate-900"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-wider text-slate-900">
                Legal
              </p>
              <ul className="mt-3 space-y-2 text-[13px]">
                <li>
                  <a href="#privacy" className="text-slate-600 hover:text-slate-900">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="text-slate-600 hover:text-slate-900">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-wider text-slate-900">
                Back
              </p>
              <ul className="mt-3 space-y-2 text-[13px]">
                <li>
                  <Link href="/" className="text-slate-600 hover:text-slate-900">
                    To OKX
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[12px] text-slate-500">
            © 2026 Human Behavior · Educational replica
          </p>
          <p className="text-[11px] text-slate-400 max-w-xl sm:text-right">
            This page is a non-commercial, educational replica of
            humanbehavior.co. Brand names belong to their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
