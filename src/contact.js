import el from "./dom.js";

/*
  contact.js — address panel on the left, map frame on the right.
  No data to loop over, so this one is pure markup.
*/
export default function contact() {
  return el(`
    <div>
      <!-- .split-top stops the two columns from centering on each other,
           so both start at the same top edge. -->
      <section class="wrap split split-top">
        <div>
          <p class="kicker">Contact</p>
          <h1>Come by<br>the counter.</h1>
          <div class="panel">
            <h3>Address</h3>
            <p class="panel-body">1847 Palmetto Bay Drive<br>Miami, FL 33157</p>
            <hr class="panel-rule">
            <p class="panel-fine">Counter service &middot; Cash and card<br>Hours coming soon<br>Phone coming soon</p>
          </div>
        </div>
        <div>
          <figure class="frame frame-43 washed">
            <span class="frame-label">Map or storefront photo</span>
          </figure>
          <p class="mt">Off Palmetto Bay Drive, with parking in front. Walk in and order at the counter — there is no table service, and no reservations to make.</p>
        </div>
      </section>
    </div>
  `);
}
