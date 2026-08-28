# Upcoming auctions — coded design review

A React implementation of the **Upcoming auctions** module
([Figma](https://www.figma.com/design/OYY4r3vnU4bt3YN6sZ7dEn/Homepage-2026?node-id=6851-51187&m=dev)),
built to review the design in a browser before developer handoff.

Vite + React + TypeScript + Tailwind, consuming the project's own
`tokens.json` and `tailwind.preset.ts` unchanged.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
```

## Deploy to GitHub Pages

1. Create the repo and push to `main`.
2. Settings → Pages → **Source: GitHub Actions**.
3. `.github/workflows/deploy.yml` builds and publishes on every push.

`vite.config.ts` uses `base: "./"`, so the build works from
`https://<user>.github.io/<repo>/` without hardcoding the repo name.

## Fonts

ABC Arizona files are not committed. Add the four `.woff2` files listed in
`public/fonts/README.md` and the `@font-face` rules in `src/index.css` resolve
with no other changes. Until then it falls back to system serif/sans — layout
is reviewable, type is not.

## Structure

```
src/
  components/
    UpcomingAuctions.tsx   section, heading, calendar link, list
    AuctionRow.tsx         both row layouts
    StatusChip.tsx         live / closing-soon / registration-open
    ArrowRight.tsx
  data/auctions.ts         sample content — swap for the API payload
  lib/formatDate.ts        derives both date presentations from ISO dates
  types.ts
```

Breakpoint is the preset's `md` (**1024px**), not an invented one. Below it the
compact layout; at and above it the expanded layout.

**On the two layouts.** They are not a reflow of one another — the expanded row
adds a thumbnail and a stacked date column and moves the chip from the head of
the row to the far right. They are rendered as two sibling blocks inside one
anchor, only one displayed at a time. Hidden content is `display: none`, so
assistive tech only ever meets one copy. If the team prefers a single DOM, the
chip's position change is the blocker and will need `order` plus a duplicated
location string.

Dates are stored as ISO (`start`, `end`) and both presentations are derived, so
`"12 / JUL"` and `"12 Jul"` can't drift apart in content editing.

---

## Design review findings

### Discrepancies between the two frames

| # | Item | Desktop | Mobile | Built as |
|---|---|---|---|---|
| 1 | Third sale location | Hong Kong | London | **Hong Kong** — needs a decision |
| 2 | Heading case | "Upcoming auctions" | "Upcoming Auctions" | Sentence case, per §2 |
| 3 | Registration-open chip border | `brand-grey` #6E6259 | `brand-light-grey` #BFB8AF | **`brand-grey`** — see A2 |
| 4 | Heading colour | `#222222` | `black` | `black` — see B1 |

Also worth noting: the mobile PNG you attached differs from the mobile
dev-mode export in four further ways (hero card, calendar-link position, chip
label "Open for bidding", third row dated 10 Aug). Per your instruction the
dev-mode export was treated as authoritative, so none of those are built. The
PNG appears to be a newer or older comp — worth reconciling in Figma so there's
one source.

### Accessibility

- **A1 — Status chips carry no icon.** §3.1 ("colour never carries meaning
  alone") and §5.3 ("status chip carries icon + text") both require one. Text is
  present so this isn't a hard failure, but it's off-system. The Live chip is
  the one that matters most.
- **A2 — `brand-light-grey` (#BFB8AF) on white is ~1.9:1**, below the 3:1 floor
  for UI boundaries (§7). The chip border uses `brand-grey` (#6E6259, ~5.7:1)
  at both breakpoints as a result. Flagging rather than silently fixing.
- **A3 — Mobile "View auction calendar" target height** is ~19px of text.
  Padding is added here to reach the 44px floor (§5.1); the design has none, so
  the spacing below the heading will read 8px looser than the comp.
- **A4 — No hover, focus, active or visited states in the design.** §9 requires
  all of them before handoff. A restrained hover (title underline) and a
  focus-visible ring from the preset are added as placeholders — treat these as
  proposals, not spec.
- **A5 — No empty, loading or error state** for the list (§9).

### Off-system values

Kept as designed so the review is of the design, not of my corrections:

- Mobile chip padding **10px** — off the 4px base unit (§3.3). Re-added as a
  one-off in `tailwind.config.ts`.
- Thumbnail **114×71** — not a ratio in the preset's `aspectRatio` set; §6 lists
  standard ratios as `[CONFIRM]`.
- Thumbnail has **4px radius**; §3.4 says lot imagery is `--r-none`, always
  square.
- Desktop heading `#222222` is not in `tokens.json`.

### Fixed-width date column

The Figma frame gives the desktop date column a fixed **54px** while `"23-6"`
measures ~83px at 24px serif — it already overspills in the file. Built as
`min-width: 54px` instead. A longer range (`23-30 / Sep-Oct`) will push the
title further right, so confirm whether the title column should hold a fixed
start position — §1.5 asks us to design for the longest string.

### Open questions

1. Is the `LIVE NOW` state driven by a real timestamp? If so this needs the
   polling/`aria-live` treatment from §5.4 rather than a static chip, and the
   status becomes derived rather than authored.
2. Row count at each breakpoint — always three, or does it fill?
3. Is the whole row the link target, or is the title the only link?
