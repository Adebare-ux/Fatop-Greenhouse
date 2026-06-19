export function SproutMark({ className = "", style, stroke = "currentColor" }) {
  return (
    <svg
      viewBox="0 0 60 60"
      className={className}
      style={style}
      fill="none"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      <path d="M30 52 C30 38 29 30 30 18" />
      <path d="M30 30 C22 28 17 21 18 12 C27 13 31 19 30 30 Z" />
      <path d="M30 22 C38 20 43 13 42 5 C33 6 29 12 30 22 Z" />
    </svg>
  );
}

export function VineDivider({ className = "", style }) {
  return (
    <svg
      viewBox="0 0 400 40"
      className={className}
      style={style}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    >
      <path d="M2 20 C40 8 60 32 100 20 S160 8 200 20 S260 32 300 20 S360 8 398 20" />
      <path d="M40 18 c4 -8 12 -10 16 -6" />
      <path d="M118 19 c-2 -9 4 -14 10 -12" />
      <path d="M205 19 c4 -8 12 -10 16 -6" />
      <path d="M310 18 c-2 -9 6 -13 12 -10" />
    </svg>
  );
}

export function LeafBadge({ className = "", style }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      style={style}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M24 6 C12 10 8 22 12 34 C16 42 24 42 24 42 C24 42 32 42 36 34 C40 22 36 10 24 6 Z" />
      <path d="M24 9 L24 39" />
      <path d="M24 18 C20 17 17 19 16 22" />
      <path d="M24 27 C28 26 31 28 32 31" />
    </svg>
  );
}

export function TendrilCorner({ className = "", style }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      style={style}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    >
      <path d="M4 4 C4 30 10 50 30 58 C46 64 58 56 56 42" />
      <path d="M18 16 c5 2 7 7 5 11" />
      <path d="M30 58 c-10 2 -16 -4 -15 -11" />
    </svg>
  );
}
