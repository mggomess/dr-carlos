import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        brand: {
          deep: "#07203A", // azul profundo (fundo institucional)
          teal: "#0D4B6B", // azul petróleo (seções, cards)
          blue: "#2B7FFF", // azul elétrico (CTAs, destaques)
          mist: "#F5F7FA", // fundo claro
          gold: "#C9A24B", // dourado discreto
        },
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backdropBlur: { xs: "2px" },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(7, 32, 58, 0.35)",
        glass: "0 8px 32px rgba(7, 32, 58, 0.12)",
      },
      borderRadius: {
        xl2: "1.75rem",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
