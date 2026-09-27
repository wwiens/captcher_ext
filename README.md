# Captcher Recorder

The Chrome extension half of [Captcher](https://captcher.app). It sits in a side
panel beside a web application, saves a copy of every screen a person passes
through while they perform a task, and sends the run to a Captcher server, which
turns it into a walkthrough other people can click through.

Manifest V3. No runtime build step, bundler or dependencies to install. Runtime
source ships directly; development and test files are excluded from the package.

## Getting started

1. `chrome://extensions` → Developer mode on → **Load unpacked** → this folder.
2. Open Captcher in a tab and sign in.
3. Click the toolbar icon. The panel opens on **Set up the recorder** and pairs
   itself with the signed-in page.

There is no address field and no token to paste. Pairing takes a one-time code
from the page and exchanges it for a per-browser key; `PAIRING.md` in the server
repository specifies the flow.

The hosted app is **https://app.captcher.app**, which is what a Web Store install
connects to, and the only origin it will pair with or upload to. An unpacked
installation (one without an `update_url`) also accepts a loopback server: open
`http://127.0.0.1:8080` in the tab and the panel will pick it up.

After changing an unpacked installation, reload it from `chrome://extensions`
and close and reopen its side panel.

## Layout

| File | What it is |
|---|---|
| `manifest.json` | MV3 manifest. Requires Chrome 152 or later. |
| `background.js` | Service worker. Recording-session authorization and cleanup, pairing claim and presence registration. |
| `sidepanel/panel.html`, `panel.js` | The whole UI and the capture orchestration. |
| `sidepanel/zip.js` | Builds the upload archive. `CompressionStream`, no library. |
| `capture-session.js` | Document-level capture ownership, network cancellation and quarantine of unfinished engine work. |
| `sensitive.js` | The single definition of a secret field, and the redaction that takes those values out of the page before it is captured. Injected by both the recorder and the capture path. |
| `recorder.js` | Records clicks, entries and drags while a walkthrough runs. Content script. |
| `shield.js` | Freezes the page and explains why, so nothing moves mid-capture. |
| `connect.js` | Injected on demand to ask a Captcher page for a pairing code. |
| `announce.js` | Tells a Captcher page this extension exists, so it stops offering to install it. One-way. |
| `theme.js` | Resolves dark / light / system before the first paint. Shared by the panel and the help page. |
| `help.html`, `privacy.html` | The user-facing guide and privacy notice. |
| `fonts/`, `icons/` | Bundled typefaces (with their licences) and toolbar icons. |
| `lib/single-file.js` | The capture engine. Third party, AGPL. See below. |
| `scripts/`, `tests/` | Packaging, package validation and test tooling. Not shipped. |

## How recording works

The service worker owns one recording session at a time. `recorder.js` starts
as an inert connection request; it reads no page content until the worker
authorizes its tab and document. Only the starting tab and tabs opened from it
during that recording qualify.

Finish, Discard, panel closure and connection or lease expiry stop injected
listeners, observers and timers. Closing the panel loses unsent captures, so
keep it open until submission completes. A capture shield has an independent
150-second backstop. Capture ownership is tied to a direct panel/document port:
panel closure or the 120-second deadline aborts resource requests, restores
fields and invalidates output. Unfinished engine work remains quarantined until
it settles or the document reloads. JavaScript cannot preempt a blocked page
main thread; cleanup runs when that thread responds.

Page resources are fetched without credentials, without following redirects and
with streamed size limits, so some resources may be missing from a snapshot.
A step's actions are kept until its snapshot commits, and Finish refuses to
silently drop a failed final capture. A rejected upload keeps the draft and
leads to re-pairing; if the destination account changes, the panel asks for
review before sending.

### Redaction

The capture helper blanks password controls (remembering ones a show-password
button has switched to text), password/one-time-code/card autocomplete
controls (including selects), inputs named like passwords, PINs or card codes,
and all hidden inputs. Reflections of the removed values elsewhere in the page
are searched for too, except for low-secrecy values — short hidden values such
as `1` or `true`, dropdown choices and card-expiry parts — which are blanked
but not hunted, so that ordinary pages are not aborted or starred out. It inspects
same-origin frames, templates, and open and closed shadow roots. Restoration
is tied to a unique capture and document; refilled values are not overwritten.
Missing protection, changed controls, or inaccessible/loading frames abort the
capture. Cross-origin/sandboxed frames and embedded objects are unsupported.
Viewport PNGs are omitted if recognized sensitive controls or frames are
present; ordinary pages still receive screenshots.

The HTML check handles literal and common HTML/URL/JSON encodings and nested
base64 HTML. Ambiguous short reflections abort instead of rewriting arbitrary
HTML syntax. This is not a general secret detector: arbitrary unmarked text,
URL parameters, custom encodings, canvases and images still require test data
and review.

## Diagnostics

**Settings → Show log** turns on a running account of what the recorder is
doing: every resource fetch with its URL, engine progress, a per-second
heartbeat that stops if the page's main thread is pegged, and a two-minute
watchdog that fails a capture rather than hanging the panel. It is the first
thing to ask for in a bug report.

## Tests

Behavior tests need nothing installed beyond Node:

```bash
node --test tests/*.test.cjs
```

The browser smoke test starts its own temporary profile and a synthetic local
website. It exercises the native side panel, captures HTML and PNG, checks tab
authorization and screenshot switching, then verifies stop, restart and close.
It does not use an existing browser profile or upload a recording.

```bash
node tests/chrome-lifecycle-smoke.cjs --redaction --release
```

It defaults to the macOS Chrome for Testing application; set
`CHROME_TEST_BINARY` to use another installation. Temporary profiles are left in
the OS temporary directory for diagnosis. `--redaction` adds the real
serialization, restoration, unsafe-frame, refill, ownership and encoding cases.

`tests/e2e/` holds an end-to-end loop that records scripted flows against a
local Captcher server and replays the generated walkthroughs; see its README.

The workflow in `.github/workflows/release-checks.yml` runs the tests and the
packaged-extension smoke test on macOS, Windows and Linux.

## Contracts with the server

The pairing messages, the presence marker, the ping response and the upload
format have to match the server, and most of them fail with no error on either
side when they drift. They are listed and explained in `CONTRACT.md` in the
server repository and enforced by its extension contract tests, which read this
repository's source rather than pinning literals on both sides.

**Once a version is published, those are frozen.** A shipped extension cannot
be updated on demand: a server change that breaks one stays broken on the
user's machine until they take an update, and store review takes days. Read
`CONTRACT.md` before changing anything the two halves share.

## Packaging for the Chrome Web Store

```bash
./package.sh
```

It builds the ZIP from `git archive`, so an uncommitted or untracked file is a
hard error rather than a file that silently does not ship.
`scripts/verify-package.py` then validates the archive: required files, local
references, icon sizes, permissions, excluded development files and the
SingleFile hash.

Install the packaged artifact, not the working tree, before submitting: unzip it
somewhere clean and load *that* unpacked in a fresh Chrome profile. Tag the
commit each store release is built from.

## Updating the SingleFile engine

`lib/single-file.js` is third-party code under the **GNU AGPL v3 or later** and
is not hand-edited. Upstream's `build.sh` compiles `single-file-core` (the version
pinned in that script) with esbuild, and ships the result as a JavaScript string
literal inside `lib/single-file-bundle.js` so its CLI can inject it into a page;
this repository stores the decoded contents of that literal, with a four-line
provenance header prepended, so it can be loaded directly as an extension
script.

To reproduce or update it, from a checkout of the upstream release:

```bash
# 1. Get the release named in THIRD-PARTY-NOTICES.md (or a newer tag).
git clone https://github.com/gildas-lormeau/single-file-cli
cd single-file-cli && git checkout v2.0.83

# 2. Decode the string literal into a plain script.
node -e '
  const bundle = require("./lib/single-file-bundle.js");
  process.stdout.write(typeof bundle === "string" ? bundle : bundle.script);
' > /tmp/single-file.js

# 3. Prepend the four-line provenance header, keeping the version accurate.
{ printf "/*\n * SingleFile engine — extracted from single-file-cli %s (lib/single-file-bundle.js).\n * Copyright 2010-2024 Gildas Lormeau — GNU AGPL v3. See lib/SINGLE-FILE-LICENSE.\n * Regenerate: see README \"Updating the SingleFile engine\".\n */\n" "2.0.83"
  cat /tmp/single-file.js
} > lib/single-file.js

# 4. Record the hash in THIRD-PARTY-NOTICES.md and refresh the licence copy.
shasum -a 256 lib/single-file.js
cp path/to/single-file-cli/LICENSE lib/SINGLE-FILE-LICENSE
```

Then update the source, release, file and SHA-256 rows in `THIRD-PARTY-NOTICES.md`
(the `single-file-core` version is the one `build.sh` installs), and the expected
hash in `scripts/verify-package.py`. Minification drops the licence comments of
the libraries under `single-file-core/vendor/`, so regenerate
`lib/SINGLE-FILE-VENDOR-NOTICES.txt` from that version's source files and check
for added or removed libraries. Finally, check that `shield.js`'s
`single-file-ui-element` marker still matches the class name the new engine uses
to exclude its own overlays — a rename there puts the capture notice into every
screenshot.

The AGPL obligations that come with this component, including making
corresponding source available to anyone who receives the extension, are set out
in `THIRD-PARTY-NOTICES.md`. Keep that file, `lib/SINGLE-FILE-LICENSE`,
`lib/SINGLE-FILE-VENDOR-NOTICES.txt` and the header comment intact when
redistributing.

## Compatibility

Chrome 152 or later, the range the native side-panel tests qualify. Lower the
floor only after qualifying older browsers end to end; an API being available
is not the same as the recorder working.

## License

Captcher Recorder — Copyright (C) 2026 Noventix LLC.

This program is free software: you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License as published by the Free
Software Foundation, either version 3 of the License, or (at your option) any
later version. It is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE. The full text is in [`LICENSE`](LICENSE).

The extension bundles SingleFile (`lib/single-file.js`, AGPL v3 or later) and
conveys it as part of the same package, so the AGPL's terms extend to the
combined work. Third-party components and their licences are listed in
[`THIRD-PARTY-NOTICES.md`](THIRD-PARTY-NOTICES.md).

Scope: the browser extension only. The Captcher server contains no part of
SingleFile and is not covered by this licence.
