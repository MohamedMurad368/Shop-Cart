import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Css/Products.css';

const Men = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(fetchedProducts => {
        // Filter products based on category "men's clothing"
        const menProducts = fetchedProducts.filter(product => product.category === "men's clothing");
        setProducts(menProducts);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="product-card-container"style={{ paddingTop: '100px' }}>
      {products.map(product => (
        <div key={product.id} className="product-card">
          <div className="product-image-container">
            <img src={product.image} alt={product.title} className="product-image" />
          </div>
          <h2 className="product-title">{product.title.split(' ').slice(0, 4).join(' ') + '...'}</h2>
          <p className="product-price ">{product.price}$</p>
          <Link to={`/ProductPage/${product.id}`} className='btn btn-danger'> Add to Cart</Link>
        </div>
      ))}
    </div>
  );
};

export default Men;
