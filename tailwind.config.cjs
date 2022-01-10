const config = {
  mode: "jit",
  safelist: [
    { pattern: /opacity-\d{2}/ },
  ],
  darkMode: "media",
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
      fontSize: {
        '1vw': '1vw',
        '2vw': '2vw',
        '3vw': '3vw',
        '4vw': '4vw',
        '5vw': '5vw',
        '6vw': '6vw',
        '7vw': '7vw',
      }
    },
  },

  plugins: [],
};

module.exports = config;
