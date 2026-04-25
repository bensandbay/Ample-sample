export default function HBHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-slate-50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(45, 212, 191, 0.18), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6 pt-20 md:pt-28 pb-16 md:pb-24 text-center">
        <a
          href="#press"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[12px] text-slate-700 shadow-sm hover:border-slate-300 transition-colors"
        >
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 text-[10px] font-bold">
            ★
          </span>
          Featured on TechCrunch · We raised $5M from YC, Vercel, and General
          Catalyst
        </a>

        <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.05]">
          Automated Product
          <br className="hidden md:block" /> Analytics
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-[16px] md:text-[18px] text-slate-600 leading-relaxed">
          Agents understand your product by watching session replays
          <br className="hidden md:block" />
          and act on it by fixing bugs with code agents.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#get-started"
            className="inline-flex h-11 items-center rounded-md bg-slate-900 px-6 text-[14px] font-semibold text-white hover:bg-slate-800 transition-colors"
          >
            Get Started
          </a>
          <a
            href="#book"
            className="inline-flex h-11 items-center rounded-md border border-slate-300 bg-white px-6 text-[14px] font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
          >
            Book a Demo
          </a>
        </div>

        <p className="mt-4 text-[13px] text-slate-500">
          It takes 90 seconds to set up completely
        </p>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_24px_60px_-20px_rgba(15,23,42,0.25)]">
            <div className="rounded-xl bg-slate-50 border border-slate-200 overflow-hidden">
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-200 bg-white">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-3 text-[11px] text-slate-400">
                  app.humanbehavior.co · live session
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 p-4">
                <div className="col-span-2 rounded-lg bg-white border border-slate-200 p-4">
                  <p className="text-[11px] uppercase tracking-wider text-slate-400">
                    Active session insight
                  </p>
                  <p className="mt-2 text-[15px] font-semibold text-slate-900">
                    Users dropping off on Step 3 (payment)
                  </p>
                  <p className="mt-1 text-[13px] text-slate-600">
                    62% of new signups bounce before submitting card details.
                    Coding agent has drafted a fix.
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-[12px]">
                    {[
                      { k: "Sessions", v: "1,284" },
                      { k: "Drop-off", v: "62%" },
                      { k: "Auto-fixes", v: "7" },
                    ].map((m) => (
                      <div
                        key={m.k}
                        className="rounded-md bg-slate-50 border border-slate-200 px-3 py-2"
                      >
                        <p className="text-slate-500">{m.k}</p>
                        <p className="mt-0.5 text-slate-900 font-semibold">
                          {m.v}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg bg-slate-900 text-white p-4">
                  <p className="text-[11px] uppercase tracking-wider text-white/60">
                    Agent activity
                  </p>
                  <ul className="mt-3 space-y-2 text-[12px]">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>Watched 124 replays</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                      <span>Opened PR #482 — fix payment validation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                      <span>Filed 3 Linear issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400" />
                      <span>Drafted 8 win-back emails</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
