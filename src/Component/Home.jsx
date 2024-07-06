// Home.js

import React from 'react';
import Slider from './Slider'; 
import Products from './Products';

const Home = () => {
  return (
    <div className='Home' style={{ paddingTop: '100px' }}> {/* Adjust the value as needed */}
      <Slider/>
      <h1 className='text-center p-5'>Product</h1>
      <Products/>
    </div>
  );
};

export default Home;
