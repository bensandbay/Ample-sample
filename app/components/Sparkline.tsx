type Props = {
  points: number[];
  up: boolean;
  width?: number;
  height?: number;
};

export default function Sparkline({ points, up, width = 88, height = 28 }: Props) {
  if (points.length < 2) return null;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const step = width / (points.length - 1);
  const path = points
    .map((p, i) => {
      const x = i * step;
      const y = height - ((p - min) / range) * height;
      return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");

  const color = up ? "#00ba5a" : "#ff5353";

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden>
      <path d={path} fill="none" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}
