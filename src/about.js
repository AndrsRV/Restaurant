import el from "./dom.js";

/*
  about.js — the story, then three numbered steps.
  Same array-plus-map pattern as menu.js.
*/
const steps = [
  { number: 1, title: "Order at the counter", body: "Tell us what you want. Nothing is made ahead." },
  { number: 2, title: "Wait five minutes",    body: "It goes on the griddle when you order it." },
  { number: 3, title: "Eat it warm",          body: "We call your name. Seats inside and out front." },
];

export default function about() {
  const cards = steps
    .map(
      (step) => `
        <article class="card">
          <span class="step">${step.number}</span>
          <h3>${step.title}</h3>
          <p class="card-body">${step.body}</p>
        </article>
      `
    )
    .join("");

  return el(`
    <div>
      <section class="wrap split">
        <div>
          <p class="kicker">About</p>
          <h1>Everyday food,<br>made properly.</h1>
          <p class="lead">Marco is a small Venezuelan counter in Palmetto Bay. We make the food people eat every day at home — arepas split and filled to order, empanadas fried when you ask for them, tequeños by the handful.</p>
          <p class="lead">The menu stays short on purpose. Three things, every day, off the same griddle.</p>
        </div>
        <div class="media-col">
          <figure class="frame frame-circle washed" style="max-width: 360px">
            <span class="frame-label">Portrait or kitchen shot</span>
          </figure>
        </div>
      </section>

      <section class="band">
        <div class="wrap">
          <h2>How it works</h2>
          <!-- .cards-3 is the same grid with a narrower minimum, so three
               cards sit side by side instead of two. -->
          <div class="cards cards-3">${cards}</div>
        </div>
      </section>
    </div>
  `);
}
