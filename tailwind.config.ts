import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'white': '#fff',
      'orange': '#ffac00',
      'blue': '#1989fa',
      'green': '#1ed760',
      'background':'#181818',
      'lineblack':'#282828',
      'black':'#000000',
      'border': '#282828',
      'lightgray': '#b3b3b3',
      'svgfill': 'hsla(0,0%,100%,.7)',
      'borderBottom': 'hsla(0,0%,100%,.1)',
    }
  },
  plugins: [],
};
export default config;