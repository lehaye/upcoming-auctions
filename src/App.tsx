import { UpcomingAuctions } from "./components/UpcomingAuctions";
import { auctions } from "./data/auctions";

export default function App() {
  return (
    <main className="min-h-screen bg-white">
      <a
        href="#upcoming-auctions-heading"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-black focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <UpcomingAuctions auctions={auctions} />
    </main>
  );
}
