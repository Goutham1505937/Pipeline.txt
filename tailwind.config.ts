import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./Pipeline.tsx"
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#020617",
        muted: "#f4f4f5",
        "muted-foreground": "#71717a"
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem"
      }
    }
  },
  plugins: []
};

export default config;


