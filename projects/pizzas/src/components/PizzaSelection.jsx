import React from "react";

export function PizzaSelection({ pizzaSelection }) {
  return (
    <ul>
      {pizzaSelection.map((p) => (
        <li key={p.name}>
          {p.name}{" "}
          <button
            onClick={() => {
              console.log(`${p.name} doit être supprimée`);
              decreaseTotal(p.price);
            }}
          >
            -
          </button>
        </li>
      ))}
    </ul>
  );
}
