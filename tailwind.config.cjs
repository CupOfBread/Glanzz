/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      width: {
        '11/20': '55%',
        '9/20': '45%'
      },
      height: {
        'articleImg': "28rem"
      },
      fontSize: {
        'articleTitle': ['3rem','4.2rem']
      },
      rotate: {
        '360': '360deg'
      },
      scale: {
        '115': '1.15',
        '102': '1.02'
      },
      brightness: {
        '65': '.65'
      },
      inset: {
        '2/5': '40%'
      },
      zIndex: {
        '900': '900'
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}
