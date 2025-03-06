import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onFinish, className }) => {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  
  useEffect(() => {
    // Show logo with animation
    setTimeout(() => setLogoLoaded(true), 300);
    
    // Show text with animation after logo appears
    setTimeout(() => setTextVisible(true), 800);
  }, []);

  return (
    <div className={`splash-screen ${className}`}>
      <div className="splash-content">
        <div className={`splash-logo ${logoLoaded ? 'loaded' : ''}`}>
          <img src="/logo.png" alt="Patas.lk Logo" />
        </div>
        
        <div className={`splash-text ${textVisible ? 'visible' : ''}`}>
          <h1 className="splash-title">
            <span className="splash-letter">P</span>
            <span className="splash-letter">a</span>
            <span className="splash-letter">t</span>
            <span className="splash-letter">a</span>
            <span className="splash-letter">s</span>
            <span className="splash-letter">.</span>
            <span className="splash-letter">l</span>
            <span className="splash-letter">k</span>
          </h1>
          <p className="splash-slogan">Your Trusted Service Provider</p>
        </div>
        
        <div className="splash-loading-bar">
          <div className="splash-progress"></div>
        </div>
      </div>
      
      <div className="splash-backdrop"></div>
    </div>
  );
};

export default SplashScreen;
