import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Wrench, Home  } from 'lucide-react';
import './About.css'; // Import External CSS

export default function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-section">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Service Providers"
          className="about-image"
        />
        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="about-title">About Patas.lk</h1>
            <p className="about-description">
              Sri Lanka’s No.1 service provider platform connecting skilled professionals with customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section">
        <div className="story-container">
          <h2 className="section-title-1">Our Journey</h2>
          <p className="section-description">
            Established with a vision to simplify service bookings, Patas.lk bridges the gap between skilled experts and customers seeking reliable services. We offer a diverse range of professionals, from home repairs to beauty services.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-card">
            <Award className="stat-icon" />
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Successful Jobs</div>
          </div>
          <div className="stat-card">
            <Users className="stat-icon" />
            <div className="stat-number">5,000+</div>
            <div className="stat-label">Verified Experts</div>
          </div>
          <div className="stat-card">
            <Wrench className="stat-icon" />
            <div className="stat-number">10+</div>
            <div className="stat-label">Service Categories</div>
          </div>
          <div className="stat-card">
            <Home className="stat-icon" />
            <div className="stat-number">100+</div>
            <div className="stat-label">Cities Covered</div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <h2 className="section-title-2">Meet Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img
              src="D1.jpg"
              alt="Founder"
              className="team-image"
            />
            <h3 className="team-name">Dilith Rasanjana</h3>
            <p className="team-role">Founder & CEO</p>
          </div>
          <div className="team-member">
            <img
              src="D2.jpg"
              alt="Operations Manager"
              className="team-image"
            />
            <h3 className="team-name">Thiwankda Umesh</h3>
            <p className="team-role">Operations Manager</p>
          </div>
          <div className="team-member">
            <img
              src="D3.jpg"
              alt="Marketing Head"
              className="team-image"
            />
            <h3 className="team-name">Gayathra Chanith</h3>
            <p className="team-role">Marketing Head</p>
          </div>
          <div className="team-member">
            <img
              src="D4.jpg"
              alt="Operations Manager"
              className="team-image"
            />
            <h3 className="team-name">Himsara Costa</h3>
            <p className="team-role">Customer Experience Manager</p>
          </div>
          <div className="team-member">
            <img
              src="D5.jpg"
              alt="Operations Manager"
              className="team-image"
            />
            <h3 className="team-name">Thisun Senevirathne</h3>
            <p className="team-role">Technology Lead</p>
          </div>
          <div className="team-member">
            <img
              src="D6.jpg"
              alt="Operations Manager"
              className="team-image"
            />
            <h3 className="team-name">Kasun Nilaweera</h3>
            <p className="team-role">Business Strategy Manager</p>
          </div>
          
        </div>
      </section>
    </div>
  );
}
