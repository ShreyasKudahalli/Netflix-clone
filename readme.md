# Netflix Clone

A modern Netflix-inspired streaming application built with React, Vite, and Tailwind CSS. This project demonstrates a responsive UI with multiple pages, routing, and a sleek dark-themed interface.

## 🎬 Features

- **Responsive Design**: Fully responsive interface that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Dark-themed Netflix-style interface built with Tailwind CSS
- **Routing**: Multi-page navigation using React Router
- **Home Page**: Displays trending content and reasons to subscribe
- **Signup Page**: User registration interface
- **Navigation Bar**: Persistent navbar component for easy navigation
- **Toast Notifications**: User feedback notifications with React Hot Toast
- **Development Tools**: ESLint for code quality assurance

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.7
- **Build Tool**: Vite 8.1.1
- **Styling**: Tailwind CSS 4.3.2
- **Routing**: React Router DOM 7.18.1
- **Notifications**: React Hot Toast 2.6.0
- **Dev Tools**: ESLint 10.6.0, Vite React Plugin 6.0.3

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. Navigate to the project directory:
```bash
cd netflix-clone
```

2. Install dependencies:
```bash
npm install
```

### Development

To start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port specified by Vite).

### Build for Production

To build the project for production:
```bash
npm run build
```

The optimized files will be generated in the `dist` directory.

### Preview Production Build

To preview the production build locally:
```bash
npm run preview
```

### Linting

To check code quality:
```bash
npm run lint
```

## 📁 Project Structure

```
netflix-clone/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation component
│   │   ├── Reasons.jsx      # Subscription reasons display
│   │   └── Trends.jsx       # Trending content display
│   ├── pages/
│   │   ├── Home.jsx         # Home page with trending content
│   │   └── Signup.jsx       # User registration page
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Entry point
│   ├── index.css            # Global styles
│   └── assets/              # Static assets
├── public/                  # Public static files
├── package.json             # Project dependencies
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML entry point
└── vercel.json              # Vercel deployment configuration
```

## 🎨 Components

### Navbar
Navigation component displayed across pages for site-wide navigation and branding.

### Home Page
Displays trending content and key reasons to subscribe, featuring the `Trends` and `Reasons` components.

### Signup Page
Registration page for new users to create accounts.

### Trends Component
Showcases trending movies/shows available on the platform.

### Reasons Component
Highlights key features and benefits of the service.

## 📝 Configuration Files

- **vite.config.js**: Vite build configuration with React plugin
- **eslint.config.js**: ESLint rules for code quality
- **tailwind.config.js**: Tailwind CSS customization
- **vercel.json**: Deployment configuration for Vercel

## 🌐 Deployment

This project is configured for easy deployment to Vercel:

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Vercel will automatically detect the Vite configuration and deploy

Alternatively, you can deploy to other platforms like:
- Netlify
- GitHub Pages
- AWS Amplify

## 🔄 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint for code quality |

## 📦 Dependencies Overview

- **react**: UI library for building components
- **react-dom**: React DOM rendering
- **react-router-dom**: Client-side routing
- **tailwindcss**: Utility-first CSS framework
- **react-hot-toast**: Toast notifications
- **vite**: Next generation frontend tooling

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port.

### Clear Cache
If you encounter issues, try clearing the cache:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for any improvements.

## ✨ Future Enhancements

- Add movie/show database integration
- User authentication system
- Watchlist functionality
- Search and filter capabilities
- User profile management
- Payment integration
- Video player with streaming capability

---

**Enjoy building! 🎉**