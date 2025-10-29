import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#01016F",
        secondary: "#141CFF",
        textPrimary: "#0E0066",
        textSecondary: "#504785",
      },
    },
  },
  plugins: [],
};

export default config;
