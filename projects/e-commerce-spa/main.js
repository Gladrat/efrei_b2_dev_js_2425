"use strict";

let cart = [];

function addToCart(product) {
  cart.push(product);
  console.log("Add to cart:", product);
  console.log("Cart:", cart);
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) =>
    addToCart(event.target.parentElement.id)
  );
});
