import { render, createElement } from "./lib/core.js";

const title = "Pizza world";

let pizzas = [
  "Pizza reine",
  "Pizza 4 fromages",
  "Pizza chorizo",
  "Pizza montagnarde",
  // "Pizza spéciale"
];

const titleTemplate = `<h1>Hello, ${title}</h1>`;
const root = document.querySelector("#root");

render(titleTemplate, root);

const app = createElement(
  "app",
  createElement("h1", "Hello " + title),
  createElement("h2", "Notre carte des pizzas :"),
  createElement(
    "ul",
    createElement("li", "Pizza reine", createElement("button", "+")),
    createElement("li", "Pizza 4 fromages", createElement("button", "+")),
    createElement("li", "Pizza chorizo", createElement("button", "+")),
    createElement("li", "Pizza montagnarde", createElement("button", "+"))
  )
);

console.log(JSON.stringify(app));
