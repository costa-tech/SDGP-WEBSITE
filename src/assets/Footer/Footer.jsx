import React from 'react';
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css'; // Importing external CSS

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-section">
          <h3 className="footer-title">Patas.lk</h3>
          <p> Your One-Stop Platform for Trusted Service Providers in Sri Lanka!</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-title">Contact Info</h3>
          <p><Mail size={16} /> pataslk@info.com</p>
          <p><Phone size={16} /> +94 763 001 274</p>
          <p><MapPin size={16} /> 435 Galle Rd, Colombo 00300</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/people/Pataslk/61571005040874/"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="https://www.instagram.com/patas.lk/?igsh=MWtndnJld2pyNXY4ZQ%3D%3D#"><Instagram size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Patas.lk. All rights reserved.</p>
      </div>
    </footer>
  );
}
