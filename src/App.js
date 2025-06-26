import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const menuData = {
    appetizers: [
      {
        id: 1,
        name: "Bruschetta",
        description: "Toasted bread topped with tomatoes, garlic, and fresh basil",
        price: 8.99,
        image: "🍅"
      },
      {
        id: 2,
        name: "Spinach Artichoke Dip",
        description: "Creamy dip with spinach, artichokes, and melted cheese",
        price: 10.99,
        image: "🥬"
      },
      {
        id: 3,
        name: "Garlic Bread",
        description: "Fresh baked bread with garlic butter and herbs",
        price: 6.99,
        image: "🍞"
      }
    ],
    mainCourses: [
      {
        id: 4,
        name: "Grilled Salmon",
        description: "Fresh Atlantic salmon with lemon herb butter and seasonal vegetables",
        price: 24.99,
        image: "🐟"
      },
      {
        id: 5,
        name: "Beef Tenderloin",
        description: "8oz tenderloin with red wine reduction and garlic mashed potatoes",
        price: 32.99,
        image: "🥩"
      },
      {
        id: 6,
        name: "Chicken Marsala",
        description: "Pan-seared chicken in marsala wine sauce with mushrooms",
        price: 18.99,
        image: "🍗"
      },
      {
        id: 7,
        name: "Vegetarian Pasta",
        description: "Fresh fettuccine with seasonal vegetables and creamy alfredo sauce",
        price: 16.99,
        image: "🍝"
      }
    ],
    desserts: [
      {
        id: 8,
        name: "Tiramisu",
        description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
        price: 9.99,
        image: "☕"
      },
      {
        id: 9,
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with molten center, served with vanilla ice cream",
        price: 11.99,
        image: "🍫"
      },
      {
        id: 10,
        name: "New York Cheesecake",
        description: "Creamy cheesecake with berry compote",
        price: 8.99,
        image: "🧀"
      }
    ],
    beverages: [
      {
        id: 11,
        name: "Fresh Lemonade",
        description: "Homemade lemonade with fresh squeezed lemons",
        price: 4.99,
        image: "🍋"
      },
      {
        id: 12,
        name: "Iced Tea",
        description: "Brewed black tea served over ice with lemon",
        price: 3.99,
        image: "🫖"
      },
      {
        id: 13,
        name: "Espresso",
        description: "Single shot of premium Italian espresso",
        price: 3.50,
        image: "☕"
      }
    ]
  };

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mainCourses', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ];

  const getFilteredItems = () => {
    let items = [];
    
    if (activeCategory === 'all') {
      items = Object.values(menuData).flat();
    } else {
      items = menuData[activeCategory] || [];
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower)
      );
    }

    return items;
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setSearchTerm(''); // Clear search when changing categories
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="search-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="🔍 Search menu items..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
            {searchTerm && (
              <button 
                className="clear-search"
                onClick={() => setSearchTerm('')}
              >
                ✕
              </button>
            )}
          </div>
        </div>
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        <MenuSection items={getFilteredItems()} searchTerm={searchTerm} />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
