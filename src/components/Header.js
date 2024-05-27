import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.jpg'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
};
  return (
  <header className="header">
    <nav className="nav">
      <div className="nav-title">
          <img src={logo} alt="Logo" className="logo-image"/>
          SwazzZ Auto eShop 
      </div>
      <div className={`nav-list ${isOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          
          <Link to="/gallery" className="nav-link" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>
    </nav>
  </header>
  
);
};
export default Header;
