import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            addCommonColors: true,
            blue: {
              50: "#4341CC",
              100: "#6572EF",
            },
          },
        },
      },
    }),
  ],
};
