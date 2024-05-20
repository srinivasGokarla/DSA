import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} style={{ width: '100px' }} />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
