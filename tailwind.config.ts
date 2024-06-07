import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'orange': '#ffac00',
      'green': '#1ed760',
      'background':'#181818',
      'border': '#282828',
      'svgfill': 'hsla(0,0%,100%,.7)',
      'borderBottom': 'hsla(0,0%,100%,.1)',
    }
  },
  plugins: [],
};
export default config;