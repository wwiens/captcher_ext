# Third-party notices

This extension is distributed with third-party software. Each component below
is listed with its copyright holder, its licence, the exact upstream release it
came from, and how to obtain that source. Where a licence text is carried in
this repository, the path is given; where it is not, the upstream project is,
and that is where to get it.

---

## SingleFile (engine)

| | |
|---|---|
| **File in this repository** | `lib/single-file.js` |
| **Copyright** | © 2010-2025 Gildas Lormeau |
| **Licence** | GNU Affero General Public License, version 3 or (at your option) any later version |
| **Licence text** | [`lib/SINGLE-FILE-LICENSE`](lib/SINGLE-FILE-LICENSE) (verbatim copy of the upstream `LICENSE`) |
| **Source** | `single-file-core` **1.5.68** — https://github.com/gildas-lormeau/single-file-core, published as https://registry.npmjs.org/single-file-core/-/single-file-core-1.5.68.tgz |
| **Built by** | `single-file-cli` **v2.0.83** `build.sh` (esbuild, minified) — https://github.com/gildas-lormeau/single-file-cli |
| **Taken from** | `single-file-cli` v2.0.83 `lib/single-file-bundle.js` |
| **SHA-256 (as shipped)** | `e3aa5e75b6875fa60f19f884c235daaa77072228f377551a3a625f190a6674c7` |
| **Bundled components** | CSSTree (MIT), zip.js (BSD-3-Clause, including SJCL), and MIT/BSD-licensed CSS, srcset and MIME parsers — notices in [`lib/SINGLE-FILE-VENDOR-NOTICES.txt`](lib/SINGLE-FILE-VENDOR-NOTICES.txt) |

SingleFile is what turns a live page into the self-contained HTML snapshot a
walkthrough replays over. It is the whole of Captcher's page-archiving
strategy.

### What was changed

`lib/single-file.js` is **not** hand-edited, and no functional change has been
made to it. Upstream's `build.sh` compiles `single-file-core` with esbuild into a
minified script and ships it as a JavaScript *string literal* (`const script =
"…"` inside `lib/single-file-bundle.js`, so the CLI can inject it into a page).
This repository stores the decoded contents of that literal so it can be loaded
directly as an extension script, with a four-line provenance header prepended.

The shipped file is byte-for-byte the decoded upstream literal. See "Updating
the SingleFile engine" in [`README.md`](README.md) for the exact command that
reproduces it.

Minification strips the licence comments of the libraries `single-file-core`
bundles. Their notices are reproduced verbatim from the `single-file-core`
1.5.68 source in `lib/SINGLE-FILE-VENDOR-NOTICES.txt`, which ships with the
extension.

### Source availability

`lib/single-file.js` is minified, so its corresponding source is the readable
`single-file-core` 1.5.68 source named above, together with the `single-file-cli`
v2.0.83 `build.sh` that compiles it. Both are public at the URLs above. The
extension's own source, including its build and packaging scripts, is public at
https://github.com/wwiens/captcher_ext; each store release is tagged there. Questions about source or licensing
can be raised as an issue on that repository.

The AGPL applies to this component. Because it is conveyed as part of this
extension, the licence's terms — including the obligation to make corresponding
source available to recipients — extend to the combined work in which it is
distributed. Keep this notice, the licence texts, `lib/SINGLE-FILE-VENDOR-NOTICES.txt`
and the header comment in `lib/single-file.js` intact when redistributing.

> Scope note: this notice covers the browser extension, which is what ships
> with SingleFile inside it. The Captcher server does not contain any part of
> SingleFile.

---

## Brand typefaces

| | |
|---|---|
| **Files in this repository** | `fonts/dm-sans-latin.woff2`, `fonts/outfit-latin.woff2`, `fonts/jetbrains-mono-latin-{400,500}.woff2` |
| **Licence** | SIL Open Font License 1.1 (all three families) |

Captcher's faces (Brand Guide v1) — DM Sans for the interface, Outfit for
headlines and the wordmark, JetBrains Mono for everything the system knows
rather than says — subset to latin and bundled so the side panel renders
correctly with no network. They are the same files the server hosts at
`static/fonts/` (see `static/fonts/PROVENANCE.md` there for upstream URLs) and
the marketing site hosts at `assets/fonts/`; if a subset is regenerated,
regenerate every copy in the same commit or the surfaces stop matching.

- **DM Sans** — © 2014 The DM Sans Project Authors.
  https://github.com/googlefonts/dm-fonts
- **Outfit** — © 2021 The Outfit Project Authors.
  https://github.com/Outfitio/Outfit-Fonts
- **JetBrains Mono** — © 2020 The JetBrains Mono Project Authors.
  https://github.com/JetBrains/JetBrainsMono

The exact OFL texts are bundled as `fonts/DMSans-OFL.txt`, `fonts/Outfit-OFL.txt`
and `fonts/JetBrainsMono-OFL.txt`. Keep the notices and licenses with
redistributed font files.
