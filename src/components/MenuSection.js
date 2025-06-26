import React from 'react';
import MenuItem from './MenuItem';
import './MenuSection.css';

const MenuSection = ({ items, searchTerm }) => {
  return (
    <section className="menu-section">
      <div className="menu-container">
        {items.length === 0 ? (
          <div className="no-items">
            {searchTerm ? (
              <>
                <h2>No items found for "{searchTerm}"</h2>
                <p>Try searching for something else or browse our categories above.</p>
              </>
            ) : (
              <>
                <h2>No items found in this category</h2>
                <p>Please select a different category to view our delicious menu items.</p>
              </>
            )}
          </div>
        ) : (
          <div className="menu-grid">
            {items.map(item => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection; 