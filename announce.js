// Announces this extension's presence to a Captcher server page, so
// the app can stop prompting people to install something they already have. A
// web page cannot ask Chrome what is installed — enumeration is blocked as a
// fingerprinting defence — so detection only works if the extension speaks
// first. This is that.
//
// Runs at document_start in the isolated world. The JS context is isolated but
// the DOM is not, so the marker below is readable by the app's own script.
// Nothing is read from the page and nothing leaves the browser: it is a
// one-way flag, and the only page this extension touches without being asked
// to capture it.
//
// It is deliberately NOT part of pairing. An earlier draft had this relay
// pairing codes too, which made the app page an initiator — and that path could
// never work on a clean install, because this script is registered only for the
// origin already saved in storage. The side panel drives connecting instead,
// injecting `connect.js` on demand, so there is one pairing path rather than
// two that have to be kept in step. Keep this file one-way.

// A WIRE CONTRACT with the app's library page
// (templates/_extension-panel.html), which reads `dataset.captcherCapture`
// and listens for `captcher:capture-present` to decide whether to keep
// showing the "install the extension" prompt. Both ends must move in the same
// commit: an extension announcing a name the page does not read is invisible
// to that check, and the prompt shows forever with nothing raised anywhere to
// say why. These are machine strings, not user-visible copy — the DOM
// attribute the dataset key produces is `data-captcher-capture`.
//
// These names are FROZEN. An earlier version of this file argued they were
// free to change because the extension had never been published and there was
// no installed base to honour. That argument expired the day this went to the
// Web Store: there is an installed base now, it cannot be updated on demand,
// and a rename here leaves every one of those users being told forever to
// install software they already have. See CONTRACT.md in the server repo for
// the full list of strings in this position, and tests/test_extension_contract
// .py, which compares the two ends rather than pinning a literal.
const MARKER = "captcherCapture";
const PRESENT_EVENT = "captcher:capture-present";

const root = document.documentElement;
if (root) {
  root.dataset[MARKER] = chrome.runtime.getManifest().version;
  // Covers late injection — registerContentScripts applies to tabs loaded
  // after it resolves, so a page already open when the server address was
  // first saved never saw document_start. The app listens for this and hides
  // the prompt without a refresh.
  document.dispatchEvent(new CustomEvent(PRESENT_EVENT));
}
