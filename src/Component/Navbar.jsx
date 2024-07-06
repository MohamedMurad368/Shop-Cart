import React, { useState, useEffect } from 'react';
import './Css/Navbar.css';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../Assets/f3404b1c3ee2878ebfd3d4c8b7acc510.jpg';

const Navbar = ({ cart }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='NavBar'>
      <div className='Nav'>  
        <div><img src={Logo} alt="" className='image'/></div>
        <p onClick={toggleMenu} style={{ display: windowWidth < 900 ? 'block' : 'none' }}><i class="fa-solid fa-bars-staggered"></i></p>
        <ul style={{ display: showMenu || windowWidth >= 900 ? 'flex' : 'none' }}>
          <li><NavLink to="/" exact="true" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link">About</NavLink></li>
          <li><NavLink to="/men" className="nav-link">Men's Clothes</NavLink></li>
          <li><NavLink to="/women" className="nav-link">Women's Clothes</NavLink></li>
          <li>
            <Link to="/cart" className="cart-link">
              <i className="fa-solid fa-cart-shopping">{calculateTotalQuantity()}</i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
