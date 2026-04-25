const PRIMARY = [
  {
    title: "Watches replays with AI",
    body: "Agents analyze every session recording to capture how real users move through your product.",
    icon: "▷",
  },
  {
    title: "Auto instruments and tracks events",
    body: "Event listeners are added across your entire product. No code changes required.",
    icon: "⚡",
  },
  {
    title: "Indexes your entire product",
    body: "Maps every page, component, and user flow so agents understand context end to end.",
    icon: "◆",
  },
  {
    title: "Tries out your product itself",
    body: "Autonomous browser agents navigate your app and validate that critical flows still work.",
    icon: "↻",
  },
  {
    title: "Integrates with your existing data",
    body: "Plugs into PostHog, Sentry, HubSpot, Attio, Intercom, and the rest of your stack.",
    icon: "⇋",
  },
];

const ACTIONS = [
  {
    title: "Ship changes based off of user behavior",
    body: "Coding agents review friction in replays and open pull requests with the fix.",
  },
  {
    title: "Real-time alerts when things go wrong",
    body: "Get notified the moment a cohort hits a bug or a flow stops converting.",
  },
  {
    title: "Reach your users at the perfect moment",
    body: "AI drafts personalized win-back, support, and expansion emails based on actual behavior.",
  },
  {
    title: "Create work items for your team",
    body: "Agents file tickets in Linear, Notion, and Jira with full context and replays attached.",
  },
  {
    title: "Spawn agents to continuously monitor your product",
    body: "Specialized subagents run on schedules and triggers — your product is never unwatched.",
  },
];

const INTEGRATIONS = [
  { name: "PostHog", state: "Connected" },
  { name: "Slack", state: "Connected" },
  { name: "Linear", state: "Connected" },
  { name: "PostgreSQL", state: "Connected" },
  { name: "HubSpot", state: "Connected" },
  { name: "Gmail", state: "Connected" },
  { name: "Sentry", state: "Connect" },
  { name: "Notion", state: "Connect" },
];

export default function HBFeatures() {
  return (
    <section id="product" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-[12px] uppercase tracking-[0.2em] text-teal-600 font-semibold">
            How it works
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Human Behavior works autonomously and intelligently
          </h2>
          <p className="mt-4 text-[15px] text-slate-600 leading-relaxed">
            One install drops in a fleet of agents that learn your product, find
            problems, and act on what they find — without you babysitting a
            dashboard.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRIMARY.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-slate-200 bg-white p-6 hover:border-slate-300 hover:shadow-sm transition-all"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-teal-500/10 text-teal-600 text-[16px]">
                {f.icon}
              </span>
              <h3 className="mt-4 text-[16px] font-semibold text-slate-900">
                {f.title}
              </h3>
              <p className="mt-2 text-[14px] text-slate-600 leading-relaxed">
                {f.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[12px] uppercase tracking-[0.2em] text-teal-600 font-semibold">
              Nuanced data
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Agents create nuanced data
            </h2>
            <p className="mt-4 text-[15px] text-slate-600 leading-relaxed">
              Auto-generated UI/UX suggestions, drop-off analysis, and funnel
              tracking — surfaced as readable findings instead of dashboards you
              have to assemble yourself.
            </p>
            <ul className="mt-6 space-y-3 text-[14px] text-slate-700">
              {[
                "Friction maps overlaid on every page",
                "Cohort drop-off explained in plain English",
                "Funnel breakdowns with proposed fixes",
                "Suggestions ranked by revenue impact",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-500" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { t: "Drop-off on /pricing", v: "−18%" },
              { t: "Sign-up funnel", v: "42%" },
              { t: "Onboarding completion", v: "71%" },
              { t: "First-week retention", v: "+9%" },
              { t: "Bug clusters detected", v: "12" },
              { t: "Suggestions shipped", v: "27" },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-[12px] text-slate-500">{c.t}</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">
                  {c.v}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <div className="max-w-2xl">
            <p className="text-[12px] uppercase tracking-[0.2em] text-teal-600 font-semibold">
              Action
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Agents can act on findings
            </h2>
            <p className="mt-4 text-[15px] text-slate-600 leading-relaxed">
              Findings are useless if a human has to triage them. Human Behavior
              closes the loop — opening PRs, paging the right person, and
              reaching out to the right user.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {ACTIONS.map((a) => (
              <div
                key={a.title}
                className="rounded-xl border border-slate-200 bg-white p-6 hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-[16px] font-semibold text-slate-900">
                  {a.title}
                </h3>
                <p className="mt-2 text-[14px] text-slate-600 leading-relaxed">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-[12px] uppercase tracking-[0.2em] text-teal-600 font-semibold">
                Integrations
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                Plugs into the tools you already use
              </h3>
            </div>
            <p className="text-[14px] text-slate-600 max-w-md">
              Two-way sync with the analytics, error, CRM, and inbox tools that
              run your business.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {INTEGRATIONS.map((i) => (
              <div
                key={i.name}
                className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3"
              >
                <span className="text-[14px] font-medium text-slate-800">
                  {i.name}
                </span>
                <span
                  className={
                    i.state === "Connected"
                      ? "text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200"
                      : "text-[11px] font-semibold text-slate-600 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200"
                  }
                >
                  {i.state}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
