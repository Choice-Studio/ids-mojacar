/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      spacing: {
        5: "1.25",
        6: "1.5rem",
        68: "17rem",
        84: "21rem",
        100: "25rem",
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        180: "45rem",
        200: "50rem",
        240: "60rem",
      },
      boxShadow: {
        smooth: [
          "2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02)",
          "6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028)",
          "12.5px 12.5px 10px rgba(0, 0, 0, 0.035)",
          "22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042)",
          "41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05)",
          "100px 100px 80px rgba(0, 0, 0, 0.07)",
        ],
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Mulish", "sans-serif"],
        button: ["Montserrat", "monospace"],
      },
      colors: {
        primary: "#1C303C",
        offwhite: "#FBF9F2",
      },
    },
  },
  plugins: [],
};
