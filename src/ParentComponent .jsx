// ParentComponent.js
import React, { useState } from 'react';
import Cart from './Cart';
import Head from './Head';

const ParentComponent = () => {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Head cart={cart} />
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
};

export default ParentComponent;
