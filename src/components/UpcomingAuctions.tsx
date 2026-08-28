import { AuctionRow } from "./AuctionRow";
import { ArrowRight } from "./ArrowRight";
import type { Auction } from "../types";

interface UpcomingAuctionsProps {
  auctions: Auction[];
  heading?: string;
  calendarHref?: string;
}

export function UpcomingAuctions({
  auctions,
  heading = "Upcoming auctions",
  calendarHref = "#",
}: UpcomingAuctionsProps) {
  return (
    <section
      aria-labelledby="upcoming-auctions-heading"
      className="w-full border-b-2 border-grey-200 bg-white"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 py-6 md:px-12 md:py-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
          <h2
            id="upcoming-auctions-heading"
            className="font-arizona-serif text-3xl font-light leading-tight text-black"
          >
            {heading}
          </h2>

          <a
            href={calendarHref}
            className="group inline-flex items-center gap-2 self-start py-2 font-arizona-sans text-body font-light leading-tight text-black md:gap-4 md:py-0 md:font-arizona-serif md:text-3xl focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-black-300"
          >
            <span className="group-hover:underline group-hover:underline-offset-4">
              View auction calendar
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 md:h-6 md:w-6" />
          </a>
        </div>

        <ul className="mt-6 border-t border-grey-300 md:mt-10 md:border-t-0">
          {auctions.map((auction) => (
            <AuctionRow key={auction.id} auction={auction} />
          ))}
        </ul>
      </div>
    </section>
  );
}
