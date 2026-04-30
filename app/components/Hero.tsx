export default function Hero() {
  return (
    <section className="lpx-hero-bg relative overflow-hidden text-white">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <span className="lpx-eyebrow text-white/70">
            Investments &middot; Advisory &middot; Consulting
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
            Powering the next era of logistics and supply chain.
          </h1>
          <p className="mt-6 text-[16px] md:text-[18px] text-white/80 leading-relaxed max-w-2xl">
            We back the founders, operators, and enterprises building a faster,
            smarter, and more resilient global supply chain &mdash; combining
            growth capital with deep operating experience.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#about"
              className="lpx-btn-primary inline-flex h-12 items-center rounded-md px-6 text-[14px] font-semibold"
            >
              About us
            </a>
            <a
              href="#contact"
              className="lpx-btn-outline-light inline-flex h-12 items-center rounded-md px-6 text-[14px] font-semibold"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-4xl border-t border-white/15 pt-10">
          {[
            { k: "$420M+", v: "Capital deployed" },
            { k: "30+", v: "Portfolio companies" },
            { k: "12", v: "Countries" },
            { k: "Seed → Series B+", v: "Stage focus" },
          ].map((s) => (
            <div key={s.v}>
              <p className="text-2xl md:text-3xl font-semibold tracking-tight">
                {s.k}
              </p>
              <p className="mt-1 text-[12px] uppercase tracking-[0.14em] text-white/60">
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
