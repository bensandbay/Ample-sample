type Props = {
  className?: string;
  variant?: "dark" | "light";
};

export default function LpxLogo({ className, variant = "dark" }: Props) {
  const fill = variant === "light" ? "#ffffff" : "#0b1e3f";
  const accent = "#ff6b00";
  return (
    <svg
      viewBox="0 0 132 28"
      role="img"
      aria-label="LPX Partners"
      className={className}
    >
      <g fill={fill}>
        <path d="M0 4h4v17h10v3H0z" />
        <path d="M19 4h9.2c4.5 0 7.3 2.6 7.3 6.6 0 4-2.9 6.6-7.4 6.6H23v6.8h-4V4zm9 9.5c2.4 0 3.8-1.1 3.8-2.9 0-1.8-1.4-2.9-3.8-2.9H23v5.8h5z" />
        <path d="M53 4h4.7l-6.8 9.7L58 24h-4.8l-4.7-7-4.7 7H39l6.9-10.3L39.1 4h4.8l4.6 6.8L53 4z" />
      </g>
      <text
        x="66"
        y="19"
        fill={fill}
        fontFamily="var(--font-inter), Inter, system-ui, sans-serif"
        fontSize="13"
        fontWeight="500"
        letterSpacing="1.6"
      >
        PARTNERS
      </text>
      <circle cx="128" cy="22" r="2.5" fill={accent} />
    </svg>
  );
}
