import { createElement } from "../lib/core.js";

export function PizzaSelection({
  pizzaSelection,
  decreaseTotal,
  removePizzaFromSelection,
}) {
  return createElement(
    "ul",
    null,
    ...pizzaSelection.map((p, index) =>
      createElement(
        "li",
        null,
        p.name,
        " ",
        createElement(
          "button",
          {
            onclick: () => {
              console.log(p.name, " doit être supprimée");
              decreaseTotal(p.price);
              removePizzaFromSelection(index);
            },
          },
          "-"
        )
      )
    )
  );
}
