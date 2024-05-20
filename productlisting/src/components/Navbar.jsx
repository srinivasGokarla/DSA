import React from 'react';

const Navbar = ({ setView }) => {
  return (
    <nav>
      <button onClick={() => setView('home')}>Home</button>
      <button onClick={() => setView('cart')}>Cart</button>
    </nav>
  );
};

export default Navbar;
