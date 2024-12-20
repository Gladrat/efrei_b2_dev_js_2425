import { reactive, render, createElement } from "./lib/core.js";

import { Navigation } from "./components/Navigation.js";
import { PizzaList } from "./components/PizzaList.js";

const title = "Pizza world";
// let pizzaCount = 0;
let stock = true;

const state = reactive({
  pizzaCount: 0,
  pizzaSelection: []
}, renderApp)

function addPizzaCount() {
  state.pizzaCount++;
}

function addPizzaToSelection(pizza) {
  state.pizzaSelection = [...state.pizzaSelection, pizza]
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
          onPizzaSelection: addPizzaCount, addPizzaToSelection
        })
      : createElement("p", null, "Plus de stock..."),
    createElement("p", null, `Votre sélection (${state.pizzaCount}) :`),
    createElement("ul", null,
      ...state.pizzaSelection.map(p => createElement("li", null, p))
    ),
    Navigation
  );

  const root = document.querySelector("#root");
  root.innerHTML = "";
  render(app, root);
}

renderApp();
