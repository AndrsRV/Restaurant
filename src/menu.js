import el from "./dom.js";

/*
  menu.js — the menu view.

  The three cards are identical in shape, so the content lives in an array
  and the markup is written once. Add a fourth item to this array and a
  fourth card appears; you never touch the HTML.
*/
const items = [
  { name: "Arepas",    price: "5$", note: "Split, filled and pressed to order." },
  { name: "Empanadas", price: "3$", note: "Fried when you order them." },
  { name: "Tequeños",  price: "2$", note: "Cheese sticks, by the handful." },
];

export default function menu() {
  // map turns each item into a string of HTML; join glues them together.
  const cards = items
    .map(
      (item) => `
        <article class="card">
          <figure class="frame frame-43 washed">
            <span class="frame-label">${item.name}</span>
          </figure>
          <h3>${item.name}</h3>
          <p class="card-body">${item.note}</p>
          <p class="card-price">${item.price}</p>
        </article>
      `
    )
    .join("");

  return el(`
    <div>
      <section class="wrap intro">
        <p class="kicker">Menu</p>
        <h1>Three things,<br>made to order.</h1>
        <p class="lead">Everything comes off the griddle behind the counter, in the order it comes in.</p>
      </section>

      <!-- ${cards} drops the generated card markup in here. -->
      <section class="wrap cards">${cards}</section>

      <section class="band">
        <div class="wrap row-between">
          <div>
            <h2>Ordering</h2>
            <p>Counter service only — walk in, order, and we'll call your name. Cash and card.</p>
          </div>
          <button class="btn btn-primary" data-view="contact">Where to find us</button>
        </div>
      </section>
    </div>
  `);
}
