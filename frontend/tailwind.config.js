const defaultTheme = require("tailwindcss/defaultTheme");
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,ts,js}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        aufi: {
          light: "#FFFAEA",
          DEFAULT: "#FFC300",
          dark: "#EDB500",
        },
      },
      boxShadow: {
        uniform: "0 0 15px 0 rgba(0, 0, 0, 0.15)",
        "uniform-sm": "0 0 10px 0 rgba(0, 0, 0, 0.15)",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "#000000",
            "--tw-prose-headings": "#000000",
            a: {
              color: theme("colors.aufi.DEFAULT"),
            },
            blockquote: {
              fontStyle: "normal",
              fontWeight: "bold",
              borderLeftColor: theme("colors.aufi.DEFAULT"),
              backgroundColor: theme("colors.aufi.light"),
              a: {
                color: theme("colors.blue.600"),
              },
              margin: "0rem",
              padding: "1rem",
              p: {
                margin: "0rem",
                padding: "0rem",
              },
            },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
            iframe: {
              maxWidth: "100%",
            },
          },
        },
        lg: {
          css: {
            "> ul > li p": {
              marginTop: rem(8),
              marginBottom: rem(8),
            },
            "> ul > li > *:first-child": {
              marginTop: rem(12),
            },
            "> ul > li > *:last-child": {
              marginBottom: rem(12),
            },
            "> ol > li > *:first-child": {
              marginTop: rem(12),
            },
            "> ol > li > *:last-child": {
              marginBottom: rem(12),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
