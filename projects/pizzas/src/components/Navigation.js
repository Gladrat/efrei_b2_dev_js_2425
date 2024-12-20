import { createElement } from "../lib/core.js";

export const Navigation = createElement(
  "nav",
  null,
  createElement(
    "a",
    {
      href: "#accueil",
      id: "lien-accueil",
      class: "beautiful-link",
    },
    "Accueil"
  ),
  createElement("a", { href: "#panier", class: "beautiful-link" }, "Panier")
);
