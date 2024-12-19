"use strict";

let cart = [];

// UI

const nav = document.querySelector("nav");

const pages = document.querySelectorAll(".pages");
pages.forEach((p) => {
  const link = document.createElement("a");
  
  link.textContent = p.id;
  link.href = "#" + p.id;

  link.addEventListener("click", (event) => {
    event.preventDefault();
    changePage(p.id)    
  })

  nav.append(link);
  nav.append(" ");
});

function changePage(page) {
  const pages = document.querySelectorAll(".pages");
  pages.forEach((p) => p.classList.add("hidden"));

  document.querySelector(`#${page}`).classList.remove("hidden");
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) =>
    addToCart(event.target.parentElement.id)
  );
});

function updateCart() {
  const cartHTML = document.querySelector("#cart-list");
  cartHTML.innerHTML = "";

  cart.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p;

    cartHTML.append(li);
  })
}

// METIER

function addToCart(product) {
  cart.push(product);
  console.log("Add to cart:", product);
  console.log("Cart:", cart);

  updateCart()
}

function removeFromCart(product) {
  updateCart()
}

// "MAIN"

changePage("product01");