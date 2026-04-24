export default function OkxLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="64"
      height="22"
      viewBox="0 0 64 22"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-label="OKX"
    >
      {/* Simplified wordmark: three squares forming OKX monogram */}
      <rect x="0" y="0" width="20" height="20" rx="1" fill="currentColor" />
      <rect x="4" y="4" width="12" height="12" rx="0.5" fill="#000" />
      <rect x="22" y="0" width="8" height="8" rx="1" fill="currentColor" />
      <rect x="30" y="7" width="8" height="8" rx="1" fill="currentColor" />
      <rect x="22" y="14" width="8" height="8" rx="1" fill="currentColor" />
      <rect x="40" y="0" width="8" height="8" rx="1" fill="currentColor" />
      <rect x="56" y="0" width="8" height="8" rx="1" fill="currentColor" />
      <rect x="48" y="7" width="8" height="8" rx="1" fill="currentColor" />
      <rect x="40" y="14" width="8" height="8" rx="1" fill="currentColor" />
      <rect x="56" y="14" width="8" height="8" rx="1" fill="currentColor" />
    </svg>
  );
}
