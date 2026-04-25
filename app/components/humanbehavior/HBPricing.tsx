const TIERS = [
  {
    name: "Starter",
    price: "$0",
    cadence: "forever free",
    features: ["5 projects", "Basic analytics", "Community support"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    cadence: "per month",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "All integrations",
      "Priority support",
    ],
    cta: "Start Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "let’s talk",
    features: [
      "Custom solutions",
      "Dedicated success manager",
      "SOC 2 & SSO",
      "On-prem options",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function HBPricing() {
  return (
    <section id="pricing" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[12px] uppercase tracking-[0.2em] text-teal-600 font-semibold">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Simple pricing that scales with you
          </h2>
          <p className="mt-4 text-[15px] text-slate-600">
            Start free. Upgrade when your product is ready for autonomous
            agents to take over the boring parts.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={
                t.popular
                  ? "relative rounded-2xl border-2 border-slate-900 bg-white p-7 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.35)]"
                  : "rounded-2xl border border-slate-200 bg-white p-7"
              }
            >
              {t.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                  Popular
                </span>
              )}
              <h3 className="text-[15px] font-semibold text-slate-900">
                {t.name}
              </h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tight text-slate-900">
                  {t.price}
                </span>
                <span className="text-[13px] text-slate-500">{t.cadence}</span>
              </div>
              <ul className="mt-6 space-y-2.5 text-[14px] text-slate-700">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-teal-500/15 text-teal-700 text-[10px]">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#get-started"
                className={
                  t.popular
                    ? "mt-7 inline-flex w-full h-10 items-center justify-center rounded-md bg-slate-900 px-4 text-[13px] font-semibold text-white hover:bg-slate-800 transition-colors"
                    : "mt-7 inline-flex w-full h-10 items-center justify-center rounded-md border border-slate-300 bg-white px-4 text-[13px] font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
                }
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-slate-900 text-white p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Ship faster with agents that actually understand your product
          </h3>
          <p className="mt-3 text-[15px] text-white/70 max-w-xl mx-auto">
            90 seconds to install. Daily summary email by tomorrow morning.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#get-started"
              className="inline-flex h-11 items-center rounded-md bg-white px-6 text-[14px] font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Get Started
            </a>
            <a
              href="#book"
              className="inline-flex h-11 items-center rounded-md border border-white/20 bg-transparent px-6 text-[14px] font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
