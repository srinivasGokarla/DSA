import React, { useState } from 'react';
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import Cart from "./components/Cart"
import './App.css';

function App() {
  const [view, setView] = useState('home');
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  return (
    <div className="App">
      <Navbar setView={setView} />
      {view === 'home' && <Home addToCart={addToCart} />}
      {view === 'cart' && <Cart cart={cart} removeFromCart={removeFromCart} />}
    </div>
  );
}

export default App;
