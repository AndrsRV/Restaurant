# Marco Restaurant — the built site

Plain HTML, CSS and JavaScript, structured the same way as your `src/`
folder: `index.html` holds the shell, `index.js` imports the CSS and wires
the nav, and each view lives in its own file.

## Files

| File | What it does |
| --- | --- |
| `index.html` | The shell: header, an empty `#content`, footer. Nothing else. |
| `index.js` | Imports the stylesheets, holds the view lookup, swaps views on click, syncs the URL hash. Start reading here. |
| `home.js` `menu.js` `about.js` `contact.js` | One view each. Each exports a function returning a DOM element. |
| `dom.js` | A four-line helper that turns an HTML string into a DOM node. |
| `styles.css` | Every rule for the site, in ten commented sections. |
| `tokens.css` | The Organic design system variables. Do not edit — retune the design system instead. |
| `logo_restaurant.png` | The flag mark used in the header and footer. |

## Running it

Drop these files into your `src/` folder, replacing the ones there, and
run your existing build. The imports in `index.js` are what your bundler
follows to find everything else.

If you would rather skip the bundler: change the imports at the top of
`index.js` to two `<link rel="stylesheet">` tags in `index.html`, add
`<script type="module" src="index.js"></script>` before `</body>`, and open
`index.html` through a local server (module imports do not work over
`file://`).

## Adding a fifth view

1. Write `hours.js` following the shape of `contact.js`.
2. Add `<button id="hours-btn">Hours</button>` to the nav in `index.html`.
3. Import it in `index.js` and add `hours` to the `views` object.

That is all — the click handler and the URL hash already work by name.

## Still to do

- Six photographs: an arepa close-up (home), one per menu item, a portrait
  or kitchen shot (about), a map or storefront (contact). The frames are
  sized and waiting; drop an `<img>` inside each and remove the label.
- Real opening hours and a phone number, where the copy says "coming soon".
- The headlines and item notes are placeholder copy written to fit the
  layout. The menu items, prices and address are your real ones.
