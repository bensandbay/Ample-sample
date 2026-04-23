type Card = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  badge?: string;
};

const CARDS: Card[] = [
  {
    eyebrow: "Buy crypto",
    title: "Buy and sell crypto in minutes",
    body: "Start with as little as $10. Pay with card, bank transfer, or supported wallets — settled instantly.",
    cta: "Start buying",
    badge: "0% fees on first purchase",
  },
  {
    eyebrow: "Trade",
    title: "Advanced trading, built for speed",
    body: "Spot, margin, and perpetual futures with up to 100x leverage. Sub-10ms order execution, deep order books.",
    cta: "Open trading view",
    badge: "350+ pairs",
  },
  {
    eyebrow: "Earn",
    title: "Grow your assets with flexible yield",
    body: "Earn passive rewards with on-chain staking, savings, and structured products. Subscribe and redeem anytime.",
    cta: "Explore Earn",
    badge: "Up to 18% APR",
  },
];

export default function FeatureSections() {
  return (
    <section className="bg-okx-black">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-2xl mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
            Everything you need,<br />
            <span className="text-okx-accent">in one place</span>
          </h2>
          <p className="mt-4 text-okx-text-muted text-[15px] md:text-[17px]">
            From your first $10 of Bitcoin to a full DeFi portfolio — OKX gives you the
            tools, markets, and security to go further.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {CARDS.map((c) => (
            <div
              key={c.eyebrow}
              className="okx-card-gradient group relative rounded-2xl border border-okx-border p-7 hover:border-okx-border-strong transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-[12px] uppercase tracking-wide text-okx-accent font-medium">
                  {c.eyebrow}
                </span>
                {c.badge && (
                  <span className="rounded-full bg-white/5 border border-okx-border-strong px-2.5 py-1 text-[11px] text-white/80">
                    {c.badge}
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-xl md:text-2xl font-semibold leading-snug">
                {c.title}
              </h3>
              <p className="mt-3 text-okx-text-muted text-[14px] leading-relaxed">
                {c.body}
              </p>

              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-white group-hover:text-okx-accent transition-colors"
              >
                {c.cta}
                <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Secondary: Security + stats row */}
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          <div className="okx-card-gradient rounded-2xl border border-okx-border p-7 md:p-10">
            <span className="text-[12px] uppercase tracking-wide text-okx-accent font-medium">
              Security
            </span>
            <h3 className="mt-4 text-2xl md:text-3xl font-semibold leading-tight">
              Proof of Reserves.<br />Every month. On-chain.
            </h3>
            <p className="mt-3 text-okx-text-muted text-[14px] max-w-md">
              We publish a monthly, verifiable attestation of our reserves, so you
              can independently check that your assets are fully backed — 1:1.
            </p>
            <a
              href="#"
              className="mt-6 okx-btn-ghost inline-flex h-10 items-center rounded-md px-4 text-[13px] font-medium"
            >
              View reserves
            </a>
          </div>

          <div className="rounded-2xl border border-okx-border p-7 md:p-10 grid grid-cols-2 gap-6 bg-okx-surface">
            {[
              { k: "60M+", v: "Users worldwide" },
              { k: "350+", v: "Tokens listed" },
              { k: "$50B+", v: "Daily volume" },
              { k: "180+", v: "Supported regions" },
            ].map((s) => (
              <div key={s.v}>
                <p className="text-3xl md:text-4xl font-semibold text-white">{s.k}</p>
                <p className="text-okx-text-muted mt-1 text-[13px]">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
