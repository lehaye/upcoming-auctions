import type { Config } from "tailwindcss";
import preset from "./tailwind.preset";

export default {
  presets: [preset],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // The preset replaces the default spacing scale wholesale, so `0` and the
      // one off-system value the Figma frame uses are re-added here explicitly.
      spacing: {
        0: "0px",
        // Mobile chip horizontal padding is 10px in Figma — off the 4px base
        // unit (see README, "Off-system values"). Kept for review fidelity.
        "2.5": "10px",
      },
      lineHeight: {
        // Every text style in this frame is 1.2. tokens.json carries a
        // lineHeights map but the preset does not wire it to fontSize pairs.
        tight: "1.2",
      },
    },
  },
} satisfies Config;
