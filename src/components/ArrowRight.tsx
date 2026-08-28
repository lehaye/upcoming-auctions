interface ArrowRightProps {
  className?: string;
}

/** Decorative — the adjacent link text carries the accessible name. */
export function ArrowRight({ className = "" }: ArrowRightProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M4 12h15m0 0-6-6m6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
      />
    </svg>
  );
}
