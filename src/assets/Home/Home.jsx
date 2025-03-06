import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Briefcase, CalendarCheck, Wallet } from 'lucide-react'; 
import './Home.css'; // Import the CSS file
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="home-container">
      <div className="welcome-container">
        <div className="welcome-heading">
          <span>Welcome</span>{' '}
          <span>to</span>{' '}
          <span>Patas.lk</span>{' '}
          <span>–</span>{' '}
          <span>Your</span>{' '}
          <span>Trusted</span>{' '}
          <span>Service</span>{' '}
          <span>Provider</span>{' '}
          <span>Platform</span>
        </div>
        <div className="animated-shapes">
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>
          <div className="shape shape4"></div>
        </div>
      </div>
      {/* Hero Section */}
    <section className="home-section">
    <video autoPlay loop muted className="home-video">
    <source src="/V6.mp4" type="video/mp4" />
    Your browser does not support the video tag.
    </video>

    <div className="home-content">
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
    >
      <h1 className="home-title-1">
          Find Trusted <span className="bold-text">Service Providers</span> Instantly! </h1>
        <p className="home-description">Patas.lk – Your trusted platform to connect with skilled professionals effortlessly. 
          Whether you need a home repair expert, freelance designer, or personal trainer, we make hiring simple, secure, 
          and hassle-free. Enjoy verified professionals, transparent pricing, and seamless communication experience convenience at your fingertips!</p>
        <div className="get-started-btn-container">
        <button className="get-started-btn">Get Started</button>
      </div>
    
    </motion.div>
  </div>
  
</section>
<section className="who-we-are">
      <div className="who-we-are-container">
        <h2 className="who-title">Who We Are</h2>
        <p className="who-description">
          Welcome to <strong>Patas.lk</strong>, Sri Lanka’s leading platform connecting skilled 
          service providers with customers. Our mission is to simplify the process of finding 
          reliable professionals for your everyday needs. Whether it’s home repairs, beauty services, 
          or event planning, we provide a secure, efficient, and seamless experience for both 
          consumers and providers.
        </p>
        <div className="who-images">
          <img src="App1.png" alt="App Screen 1" className="who-image" />
          <img src="App2.png" alt="App Screen 2" className="who-image" />
          <img src="App3.png" alt="App Screen 3" className="who-image" />
          <img src="App4.png" alt="App Screen 4" className="who-image" />
        </div>
      </div>
    </section>
      
      {/* Services Preview */}
      <section className="services-section">
        <div className="services-container">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="services-grid"
          >
            <div className="service-card">
              <TrendingUp className="service-icon" /> 
              <h3 className="service-title">On-Demand Services</h3>
              <p className="service-description"><b>Find trusted professionals for home repairs, beauty, cleaning, and more.</b></p>
            </div>
            <div className="service-card">
              <Briefcase className="service-icon" />
              <h3 className="service-title">Skilled Experts</h3>
              <p className="service-description"><b>Connect with verified professionals across multiple service categories.</b></p>
            </div>
            <div className="service-card">
              <CalendarCheck className="service-icon" />
              <h3 className="service-title">Instant Bookings</h3>
              <p className="service-description"><b>Schedule services quickly and conveniently at your preferred time.</b></p>
            </div>
            <div className="service-card">
              <Wallet className="service-icon" />
              <h3 className="service-title">Affordable & Transparent Pricing</h3>
              <p className="service-description"><b>Compare rates and choose services that fit your budget with no hidden costs.</b></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="work-section">
        <div className="work-container">
          <h2 className="work-title">How Patas.lk Transforms Services</h2>
          <div className="work-grid">
            <div className="work-card">
              <img
                src="img1.jpg"
                alt="Case Study 1"
                className="work-image"
              />
              <div className="work-content">
                <h3 className="work-case-title">Hassle-Free Home Fixes</h3>
                <p className="work-case-description">Get top-rated electricians, plumbers, and handymen in minutes.</p>
              </div>
            </div>
            <div className="work-card">
              <img
                src="img2.jpg"
                alt="Case Study 2"
                className="work-image"
              />
              <div className="work-content">
                <h3 className="work-case-title">Fast & Reliable Repairs</h3>
                <p className="work-case-description">Connect with skilled workers for home maintenance and repairs.</p>
              </div>
            </div>
            <div className="work-card">
              <img
                src="img3.jpg"
                alt="Case Study 3"
                className="work-image"
              />
              <div className="work-content">
                <h3 className="work-case-title">Instant Service, Zero Worries</h3>
                <p className="work-case-description">Professionals available for urgent fixes and installations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
