import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Nav_Bar.css';

const Nav_Bar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    // Function to check if the link is active
    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src="/logo.png" alt="Patas.lk Logo" className="navbar-logo" />
                <span>Patas.lk</span>
            </div>
            
            <button className="mobile-menu-button" onClick={toggleMenu}>
                {isMenuOpen ? '✕' : '☰'}
            </button>
            
            <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <li><Link to="/" className={isActive('/')} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                <li><Link to="/services" className={isActive('/services')} onClick={() => setIsMenuOpen(false)}>Services</Link></li>
                <li><Link to="/about" className={isActive('/about')} onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
                <li><Link to="/contact" className={isActive('/contact')} onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
            </ul>
        </nav>
    );
};

export default Nav_Bar;
