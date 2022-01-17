const config = {
  mode: "jit",
  safelist: [
    { pattern: /opacity-\d{2}/ },
  ],
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
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
    },
  },

  plugins: [],
};

module.exports = config;
