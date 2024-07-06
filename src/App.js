import React, { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Men from './Component/Men';
import Home from './Component/Home';
import Women from './Component/Women';
import ProductPage from './Component/ProductPage';
import Cart from './Component/Cart';
import Products from './Component/Products';
import About from './Component/About';
import Footer from './Component/Footer';

function App() {
  const [cart, setCart] = useState([]);

  const addProductToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      // If the product already exists in the cart, increase its quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 0;
      setCart(updatedCart);
    } else {
      // If the product doesn't exist in the cart, add it with quantity 1
      setCart([...cart, { ...product, quantity: 0 }]);
    }
  };

  const navigateToCart = () => {
    // Navigate to cart page
    window.location.href = '/cart';
  };

  return (
    <div>
      <Router>
        <Navbar cart={cart} /> {/* Pass cart state as a prop */}
        
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />

          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />

          <Route path="/productPage/:id" element={<ProductPage addProductToCart={addProductToCart} navigateToCart={navigateToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
