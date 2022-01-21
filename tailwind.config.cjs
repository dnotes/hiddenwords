const config = {
  mode: "jit",
  safelist: [
    { pattern: /opacity-\d{2}/ },
  ],
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    sepia: false,
    extend: {
      backgroundImage: {
        'logo': "url('/inneressence.png')",
        'logo-dark': "url('/inneressence-dark.png')",
      },
      fontFamily: {
        normal: ['Bellefair', 'serif'],
        exhort: ['Cormorant Infant', 'serif'],
        script: ['Charm', 'cursive']
      },
      colors: {
        'primary': "var(--color-primary)",
        'secondary': "var(--color-secondary)",
        'neutral': "var(--color-neutral)",
        'background': "var(--color-background)",
        'background-alt': "var(--color-background-alt)",
        'link': "var(--color-link)",
        'link-alt': "var(--color-link-alt)",
      },
    },
  },

  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};

module.exports = config;
