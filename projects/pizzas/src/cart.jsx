import React from 'react';

function Cart({ cart, onRemoveFromCart }) {
  return (
    <div id="cart">
      <h1>Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item} 
            <button onClick={() => onRemoveFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
