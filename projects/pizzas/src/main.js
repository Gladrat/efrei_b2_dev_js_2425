import { render, createElement } from "./lib/core.js";

import { Navigation } from "./components/Navigation.js";
import { PizzaList } from "./components/PizzaList.js";

const title = "Pizza world";

let stock = false;

const app = createElement(
  "app",
  null,
  Navigation,
  createElement("h1", null, "Hello " + title),
  createElement("h2", null, "Notre carte des pizzas :"),
  stock ? 
    PizzaList : 
    createElement("p", null, "Plus de stock..."),
  createElement("p", null, "Votre sélection :"),
  Navigation
);

const root = document.querySelector("#root");
render(app, root);

// console.log(app);
// console.log(JSON.stringify(app));
