# 🍰 SweetBite Bakery Landing Page

A modern, responsive landing page for SweetBite Bakery built with React and Vite. Features a beautiful image slider, product categories, and dark mode support.

![SweetBite Bakery](https://img.shields.io/badge/React-18.3-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- 🎨 **Modern UI Design** - Clean and professional bakery-themed interface
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🖼️ **Image Slider** - Interactive hero section with multiple cake images and dot navigation
- 🌓 **Dark Mode** - Toggle between light and dark themes
- 🍪 **Product Categories** - Showcase different bakery items (cakes, bread, cookies, sandwiches)
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎯 **Smooth Animations** - CSS transitions and hover effects throughout

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd sweetbite-landing
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The optimized production files will be in the `dist` folder.

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom properties
- **JavaScript (ES6+)** - Modern JavaScript features

## 📁 Project Structure

```
sweetbite-landing/
├── src/
│   ├── assets/          # Images and static files
│   ├── Components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── ProductCategories.jsx
│   │   ├── ProductCard.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main app component
│   ├── App.css          # Global styles
│   ├── index.css        # Root styles and CSS variables
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 🎨 Components

### Hero Section
- Interactive image slider with 6 cake images
- Dot navigation for slide control
- Call-to-action buttons
- Fully responsive layout

### Navbar
- Sticky navigation with scroll effect
- Dark mode toggle
- Smooth scrolling to sections

### About Section
- Product category showcase
- Grid layout with icons
- Hover effects

### Product Categories
- Featured product display
- Image and description layout

## 🎯 Key Features Explained

### Image Slider
The hero section includes a custom-built image slider with:
- Multiple cake images
- Click-to-navigate dots
- Smooth transitions
- Responsive design

### Dark Mode
Toggle between light and dark themes with persistent storage using localStorage.

### Responsive Design
Breakpoints:
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #d78c00;
  --bg: #fff;
  --font: #333;
  --transition-speed: 0.3s;
}
```

### Images
Replace images in `src/assets/` folder with your own bakery images.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Thales**

## 🙏 Acknowledgments

- React team for the amazing library
- Vite team for the blazing-fast build tool
- All contributors and supporters

---

Made with ❤️ for SweetBite Bakery
