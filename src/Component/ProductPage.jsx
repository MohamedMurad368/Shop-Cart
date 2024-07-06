import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Css/ProductPage.css';

const ProductPage = ({ addProductToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate(); // Import useNavigate hook from 'react-router-dom'

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addProductToCart(product);
    navigate('/cart'); // Use navigate function to redirect to the cart page
  };

  return (
    <div className="product-page" style={{ paddingTop: '100px' }}>
      <div className="product-page__image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-page__details">
        <h2 className="product-page__title">{product.title}</h2>
        <p className="product-page__description">{product.description}</p>
        <p className="product-page__price">${product.price}</p>
        <button className="product-page__add-to-cart" onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
