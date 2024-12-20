import { createElement } from "../lib/core.js";

let pizzas = [
  "Pizza reine",
  "Pizza 4 fromages",
  "Pizza chorizo",
  "Pizza montagnarde",
  "Pizza spéciale",
];

export const PizzaList = createElement(
  "ul",
  null,
  ...pizzas.map((p) =>
    createElement("li", null, p, " ", createElement("button", null, "+"))
  )
);
