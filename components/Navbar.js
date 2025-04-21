import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// ...existing code...

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Add scroll effect to navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg sticky-top ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <img src="/logo.png" alt="Logo" width="40" className="me-2" />
          <span className="fw-bold text-gradient">DiabAdvise</span>
        </Link>
        
        {/* ...existing code... */}
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link px-3 position-relative">
                Home
                <span className="nav-indicator"></span>
              </Link>
            </li>
            {/* ...existing code... */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
