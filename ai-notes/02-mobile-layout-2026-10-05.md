# Mobile layout (2026-10-05)

Owner request: "it should work slightly better on mobile than it currently does, issues with landmarks on mobile, text too small etc."

## What was wrong
- No `<meta name="viewport">`, so phones laid the page out at 980px and shrank it: all text was tiny and the button/sliders were miniature tap targets.
- Adding the viewport alone would have exposed the fixed widths: the drawing box is 600×450 and the spinner strip is 600px, wider than a 360–430px phone. The rotated images (especially the Look arrow at diagonal angles, ~740px bounding box) also overflow their box.
- Spinner cells had no padding, so names sat cramped against the borders.

## What changed (index.html only; `js/app.js` untouched)
- Added the viewport meta.
- Added a second `<style>` block with `@media (max-width: 640px | 480px | 380px)` rules. Desktop (>640px) is unchanged: before/after full-page screenshots at 1280×800 are byte-identical.
- Elements have no classes, so they're targeted by their inline styles (same approach as the existing centring rule):
  - drawing `div[style*="height: 450px"]` gets CSS `zoom` (.75 / .6 / .55) so the whole 600×450 box scales with its rotations intact;
  - the two `.rc-gap`s above/below it (`[style*="140px"]`, `[style*="120px"]`) shrink to match;
  - `#app { overflow-x: clip }` stops rotated images causing sideways scroll;
  - sliders wider (min(320px, 85vw)) and taller hit area; button 18px with padding (~49px tall); title 17px.
- Spinner strip (`div[style*="overflow: hidden"]`): width → container width (max 600). **The landing maths is fixed**: the chosen cell always ends up 300–450px into the cell row (centre 375px), which is why the selector box sits at `left: 62.5%` of 600px. On mobile the selector is moved to `left: 50%` and the cell row gets `margin-left: calc(50% - 375px)`, which puts the landed cell's centre under the selector for any strip width. Verified: at 390px the selector box and landed cell both span x=120..270 and match the "You got" text. Cells get `min-height: 56px; padding: 4px 8px`.

## Verification
Chrome devtools at 390×844 (mobile, touch) and 360×740: `scrollWidth == innerWidth` before and after a spin, including with the Look arrow forced to 45°. Desktop 1280×800: element rects and full-page screenshot identical to before.

## Notes / left alone
- If a future bundle patch changes those inline styles (e.g. the 450px height, the 140/120px gaps, the `overflow: hidden` strip), the mobile selectors silently stop matching — re-check them.
- `zoom` needs Firefox 126+ (fine in Chrome/Safari for years).
- Not pushed; Rob pushes himself.
