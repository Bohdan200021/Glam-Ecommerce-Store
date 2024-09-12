import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ containerStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      <a href="#home" className="active-link">
        Home
      </a>
      <a href="#shop">Shop</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

export default Navbar;
