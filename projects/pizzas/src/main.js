import { reactive, render, createElement } from "./lib/core.js";

import { Navigation } from "./components/Navigation.js";
import { PizzaList } from "./components/PizzaList.js";
import { PizzaSelection } from "./components/PizzaSelection.js";

const title = "Pizza world";
let stock = true;

const state = reactive(
  {
    // pizzaCount: 0, // Remplacé par un calcul de pizzaSelection.length (ligne 63)
    pizzaSelection: [],
    total: 0,
  },
  renderApp
);

let pizzas = [
  { name: "Pizza reine", stock: 8, price: 8.5 },
  { name: "Pizza 4 fromages", stock: 25, price: 9 },
  { name: "Pizza chorizo", stock: 30, price: 10 },
  { name: "Pizza montagnarde", stock: 12, price: 11.5 },
  { name: "Pizza spéciale", stock: 10, price: 14 },
];

function increaseTotal(amout) {
  state.total += amout;
}

function decreaseTotal(amout) {
  state.total -= amout;
}

function addPizzaCount() {
  state.pizzaCount++;
}

function addPizzaToSelection(pizza) {
  state.pizzaSelection = [...state.pizzaSelection, pizza];
}

function removePizzaFromSelection(index) {
  state.pizzaSelection = state.pizzaSelection.filter((_, i) => i !== index);
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
          pizzas,
          onPizzaSelection: addPizzaCount,
          addPizzaToSelection,
          increaseTotal,
        })
      : createElement("p", null, "Plus de stock..."),
    createElement("h2", null, `Montant ${state.total} €`),
    createElement(
      "p",
      null,
      `Votre sélection (${state.pizzaSelection.length}) :`
    ),
    PizzaSelection({
      pizzaSelection: state.pizzaSelection,
      decreaseTotal,
      removePizzaFromSelection,
    }),
    Navigation
  );

  const root = document.querySelector("#root");
  root.innerHTML = "";
  render(app, root);
}

renderApp();
