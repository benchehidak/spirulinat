/** @type {import('tailwindcss').Config} */
const { tailwindConfig } = require('@storefront-ui/react/tailwind-config');
module.exports = {
  presets: [tailwindConfig],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/@storefront-ui/react/**/*.{js,mjs}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
