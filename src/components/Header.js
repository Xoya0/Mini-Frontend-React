import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="restaurant-info">
          <h1 className="restaurant-name">🍽️ Bella Vista</h1>
          <p className="restaurant-tagline">Fine Italian Dining & Mediterranean Cuisine</p>
        </div>
        <div className="header-details">
          <div className="contact-info">
            <p>📞 (555) 123-4567</p>
            <p>📍 123 Main Street, Downtown</p>
          </div>
          <div className="hours">
            <p>🕒 Open Daily: 11:00 AM - 10:00 PM</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 