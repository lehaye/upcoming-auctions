export type AuctionStatus = "live" | "closing-soon" | "registration-open";

export interface Auction {
  id: string;
  title: string;
  /** Saleroom city, rendered uppercase. Store it cased for i18n. */
  location: string;
  /** ISO date of the first day of the sale. */
  start: string;
  /** ISO date of the last day, for multi-day sales. Omit for single-day. */
  end?: string;
  status: AuctionStatus;
  href: string;
  image: {
    src: string;
    /** Per DESIGN_PRINCIPLES §6: describe the work, or "" if decorative. */
    alt: string;
  };
}
