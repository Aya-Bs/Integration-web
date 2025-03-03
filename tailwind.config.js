/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "./src/**/*.{html,js}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      width: {
        button: "348px",
      },
      height: {
        button: "85px",
      },
      colors: {
        // Définir les couleurs personnalisées ici
        'navy': "#001f3f", // Couleur navy
        'navy-light': "#003366", // Couleur navy-light
        cream: "#FFFDEB", // Couleur cream
        pink: "#E493B3", // Couleur pink
        accent: "#D70654", // Couleur accent
        "yellow-star": "#FFCC00", // Couleur yellow-star
        "gray-light": "#E8EAED", // Couleur gray-light
        
        pink: {
          100: "#ffebee",
          200: "#ffcdd2",
          300: "#f8bbd0",
          400: "#f48fb1",
          500: "#f06292",
          600: "#e91e63",
        },
        navy: {
          700: "#3f4e75",
          800: "#2c3e50",
          900: "#1a2639",
        },
        primary: "#464B8A",
        "primary-dark": "#2d3158",
        secondary: "#FF1493",
        accent: "#FFE8E8",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        inknut: ['"Inknut Antiqua"', "serif"],
        sans: ["Inria Sans", "sans-serif"],
        inria: ["Inria Sans", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};