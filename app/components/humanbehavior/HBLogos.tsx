const LOGOS = [
  "TechCrunch",
  "YCombinator",
  "Vercel",
  "General Catalyst",
  "PostHog",
  "Linear",
  "Sentry",
  "HubSpot",
];

export default function HBLogos() {
  return (
    <section className="bg-white border-y border-slate-100">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-14">
        <p className="text-center text-[12px] uppercase tracking-[0.2em] text-slate-400">
          Featured in & trusted by teams from
        </p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 items-center gap-x-6 gap-y-6">
          {LOGOS.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center text-[14px] font-semibold tracking-tight text-slate-400 hover:text-slate-700 transition-colors"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
