import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Nav_Bar.css';

const Nav_Bar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    // Function to check if the link is active
    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <Link to="/" className="navbar-brand">
                <img 
                    src="/logo.png" 
                    alt="Patas.lk Logo" 
                    className="navbar-logo" 
                />
                <span>Patas.lk</span>
            </Link>
            
            <button 
                className="mobile-menu-button" 
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
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
