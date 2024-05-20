import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} style={{ width: '100%' }} />
      <h3>{product.title}</h3>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price} Rs/-</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
