/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  purge: {
    safelist: [
      "md:grid-cols-2",
      "md:grid-cols-3",
      "md:grid-cols-4",
      "md:grid-cols-5",
      "md:grid-cols-6",
      "md:grid-cols-7",
      "md:grid-cols-8",
      "md:grid-cols-9",
      "md:grid-cols-10",
      "md:grid-cols-11",
      "md:grid-cols-12",
    ],
  },
  theme: {
    extend: {
      colors: {
        primary: "rgb(255 255 255 / <alpha-value>)",
        secondary: "rgb(252 233 244 / <alpha-value>)",
        typeBlack: "rgb(26 26 26 / <alpha-value>)",
        accentRed: "rgb(240 119 190 / <alpha-value>)",
        accentOrange: "rgb(224 138 108 / <alpha-value>)",
        notice: "rgb(248 46 107 / <alpha-value>)",
      },
      screens: {
        sm: "32em",
        md: "48em",
        lg: "64em",
        xl: "80em",
        "2xl": "96em",
        "sm-max": { max: "48em" },
        "sm-only": { min: "32em", max: "48em" },
        "md-only": { min: "48em", max: "64em" },
        "lg-only": { min: "64em", max: "80em" },
        "xl-only": { min: "80em", max: "96em" },
        "2xl-only": { min: "96em" },
      },
      spacing: {
        nav: "var(--height-nav)",
        screen: "var(--screen-height, 100vh)",
      },
      height: {
        screen: "var(--screen-height, 100vh)",
        "screen-no-nav":
          "calc(var(--screen-height, 100vh) - var(--height-nav))",
        "screen-dynamic": "var(--screen-height-dynamic, 100vh)",
      },
      width: {
        mobileGallery: "calc(100vw - 3rem)",
      },
      letterSpacing: {
        "tighter-heading": "-0.1em",
      },
      keyframes: {
        swingRight: {
          "0%": { transform: "rotate(24deg)" },
          "25%": { transform: "rotate(15deg)" },
          "75%": { transform: "rotate(33deg)" },
          "100%": { transform: "rotate(24deg)" },
        },
        swingLeft: {
          "0%": { transform: "rotate(-24deg)" },
          "25%": { transform: "rotate(-15deg)" },
          "75%": { transform: "rotate(-33deg)" },
          "100%": { transform: "rotate(-24deg)" },
        },
      },
      animation: {
        swingRight: "swingRight 1s ease-in-out",
        swingLeft: "swingLeft 1s ease-in-out",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      display: ["group-hover", "group-focus"],
      fontSize: {
        display: ["var(--font-size-display)", "1.1"],
        heading: ["var(--font-size-heading)", "1.25"],
        lead: ["var(--font-size-lead)", "1.333"],
        copy: ["var(--font-size-copy)", "1.5"],
        fine: ["var(--font-size-fine)", "1.333"],
      },
      maxWidth: {
        "prose-narrow": "45ch",
        "prose-wide": "80ch",
        "8xl": "88rem",
        "9xl": "96rem",
      },
      boxShadow: {
        border: "inset 0px 0px 0px 1px rgb(var(--color-primary) / 0.08)",
        darkHeader: "inset 0px -1px 0px 0px rgba(21, 21, 21, 0.4)",
        lightHeader: "inset 0px -1px 0px 0px rgba(21, 21, 21, 0.05)",
        neubrutalist: "4px 4px 1px 0px #FFF",
      },
    },
  },
  plugins: [],
};
