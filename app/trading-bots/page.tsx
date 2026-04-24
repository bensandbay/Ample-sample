import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Trading Bots | OKX — Automate your crypto strategy",
  description:
    "Put your strategy on autopilot with OKX Trading Bots. Grid and DCA bots run 24/7 to buy low, sell high, and dollar-cost average — no manual clicks required.",
};

type Bot = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  badge: string;
};

const BOTS: Bot[] = [
  {
    eyebrow: "Grid bot",
    title: "Profit from range-bound markets",
    body: "Automatically buy low and sell high across a price range you define. Ideal for sideways markets — the bot executes dozens of small trades while you sleep.",
    cta: "Launch a Grid bot",
    badge: "Popular",
  },
  {
    eyebrow: "DCA bot",
    title: "Dollar-cost average, on autopilot",
    body: "Schedule recurring buys at fixed intervals to smooth out volatility and build a position over time. Set it once, and the bot handles the rest.",
    cta: "Launch a DCA bot",
    badge: "Beginner friendly",
  },
];

const STEPS: { n: string; title: string; body: string }[] = [
  {
    n: "01",
    title: "Pick a bot",
    body: "Choose Grid for active range-trading or DCA for passive, recurring buys.",
  },
  {
    n: "02",
    title: "Set your parameters",
    body: "Define your pair, price range or cadence, and capital. Preview backtest results instantly.",
  },
  {
    n: "03",
    title: "Let it run 24/7",
    body: "The bot executes on our engine — no VPS, no scripts, no missed fills. Pause or adjust anytime.",
  },
];

const STATS = [
  { k: "1.2M+", v: "Active bots" },
  { k: "$9B+", v: "Bot volume traded" },
  { k: "180+", v: "Supported pairs" },
  { k: "0.02%", v: "Maker fee on bot orders" },
];

export default function TradingBotsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="okx-gradient-hero relative overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6 py-20 md:py-32">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-okx-border-strong bg-white/5 px-3 py-1 text-[12px] text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-okx-accent" />
                Trading Bots
              </span>
              <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
                Automate your edge.
                <br />
                <span className="text-okx-accent">Trade without the screen time.</span>
              </h1>
              <p className="mt-6 text-[15px] md:text-[17px] text-okx-text-muted leading-relaxed max-w-2xl">
                Grid and DCA bots let you codify a strategy once and let the engine do the
                clicking — 24/7, across 180+ pairs, with institutional-grade execution.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  className="okx-btn-primary h-12 px-6 rounded-md text-[14px] font-semibold inline-flex items-center justify-center"
                >
                  Create bot
                </a>
                <a
                  href="#how-it-works"
                  className="okx-btn-ghost h-12 px-6 rounded-md text-[14px] font-medium inline-flex items-center justify-center"
                >
                  How it works
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Bot cards */}
        <section className="bg-okx-black">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6 py-16 md:py-24">
            <div className="max-w-2xl mb-10 md:mb-14">
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
                Two bots.<br />
                <span className="text-okx-accent">Two strategies.</span>
              </h2>
              <p className="mt-4 text-okx-text-muted text-[15px] md:text-[17px]">
                Pick the one that matches your market view — or run both side by side.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {BOTS.map((b) => (
                <div
                  key={b.eyebrow}
                  className="okx-card-gradient group relative rounded-2xl border border-okx-border p-7 md:p-8 hover:border-okx-border-strong transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] uppercase tracking-wide text-okx-accent font-medium">
                      {b.eyebrow}
                    </span>
                    <span className="rounded-full bg-white/5 border border-okx-border-strong px-2.5 py-1 text-[11px] text-white/80">
                      {b.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl md:text-2xl font-semibold leading-snug">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-okx-text-muted text-[14px] leading-relaxed">
                    {b.body}
                  </p>

                  <a
                    href="#"
                    className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-white group-hover:text-okx-accent transition-colors"
                  >
                    {b.cta}
                    <span aria-hidden>→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="bg-okx-black border-t border-okx-border">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6 py-16 md:py-24">
            <div className="max-w-2xl mb-10 md:mb-14">
              <span className="text-[12px] uppercase tracking-wide text-okx-accent font-medium">
                How it works
              </span>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
                From idea to live<br />
                <span className="text-okx-accent">in under a minute.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {STEPS.map((s) => (
                <div
                  key={s.n}
                  className="rounded-2xl border border-okx-border bg-okx-surface p-7"
                >
                  <p className="text-[13px] text-okx-text-dim font-mono">{s.n}</p>
                  <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-okx-text-muted text-[14px] leading-relaxed">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="bg-okx-black">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6 pb-16 md:pb-24">
            <div className="rounded-2xl border border-okx-border p-7 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 bg-okx-surface">
              {STATS.map((s) => (
                <div key={s.v}>
                  <p className="text-3xl md:text-4xl font-semibold text-white">{s.k}</p>
                  <p className="text-okx-text-muted mt-1 text-[13px]">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-okx-black border-t border-okx-border">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6 py-20 md:py-28">
            <div className="okx-card-gradient rounded-2xl border border-okx-border p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight max-w-3xl mx-auto">
                Put your next trade<br />
                <span className="text-okx-accent">on autopilot.</span>
              </h2>
              <p className="mt-5 text-okx-text-muted text-[15px] md:text-[17px] max-w-xl mx-auto">
                No scripts. No VPS. Just your strategy, running 24/7 on OKX infrastructure.
              </p>
              <a
                href="#"
                className="okx-btn-primary mt-8 inline-flex h-12 items-center rounded-md px-8 text-[14px] font-semibold"
              >
                Create bot
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
