import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import "./Contact.css"; // Import External CSS

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-page">
        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-description">Get in touch with our team</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="contact-section">
        <div className="contact-grid">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-form"
          >
            <h2>Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" required />

              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" required />

              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" required></textarea>

              <button type="submit" className="submit-button">
                <Send size={20} /> Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-details"
          >
            <h2>Contact Information</h2>

            <div className="contact-info">
              <Mail className="info-icon" />
              <div>
                <strong>Email</strong>
                <p>pataslk@info.com</p>
              </div>
            </div>

            <div className="contact-info">
              <Phone className="info-icon" />
              <div>
                <strong>Phone</strong>
                <p>+94 76 300 1274</p>
              </div>
            </div>

            <div className="contact-info">
              <MapPin className="info-icon" />
              <div>
                <strong>Office Location</strong>
                <p>435 Galle Rd, Colombo 00300</p>
              </div>
            </div>

            {/* Google Map */}
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d126749.56021394869!2d79.77122255848509!3d6.899721933167888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ae259005994ae6f%3A0x79d8b73865f8778d!2s435%20Galle%20Rd%2C%20Colombo%2000300!3m2!1d6.899729!2d79.8536245!5e0!3m2!1sen!2slk!4v1740280220140!5m2!1sen!2slk"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
