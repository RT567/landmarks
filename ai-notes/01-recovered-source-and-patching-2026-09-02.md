# landmarks — "landmark explorer". What it is, why there's no source, how to change it anyway

Live: https://rt567.github.io/landmarks/  ·  Repo: github.com/RT567/landmarks (branch `master`, Pages serves `/`). Local: `~/silly/landmarks`.

## The idea

A desk toy. The page shows a hand-drawn person at a desk with N/S/E/W arrows. Two sliders let you rotate the person and the compass arrow to match how *your* real desk faces (tip on the page: the sun rises in the east). Then "🎲 Travel the world!" spins a CS:GO-case-style horizontal strip of landmark names for 7 s and lands on one. When it stops, a red **"Look"** arrow appears at a random angle: that's the direction you'd look, from your desk, toward that landmark. (The angle is random, not computed. It's a joke.)

## Timeline

| date | event |
|---|---|
| 2025-03-06 | Built as a shadow-cljs / Reagent / re-com / reitit app (`look-at-landmarks.core`). Compiled with `:advanced` and the **compiled output was committed and deployed** (`index.html`, `js/app.js`, `js/cljs-runtime/*`, `arrow.png`, `desk.png`, `look.png`, `css/site.css`). Four "index fix" commits + "fix no matching clause exception" the same day. The source project was never pushed anywhere and is not on this PC. |
| 2026-09-02 | Owner requests: hide the Look arrow until the spinner stops; centre everything; desk faces up on load; spinner strip hidden until the first spin. Source recovered from the source map (below) and the minified bundle patched directly. Commits: "hide look arrow until spinner stops, desk faces up, center page", "layered image container matches image width", "center drawing with auto margins", and "spinner strip hidden until first spin". |

## Recovering the source (do this first if you need to understand anything)

The dev-mode source map embeds the original file:
```bash
python3 -c "import json;print(json.load(open('js/cljs-runtime/look_at_landmarks.core.js.map'))['sourcesContent'][0])" > /tmp/core.cljs
```
Key parts of `core.cljs` (original, before the 2026-09-02 patches):
- atoms `angle-desk`, `angle-arrow`, `rand-angle` (all started at 0), `spin-position` (0), `selected-item` (nil)
- `layered-images`: a `position:relative` 450×450 div with three absolutely-positioned 450px-tall imgs (`desk.png`, `arrow.png`, `look.png`), each `rotate(<atom>deg)`
- `desk-rotator` / `arrow-rotator`: re-com sliders 0–360
- `landmarks`: 25 names; `spin-case`: resets spin-position + selected-item, sets `rand-angle` to random, after 100 ms sets spin-position to `150 * (5*25 + rand(100+25))` px, after 7100 ms sets `selected-item`
- `case-opening-component`: 600px wide overflow-hidden strip with 250 name cells (150px each), `translateX(-spin-position)` with a 7 s cubic-bezier transition, a red 150px selector box at 62.5%, the button, and an h2 "🎉 You got: … 🎉"
- `home-page`: re-com v-box with title, gaps, layered-images, sliders, case component

## Patching the minified bundle (`js/app.js`, ~700 KB, one giant line-ish)

There is no way to rebuild, so changes are made with exact string replacements in Python, asserting each target occurs exactly once:
```python
s=open('js/app.js').read(); a='...exact old...'; b='...new...'; assert s.count(a)==1; open('js/app.js','w').write(s.replace(a,b))
```
Identifier map in the current bundle (Closure-renamed; **grep to confirm before relying on them** — they'll change if anything upstream ever changes):

| minified | meaning |
|---|---|
| `At(v)` | `reagent.core/atom` |
| `y(a)` | `deref` |
| `pg(a,v)` | `reset!` |
| `u(x)` | truthy test (`cljs.core/truth_`) |
| `kE` | `angle-desk` atom — **now `At(270)`** so the desk faces up on load (image is drawn with the person facing right; CSS rotate(270deg) = −90°) |
| `lE` | `angle-arrow` atom, `At(0)` (N points up) |
| `mE` | `rand-angle` atom — **now `At(null)`**; set to a random int only in the 7100 ms timeout; while null the look `<img>` src is a 1×1 transparent GIF data URI instead of `look.png` |
| `HE` | landmarks vector |
| `IE` | spin-position atom |
| `JE` | selected-item atom |
| `KE()` | `spin-case` |
| `LE()` | `case-opening-component` |
| `EE()` | `layered-images` (container width changed 450px → **600px** to match the 800×600 images rendered at 450px tall) |

Byte offsets as of 2026-09-02: atoms defined near 685 870 (`var kE=At(270),lE=At(0),mE=At(null)`), `EE` near 688 800, `KE`/`LE` near 690 200. Use `python3 -c "s=open('js/app.js').read();i=s.index('function KE');print(s[i:i+400])"` to look around.

The "spinner strip hidden until first spin" change (2026-09-02): a new atom `MEs=At(!1)` is declared next to `IE`/`JE`; `KE()` (spin-case) now starts with `pg(MEs,!0)`; in `LE()` the strip's hiccup vector (the first child of the `children` vector `e`) is wrapped as `u(y(MEs))?<strip>:null`, mirroring the existing `u(y(JE))?[...]:null` pattern for the "You got" h2. The button is the second child and is unaffected. (The name `MEs` was chosen after checking it doesn't occur anywhere else in the bundle.)

## `index.html` (hand-editable, not compiled)

Contains an inline `<style>`: `#app{text-align:center}` and `#app div[style*="relative"]{margin:0 auto}` (centres the drawing). Note **re-com's CSS is not loaded** by this page, so re-com `v-box`/`h-box` render as plain `display:block` divs (the `display-flex` class does nothing). That's why centring is done with text-align + auto margins rather than flex alignment.

## Testing

```bash
python3 -m http.server 8348      # from the repo dir → http://localhost:8348/
```
Use Chrome devtools (MCP) with an ignore-cache reload after each patch. Timings: the strip lands at ~7 s, the result + Look arrow at 7.1 s after the click. Check `[...document.querySelectorAll('img')].map(i=>i.src+' '+i.style.transform)` for the three layered images. Deploy = `git push`; Pages takes ~1 min.
