/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border-hsl))",
        input: "hsl(var(--border-hsl))",
        ring: "hsl(var(--accent-hsl))",
        background: "hsl(var(--bg-hsl))",
        foreground: "hsl(var(--text-hsl))",
        primary: {
          DEFAULT: "hsl(var(--accent-hsl))",
          foreground: "hsl(var(--bg-hsl))",
        },
        secondary: {
          DEFAULT: "hsl(var(--surface-hsl))",
          foreground: "hsl(var(--text-hsl))",
        },
        destructive: {
          DEFAULT: "hsl(0 80% 60%)",
          foreground: "hsl(var(--text-hsl))",
        },
        muted: {
          DEFAULT: "hsl(var(--surface-hsl))",
          foreground: "hsl(var(--text-secondary-hsl))",
        },
        accent: {
          DEFAULT: "hsl(var(--surface-hsl))",
          foreground: "hsl(var(--text-hsl))",
        },
      },
      backgroundImage: {
        "gradient-conic":
          "conic-gradient(from var(--conic-position, 0deg) at center, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Inter Tight", "Noto Sans TC", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        lg: "12px",
        md: "10px",
        sm: "6px",
      },
    },
  },
  plugins: [],
};
