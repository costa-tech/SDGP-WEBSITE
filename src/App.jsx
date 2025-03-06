import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from './assets/About/About';
import Contact from './assets/Contact/Contact';
import Footer from './assets/Footer/Footer';
import Home from './assets/Home/Home';
import Nav_Bar from './assets/Nav_Bar/Nav_Bar';
import Services from "./assets/Services/Services";
import SplashScreen from "./assets/SplashScreen/SplashScreen";
import './assets/global-fixes.css';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade out
      setTimeout(() => setShowSplash(false), 500); // Remove after fade
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen className={fadeOut ? "fade-out" : ""} />
      ) : (
        <Router>
          <Nav_Bar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
};

export default App;
