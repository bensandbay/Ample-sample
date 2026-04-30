const SERVICES = [
  {
    eyebrow: "Investments",
    title: "Strategic Investments & Advisory",
    body:
      "We partner with exceptional founders building the technology and infrastructure layers of modern logistics. From Seed through Series B and beyond, we provide patient capital and hands-on operating support &mdash; helping teams scale go-to-market, hire senior operators, and reach the customers that move the industry forward.",
    bullets: [
      "Digital freight & visibility",
      "Warehouse & last-mile automation",
      "Supply-chain SaaS and AI",
      "Cross-border & trade infrastructure",
    ],
    cta: { label: "View our portfolio", href: "#investments" },
  },
  {
    eyebrow: "Consulting",
    title: "Consulting & Optimization",
    body:
      "Our advisory practice works directly with shippers, carriers, and 3PLs to redesign networks, deploy digital tools, and unlock efficiency. We pair sector specialists with senior operators &mdash; the same people who built and ran logistics organizations at global scale.",
    bullets: [
      "Network & flow design",
      "Operations diagnostics",
      "Digital transformation",
      "Procurement & sourcing",
    ],
    cta: { label: "Explore consulting", href: "#consulting" },
  },
];

export default function Services() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="lpx-eyebrow text-lpx-accent">What we do</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-lpx-ink leading-[1.1]">
            Capital and capability for the supply&nbsp;chain.
          </h2>
          <p className="mt-5 text-[16px] md:text-[17px] text-lpx-ink-muted leading-relaxed">
            Two practices, one shared mission &mdash; backing innovation in
            logistics and helping operators turn that innovation into
            measurable results.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group rounded-2xl border border-lpx-border bg-white p-8 md:p-10 hover:border-lpx-ink-2 transition-colors"
            >
              <span className="lpx-eyebrow text-lpx-accent">{s.eyebrow}</span>
              <h3 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-lpx-ink">
                {s.title}
              </h3>
              <p
                className="mt-4 text-[15px] text-lpx-ink-muted leading-relaxed"
                dangerouslySetInnerHTML={{ __html: s.body }}
              />
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-[14px] text-lpx-ink">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-lpx-accent"
                    />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href={s.cta.href}
                className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-lpx-ink hover:text-lpx-accent"
              >
                {s.cta.label}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
