import type { Auction } from "../types";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

function parts(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`);
  return { day: d.getUTCDate(), month: MONTHS[d.getUTCMonth()] };
}

/**
 * Compact single-line date used below the `md` breakpoint.
 * "12 Jul"  ·  "23 Sep - 6 Oct"
 */
export function formatCompactDate(auction: Pick<Auction, "start" | "end">): string {
  const from = parts(auction.start);
  if (!auction.end) return `${from.day} ${from.month}`;

  const to = parts(auction.end);
  return `${from.day} ${from.month} - ${to.day} ${to.month}`;
}

/**
 * Two-part stacked date used in the `md` and up date column.
 * { day: "12",   month: "Jul" }
 * { day: "23-6", month: "Sep-Oct" }
 */
export function formatStackedDate(auction: Pick<Auction, "start" | "end">): {
  day: string;
  month: string;
} {
  const from = parts(auction.start);
  if (!auction.end) return { day: String(from.day), month: from.month };

  const to = parts(auction.end);
  return {
    day: `${from.day}-${to.day}`,
    month: from.month === to.month ? from.month : `${from.month}-${to.month}`,
  };
}

/** Unabbreviated date for the link's accessible name. */
export function formatAccessibleDate(auction: Pick<Auction, "start" | "end">): string {
  const opts: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  };
  const from = new Date(`${auction.start}T00:00:00Z`).toLocaleDateString("en-GB", opts);
  if (!auction.end) return from;

  const to = new Date(`${auction.end}T00:00:00Z`).toLocaleDateString("en-GB", opts);
  return `${from} to ${to}`;
}
