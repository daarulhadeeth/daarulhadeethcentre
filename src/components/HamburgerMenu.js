import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="logo">
        <img src="/logo.jpg" alt="Website Logo" />
      </div>
      <nav>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/information" onClick={closeMenu}>Information</Link></li>
          <li><Link to="/registration" onClick={closeMenu}>Registration</Link></li>
          <li><Link to="/classes" onClick={closeMenu}>Classes</Link></li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`} />
          <div className={`bar ${isOpen ? 'open' : ''}`} />
          <div className={`bar ${isOpen ? 'open' : ''}`} />
        </div>
      </nav>
    </>

  );
};

export default HamburgerMenu;
