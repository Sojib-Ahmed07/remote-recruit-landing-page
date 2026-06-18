RemoteRecruit – Interview Dashboard
A modern, highly responsive remote recruitment landing page and dashboard application built using React 19, Vite, and Tailwind CSS.

Tech Stack
Framework: React 19

Build Tool: Vite 8

Styling: Tailwind CSS v3 & Autoprefixer

Icons: Lucide React



Getting Started:
Follow these steps to set up and run the project locally.

1. Clone the repository & Install Dependencies
Bash
npm install
2. Install PostCSS Dependencies (Required for Tailwind v3)
Bash
npm install -D autoprefixer postcss
3. Run the Development Server
Bash
npm run dev
Open http://localhost:5173 in your browser to view the application.

4. Build for Production
Bash
npm run build


Configuration Files:

postcss.config.js
JavaScript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

tailwind.config.js
JavaScript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


Project Structure
Plaintext
├── src/
│   ├── components/      # Self-contained layout modules
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   └── ...
│   ├── App.jsx          # Main application layout entry point
│   ├── index.css        # Tailwind directives and base global styles
│   └── main.jsx         # React application DOM mounting script
├── postcss.config.js    # PostCSS preprocessor configuration
├── tailwind.config.js   # Tailwind custom theme configuration settings
└── package.json         # Project manifests and build dependencies
