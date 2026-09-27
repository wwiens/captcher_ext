#!/usr/bin/env bash
# Build the Chrome Web Store package.
#
# From `git archive`, deliberately. The tempting version of this script zips the
# working tree, and the working tree is not what is in the repository: this
# extension has already had two files live untracked for a week while everything
# worked locally, because the server's /extension.zip walks the filesystem and
# never noticed. A store build made the same way would have shipped an unthemed
# panel and a Help button opening a 404.
#
# So: the package contains exactly what is committed, and anything uncommitted
# is an error rather than a silent omission.
set -euo pipefail
export TZ=UTC

cd "$(dirname "$0")"
name="captcher-recorder"
version=$(python3 -c 'import json;print(json.load(open("manifest.json"))["version"])')
out="dist/${name}-${version}.zip"

# 1. Nothing uncommitted. A dirty tree means the thing you tested is not the
#    thing that would ship.
if [ -n "$(git status --porcelain)" ]; then
  echo "error: working tree is not clean — commit or stash first:" >&2
  git status --short >&2
  exit 1
fi

# Existing tags do not prohibit reproducing an artifact. Check the dashboard's
# uploaded versions before assigning a new release number or submitting.

# 3. Build it. `git archive` takes HEAD, honours .gitattributes export-ignore,
#    and cannot include a file git does not know about.
mkdir -p dist
rm -f "$out"
git archive --format=zip -o "$out" HEAD

# 4. Say what went in, and prove the things that must be there are there.
echo "built $out"
#
# The listing is taken ONCE, into a variable. Piping `unzip -l` into `grep -q`
# per file looks fine and is not: grep exits the moment it matches, unzip dies
# of SIGPIPE, and `set -o pipefail` turns that into a failed pipeline — so every
# file found EARLY in the listing reports as missing and every file found late
# passes. It reported seven missing files that were all present.
listing=$(unzip -Z1 "$out")
missing=0
for required in manifest.json theme.js sensitive.js capture-session.js privacy.html help.html \
                background.js recorder.js shield.js connect.js announce.js \
                sidepanel/panel.html sidepanel/panel.js sidepanel/zip.js \
                lib/single-file.js lib/SINGLE-FILE-LICENSE lib/SINGLE-FILE-VENDOR-NOTICES.txt \
                THIRD-PARTY-NOTICES.md LICENSE README.md \
                icons/icon16.png icons/icon32.png icons/icon48.png icons/icon128.png; do
  if ! printf '%s\n' "$listing" | grep -qxF "$required"; then
    echo "  MISSING: $required" >&2
    missing=1
  fi
done
[ "$missing" -eq 0 ] || { echo "error: package is incomplete" >&2; exit 1; }

python3 scripts/verify-package.py "$out"

echo "  $(printf '%s\n' "$listing" | wc -l | tr -d ' ') files, $(du -h "$out" | cut -f1)"
echo
echo "Before submitting, install THIS FILE rather than the working tree:"
echo "  unzip -d /tmp/${name}-check '$out'"
echo "  then load /tmp/${name}-check unpacked, in a fresh Chrome profile."
