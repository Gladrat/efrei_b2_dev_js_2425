let cart = [];

const buttonAdd = document.querySelector("button.add");
if (buttonAdd) {
  buttonAdd.addEventListener("click", () => {
    console.log(`Add to cart: ${buttonAdd.id}`);
    cart.push(buttonAdd.id)
    console.log("Cart state:", cart);
  })
}

const buttonShow = document.querySelector("button.show-cart");
if (buttonShow) {
  buttonShow.addEventListener("click", () => {
    console.log("Cart state:", cart);    
  })
}