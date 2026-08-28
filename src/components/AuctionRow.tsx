import { StatusChip } from "./StatusChip";
import { formatAccessibleDate, formatCompactDate, formatStackedDate } from "../lib/formatDate";
import type { Auction } from "../types";

interface AuctionRowProps {
  auction: Auction;
}

const META = "font-arizona-sans text-label-s font-medium uppercase leading-tight";
const TITLE = "font-arizona-serif text-2xl-serif font-light leading-tight text-black";

/**
 * The compact and expanded layouts are not a reflow of one another — the
 * expanded row introduces a thumbnail and a stacked date column, and moves the
 * status chip from the head of the row to the far right. They are therefore
 * rendered as two sibling blocks inside a single anchor, with only one
 * displayed at a time. Hidden content is `display: none`, so assistive tech
 * only ever encounters one copy.
 */
export function AuctionRow({ auction }: AuctionRowProps) {
  const stacked = formatStackedDate(auction);

  return (
    <li className="border-b border-grey-300 md:first:pt-0 md:last:border-b-0 md:last:pb-0">
      <a
        href={auction.href}
        className="group block py-5 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-black-300"
        aria-label={`${auction.title}, ${auction.location}, ${formatAccessibleDate(auction)}`}
      >
        {/* ---------- Compact: below md ---------- */}
        <div className="flex flex-col gap-3 md:hidden">
          <div className="flex flex-wrap items-center gap-3">
            <StatusChip status={auction.status} size="compact" />
            <div className={`flex items-center gap-2 text-black ${META}`}>
              <span>{formatCompactDate(auction)}</span>
              <span aria-hidden="true" className="font-normal">
                |
              </span>
              <span>{auction.location}</span>
            </div>
          </div>
          <h3 className={`${TITLE} group-hover:underline group-hover:underline-offset-4`}>
            {auction.title}
          </h3>
        </div>

        {/* ---------- Expanded: md and up ---------- */}
        <div className="hidden md:flex md:items-center md:gap-12">
          <img
            src={auction.image.src}
            alt={auction.image.alt}
            width={114}
            height={71}
            loading="lazy"
            className="h-[71px] w-[114px] shrink-0 rounded-xs bg-white object-cover"
          />

          {/* min-width rather than a fixed 54px: "23-6" overspills the Figma
              frame's fixed date column, and longer ranges overspill further. */}
          <div className="flex min-w-[54px] shrink-0 flex-col gap-3">
            <span className="font-arizona-serif text-2xl-serif font-light leading-tight text-black">
              {stacked.day}
            </span>
            <span className={`text-black-300 ${META}`}>{stacked.month}</span>
          </div>

          <div className="flex flex-1 flex-col gap-3">
            <h3 className={`${TITLE} group-hover:underline group-hover:underline-offset-4`}>
              {auction.title}
            </h3>
            <span className={`text-black-300 ${META}`}>{auction.location}</span>
          </div>

          <StatusChip status={auction.status} size="default" />
        </div>
      </a>
    </li>
  );
}
