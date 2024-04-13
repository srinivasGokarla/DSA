import React, { useState, useEffect } from 'react';

export default function Fetch() {
  const [data, setData] = useState(null);

  const getData = () =>
    fetch("https://dummyjson.com/products")
      .then((res) => res.json());

  useEffect(() => {
    getData().then((data) => {
      setData(data.products);
      console.log(data);
    });
  }, []);

  return (
    <div>
      <h1>Fetch</h1>
      {data ? (
        data.map((item) => (
          <div key={item.id}>
            <hr />
            <p>Id: {item.id}</p>
            <img src={item.images[0]}  />
            <p>original_price: {item.original_price}</p>
            <p>description: {item.description}</p>
            <p>rating: {item.rating}</p>
            <p>title: {item.title}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
