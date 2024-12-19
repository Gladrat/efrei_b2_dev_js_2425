"use strict";

const hello = "Pizza world";

let pizzas = [
  "Pizza reine",
  "Pizza 4 fromages",
  "Pizza chorizo",
  "Pizza montagnarde",
  // "Pizza spéciale"
];

pizzas = pizzas
  .map((p) => `<li data-name='${p}'>` + p + " <button class='commander'>+</button></li>")
  .join("\n");

console.log(pizzas);

const root = document.querySelector("#root");
root.innerHTML = `
<h1>Hello ${hello} !</h1>
<h2>Liste des pizzas :</h2>
<ul>${pizzas}
</ul>
`;

document.querySelectorAll("button.commander").forEach(button => {
  button.addEventListener("click", (event) => {
    console.log(event.target.parentElement.getAttribute("data-name"));
    
  })
});
