import { createElement } from "../lib/core.js";

let pizzas = [
  { name: "Pizza reine", stock: 8 },
  { name: "Pizza 4 fromages", stock: 25 },
  { name: "Pizza chorizo", stock: 30 },
  { name: "Pizza montagnarde", stock: 12 },
  { name: "Pizza spéciale", stock: 10 },
];

export const PizzaList = createElement(
  "ul",
  null,
  ...pizzas.map((p) =>
    createElement(
      "li",
      {
        "data-name": p.name,
        "data-stock": p.stock,
        onclick: (event) => {
          console.log(event.target.getAttribute("data-stock"));
        }
      },
      p.name,
      " ",
      createElement(
        "button",
        {
          class: "command-button",
          onclick: (event) => {
            console.log(event.target.parentElement.getAttribute("data-name"));
          },
        },
        "+"
      )
    )
  )
);
