/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Urban Jungle - Tons Terrosos e Naturais
        urban: {
          sand: '#F3F0E7',      // Fundo "Areia" claro (Light Beige)
          clay: '#E0D8C8',      // Tom de argila para contrastes sutis
          moss: '#2C4A34',      // Verde Musgo Profundo (Primary)
          leaf: '#4A6B52',      // Verde Folha (Secondary/Hover)
          bark: '#3D342B',      // Marrom escuro para textos (substituto do preto)
        }
      },
      fontFamily: {
        // Vamos usar fontes que remetem à elegância (serifada) e modernidade (sans)
        serif: ['var(--font-merriweather)', 'serif'],
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/hero-bg-texture.png')", // Opcional para textura futura
      },
    },
  },
  plugins: [],
};
