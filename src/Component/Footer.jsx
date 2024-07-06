import React from 'react';
import './Css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" style={{ paddingBottom: '50px' }}>
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Information</h3>
          <address>
            <p>Address: 123 Shop Street, City, Country</p>
            <p>Email: <a href="mailto:example@example.com">example@example.com</a></p>
            <p>Phone: <a href="tel:+">+</a></p>
          </address>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024  MMM. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;