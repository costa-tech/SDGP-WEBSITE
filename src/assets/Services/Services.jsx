import React from "react";
import { motion } from "framer-motion";
import {Wrench,Zap,GraduationCap, HardHat,Briefcase,Clock,CalendarCheck,} from "lucide-react";
import "./Services.css"; // External CSS

export default function Services() {
  const services = [
    {
      icon: Wrench,
      name: "Plumbing",
      description: "Expert plumbing services on demand"
    },
    {
      icon: Zap,
      name: "Electrical",
      description: "Professional electrical work and repairs"
    },
    {
      icon: GraduationCap,
      name: "Tutoring",
      description: "Qualified tutors for all subjects"
    },
    {
      icon: HardHat,
      name: "Construction",
      description: "Skilled masons and construction experts"
    }
  ];

  return (
    <div className="s-container">
      {/* Hero Section */}
      <section className="s-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="s-content"
        >
          <h1>Our Services</h1>
          <p>Professional Services at Your Fingertips</p>
        </motion.div>
      </section>

      {/* Fixed Services Grid */}
      <section className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <service.icon className="service-icon" />
            <h3 className="service-title">{service.name}</h3>
            <p className="service-description">{service.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Service Categories */}
      <section className="service-section">
        <h1>How It Works</h1>
        <div className="service-category">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="category-card"
            
          >
            
            <Briefcase className="category-icon" />
            <h3>Contract Basis</h3>
            <p>Long-term service agreements tailored to your requirements.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="category-card"
          >
            <Clock className="category-icon" />
            <h3>Part-Time Basis</h3>
            <p>Hire professionals for specific tasks with flexible schedules.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="category-card"
          >
            <CalendarCheck className="category-icon" />
            <h3>One-Day Services</h3>
            <p>Book expert services for single-day tasks at your convenience.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
