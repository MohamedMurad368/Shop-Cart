import React from 'react';
import { Link } from 'react-router-dom';
import './Css/Cart.css';

const Cart = ({ cart, setCart }) => {
  const updateQuantity = (index, amount) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += amount;
    if (updatedCart[index].quantity < 1) {
      updatedCart.splice(index, 1);
    }
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
    return total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  return (
    <div className="cart-container">
      <div className="cart">
        <h2>Cart</h2>
        <p>Total Quantity of Products: {cart.reduce((total, item) => total + item.quantity, 0)}</p>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <div className="images">
                      {item.image && <img src={item.image} alt={item.title} />}
                    </div>
                    <div className="item-details">
                      <h3>{item.title}</h3>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ${item.price}</p>
                      <div className="item-buttons">
                        <button onClick={() => updateQuantity(index, 1)}>+</button>
                        <button onClick={() => updateQuantity(index, -1)}>-</button>
                        <button onClick={() => setCart(cart.filter((_, i) => i !== index))}>Remove</button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <p className="total">Total: {calculateTotal()}</p>
          </>
        )}
        <Link to="/products">
          <button className="btn-btn">Back to Products</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
