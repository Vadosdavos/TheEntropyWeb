import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "main-bg": "var(--main-bg)",
      },
      animation: {
        "spin-reverse": "spin-reverse 150s linear infinite",
        "spin-slow": "spin 150s linear infinite",
        "fade-in": "fade-in 0.7s linear",
      },
      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        rotate: {
          "100%": { transform: "rotate(360deg)" },
        },
        prixClipFix: {
          "0%": { clipPath: "polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)" },
          "25%": { clipPath: "polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)" },
          "50% ": { clipPath: "polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)" },
          "75%": { clipPath: "polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)" },
          "100%": { clipPath: "polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)" },
        },
      },

    },
  },
  plugins: [],
};
export default config;
