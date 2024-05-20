

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(5); 
  const [sort, setSort] = useState('');
  const [order, setOrder] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=${limit}&sort=${sort}&order=${order}&category=${category}`
        );
        setProducts(response.data.data);
        setLoading(false);
        setHasNextPage(response.data.totalPages > page);
        setHasPrevPage(page > 1);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, limit, sort, order, category]);

  const handleSortChange = (e) => setSort(e.target.value);
  const handleOrderChange = (e) => setOrder(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  return (
    <div className="container">
      <h1>Product Listing</h1>
      <div className="filters">
        <select onChange={handleSortChange}>
          <option value="">Sort By</option>
          <option value="price">Price</option>
          <option value="title">Title</option>
        </select>
        <select onChange={handleOrderChange}>
          <option value="">Order</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <select onChange={handleCategoryChange}>
          <option value="">Filter by Category</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
          <option value="homedecor">Home Decor</option>
        </select>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ProductList products={products} addToCart={addToCart} />
      )}
      <div className="pagination">
        <button onClick={() => setPage(page > 1 ? page - 1 : 1)} >
          Previous
        </button>
        <button onClick={() => setPage( page + 1 )} >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;


