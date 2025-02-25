import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // darkMode: ['selector'],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "foreground-700": "var(--foreground-700)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        "accent-100": "var(--accent-100)",
        "accent-200": "var(--accent-200)",
        "primary-100": "var(--primary-100)",
        "secondary-50": "var(--secondary-50)",
        "secondary-200": "var(--secondary-200)",
      },
    },
  },
  plugins: [],
} satisfies Config;
