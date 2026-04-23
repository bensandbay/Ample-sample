type Props = { symbol: string; size?: number };

const COIN_STYLES: Record<string, { bg: string; fg: string; glyph: string }> = {
  BTC:  { bg: "#F7931A", fg: "#ffffff", glyph: "₿" },
  ETH:  { bg: "#627EEA", fg: "#ffffff", glyph: "Ξ" },
  SOL:  { bg: "#000000", fg: "#14F195", glyph: "◎" },
  XRP:  { bg: "#23292F", fg: "#ffffff", glyph: "✕" },
  DOGE: { bg: "#C3A634", fg: "#ffffff", glyph: "Ð" },
  TON:  { bg: "#0098EA", fg: "#ffffff", glyph: "◆" },
  ADA:  { bg: "#0033AD", fg: "#ffffff", glyph: "₳" },
  AVAX: { bg: "#E84142", fg: "#ffffff", glyph: "A" },
  LINK: { bg: "#2A5ADA", fg: "#ffffff", glyph: "⬡" },
  OKB:  { bg: "#3075EE", fg: "#ffffff", glyph: "O" },
};

export default function TokenIcon({ symbol, size = 28 }: Props) {
  const style = COIN_STYLES[symbol] ?? { bg: "#333", fg: "#fff", glyph: symbol[0] };
  return (
    <div
      aria-label={symbol}
      className="flex items-center justify-center rounded-full shrink-0 font-semibold select-none"
      style={{
        width: size,
        height: size,
        background: style.bg,
        color: style.fg,
        fontSize: size * 0.55,
        lineHeight: 1,
      }}
    >
      {style.glyph}
    </div>
  );
}
