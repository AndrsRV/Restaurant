import el from "./dom.js";

/*
  home.js — the landing view: hero, the menu prices, then about + address.

  The pattern every view file follows: export one function that returns a
  fresh DOM element. index.js decides when to call it and where to put it.
  Returning a new element each time means views never share stale state.
*/
export default function home() {
  return el(`
    <div>
      <!-- Hero. .split is a two-column grid that collapses to one on phones. -->
      <section class="wrap split">
        <div>
          <p class="kicker">Arepas &middot; Palmetto Bay, Miami</p>
          <h1>Corn, cheese,<br>and a hot griddle.</h1>
          <p class="lead">Venezuelan arepas made to order at the counter. Order, wait five minutes, eat it warm.</p>
          <div class="actions">
            <!-- data-view is all a button needs to switch views. -->
            <button class="btn btn-primary" data-view="menu">See the menu</button>
            <button class="btn btn-secondary" data-view="contact">Find us</button>
          </div>
        </div>
        <div class="media-col">
          <!-- Photo placeholder. Replace the <span> with an <img> when you
               have the real picture; the frame keeps its shape either way. -->
          <figure class="frame frame-circle washed" style="max-width: 340px">
            <span class="frame-label">Arepa close-up</span>
          </figure>
        </div>
      </section>

      <!-- .band is a full-width sand-colored strip. -->
      <section class="band">
        <div class="wrap">
          <h2>The whole menu</h2>
          <ul class="price-list">
            <!-- The .leader span is the dotted-line effect: an empty element
                 that stretches to fill whatever space is left between the
                 name and the price. -->
            <li class="price-row"><span class="price-name">Arepas</span><span class="leader"></span><span class="price">5$</span></li>
            <li class="price-row"><span class="price-name">Empanadas</span><span class="leader"></span><span class="price">3$</span></li>
            <li class="price-row"><span class="price-name">Tequeños</span><span class="leader"></span><span class="price">2$</span></li>
          </ul>
        </div>
      </section>

      <section class="wrap split">
        <div>
          <h2>About Marco</h2>
          <p>A small counter in Palmetto Bay serving the food Venezuelans eat every day: arepas split and filled to order, empanadas fried when you ask for them, tequeños by the handful.</p>
          <p>No table service. Order at the counter, take a seat outside, and we'll call your name.</p>
        </div>
        <div class="panel">
          <h3>Come by</h3>
          <p class="panel-body">1847 Palmetto Bay Drive<br>Miami, FL 33157</p>
          <hr class="panel-rule">
          <p class="panel-fine">Counter service &middot; Cash and card<br>Hours coming soon</p>
        </div>
      </section>
    </div>
  `);
}
