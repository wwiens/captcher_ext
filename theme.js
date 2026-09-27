// Appearance, resolved before the first paint.
//
// This is the extension's half of the app's templates/_theme-head.html, and it
// answers the same question: what should this surface look like, decided early
// enough that nothing flips after it has been drawn. It is loaded by both
// extension pages — the side panel and the help page — from <head>, ahead of
// everything else.
//
// It is a FILE rather than the app's inline <script> because an extension page
// runs under the default MV3 policy (script-src 'self'), which forbids inline
// script outright. That costs one request off disk and nothing else.
//
// THREE choices, one of which is an indirection:
//   dark   · light   the answer itself
//   system           whatever the computer is set to, followed live
//
// Only "dark" or "light" ever reaches the DOM: "system" is resolved here and
// stamped as data-sc-theme on <html>, which is the same attribute and the same
// two values the platform stylesheet keys its light block off. A stylesheet on
// either side needs one [data-sc-theme="light"] block and no
// prefers-color-scheme query to keep in step with it.
//
// WHERE THE ANSWER LIVES, and why it lives in two places:
//   chrome.storage.local.theme      the choice. Shared by the panel and the
//                                   help tab, and change-notified, so setting
//                                   it in one repaints the other live.
//   localStorage sc-theme-resolved  a mirror of the last RESOLVED answer.
//
// The mirror exists because chrome.storage is asynchronous and localStorage is
// not. Reading the real choice takes a turn of the event loop, and a panel that
// paints dark and then flips to light is exactly the flash a theme control is
// supposed to prevent. So the previous answer is stamped synchronously, before
// anything paints, and corrected a moment later if it was wrong — which it can
// only be on the first open after a change made somewhere else.
//
// Storage can throw outright — a browser set to block site data — so every
// access is wrapped. A failed read is "light", the default.
//
// Light is the default, as it is in the app. Anybody who has picked Dark or
// System keeps it, because only an unset choice falls through to the default.
(function () {
  "use strict";

  const CACHE_KEY = "sc-theme-resolved";
  const CHOICES = ["dark", "light", "system"];
  const root = document.documentElement;
  const media = window.matchMedia("(prefers-color-scheme: light)");

  // --- the synchronous first paint -----------------------------------------
  let cached = null;
  try { cached = localStorage.getItem(CACHE_KEY); } catch { /* blocked */ }
  root.setAttribute("data-sc-theme", cached === "dark" ? "dark" : "light");

  // Light is the default, as in the app.
  let choice = "light";

  function resolve() {
    if (choice === "system") return media.matches ? "light" : "dark";
    return choice === "dark" ? "dark" : "light";
  }

  function paint() {
    const resolved = resolve();
    root.setAttribute("data-sc-theme", resolved);
    try { localStorage.setItem(CACHE_KEY, resolved); } catch { /* blocked */ }
    // The panel's settings card listens for this to keep its radio honest
    // without polling.
    root.dispatchEvent(new CustomEvent("sc:theme", { detail: { choice, resolved } }));
  }

  function adopt(stored) {
    choice = CHOICES.includes(stored && stored.theme) ? stored.theme : "light";
    paint();
  }

  chrome.storage.local.get(["theme"]).then(adopt).catch(() => {});

  // The other surface changed it.
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area !== "local" || !("theme" in changes)) return;
    const next = changes.theme.newValue;
    choice = CHOICES.includes(next) ? next : "light";
    paint();
  });

  // Follow the computer live — but paint() re-decides from scratch, so this is
  // a no-op unless the current choice actually resolves through "system".
  // Somebody who picked Dark outright does not want a sunrise schedule
  // overruling them.
  media.addEventListener("change", paint);

  // The only writer is the Appearance card in the panel's settings. Hung off
  // window because both pages load this file as a plain script and there is no
  // module system here to import it from.
  window.scTheme = {
    get: () => choice,
    resolved: resolve,
    set(next) {
      choice = CHOICES.includes(next) ? next : "light";
      chrome.storage.local.set({ theme: choice }).catch(() => {});
      paint();
      return choice;
    }
  };
})();
