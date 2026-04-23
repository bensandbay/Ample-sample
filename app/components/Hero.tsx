export default function Hero() {
  return (
    <section className="okx-gradient-hero relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 py-16 md:py-28 grid lg:grid-cols-2 gap-10 items-center">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-okx-border-strong bg-white/5 px-3 py-1 text-[12px] text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-okx-accent" />
            Trusted by 60M+ users worldwide
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
            The secure place<br className="hidden md:block" /> to trade{" "}
            <span className="text-okx-accent">crypto</span>
          </h1>
          <p className="mt-6 text-[15px] md:text-[17px] text-okx-text-muted leading-relaxed">
            Buy, sell, and hold 350+ cryptocurrencies with low fees.
            Deep liquidity, institutional-grade security, and 24/7 support.
          </p>

          <form
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md"
            action="#"
          >
            <input
              type="email"
              placeholder="Email / Phone"
              className="flex-1 h-12 rounded-md bg-okx-surface-2 border border-okx-border-strong px-4 text-[14px] text-white placeholder:text-okx-text-dim focus:outline-none focus:border-okx-accent"
            />
            <button
              type="submit"
              className="okx-btn-primary h-12 px-6 rounded-md text-[14px] font-semibold whitespace-nowrap"
            >
              Get started
            </button>
          </form>

          <div className="mt-8 flex items-center gap-6 text-[12px] text-okx-text-dim">
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              4.8 · App Store
            </span>
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              4.6 · Google Play
            </span>
          </div>
        </div>

        {/* visual card */}
        <div className="relative lg:justify-self-end w-full max-w-[520px]">
          <div className="okx-card-gradient rounded-2xl border border-okx-border p-6 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] text-okx-text-dim">Portfolio value</p>
                <p className="mt-1 text-3xl font-semibold">$128,459.23</p>
                <p className="mt-1 text-[13px] text-okx-up">+$2,145.80 (+1.70%) today</p>
              </div>
              <span className="rounded-md bg-okx-accent/15 text-okx-accent px-2 py-1 text-[11px] font-medium">
                Live
              </span>
            </div>

            <svg viewBox="0 0 500 140" className="mt-6 w-full h-32">
              <defs>
                <linearGradient id="heroGrad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#c7f284" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#c7f284" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,100 C60,80 110,110 160,70 C210,30 260,90 320,60 C370,35 420,75 500,20 L500,140 L0,140 Z"
                fill="url(#heroGrad)"
              />
              <path
                d="M0,100 C60,80 110,110 160,70 C210,30 260,90 320,60 C370,35 420,75 500,20"
                fill="none"
                stroke="#c7f284"
                strokeWidth="2"
              />
            </svg>

            <div className="mt-6 grid grid-cols-3 gap-3 text-[12px]">
              {[
                { k: "BTC", v: "0.52", sub: "$35,278" },
                { k: "ETH", v: "14.8", sub: "$52,158" },
                { k: "SOL", v: "240", sub: "$41,023" },
              ].map((t) => (
                <div key={t.k} className="rounded-lg bg-okx-surface-2 border border-okx-border px-3 py-2">
                  <p className="text-okx-text-dim">{t.k}</p>
                  <p className="text-white font-medium">{t.v}</p>
                  <p className="text-okx-text-muted">{t.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -top-4 -right-4 hidden md:block rounded-xl border border-okx-border bg-okx-surface-2 px-4 py-3 text-[12px] shadow-lg">
            <p className="text-okx-text-dim">24h volume</p>
            <p className="text-white font-semibold mt-0.5">$52.1B</p>
          </div>
        </div>
      </div>
    </section>
  );
}
