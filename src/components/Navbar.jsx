// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="logo">Jarurat care</a>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><a href="./">Home</a></li>
        <li><a href="https://www.jarurat.care/#get-involved">Join us</a></li>
        <li><a href="https://www.jarurat.care/#about">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
