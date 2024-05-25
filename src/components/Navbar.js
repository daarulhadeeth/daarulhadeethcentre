import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/information">Information</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/classes">Classes</Link>
        <Link to="/examinations">Examinations</Link>
        <Link to="/contact">Contact</Link>
      </ul>
      <span className="hamburger" />
      <div className="toggler" />
    </nav>
  );
}

export default Navbar;
