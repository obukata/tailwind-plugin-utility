const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addUtilities }) {
  addUtilities({
    // ✅ 1. text-yakuhan
    '.text-yakuhan': {
      'font-feature-settings': '"palt"',
    },

    // ✅ 2. text-link
    '.text-link': {
      '@apply': 'text-blue-500 underline hover:no-underline',
    },

    // ✅ 3. link-anchor
    '.link-anchor': {
      '@apply': '-mt-[calc(var(--header-height,0)+var(--header-contents-gutter,0))] pt-[calc(var(--header-height,0)+var(--header-contents-gutter,0))] pointer-events-none',
    },
  });
});
