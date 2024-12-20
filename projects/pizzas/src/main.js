import { render, createElement } from "./lib/core.js";

import { Navigation } from "./components/Navigation.js";
import { PizzaList } from "./components/PizzaList.js";

const title = "Pizza world";
let pizzaCount = 0;
let stock = true;

function addPizzaCount() {
  pizzaCount++;
  console.log("Nb de pizzas :", pizzaCount);
}

function renderApp() {
  const app = createElement(
    "app",
    null,
    Navigation,
    createElement("h1", null, "Hello " + title),
    createElement("h2", null, "Notre carte des pizzas :"),
    stock
      ? PizzaList({
          onPizzaSelection: addPizzaCount,
          renderApp: renderApp,
        })
      : createElement("p", null, "Plus de stock..."),
    createElement("p", null, `Votre sélection (${pizzaCount}) :`),
    Navigation
  );

  const root = document.querySelector("#root");
  root.innerHTML = "";
  render(app, root);
}

renderApp();
