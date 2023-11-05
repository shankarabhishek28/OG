import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="mailto:example@email.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <p>&copy; 2023 Greenusys pvt ltd</p>
    </footer>
  );
};

export default Footer;
