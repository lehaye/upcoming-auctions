import type { Auction } from "../types";

/**
 * Sample content matching the Figma frame. Replace with the CMS/API payload.
 *
 * Note: the third row's location differs between the two Figma frames
 * (desktop says Hong Kong, the mobile dev-mode export says London). Desktop
 * is used here — see README, "Discrepancies found".
 */
export const auctions: Auction[] = [
  {
    id: "fine-and-rare-wine",
    title: "Fine & Rare Wine",
    location: "New York",
    start: "2026-07-12",
    status: "live",
    href: "#",
    image: {
      src: "./images/lot-wine.svg",
      alt: "A row of Bordeaux and Burgundy bottles from the sale",
    },
  },
  {
    id: "important-watches",
    title: "Important Watches",
    location: "New York",
    start: "2026-07-13",
    status: "closing-soon",
    href: "#",
    image: {
      src: "./images/lot-watch.svg",
      alt: "A gold asymmetric wristwatch worn on the wrist",
    },
  },
  {
    id: "stream-family-collection",
    title: "The Stream Family Collection",
    location: "Hong Kong",
    start: "2026-09-23",
    end: "2026-10-06",
    status: "registration-open",
    href: "#",
    image: {
      src: "./images/lot-jewels.svg",
      alt: "Jewelled animal figures and a gem-set flower study on a green ground",
    },
  },
];
