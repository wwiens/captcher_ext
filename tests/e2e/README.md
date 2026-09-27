# End-to-end walkthrough loop

Records a scripted flow on a sample site through the real side panel, sends it
to a local Captcher server, runs AI authoring the way the catalog does, then
replays the result in the popup player twice:

- **Show me** — every step: the card is placed beside its target and never on
  it, the target resolves, the demo finishes, and typed values and chosen
  options land in the field exactly.
- **You try** — every step done the way a learner does it (a real click on the
  target, the option chosen, the model answer typed) must come back `success`.

It also checks that each typed value and chosen option was captured and
authored, and that no `TODO` survives.

## Needs

- Chrome for Testing 152+ (`CHROME_TEST_BINARY` to override the macOS path)
- the app on `http://127.0.0.1:8080`, the sample sites on `http://127.0.0.1:8000`
- `$E2E_OUT/cookie.txt`: a session cookie for the member the walkthroughs
  belong to, minted locally, e.g. from `captcher_app`:

  ```bash
  python3 -c "import auth; print(auth.SESSION_COOKIE + '=' + auth.make_session('<member uuid>'))" > "$E2E_OUT/cookie.txt"
  ```

The first run pairs the recorder with the server through the panel, into a
persistent profile under `$E2E_OUT/profile`.

## Run

```bash
export E2E_OUT=/some/scratch/dir
node tests/e2e/run.cjs cadence-1.2                 # record, author, assess
node tests/e2e/run.cjs cadence-1.2 --no-author     # record + upload only (free)
node tests/e2e/run.cjs --assess <walkthrough-id> --flow cadence-1.2 --from 005-cadence-1.2
```

Each run writes `$E2E_OUT/runs/NNN-<flow>/`: `run-log.txt`, `summary.json`,
the uploaded `capture-manifest.json`, the authored `walkthrough.json`, the
panel log, and a screenshot per step. `python3 tests/e2e/sheet.py <run dir>`
builds a contact sheet of the step screenshots.

Authoring runs are counted in `$E2E_OUT/budget.json` and refused past
`E2E_BUDGET` (default 100).

## Flows

`flows.cjs` holds the twenty scripts from `sample_sites/WALKTHROUGHS.md`
(levels 2 and 3 for every app). A step marked `transient` is a value the
script deliberately replaces (a rejected entry, a filter set and reset), so
it is not required to survive into the authored walkthrough.
