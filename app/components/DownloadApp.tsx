export default function DownloadApp() {
  return (
    <section className="bg-okx-black border-t border-okx-border">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 py-16 md:py-24">
        <div className="okx-card-gradient rounded-3xl border border-okx-border overflow-hidden grid lg:grid-cols-2">
          <div className="p-8 md:p-14 flex flex-col justify-center">
            <span className="text-[12px] uppercase tracking-wide text-okx-accent font-medium">
              Mobile & desktop
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
              Trade anywhere<br />with the OKX app
            </h2>
            <p className="mt-4 text-okx-text-muted text-[15px] max-w-md">
              Your portfolio, markets, and Web3 wallet — in one app. Available on iOS,
              Android, macOS, and Windows.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-3 h-12 px-5 rounded-md bg-white text-black font-medium text-[13px] hover:bg-white/90"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <span className="flex flex-col leading-tight text-left">
                  <span className="text-[10px] opacity-70">Download on the</span>
                  <span className="text-[14px]">App Store</span>
                </span>
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-3 h-12 px-5 rounded-md bg-white text-black font-medium text-[13px] hover:bg-white/90"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M3.609 1.814L13.792 12 3.609 22.186c-.18-.18-.309-.41-.309-.67V2.485c0-.26.129-.49.309-.671zM14.906 13.114l2.733 2.733-13.13 7.58L14.906 13.114zm4.134-4.134l3.356 1.937c.645.372.645 1.301 0 1.673l-3.356 1.937-3.125-3.124 3.125-2.423zM4.51 1.22l13.13 7.58-2.733 2.733L4.51 1.22z"/>
                </svg>
                <span className="flex flex-col leading-tight text-left">
                  <span className="text-[10px] opacity-70">GET IT ON</span>
                  <span className="text-[14px]">Google Play</span>
                </span>
              </a>

              <a
                href="#"
                className="okx-btn-ghost inline-flex items-center gap-2 h-12 px-5 rounded-md text-[13px] font-medium"
              >
                Desktop app
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-[12px] text-okx-text-dim">
              <span className="inline-flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                4.8 · 120k ratings
              </span>
              <span className="inline-flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                4.6 · 380k ratings
              </span>
            </div>
          </div>

          {/* Visual mock */}
          <div className="relative min-h-[340px] flex items-end justify-center p-8 md:p-10 bg-gradient-to-br from-okx-accent/20 via-transparent to-transparent">
            <div className="relative w-[240px] h-[480px] rounded-[36px] border border-okx-border-strong bg-okx-surface-2 shadow-2xl overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-6 flex items-center justify-center">
                <div className="w-24 h-5 bg-black rounded-b-xl" />
              </div>
              <div className="pt-10 px-4">
                <p className="text-[11px] text-okx-text-dim">Total balance</p>
                <p className="text-white text-xl font-semibold mt-1">$12,482.19</p>
                <p className="text-okx-up text-[11px] mt-0.5">+$215.40 (1.76%)</p>

                <div className="mt-5 space-y-2">
                  {[
                    { s: "BTC", p: "$67,842", c: "+2.43%", up: true },
                    { s: "ETH", p: "$3,524", c: "+1.87%", up: true },
                    { s: "SOL", p: "$172.93", c: "+4.12%", up: true },
                    { s: "XRP", p: "$0.6148", c: "-0.72%", up: false },
                  ].map((r) => (
                    <div
                      key={r.s}
                      className="flex items-center justify-between rounded-lg bg-black/40 px-3 py-2"
                    >
                      <span className="text-white text-[12px] font-medium">{r.s}</span>
                      <span className="text-okx-text-muted text-[11px] tabular-nums">{r.p}</span>
                      <span
                        className={`text-[11px] tabular-nums ${r.up ? "text-okx-up" : "text-okx-down"}`}
                      >
                        {r.c}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
