// tailwind.config.ts
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme"; 

const config: Config = {
content: [
  "./app/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./components/shared/**/*.{ts,tsx}",
  "./styles/**/*.{ts,tsx,css}"
],
  theme: {
    extend: {
    colors: {
        zelena: "#083626",
        svetlozelena: "#63A60B",
        beige: "#F5F2ED",
        offwhite: "#FDFCF9",
    
  // Dodaj i ostale koje koristiš
    },
    },

      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans], 
      },
    },

  plugins: [],
};

export default config;