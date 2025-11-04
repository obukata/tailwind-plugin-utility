const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addUtilities, theme }) {

  addUtilities({
    // ✅ 1. text-yakuhan
    '.text-yakuhan': {
      'font-feature-settings': '"palt"',
    },

    // ✅ 2. text-link
    '.text-link': {
      color: theme('colors.blue.500'),
      'text-decoration-line': 'underline',
      '&:hover': {
        'text-decoration-line': 'none',
      },
    },

    // ✅ 3. link-anchor
    '.link-anchor': {
      'margin-top': 'calc(var(--header-height, 0) * -1 - var(--header-contents-gutter, 0))',
      'padding-top': 'calc(var(--header-height, 0) + var(--header-contents-gutter, 0))',
      'pointer-events': 'none',
    },

    // ✅ 4. ページの高さが画面以下でも100vhで表示出来る
    '.page-wrapper': {
      display: 'flex',
      'flex-direction': 'column',
      'min-height': '100vh',
      overflow: 'hidden',
    },
    '.main': {
      flex: '1 1 0%',
    },
  });

});