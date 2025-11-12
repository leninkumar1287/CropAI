# 🌾 CropAI Frontend - React Application

<div align="center">

![React](https://img.shields.io/badge/React-19+-blue?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-7+-purple?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4+-blue?style=flat-square&logo=tailwind-css)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat-square&logo=javascript)

**Modern React Frontend for AI-Powered Crop Recommendations**

</div>

---

## 📋 Overview

The CropAI frontend is a modern React application built with Vite that provides an intuitive interface for farmers to input their agricultural data and receive AI-powered crop recommendations. The application features a comprehensive form system, real-time validation, and responsive design optimized for both desktop and mobile devices.

## ✨ Features

- **📝 Comprehensive Farmer Profiling**: Detailed forms for soil data, land details, crop history, and farmer information
- **🎯 Sample Data Integration**: Pre-loaded farmer profiles for quick testing and demonstrations
- **🤖 AI Provider Selection**: Choose between OpenAI GPT-4 and Together AI Mistral-7B
- **📊 Real-time Results**: Instant display of crop recommendations with detailed analysis
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🎨 Modern UI**: Beautiful interface with TailwindCSS and custom animations
- **🔄 Alternative Crops**: Multiple crop options with comparative analysis
- **💰 Profit Calculations**: Detailed profit projections and resource requirements

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ and npm
- **Backend API** running (see main README)

### Installation

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   - Open http://localhost:5173 in your browser

### Build for Production

```bash
# Build the application
npm run build

# Preview production build
npm run preview
```

---

## 🏗️ Project Structure

```
frontend/
├── public/
│   └── kada_logo.png          # KADA organization logo
├── src/
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # React application entry point
│   ├── index.css             # Global styles and Tailwind imports
│   ├── i18n.ts               # Internationalization configuration
│   └── assets/               # Static assets
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # TailwindCSS configuration
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite build configuration
└── eslint.config.js          # ESLint configuration
```

---

## 🎨 UI Components

### Main Application Flow

1. **Hero Section**: Introduction and feature overview
2. **Sample Data Selection**: Quick population with test farmer profiles
3. **Comprehensive Form**: Multi-section data collection
4. **AI Processing**: Real-time recommendation generation
5. **Results Display**: Detailed crop recommendations and alternatives

### Key Components

- **Farmer Profile Form**: Multi-step form with validation
- **Recommendation Display**: Visual presentation of AI results
- **Alternative Crops**: Comparative analysis of options
- **Resource Calculator**: Profit and resource projections

---

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:5000/api

# Feature Flags
VITE_ENABLE_DEBUG=true
VITE_DEFAULT_AI_PROVIDER=together
```

### TailwindCSS Customization

The application uses custom TailwindCSS configuration for the KADA theme:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        kada: {
          primary: '#1e40af',
          secondary: '#3b82f6',
          green: '#10b981',
          blue: '#3b82f6',
          orange: '#f59e0b',
          purple: '#8b5cf6',
          red: '#ef4444',
          gray: '#6b7280',
          light: '#f8fafc'
        }
      }
    }
  }
}
```

---

## 🌐 Internationalization

The application supports multiple languages using react-i18next:

- **English** (default)
- **Hindi** (planned)
- **Telugu** (planned)

Language files are located in `src/locales/`.

---

## 📱 Responsive Design

The application is fully responsive with breakpoints for:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Key responsive features:
- Collapsible navigation
- Adaptive form layouts
- Mobile-optimized recommendation cards
- Touch-friendly interactions

---

## 🧪 Testing

### Sample Farmer Data

The application includes pre-configured test profiles:

1. **Kuppam Mandal Farmer** - Rice cultivation
2. **Gudupalle Mandal Farmer** - Rice with clay soil
3. **Ramakuppam Mandal Farmer** - Cotton cultivation
4. **Shanthipuram Mandal Farmer** - Maize farming

### Manual Testing

1. Load sample data using the buttons
2. Modify form fields to test validation
3. Test different AI providers
4. Verify responsive behavior on different screen sizes

---

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Code Quality

The project uses:
- **ESLint** for code linting
- **JavaScript ES6+** with JSX syntax
- **Prettier** for code formatting (via editor)

### Development Guidelines

1. **Component Structure**: Use functional components with hooks
2. **State Management**: React useState/useEffect for local state
3. **Styling**: TailwindCSS with custom utilities
4. **JavaScript**: Modern ES6+ syntax with proper prop validation
5. **Performance**: Optimize re-renders and bundle size

---

## 🚀 Deployment

### Build Process

```bash
# Build the application
npm run build

# The build artifacts will be stored in the `dist/` directory
```

### Deployment Options

1. **Static Hosting**: Deploy `dist/` to Netlify, Vercel, or GitHub Pages
2. **Docker**: Use the provided Dockerfile
3. **CDN**: Serve static assets from a CDN

### Environment Configuration

For production deployment, set:

```env
VITE_API_BASE_URL=https://your-api-domain.com/api
VITE_ENABLE_DEBUG=false
```

---

## 🤝 Contributing

1. Follow the existing code style
2. Use modern JavaScript ES6+ syntax
3. Test responsive behavior
4. Update documentation for new features

---

## 📄 License

This project is part of the CropAI system and follows the same license terms.

---

## 🆘 Troubleshooting

### Common Issues

**API Connection Failed**
- Ensure backend is running on port 5000
- Check CORS configuration
- Verify API_BASE_URL environment variable

**Form Validation Errors**
- Check required fields are filled
- Verify data types match expectations
- Review validation rules in components

**Build Errors**
- Clear node_modules and reinstall
- Check TypeScript configuration
- Verify all dependencies are installed

---

*For more information, see the main [CropAI README](../README.md)*
