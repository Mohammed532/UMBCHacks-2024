import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
            "primary": "#233429",
            "secondary": "#5e9737",
            "accent": "#a1c13a",
            "neutral": "#b0ab8a",
            "base-100": "#fef8d9",
            "info": "#009ec0",
            "success": "#008f3c",
            "warning": "#ff5b00",
            "error": "#ff6e7b",
          },
        },
      ],
    },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
