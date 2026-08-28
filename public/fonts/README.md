# Fonts

ABC Arizona is a licensed typeface and the font files are **not** committed here.

Add these four files to this directory and the `@font-face` rules in
`src/index.css` will resolve with no further changes:

- `ABCArizonaSerif-Light.woff2` (300)
- `ABCArizonaSans-Light.woff2` (300)
- `ABCArizonaSans-Regular.woff2` (400)
- `ABCArizonaSans-Medium.woff2` (500)

If the repo is public, check the licence permits serving the files from a
public origin. If it does not, host them behind the licensed domain and swap
the `src:` URLs, or keep the repo private and publish Pages from it.

Until the files are present the component falls back to the system serif and
sans-serif. Layout, spacing and hierarchy are reviewable; type is not.
