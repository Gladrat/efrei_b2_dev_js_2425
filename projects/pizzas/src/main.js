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

const app = createElement(
  "app",
  null,
  Navigation,
  createElement("h1", null, "Hello " + title),
  createElement("h2", null, "Notre carte des pizzas :"),
  stock ? PizzaList : createElement("p", null, "Plus de stock..."),
  createElement("p", null, `Votre sélection (${pizzaCount}) :`),
  Navigation
);

const root = document.querySelector("#root");
render(app, root);

// document.querySelectorAll(".command-button")
//   .forEach(button => {
//     button.addEventListener("click", event => {
//       console.log(event.target.parentElement.getAttribute("data-name"));
//       console.log(event.target.parentElement.getAttribute("data-stock"));
//     })
//   })

// console.log(app);
// console.log(JSON.stringify(app));