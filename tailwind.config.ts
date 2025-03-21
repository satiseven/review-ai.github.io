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
        chrome: {
          background: "var(--chrome-background)",
          surface: "var(--chrome-surface)",
          border: "var(--chrome-border)",
          text: {
            primary: "var(--chrome-text-primary)",
            secondary: "var(--chrome-text-secondary)",
          },
          brand: {
            primary: "var(--chrome-brand-primary)",
            hover: "var(--chrome-brand-hover)",
            light: "var(--chrome-brand-light)",
          },
          success: {
            base: "var(--chrome-success-base)",
            light: "var(--chrome-success-light)",
          },
          error: {
            base: "var(--chrome-error-base)",
            light: "var(--chrome-error-light)",
          },
        },
      },
      boxShadow: {
        chrome:
          "0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15)",
        "chrome-sm": "0 1px 2px 0 rgba(60, 64, 67, 0.2)",
        "chrome-md": "0 2px 6px 2px rgba(60, 64, 67, 0.15)",
      },
      borderRadius: {
        chrome: "4px",
        "chrome-lg": "8px",
      },
    },
  },
  plugins: [],
};
