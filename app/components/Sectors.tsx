const SECTORS = [
  { name: "Freight & Brokerage", icon: "truck" },
  { name: "Warehousing & Fulfillment", icon: "box" },
  { name: "Last-Mile Delivery", icon: "route" },
  { name: "Visibility & Tracking", icon: "radar" },
  { name: "Cross-Border & Customs", icon: "globe" },
  { name: "Robotics & Automation", icon: "bot" },
  { name: "Supply-Chain SaaS", icon: "grid" },
  { name: "Sustainability & Energy", icon: "leaf" },
];

const Icon = ({ name }: { name: string }) => {
  const props = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "truck":
      return (
        <svg {...props}><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7zM7 19a2 2 0 100-4 2 2 0 000 4zM18 19a2 2 0 100-4 2 2 0 000 4z"/></svg>
      );
    case "box":
      return (
        <svg {...props}><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>
      );
    case "route":
      return (
        <svg {...props}><circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="5" r="2.5"/><path d="M8.5 19H15a3 3 0 003-3v-2a3 3 0 00-3-3H9a3 3 0 01-3-3V5"/></svg>
      );
    case "radar":
      return (
        <svg {...props}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 12L20 7"/></svg>
      );
    case "globe":
      return (
        <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>
      );
    case "bot":
      return (
        <svg {...props}><rect x="4" y="7" width="16" height="12" rx="2"/><path d="M9 12h.01M15 12h.01M12 3v4"/></svg>
      );
    case "grid":
      return (
        <svg {...props}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
      );
    case "leaf":
      return (
        <svg {...props}><path d="M5 19c0-8 7-14 16-14-1 9-7 16-16 16zM5 19c2-3 4-5 7-7"/></svg>
      );
    default:
      return null;
  }
};

export default function Sectors() {
  return (
    <section id="consulting" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="lpx-eyebrow text-lpx-accent">Where we focus</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-lpx-ink leading-[1.1]">
            The categories shaping how the world moves goods.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-lpx-border rounded-xl overflow-hidden border border-lpx-border">
          {SECTORS.map((s) => (
            <div
              key={s.name}
              className="bg-white p-6 md:p-7 flex flex-col gap-4 min-h-[140px]"
            >
              <span className="text-lpx-accent">
                <Icon name={s.icon} />
              </span>
              <p className="text-[15px] font-semibold text-lpx-ink leading-snug">
                {s.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
