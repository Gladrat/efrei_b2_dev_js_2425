import { render, createElement } from "./lib/core.js";

const title = "Pizza world";

let pizzas = [
  "Pizza reine",
  "Pizza 4 fromages",
  "Pizza chorizo",
  "Pizza montagnarde",
  "Pizza spéciale",
];

const app = createElement(
  "app",
  createElement("h1", "Hello " + title),
  createElement("h2", "Notre carte des pizzas :"),
  createElement(
    "ul",
    ...pizzas.map((p) => createElement("li", p, createElement("button", "+")))
  ),
  createElement("p", "Votre sélection :")
);

const root = document.querySelector("#root");
render(app, root);

console.log(app);
