/*
  index.js — the only file that touches the page directly.

  How the whole site works, in four steps:
    1. Each view (home, menu, about, contact) is a function in its own file
       that returns a DOM element. It does not know it is on a page.
    2. This file keeps a lookup of those functions, keyed by name.
    3. When you click a nav button, we call the matching function and put the
       result inside #content, replacing whatever was there.
    4. The name also goes into the URL hash, so refreshing or sharing a link
       lands on the same view and the browser's back button works.

  Nothing else is needed. No framework, no router library.
*/

import "./tokens.css";  // design system variables — must load first
import "./styles.css";  // this site's own rules, written using those variables

import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";
import contact from "./contact.js";

// Step 2: the lookup. The keys are the view names used everywhere else —
// in the button ids ("home-btn"), in data-view attributes, and in the URL hash.
const views = { home, menu, about, contact };

const content = document.querySelector("#content");
const buttons = document.querySelectorAll("nav button");

/*
  Step 3 and 4. `push` is false when we are reacting to the URL (first load,
  back button) and true when the user clicked — otherwise we would add a
  history entry for a change the history already knows about.
*/
function render(name, push) {
  // Unknown or empty name (e.g. someone typed #banana) falls back to home.
  if (!views[name]) name = "home";

  // Build the view and swap it in. replaceChildren clears #content and
  // inserts the new node in one call.
  content.replaceChildren(views[name]());

  // Mark the active nav button. aria-current tells screen readers which
  // one is the current page; .is-active is what the CSS tints.
  buttons.forEach((button) => {
    const isActive = button.id === name + "-btn";
    button.classList.toggle("is-active", isActive);
    if (isActive) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });

  if (push) {
    history.pushState(null, "", "#" + name);
  }

  window.scrollTo(0, 0);
}

/*
  One listener for the whole document instead of one per button. This is
  called event delegation: the click bubbles up to document, and we look at
  what was actually clicked. It works for buttons that do not exist yet —
  which matters, because the buttons inside the views are created later.

  Two kinds of trigger:
    - the nav buttons, identified by their ids ("home-btn")
    - buttons inside a view, which carry data-view="contact"
*/
document.addEventListener("click", (event) => {
  const trigger = event.target.closest("nav button, [data-view]");
  if (!trigger) return;

  const name = trigger.dataset.view || trigger.id.replace("-btn", "");
  render(name, true);
});

// Back and forward buttons: the URL already changed, so just re-render.
window.addEventListener("popstate", () => {
  render(location.hash.slice(1), false);
});

// First load. location.hash is "#menu" or "", so slice off the "#".
render(location.hash.slice(1), false);
