import { createElement } from "../lib/core.js";

export function PizzaSelection({pizzaSelection}) {
  return createElement(
    "ul",
    null,
    ...pizzaSelection.map((p) =>
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
              decreaseTotal(p.price)
            },
          },
          "-"
        )
      )
    )
  )
}