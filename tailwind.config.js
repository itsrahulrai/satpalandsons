// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors based on the provided image (Belden-like design)
        'belden-main-blue-gray': '#5F7C99', // Main navbar background (from image_dfbe45.png)
        'belden-orange-cta': '#D45D2E',    // Request Quote button color (from image_dfbe45.png)
        'belden-search-bg': '#E0E0E0',     // Search input background color (from image_dfbe45.png)
        'belden-search-text': '#4A4A4A',   // Placeholder/text color for search (from image_dfbe45.png)
        'belden-hover-text': '#F0F0F0',    // A lighter white for hover states if desired

        // Consolidated GISCO colors - keeping the second set you provided
        'gisco-blue-dark': '#011F4B',
        'gisco-red': '#dc3545',          // Unified 'gisco-red'
        'gisco-green': '#28a745',
        'gisco-yellow': '#ffc107',       // Unified 'gisco-yellow'
        'gisco-gray-light': '#f8f9fa',
        'gisco-gray-medium': '#e9ecef',
        'gisco-text-dark': '#343a40',    // Unified 'gisco-text-dark'
        'gisco-text-light': '#6c757d',

        // NEW COLORS FROM THE LATEST DESIGN SNIPPET
        'category-hover-start': '#EF2853', // Deep pinkish-red
        'category-hover-mid': '#F98EA3',   // Mid-range pink
        'category-hover-end': '#FFB6C1',   // Light pink
        'category-arrow-bg-default': '#EF2853', // Default background for arrow circle
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;