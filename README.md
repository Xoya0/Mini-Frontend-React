# 🍽️ Bella Vista Restaurant Menu

A modern, responsive restaurant menu website built with React. Features a beautiful UI with search functionality, category filtering, and smooth animations.

![Bella Vista Restaurant Menu](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)

## ✨ Features

### 🎨 **Modern Design**
- **Glass Morphism**: Beautiful backdrop blur effects
- **Gradient Animations**: Dynamic color transitions
- **Smooth Animations**: Fade-in, slide-up, and stagger effects
- **Responsive Layout**: Perfect on desktop, tablet, and mobile
- **Custom Scrollbar**: Styled with gradient colors

### 🔍 **Interactive Features**
- **Real-time Search**: Search menu items by name or description
- **Category Filtering**: Filter by appetizers, main courses, desserts, and beverages
- **Smart Filtering**: Search works with category filters
- **Back to Top**: Smooth scroll navigation

### 📱 **User Experience**
- **Hover Effects**: Cards lift and scale on interaction
- **Button Animations**: Shimmer effects and smooth transitions
- **Price Animations**: Glowing price effects
- **Loading States**: Better empty state messages
- **Accessibility**: Keyboard navigation and focus states

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd restaurant-menu
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📁 Project Structure

```
restaurant-menu/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.js          # Restaurant header with contact info
│   │   ├── Header.css         # Header styling
│   │   ├── MenuSection.js     # Menu grid container
│   │   ├── MenuSection.css    # Menu section styling
│   │   ├── MenuItem.js        # Individual menu item card
│   │   ├── MenuItem.css       # Menu item styling
│   │   ├── Footer.js          # Footer with restaurant info
│   │   ├── Footer.css         # Footer styling
│   │   ├── BackToTop.js       # Back to top button
│   │   └── BackToTop.css      # Back to top styling
│   ├── App.js                 # Main application component
│   ├── App.css                # Main app styling
│   ├── index.js               # Application entry point
│   └── index.css              # Global styles
├── package.json
└── README.md
```

## 🍽️ Menu Categories

### Appetizers
- **Bruschetta** - Toasted bread with tomatoes, garlic, and basil ($8.99)
- **Spinach Artichoke Dip** - Creamy dip with spinach and artichokes ($10.99)
- **Garlic Bread** - Fresh baked bread with garlic butter ($6.99)

### Main Courses
- **Grilled Salmon** - Atlantic salmon with lemon herb butter ($24.99)
- **Beef Tenderloin** - 8oz tenderloin with red wine reduction ($32.99)
- **Chicken Marsala** - Pan-seared chicken in marsala sauce ($18.99)
- **Vegetarian Pasta** - Fettuccine with seasonal vegetables ($16.99)

### Desserts
- **Tiramisu** - Classic Italian dessert ($9.99)
- **Chocolate Lava Cake** - Warm chocolate cake with ice cream ($11.99)
- **New York Cheesecake** - Creamy cheesecake with berry compote ($8.99)

### Beverages
- **Fresh Lemonade** - Homemade lemonade ($4.99)
- **Iced Tea** - Brewed black tea with lemon ($3.99)
- **Espresso** - Premium Italian espresso ($3.50)

## 🎨 Customization

### Adding New Menu Items

1. Open `src/App.js`
2. Find the `menuData` object
3. Add new items to the appropriate category:

```javascript
const menuData = {
  appetizers: [
    // ... existing items
    {
      id: 14,
      name: "New Appetizer",
      description: "Description of the new item",
      price: 12.99,
      image: "🍽️"
    }
  ],
  // ... other categories
};
```

### Changing Restaurant Information

1. **Header Information**: Edit `src/components/Header.js`
2. **Footer Information**: Edit `src/components/Footer.js`
3. **Restaurant Name**: Update in both header and footer components

### Styling Customization

- **Colors**: Update CSS custom properties in component files
- **Fonts**: Modify font-family in `src/index.css`
- **Animations**: Adjust timing in CSS animation properties

## 🛠️ Technologies Used

- **React 18.2.0** - Frontend framework
- **Create React App** - Build tool and development environment
- **CSS3** - Styling with modern features (Grid, Flexbox, Animations)
- **JavaScript ES6+** - Modern JavaScript features

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request


## 👨‍💻 Author

**Dibyanshu Mohanty**
- Email: dibyanshumohanty4@gmail.com

## 🙏 Acknowledgments

- Icons provided by emoji characters
- Design inspiration from modern restaurant websites
- React community for excellent documentation

---

**Made with ❤️ and ☕**

*For questions or support, please open an issue on GitHub.*
