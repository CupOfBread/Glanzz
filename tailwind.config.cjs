/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      width: {
        '11/20': '55%',
        '9/20': '45%'
      },
      rotate: {
        '360': '360deg'
      },
      scale:{
        '115': '1.15',
        '102': '1.02'
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}
