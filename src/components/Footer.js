import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>🍽️ Bella Vista</h3>
          <p>Experience the finest Italian and Mediterranean cuisine in a warm, welcoming atmosphere.</p>
        </div>
        <div className="footer-section">
          <h4>Hours</h4>
          <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
          <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>📞 (555) 123-4567</p>
          <p>📧 info@bellavista.com</p>
          <p>📍 123 Main Street, Downtown</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" className="social-link">📘 Facebook</a>
            <a href="#" className="social-link">📷 Instagram</a>
            <a href="#" className="social-link">🐦 Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Bella Vista Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 