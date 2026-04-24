import { markets } from "../data/markets";
import TokenIcon from "./TokenIcon";
import Sparkline from "./Sparkline";

function formatPrice(price: number) {
  if (price >= 1000) return price.toLocaleString(undefined, { maximumFractionDigits: 2 });
  if (price >= 1) return price.toFixed(2);
  return price.toFixed(4);
}

export default function MarketStrip() {
  return (
    <section className="border-t border-okx-border bg-okx-black">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 py-12 md:py-16">
        <div className="flex items-end justify-between mb-6 md:mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Markets</h2>
            <p className="text-okx-text-muted mt-1 text-[14px]">
              Real-time prices for the top cryptocurrencies.
            </p>
          </div>
          <a href="#" className="hidden md:inline-flex text-[13px] text-okx-accent hover:underline">
            View all markets →
          </a>
        </div>

        <div className="rounded-2xl border border-okx-border overflow-hidden bg-okx-surface">
          <div className="grid grid-cols-[1.3fr_1fr_0.8fr_0.8fr_1fr_0.6fr] gap-4 px-5 py-3 text-[12px] uppercase tracking-wide text-okx-text-dim border-b border-okx-border">
            <div>Name</div>
            <div className="text-right">Price</div>
            <div className="text-right">24h %</div>
            <div className="text-right hidden md:block">24h Vol</div>
            <div className="text-right hidden md:block">Chart</div>
            <div className="text-right">Trade</div>
          </div>

          {markets.map((m) => {
            const up = m.change24h >= 0;
            return (
              <div
                key={m.symbol}
                className="grid grid-cols-[1.3fr_1fr_0.8fr_0.8fr_1fr_0.6fr] gap-4 px-5 py-4 items-center border-b border-okx-border last:border-b-0 hover:bg-white/[0.02]"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <TokenIcon symbol={m.symbol} />
                  <div className="min-w-0">
                    <p className="text-white text-[14px] font-medium truncate">
                      {m.name}
                    </p>
                    <p className="text-okx-text-dim text-[12px]">{m.symbol}/USDT</p>
                  </div>
                </div>
                <div className="text-right text-white text-[14px] tabular-nums">
                  ${formatPrice(m.price)}
                </div>
                <div
                  className={`text-right text-[14px] tabular-nums ${up ? "text-okx-up" : "text-okx-down"}`}
                >
                  {up ? "+" : ""}
                  {m.change24h.toFixed(2)}%
                </div>
                <div className="hidden md:block text-right text-okx-text-muted text-[13px] tabular-nums">
                  ${m.volume24h}
                </div>
                <div className="hidden md:flex justify-end">
                  <Sparkline points={m.sparkline} up={up} />
                </div>
                <div className="text-right">
                  <a
                    href="#"
                    className="okx-btn-ghost inline-flex h-8 items-center rounded-md px-3 text-[12px] font-medium"
                  >
                    Trade
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
