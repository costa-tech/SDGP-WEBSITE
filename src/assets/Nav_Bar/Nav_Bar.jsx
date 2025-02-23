import React from 'react';
import { Link } from "react-router-dom";
import './Nav_Bar.css';

const Nav_Bar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src="/logo.png" alt="Patas.lk Logo" className="navbar-logo" />
                <span>Patas.lk</span>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </nav>
    );
};

export default Nav_Bar;
