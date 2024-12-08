import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6F61",
        secondary: "#40E0D0",
        accent: "#FFC300",
        background: "#F7F7F7",
        text: "#333333",
        coral: {
          50: "#fff2f1",
          100: "#ffe4e1",
          200: "#ffccc7",
          300: "#ffa8a0",
          400: "#ff6f61",
          500: "#f84c3b",
          600: "#e52f1d",
          700: "#c12314",
          800: "#a02014",
          900: "#842218",
          950: "#480d07",
        },
        turqoise: {
          50: "#effefa",
          100: "#cafdf3",
          200: "#95faea",
          300: "#58f0dc",
          400: "#40e0d0",
          500: "#0cc0b1",
          600: "#079a91",
          700: "#0a7b75",
          800: "#0d625e",
          900: "#10514e",
          950: "#023131",
        },
        sunflowerYellow: {
          50: "#ffffea",
          100: "#fffcc5",
          200: "#fffa85",
          300: "#fff046",
          400: "#ffe21b",
          500: "#ffc300",
          600: "#e29700",
          700: "#bb6b02",
          800: "#985308",
          900: "#7c430b",
          950: "#482300",
        },
        blackHaze: {
          50: "#f7f7f7",
          100: "#efefef",
          200: "#dcdcdc",
          300: "#bdbdbd",
          400: "#989898",
          500: "#7c7c7c",
          600: "#656565",
          700: "#525252",
          800: "#464646",
          900: "#3d3d3d",
          950: "#292929",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          primaryForeground: "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          accentForeground: "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      keyframes: {
        accordionDown: {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        accordionUp: {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        accordionDown: "accordion-down 0.2s ease-out",
        accordionUp: "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;
