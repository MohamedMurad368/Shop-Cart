import React from 'react';
import './Css/About.css'
const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="contact-info">
        <h2>Contact Information:</h2>
        <p><i className="fab fa-instagram"></i> Instagram: <a href="https://www.instagram.com/example">Instagram Profile</a></p>
        <p><i className="fa-brands fa-facebook"></i> Facebook: <a href="https://www.instagram.com/example">Instagram Profile</a></p>
        <p><i className="fa-solid fa-phone"></i> Phone: <a href="https://www.instagram.com/example">+202222222</a></p>
      </div>
      <div className="shop-location">
        <h2>Our Shop Location:</h2>
        <p>Address: 123 Shop Street, City, Country</p>
        <div className="map">
          {/* Google Maps iframe goes here */}
          <iframe
            title="Shop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2dLongitude!3dLatitude!4m5!..."
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
