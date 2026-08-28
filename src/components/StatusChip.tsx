import type { AuctionStatus } from "../types";

interface StatusChipProps {
  status: AuctionStatus;
  /**
   * "compact" is the below-`md` chip (10/4 padding),
   * "default" is the `md` and up chip (16/8 padding).
   */
  size?: "compact" | "default";
  className?: string;
}

const LABELS: Record<AuctionStatus, string> = {
  live: "Live now",
  "closing-soon": "Closing soon",
  "registration-open": "Registration open",
};

const VARIANTS: Record<AuctionStatus, string> = {
  live: "bg-brand-c-red text-white",
  "closing-soon": "bg-black text-white",
  // `outline` rather than `border` so the 1px rule sits inside the box and the
  // chip stays the same height as its filled siblings, matching Figma.
  "registration-open":
    "text-brand-grey outline outline-1 -outline-offset-1 outline-brand-grey",
};

const SIZES = {
  compact: "px-2.5 py-1",
  default: "px-4 py-2",
} as const;

export function StatusChip({ status, size = "default", className = "" }: StatusChipProps) {
  return (
    <span
      className={[
        "inline-flex shrink-0 items-center rounded-xs",
        "font-arizona-sans text-label-s font-medium uppercase leading-tight",
        VARIANTS[status],
        SIZES[size],
        className,
      ].join(" ")}
    >
      {LABELS[status]}
    </span>
  );
}
