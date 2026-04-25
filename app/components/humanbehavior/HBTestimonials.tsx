const TESTIMONIALS = [
  {
    quote:
      "~1/3 of all features shipped on Clado since launch was because of Human Behavior. Literally saves us 100s of hours watching through replays & identifying pain-points.",
    name: "Tom Zheng",
    title: "Founder, Clado (YC)",
  },
  {
    quote:
      "Human Behavior's customers — mostly fast-moving Series A and B startups — get daily summary emails highlighting which features were used, which bugs appeared, and which users churned.",
    name: "Tage Kene-Okafor",
    title: "Reporter, TechCrunch",
  },
  {
    quote:
      "HB caught something insane — users hitting slow video processing during peak hours were churning 6x more than anyone else. No analytics tool could ever connect those dots.",
    name: "Rishi Srihari",
    title: "CEO, Opennote (YC)",
  },
  {
    quote:
      "So bullish on Human Behavior! They are absolutely crushing it and a textbook example of how to build a great product around AI automation that LITERALLY gives you hours back.",
    name: "Nicolas Lecomte",
    title: "Founder, Blaxel (YC)",
  },
  {
    quote:
      "If you're building while guessing what your users are doing, you're not actually building for them. Human Behavior = real clarity.",
    name: "Bardia Safari",
    title: "CEO, Olive (YC)",
  },
  {
    quote:
      "What makes them special: found critical bugs I never would have discovered (like nil pointer exceptions causing white screens on specific search queries).",
    name: "Karl Kallasmaa",
    title: "Founder, Attensira",
  },
  {
    quote:
      "Human Behavior flips the old-school product analytics game on its head — no tedious video marathons, no setup headaches. You instantly see where users get stuck and WHY.",
    name: "Ajith Satheesh",
    title: "CEO, Cactus (YC)",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function HBTestimonials() {
  return (
    <section id="resources" className="bg-slate-50 border-t border-slate-100">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-[12px] uppercase tracking-[0.2em] text-teal-600 font-semibold">
            Loved by builders
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Trusted by founders shipping every day
          </h2>
        </div>

        <div className="mt-12 columns-1 md:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="mb-5 break-inside-avoid rounded-xl border border-slate-200 bg-white p-6 shadow-[0_1px_0_0_rgba(15,23,42,0.04)]"
            >
              <blockquote className="text-[14px] text-slate-700 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-sky-600 text-white text-[12px] font-semibold">
                  {initials(t.name)}
                </span>
                <span>
                  <span className="block text-[13px] font-semibold text-slate-900">
                    {t.name}
                  </span>
                  <span className="block text-[12px] text-slate-500">
                    {t.title}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
