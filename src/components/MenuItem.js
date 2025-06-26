import React from 'react';
import './MenuItem.css';

const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      <div className="item-image">
        <span className="item-emoji">{item.image}</span>
      </div>
      <div className="item-content">
        <div className="item-header">
          <h3 className="item-name">{item.name}</h3>
          <span className="item-price">${item.price.toFixed(2)}</span>
        </div>
        <p className="item-description">{item.description}</p>
        <button className="order-btn">Add to Order</button>
      </div>
    </div>
  );
};

export default MenuItem; 