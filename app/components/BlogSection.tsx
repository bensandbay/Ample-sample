type Post = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

const POSTS: Post[] = [
  {
    category: "Product",
    title: "Introducing cross-margin perpetuals for global traders",
    excerpt:
      "Unified collateral across all perpetual markets, lower capital requirements, and smarter risk controls — now live for verified users.",
    date: "Apr 18, 2026",
    readTime: "4 min read",
  },
  {
    category: "Research",
    title: "The 2026 state of on-chain: stablecoins, L2s, and real yield",
    excerpt:
      "Our quarterly deep-dive into the data driving the next cycle — from stablecoin velocity to L2 settlement share and emerging yield primitives.",
    date: "Apr 09, 2026",
    readTime: "9 min read",
  },
  {
    category: "Security",
    title: "How Proof of Reserves works — and why it matters to you",
    excerpt:
      "A plain-English walkthrough of Merkle-tree attestations, how to verify your own balance, and what OKX publishes every single month.",
    date: "Mar 28, 2026",
    readTime: "6 min read",
  },
];

export default function BlogSection() {
  const latest = POSTS.slice(0, 3);

  return (
    <section className="bg-okx-black border-t border-okx-border">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
              From the <span className="text-okx-accent">OKX blog</span>
            </h2>
            <p className="mt-4 text-okx-text-muted text-[15px] md:text-[17px]">
              Product launches, market research, and security deep-dives — straight
              from the team building OKX.
            </p>
          </div>
          <a
            href="#"
            className="okx-btn-ghost inline-flex h-10 items-center self-start md:self-auto rounded-md px-4 text-[13px] font-medium"
          >
            View all posts
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {latest.map((p) => (
            <article
              key={p.title}
              className="okx-card-gradient group relative flex flex-col rounded-2xl border border-okx-border p-7 hover:border-okx-border-strong transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-[12px] uppercase tracking-wide text-okx-accent font-medium">
                  {p.category}
                </span>
                <span className="text-[11px] text-okx-text-dim tabular-nums">
                  {p.readTime}
                </span>
              </div>

              <h3 className="mt-4 text-xl md:text-2xl font-semibold leading-snug">
                {p.title}
              </h3>
              <p className="mt-3 text-okx-text-muted text-[14px] leading-relaxed">
                {p.excerpt}
              </p>

              <div className="mt-8 flex items-center justify-between">
                <span className="text-[12px] text-okx-text-dim">{p.date}</span>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-white group-hover:text-okx-accent transition-colors"
                >
                  Read article
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
