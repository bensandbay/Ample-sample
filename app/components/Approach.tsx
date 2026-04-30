const PILLARS = [
  {
    n: "01",
    title: "Operator-led",
    body:
      "Every engagement and investment is led by people who have actually built, scaled, and run logistics organizations &mdash; not just observed them.",
  },
  {
    n: "02",
    title: "Sector-deep",
    body:
      "We focus exclusively on logistics, supply chain, and the infrastructure that connects them. Depth over breadth, in every market we touch.",
  },
  {
    n: "03",
    title: "Long-horizon",
    body:
      "Real change in supply chains takes years, not quarters. We commit time, capital, and conviction over multiple cycles.",
  },
];

export default function Approach() {
  return (
    <section id="investments" className="lpx-section-alt">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <span className="lpx-eyebrow text-lpx-accent">Our approach</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-lpx-ink leading-[1.1]">
              Built by operators. Backed by conviction.
            </h2>
            <p className="mt-5 text-[16px] text-lpx-ink-muted leading-relaxed">
              We invest and advise where we have direct experience &mdash; and
              we partner with teams who care as much about how the work gets
              done as the outcome it delivers.
            </p>
          </div>

          <div className="md:col-span-7 grid sm:grid-cols-1 gap-4">
            {PILLARS.map((p) => (
              <div
                key={p.n}
                className="rounded-xl bg-white border border-lpx-border p-6 md:p-7 flex gap-5"
              >
                <span className="text-lpx-accent font-semibold text-[14px] tracking-wider mt-0.5 shrink-0 w-8">
                  {p.n}
                </span>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-lpx-ink">
                    {p.title}
                  </h3>
                  <p
                    className="mt-2 text-[15px] text-lpx-ink-muted leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: p.body }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
