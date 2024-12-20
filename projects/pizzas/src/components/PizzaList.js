import { createElement } from "../lib/core.js";

export function PizzaList({
  pizzas,
  onPizzaSelection,
  addPizzaToSelection,
  increaseTotal,
}) {
  return createElement(
    "ul",
    null,
    ...pizzas.map((p) =>
      createElement(
        "li",
        {
          "data-name": p.name,
          "data-stock": p.stock,
        },
        p.name,
        " ",
        p.price + " €",
        " ",
        createElement(
          "button",
          {
            class: "command-button",
            onclick: (event) => {
              onPizzaSelection();
              addPizzaToSelection(p);
              increaseTotal(p.price);
            },
          },
          "+"
        )
      )
    )
  );
}
