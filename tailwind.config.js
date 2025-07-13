/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'lcars-orange': '#FF9C00',
        'lcars-orange-light': '#FFB347',
        'lcars-blue': '#99CCFF',
        'lcars-blue-light': '#B3D9FF',
        'lcars-purple': '#CC99CC',
        'lcars-red': '#FF4444',
        'lcars-red-light': '#FF6666',
        'lcars-cream': '#F1DF6F',
      },
    },
  },
  plugins: [],
}
